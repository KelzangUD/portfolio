import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ header, subheader }) => {
  const targetRef = useRef(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  useEffect(() => {
    const target = targetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggerAnimation(false);
            setTimeout(() => setTriggerAnimation(true), 0);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <Box ref={targetRef}>
      {triggerAnimation && (
        <Box
          sx={{
            animation: "fadeIn 2s ease-in-out",
            "@keyframes fadeIn": {
              from: {
                opacity: 0,
                transform: "translateY(15%)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
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
        </Box>
      )}
    </Box>
  );
};

export default Header;
