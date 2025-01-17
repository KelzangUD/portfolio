import React from "react";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import ProfessionalBg from "../assets/jpgs/professional_image.jpg";
import { Header, TimeLines } from "../components/index";

export default function ProfessionalJourney() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: `url(${ProfessionalBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Box id="professionalJouney" sx={{ py: 4, width: "100%" }}>
        <Header
          header="PROFESSIONAL JOURNEY"
          subheader="“Professional Journey: Where Expertise Meets Experience.”"
        />
        <Grid
          container
          sx={{
            mt: 0.5,
            opacity: 0.9,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TimeLines />
        </Grid>
      </Box>
    </Container>
  );
}
