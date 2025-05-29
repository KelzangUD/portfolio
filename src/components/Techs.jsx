import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Techs = ({ tech, index }) => {
  return (
    <Fade delay={1000 * index} duration={2000} fraction={0.5} triggerOnce>
      <Typography
        sx={{
          my: 2,
          textAlign: "left",
          color: "text.secondary",
          fontFamily: "Titan One, sans-serif",
        }}
      >
        {tech?.title.toUpperCase()}
      </Typography>
      <Grid container mt={0.5} spacing={1}>
        {tech?.icons.map((icon) => (
          <Grid size={{ xs: 4, sm: 3, md: 2 }} key={icon?.alt}>
            <img
              src={icon?.url}
              alt={icon?.alt}
              style={{ width: "100px", height: "80px", objectFit: "contain" }}
            />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};

export default Techs;
