import React from "react";
import { Box } from "@mui/material";
import "../App.css";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "inline-flex",
      }}
    >
      <div className="loader"></div>
    </Box>
  );
};

export default Loader;
