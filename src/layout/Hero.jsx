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
      if (response.status == 200) {
        setHeroData(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchHeroData();
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
                {heroData[0]?.subheader}
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
            <HeroImage img={heroData[0]?.hero_img} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
