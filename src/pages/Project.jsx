import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import { Slide, Fade } from "react-awesome-reveal";
import projectData from "../data/projects.json";

export default function Project() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathName = window?.location?.pathname;
  const [project, setProject] = useState([]);

  useEffect(() => {
    const id = parseInt(pathName?.split("/")[2]);
    setProject(projectData?.find((item) => item?.id === id));
  }, [pathName]);
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
        <Slide direction="up" triggerOnce>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "Titan One, sans-serif",
              fontWeight: 300,
              color: "#eee",
            }}
          >
            {project?.title}
          </Typography>
        </Slide>
        <Grid container sx={{ justifyContent: "center", my: 6 }}>
          <Slide direction="up" triggerOnce>
            <img
              src={project?.mock_up_url}
              alt="mock up"
              style={{
                width: isMobile ? "80%" : "100%",
              }}
            />
          </Slide>
        </Grid>
        <Fade delay={1500} duration={1000} triggerOnce fraction={0.5}>
          <Typography
            sx={{
              textAlign: "justify",
              color: "rgb(255 255 255 / 70%)",
            }}
          >
            {project?.intro}
          </Typography>
          <Typography
            sx={{
              mt: 2,
              textAlign: "justify",
              color: "rgb(255 255 255 / 70%)",
            }}
          >
            {project?.description}
          </Typography>
          <Typography
            sx={{
              color: "rgb(255 255 255 / 70%)",
              my: 2,
            }}
          >
            Role: {project?.role}
          </Typography>
          <Typography
            sx={{
              color: "rgb(255 255 255 / 70%)",
            }}
          >
            Tech-Stacks:{" "}
            {project?.techStacks?.split(",").map((item) => (
              <Chip label={item} key={item} sx={{ mr: 1 }} />
            ))}
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
        </Fade>
      </Box>
    </Container>
  );
}
