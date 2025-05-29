import React from "react";
import { styled } from "@mui/material";

export default function HeroImage({ img }) {
  const StyledBox = styled("div")(({ theme }) => ({
    alignSelf: "right",
    width: "auto",
    height: 500,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    [theme.breakpoints.up("sm")]: {
      height: 500,
    },
    ...(theme.palette.mode === "dark" && {
      backgroundImage: `url(${img})`,
    }),
  }));
  return <StyledBox id="image" />;
}
