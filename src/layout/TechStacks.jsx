import { Box, Container } from "@mui/material";
import TechStackBg from "../assets/jpgs/techstack_image.jpg";
import { Header, Techs } from "../components/index";
import techStacksData from "../data/techStacks.json";

export default function TechStacks() {
  return (
    <Container maxWidth="lg">
      <Box
        id="techStacks"
        sx={{
          py: { xs: 2, md: 4 },
          px: { xs: 2, md: 4 },
          width: "100%",
          bgcolor: "transparent",
          backgroundImage: `url(${TechStackBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          alignItems: "center",
          borderRadius: { xs: "8px", md: 0 }
        }}
      >
        <Header
          header="Tech Stacks"
          subheader="“Digital Proficiency: Fusion of Software and Hardware Skills.”"
        />
        {techStacksData?.map((tech, index) => (
          <Techs tech={tech} index={index} key={tech.title} />
        ))}
      </Box>
    </Container>
  );
}
