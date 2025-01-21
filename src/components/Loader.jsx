import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, [500]);
    return () => {
      clearInterval(timer);
    };
  }, []);
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
      <CircularProgress
        variant="determinate"
        value={progress}
        size={200}
        color="rgba(0, 0, 0, 0.87)"
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" component="div">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
