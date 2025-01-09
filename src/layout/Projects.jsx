import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Portfolio from "../assets/jpgs/portfolio.jpg";

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
  backgroundImage: `url(${Portfolio})`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    // marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${Portfolio})`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box id="logoCollection" sx={{ py: { xs: 0, md: 4 } }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          "A Glimpse into My Diverse Portfolio of Projects"
        </Typography>
        <Grid container sx={{ justifyContent: "center", opacity: 0.6 }}>
          <StyledBox id="image" />
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
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
              Projects
            </Button>
          </Stack>
        </Grid>
      </Box>
    </Container>
  );
}
