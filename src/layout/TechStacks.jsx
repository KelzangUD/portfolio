import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import TechStackBg from "../assets/jpgs/techstack_image.jpg";
import ReactJs from "../assets/svgs/react js.svg";
import TailWindCss from "../assets/svgs/tailwind css.svg";
import MaterialUi from "../assets/svgs/material ui.svg";
import ExpressJs from "../assets/svgs/express js.svg";
import MySql from "../assets/svgs/express js.svg";
import Bootstrap from "../assets/svgs/bootstrap.svg";
import SolidWork from "../assets/svgs/solidworks.svg";
import Blender from "../assets/svgs/blender.svg";
import AutodeskEagle from "../assets/svgs/autodesk eagle.svg";
import OrcadPSPice from "../assets/svgs/orcad pspice.svg";
import Arduino from "../assets/svgs/arduino.svg";
import PiTop from "../assets/svgs/pi-top.svg";

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
          <Grid item key={index} size={{xs: 4,sm: 3,  md: 2}}>
            <img src={logo?.icon} alt={logo?.alt} style={logoStyle} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default function TechStacks() {
  const programming = [
    {
      icon: ReactJs,
      alt: "React Js",
    },
    {
      icon: TailWindCss,
      alt: "Tailwind CSS",
    },
    {
      icon: MaterialUi,
      alt: "MUI",
    },
    {
      icon: ExpressJs,
      alt: "Express JS",
    },
    {
      icon: MySql,
      alt: "MySql",
    },
    {
      icon: Bootstrap,
      alt: "Bootstrap",
    },
  ];
  const software = [
    {
      icon: SolidWork,
      alt: "SolidWork",
    },
    {
      icon: Blender,
      alt: "Blender",
    },
    {
      icon: AutodeskEagle,
      alt: "Autodesk Eagel",
    },
    {
      icon: OrcadPSPice,
      alt: "Orcad PSPice",
    },
  ];
  const hardware = [
    {
      icon: Arduino,
      alt: "Arduino",
    },
    {
      icon: PiTop,
      alt: "Pi-Top",
    },
  ];
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: `url(${TechStackBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Box
        id="logoCollection"
        sx={{ py: { xs: 0, md: 4 }, width: "100%", bgcolor: "transparent" }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: { xs: "left", md: "center" },
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Tech Stacks
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "text.secondary",
            mb: 6,
          }}
        >
          "Digital Proficiency: Fusion of Software and Hardware Skills"
        </Typography>
        <Techs title="PROGRAMMING" icons={programming} />
        <Techs title="SOFTWARE" icons={software} />
        <Techs title="HARDWARE" icons={hardware} />
      </Box>
    </Container>
  );
}
