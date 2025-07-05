import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid2 as Grid,
  Stack,
} from "@mui/material";
import { Header, ProjectCard } from "../components/index";
import { Slide } from "react-awesome-reveal";
import projectData from "../data/projects.json";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box id="projects" sx={{ py: { xs: 0, md: 4 } }}>
        <Header
          header="Projects"
          subheader="“A Glimpse into My Diverse Portfolio of Projects”"
        />
        <Slide direction="up" cascade damping={0.2} triggerOnce>
          {projectData?.map((item, index) => (
            <Grid
              container
              sx={{ justifyContent: "center", opacity: 0.9 }}
              key={index}
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
