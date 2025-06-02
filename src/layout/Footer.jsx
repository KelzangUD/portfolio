import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/X";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        textAlign: { sm: "center", md: "left" },
        mb: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          pt: { xs: 4, sm: 4 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "#eee",
        }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "#eee", alignItems: "center" }}
          >
            <Typography variant="h6">Social Media:</Typography>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.linkedin.com/in/kelzang-ugyen-dorji-a461b979/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center", color: "#eee" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.instagram.com/kud_capture/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center", color: "#eee" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.facebook.com/kelzangud"
              aria-label="GitHub"
              sx={{ alignSelf: "center", color: "#eee" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/KelzangUD"
              aria-label="X"
              sx={{ alignSelf: "center", color: "#eee" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              size="small"
              href="https://www.youtube.com/@kud_capture"
              aria-label="X"
              sx={{ alignSelf: "center", color: "#eee" }}
            >
              <YouTubeIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              justifyContent: "left",
              color: "rgb(255 255 255 / 70%)",
              alignItems: "center",
            }}
          >
            <EmailIcon />
            <Typography variant="body2" sx={{ color: "#eee" }}>
              Kuding755@gmail.com
            </Typography>
            <Divider orientation="vertical" />
            <PhoneIcon />
            <Typography variant="body2" sx={{ color: "#eee" }}>
              +975 77714212
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            textAlign: { xs: "left", md: "right" },
            justifyContent: "center",
            mt: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="body2" sx={{ color: "#eee" }}>
            © {new Date().getFullYear()}. Kelzang Ugyen Dorji
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
