import React from "react";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import PortfolioMockUpp from "../assets/jpgs/portfolio_mock_up.jpg";
import PortfolioPhoneMockUp from "../assets/jpgs/portfolio_phone_mock_up.jpg";

export default function Project() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      maxWidth="lg"
      sx={{
        alignItems: "center",
        pt: { xs: 8, sm: 8 },
        pb: { xs: 2, sm: 2 },
      }}
    >
      <Box id="logoCollection" sx={{ py: 4 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Portfolio
        </Typography>
        <Grid container sx={{ justifyContent: "center", my: 6 }}>
          <img
            src={PortfolioMockUpp}
            alt="mock up"
            style={{
              width: isMobile ? "80%" : "100%",
            }}
          />
        </Grid>
        <Typography
          sx={{
            color: "text.secondary",
            textAlign: "justify"
          }}
        >
          In this showcase, I present a carefully curated selection of projects
          that reflect my commitment to excellence in web development. Each
          project is a testament to my passion for crafting intuitive and
          visually compelling digital experiences. Explore the synergy of design
          and functionality as I walk you through a journey of successful
          collaborations and impactful solutions that define my expertise as a
          web developer
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            my: 2,
          }}
        >
          Role: FullStack Developer
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
          }}
        >
          Techstacks: React JS, Material UI
        </Typography>
        <Grid>
          <Stack
            useFlexGap
            sx={{
              mt: 4,
              width: { xs: "100%", sm: "200px" },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Visit
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}
