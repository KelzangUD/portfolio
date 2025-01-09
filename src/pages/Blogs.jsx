import React from "react";
import Container from "@mui/material/Container";
import MainContent from "../components/MainContent";

export default function Blogs() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 6, gap: 4 }}
    >
      <MainContent />
    </Container>
  );
}
