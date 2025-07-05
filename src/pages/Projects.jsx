import {
  Box,
  Container,
  Grid2 as Grid,
  // Pagination,
  Typography,
} from "@mui/material";
import { ProjectCard } from "../components/index";
import projectsData from "../data/projects.json";

export default function Projects() {
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
              color: "#eee",
            }}
          >
            Projects
          </Typography>
          <Grid
            container
            sx={{ justifyContent: "center", opacity: 0.9 }}
            spacing={2}
          >
            {projectsData?.map((item) => (
              <>
                <Grid size={12} key={item?.id}>
                  <ProjectCard
                    item={item}
                    // height={projects?.length === 1 ? 1000 : 400}
                  />
                </Grid>
              </>
            ))}
          </Grid>
          {/* <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
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
                sx={{
                  "& .MuiPaginationItem-icon": {
                    color: "rgb(255 255 255 / 70%)",
                  },
                }}
              />
            </Stack>
          </Grid> */}
          {/* <Grid>
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
          </Grid> */}
        </Box>
      </Container>
    </>
  );
}
