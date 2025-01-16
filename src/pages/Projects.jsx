import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  styled,
  Pagination,
  Typography,
} from "@mui/material";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(6),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: "url('../assets/jpgs/portfolio.jpg')",
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: "url('../assets/jpgs/portfolio.jpg')",
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

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
            }}
          >
            Projects
          </Typography>
          <Grid container sx={{ justifyContent: "center", opacity: 0.6 }}>
            <StyledBox id="image" />
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <Stack
              useFlexGap
              sx={{
                mt: 6,
                width: { xs: "100%", sm: "200px" },
                mb: { sm: 6, md: 2 },
              }}
            >
              <Pagination
                hidePrevButton
                hideNextButton
                count={5}
                boundaryCount={5}
              />
            </Stack>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
