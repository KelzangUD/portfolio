import React, { useState, useEffect, useRef } from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import AnimatedNumbers from "react-animated-numbers";

export default function StatisticsCard({ item }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
    <Grid
      sx={{
        textAlign: "center",
        padding: isMobile ? 2 : 4,
      }}
      ref={targetRef}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: isMobile
            ? "clamp(1rem, 3vw, 3rem)"
            : "clamp(1rem, 3vw, 3rem)",
          fontWeight: "bold",
          fontFamily: "Titan One, sans-serif",
          color: "#eee"
        }}
      >
        {triggerAnimation && (
          <div key={`animated-numbers-${item?.figure}`}>
            <AnimatedNumbers
              includeComma
              transitions={(index) => ({
                type: "spring",
                duration: index + 1,
              })}
              animateToNumber={item?.figure}
              render={({ number, index }) => (
                <span key={`digit-${index}`}>{number}</span>
              )}
            />
          </div>
        )}
      </Typography>
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{
          fontSize: isMobile ? "0.9rem" : "1rem",
          maxWidth: "300px",
          margin: "0 auto",
          color: 'rgb(255 255 255 / 70%)'
        }}
      >
        {item?.description}
      </Typography>
    </Grid>
  );
}
