import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";

export default function StatisticsCard({ item }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      sx={{
        textAlign: "center",
        padding: isMobile ? 2 : 4,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: isMobile
            ? "clamp(2rem, 10vw, 3rem)"
            : "clamp(2.5rem, 5vw, 6rem)",
          fontWeight: "bold",
        }}
      >
        {item?.figure}
      </Typography>
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{
          fontSize: isMobile ? "0.9rem" : "1rem",
          //   lineHeight: 1.5,
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        {item?.description}
      </Typography>
    </Grid>
  );
}
