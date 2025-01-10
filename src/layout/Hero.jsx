import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { HeroImage } from "../components/index";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
          pt: { xs: 12, sm: 20 },
          pb: { xs: 0, sm: 12 },
        }}
        maxWidth="lg"
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              spacing={2}
              useFlexGap
              sx={{
                width: { xs: "100%", sm: "100%" },
                mt: 5,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  alignItems: "left",
                  fontSize: "clamp(2rem, 10vw, 1rem)",
                }}
              >
                GREETING,
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 3.5rem)",
                }}
              >
                I ’ M
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(3rem, 10vw, 3.5rem)",
                }}
              >
                KELZANG UGYEN DORJI.
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  width: "100%",
                }}
              >
                Tech enthusiast from the Land of Thunder Dragon
              </Typography>
              <Stack
                useFlexGap
                sx={{
                  mt: 1,
                  width: { xs: "100%", md: "350px" },
                  mb: { sm: 4, md: 0 },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ minWidth: "fit-content" }}
                  onClick={() => navigate("/about-me")}
                >
                  About Me
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroImage />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
