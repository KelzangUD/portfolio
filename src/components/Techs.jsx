import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";

const logoStyle = {
  width: "100px",
  height: "80px",
  objectFit: "contain",
};

const Techs = ({ title, icons }) => {
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
        {title}
      </Typography>
      <Grid
        container
        sx={{
          mt: 0.5,
        }}
        spacing={1}
      >
        {icons.map((logo, index) => (
          <Grid item key={index} size={{ xs: 4, sm: 3, md: 2 }}>
            <img
              src={`${process.env.REACT_APP_API_URL}${logo?.icon}`}
              alt={logo?.alt}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Techs;
