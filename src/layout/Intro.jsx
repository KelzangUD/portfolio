import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";

export default function Intro() {
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
        maxWidth="lg"
      >
        <Stack
          spacing={1}
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
            KUZUZANGPO,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 2rem)",
            }}
          >
            I'm Kelzang Ugyen Dorji.
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: 2,
              my: 2,
              textAlign: "justify",
            }}
          >
            With a passion for crafting exceptional digital experiences, I bring
            creativity and technical expertise to every project. Explore my
            portfolio and discover the seamless fusion of innovation and design
            that defines my work. Welcome to a journey where the art of web
            development meets the mystical allure of the Land of Thunder Dragon.
          </Typography>
          <Stack useFlexGap sx={{ mt: 2, width: { xs: "100%", sm: "200px" } }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
