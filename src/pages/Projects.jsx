import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Pagination,
  Typography,
} from "@mui/material";
import { ProjectCard } from "../components/index";
import axios from "axios";
import { Slide } from "react-awesome-reveal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const fetchProjectsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/projects?populate=*`
      );
      if (response.status === 200) {
        setProjects(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProjectsData();
  }, []);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box id="projects" sx={{ py: { xs: 0, md: 4 } }}>
          <Typography
            variant="h1"
            sx={{
              alignItems: "left",
              fontSize: "clamp(2rem, 10vw, 3rem)",
              fontFamily: "Titan One, sans-serif",
              fontWeight: 300,
            }}
          >
            Projects
          </Typography>
          <Grid
            container
            sx={{ justifyContent: "center", opacity: 0.9 }}
            spacing={2}
          >
            {projects?.map((item) => (
              <>
                <Grid
                  item
                  key={item?.id}
                  size={projects?.length === 1 ? 12 : 6}
                >
                  <Slide direction="up" triggerOnce>
                    <ProjectCard
                      item={item}
                      height={projects?.length === 1 ? 700 : 400}
                    />
                  </Slide>
                </Grid>
              </>
            ))}
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Stack
              useFlexGap
              sx={{
                mt: 6,
                mb: { sm: 6, md: 2 },
              }}
            >
              <Pagination
                variant="outlined"
                shape="rounded"
                count={projects?.meta?.pagination?.page}
                boundaryCount={5}
              />
            </Stack>
          </Grid>
          <Grid>
            <Stack
              useFlexGap
              sx={{
                mt: 6,
                width: { xs: "100%", sm: "200px" },
                mb: { sm: 6, md: 2 },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: "fit-content" }}
              >
                View All
              </Button>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
