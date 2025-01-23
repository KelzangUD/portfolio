import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Container, Grid2 as Grid, Stack } from "@mui/material";
import { Header, ProjectCard } from "../components/index";
import axios from "axios";
import { Slide } from "react-awesome-reveal";

export default function Projects() {
  const navigate = useNavigate();
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
    // eslint-disable-next-line
  }, []);
  return (
    <Container maxWidth="lg">
      <Box id="projects" sx={{ py: { xs: 0, md: 4 } }}>
        <Header
          header="Projects"
          subheader="“A Glimpse into My Diverse Portfolio of Projects”"
        />
        <Slide direction="up" cascade damping={0.2} triggerOnce>
          {projects?.map((item) => (
            <Grid
              container
              sx={{ justifyContent: "center", opacity: 0.9 }}
              key={item?.id}
            >
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Slide>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
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
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}
