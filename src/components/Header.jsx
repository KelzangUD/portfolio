import React from "react";
import { Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Header = ({ header, subheader }) => {
  return (
    <Fade cascade delay={200} duration={1000} fraction={0.5} triggerOnce>
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "left", md: "center" },
          fontFamily: "Titan One, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(2rem, 5vw, 3rem)",
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
    </Fade>
  );
};

export default Header;
