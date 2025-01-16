import React from "react";
import { Box, Container } from "@mui/material";
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
import { Header, Techs } from "../components/index";

export default function TechStacks() {
  const data = [
    {
      title: "programming",
      icons: [
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
      ],
    },
    {
      title: "software",
      icons: [
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
      ],
    },
    {
      title: "hardware",
      icons: [
        {
          icon: Arduino,
          alt: "Arduino",
        },
        {
          icon: 'url("../assets/svgs/pi-top.svg")',
          alt: "Pi-Top",
        },
      ],
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
        id="techStacks"
        sx={{ py: { xs: 0, md: 4 }, width: "100%", bgcolor: "transparent" }}
      >
        <Header
          header="Tech Stacks"
          subheader="“Digital Proficiency: Fusion of Software and Hardware Skills.”"
        />
        {data?.map((item) => (
          <Techs
            title={item?.title.toUpperCase()}
            icons={item?.icons}
            key={item?.title}
          />
        ))}
      </Box>
    </Container>
  );
}
