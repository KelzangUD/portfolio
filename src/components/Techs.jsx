import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";

const Techs = ({ tech }) => {
  return (
    <>
      <Typography
        sx={{
          my: 2,
          textAlign: "left",
          color: "text.secondary",
          fontWeight: "bold",
        }}
      >
        {tech?.title.toUpperCase()}
      </Typography>
      <Grid container mt={0.5} spacing={1}>
        {tech?.icons.map((icon) => (
          <Grid size={{ xs: 4, sm: 3, md: 2 }} key={icon?.alt}>
            <img
              src={`${process.env.REACT_APP_API_URL}${icon?.url}`}
              alt={icon?.alt}
              style={{ width: "100px", height: "80px", objectFit: "contain" }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Techs;
