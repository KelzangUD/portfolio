import React from "react";
import { Typography } from "@mui/material";

const Header = ({ header, subheader }) => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "left", md: "center" },
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {header}
      </Typography>
      <Typography
        sx={{
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
