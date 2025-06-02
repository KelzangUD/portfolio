import React from "react";
import { Box } from "@mui/material";

export default function HeroImage({ img, alt = "Hero image" }) {
  return (
    <Box
      id="image"
      component="img"
      src={img}
      alt={alt}
      loading="eager"
      width="100%"
      height="auto"
      sx={{
        alignSelf: "flex-end",
        maxHeight: 500,
        objectFit: "contain",
        [theme => theme.breakpoints.up("sm")]: {
          maxHeight: 500,
        },
      }}
    />
  );
}

