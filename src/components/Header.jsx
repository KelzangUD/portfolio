import React from "react";
import { Typography } from "@mui/material";

const Header = ({ header, subheader }) => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "left", md: "center" },
          fontFamily: "Titan One, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {header}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Satisfy, sans-serif",
          textAlign: { xs: "left", md: "center" },
          color: "text.secondary",
          mb: 6,
        }}
      >
        {subheader}
      </Typography>
    </>
  );
};

export default Header;
