import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import TechStackBg from "../assets/jpgs/techstack_image.jpg";
import { Header, Techs } from "../components/index";
import axios from "axios";

export default function TechStacks() {
  const [techStacks, setTechStacks] = useState([]);
  const fetchTechStacks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/tech-stacks?populate=*`
      );
      if (response.status === 200) {
        setTechStacks(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchTechStacks();
  }, []);
  return (
    <Container maxWidth="lg">
      <Box
        id="techStacks"
        sx={{
          py: { xs: 2, md: 4 },
          px: 4,
          width: "100%",
          bgcolor: "transparent",
          backgroundImage: `url(${TechStackBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          alignItems: "center",
        }}
      >
        <Header
          header="Tech Stacks"
          subheader="“Digital Proficiency: Fusion of Software and Hardware Skills.”"
        />
        {techStacks?.map((tech, index) => (
          <Techs tech={tech} index={index} key={tech.title} />
        ))}
      </Box>
    </Container>
  );
}
