import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { HeroImage } from "../components/index";
import axios from "axios";

export default function Hero() {
  const navigate = useNavigate();
  const [heroData, setHeroData] = useState([]);
  const fetchHeroData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/heroes?populate=*`
      );
      if (response.status === 200) {
        setHeroData(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchHeroData();
    // eslint-disable-next-line
  }, []);

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
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              animation: "slideFromLeft 2s ease-in-out",
              "@keyframes slideFromLeft": {
                from: {
                  opacity: 0,
                  transform: "translateX(-20%)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
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
                  fontFamily: "Titan One, sans-serif",
                  fontWeight: 300,
                }}
              >
                GREETING,
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Titan One, sans-serif",
                  fontSize: "clamp(3rem, 10vw, 3.5rem)",
                  fontWeight: 300,
                }}
              >
                I ’ M
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Titan One, sans-serif",
                  fontSize: "clamp(3rem, 10vw, 3.5rem)",
                  fontWeight: 300,
                }}
              >
                KELZANG UGYEN DORJI.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  width: "100%",
                  fontFamily: "Satisfy, sans-serif",
                  my: 2,
                }}
              >
                {heroData[0]?.subheader}
              </Typography>
              <Stack
                useFlexGap
                sx={{
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
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              animation: "slideFromRight 2s ease-in-out",
              "@keyframes slideFromRight": {
                from: {
                  opacity: 0,
                  transform: "translateX(20%)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            <HeroImage img={heroData[0]?.url} alt="Hero image" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
