import React from "react";
import { styled } from "@mui/material";


export default function HeroImage({img}) {
  React.useEffect(() => {
    console.log(`${process.env.REACT_APP_API_URL}${img?.url}`)
  },[])
  const StyledBox = styled("div")(({ theme }) => ({
    alignSelf: "right",
    width: "auto",
    height: 500,
    backgroundImage: `url(${process.env.REACT_APP_API_URL}${img?.url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    [theme.breakpoints.up("sm")]: {
      height: 500,
    },
    ...(theme.palette.mode === "dark" && {
      boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
      backgroundImage: `url(${process.env.REACT_APP_API_URL}${img?.url})`,
    }),
  }));
  return <StyledBox id="image" />;
}
