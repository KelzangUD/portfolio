import React from "react";
import { Card, Grid2 as Grid, styled, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import { Fade } from "react-awesome-reveal";

const GalleryCard = ({ item, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const SyledCard = styled(Card)(({ theme }) => ({
    aspectRatio: item?.aspectRatio,
    position: "relative",
    border: "1px solid",
    borderColor: (theme.vars || theme).palette.grey[200],
    boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
    backgroundImage: `url(${process.env.REACT_APP_API_URL}${item?.img?.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-size 0.3s ease-in-out, transform 0.3s ease-in-out",
    "&:hover": {
      backgroundSize: "120%",
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${process.env.REACT_APP_API_URL}${item?.img?.url})`,
      boxShadow: "0 0 24px 12px hsla(220, 50%, 70%, 0.4)",
      transform: "scale(1.01)",
      outlineColor: "hsla(220, 25%, 90%, 0.5)",
    },
    "& .hoverContent": {
      position: "absolute",
      bottom: "10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
      pointerEvents: "none",
    },
    "&:hover .hoverContent": {
      opacity: 1,
      pointerEvents: "auto",
    },
  }));
  return (
    <Grid size={{ xs: 12, md: item?.md, flexGrow: 1 }}>
      <Fade delay={100 * index} duration={1000} triggerOnce fraction={0.5}>
        <SyledCard>
          <div className="hoverContent">
            <Typography
              variant="h1"
              sx={{
                fontSize: isMobile
                  ? "clamp(1rem, 10vw, 1rem)"
                  : "clamp(1rem, 10vw, 1rem)",
              }}
            >
              {item?.alt}
            </Typography>
          </div>
        </SyledCard>
      </Fade>
    </Grid>
  );
};

export default GalleryCard;
