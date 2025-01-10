import React from "react";
import { styled } from "@mui/material";
import Hero from "../assets/svgs/hero_img.svg";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "right",
  width: "auto",
  height: 500,
  backgroundImage: `url(${Hero})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  [theme.breakpoints.up("sm")]: {
    height: 500,
  },
  ...(theme.palette.mode === "dark" && {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${HeroImage})`,
  }),
}));

export default function HeroImage() {
  return <StyledBox id="image" />;
}
