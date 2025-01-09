import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import HeroImage from "../assets/svgs/hero_img.svg";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "right",
  width: "auto",
  height: 500,
  backgroundImage: `url(${HeroImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  [theme.breakpoints.up("sm")]: {
    height: 500,
  },
  ...(theme.palette.mode === "dark" && {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${HeroImage})`,
  }),
}));

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          alignItems: "center",
          pt: { xs: 12, sm: 20 },
          pb: { xs: 0, sm: 12 },
        }}
        maxWidth="lg"
      >
        <Grid container spacing={2}>
          <Grid size={{xs: 12, md: 6}}>
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
                I ' M
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
                sx={{ mt: 1, width: { xs: "100%", md: "350px" }, mb: { sm: 4, md: 0 } }}
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
          <Grid size={{xs: 12, md: 6}}>
            <StyledBox id="image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
