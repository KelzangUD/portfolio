import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import axios from "axios";

export default function Project() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const pathName = window?.location?.pathname;
  // const params = new URLSearchParams();
  const [project, setProject] = useState([]);
  const fetchProjectData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api${pathName}?populate=*`
      );
      console.log(response);
      if (response.status == 200) {
        setProject(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProjectData();
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        alignItems: "center",
        pt: { xs: 8, sm: 8 },
        pb: { xs: 2, sm: 2 },
      }}
    >
      <Box id="logoCollection" sx={{ py: 4 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          {project?.title}
        </Typography>
        <Grid container sx={{ justifyContent: "center", my: 6 }}>
          <img
            src={`${process.env.REACT_APP_API_URL}${project?.mock_up?.url}`}
            alt="mock up"
            style={{
              width: isMobile ? "80%" : "100%",
            }}
          />
        </Grid>
        <Typography
          sx={{
            color: "text.secondary",
            textAlign: "justify",
          }}
        >
          {project?.description}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            my: 2,
          }}
        >
          Role: {project?.role}
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
          }}
        >
          Techstacks: {project?.techStacks}
        </Typography>
        <Grid>
          <Stack
            useFlexGap
            sx={{
              mt: 4,
              width: { xs: "100%", sm: "200px" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              component="a"
              href={project?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}
