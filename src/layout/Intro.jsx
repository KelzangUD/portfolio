import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Resume from "../assets/pdfs/Resume.pdf";
import { Slide } from "react-awesome-reveal";

export default function Intro() {
  return (
    <Slide direction="up" triggerOnce>
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
              fontFamily: "Titan One, sans-serif",
              fontWeight: 300,
              color: '#eee',
            }}
          >
            KUZUZANGPO,
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 2rem)",
              fontFamily: "Titan One, sans-serif",
              fontWeight: 300,
              color: '#eee',
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
              color: 'rgb(255 255 255 / 70%)',
            }}
          >
            Currently, am software developer in Tashi InfoComm Private
            Limited. In my spare time, I enjoy creating contents on various
            platform like YouTube, Instagram and TikTok.
            My weekends and free days are usually spent hiking amidst the 
            majestic landscapes of the Land of the Thunder Dragon.
          </Typography>
          <Stack useFlexGap sx={{ mt: 2, width: { xs: "100%", sm: "200px" } }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
              component="a"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Slide>
  );
}
