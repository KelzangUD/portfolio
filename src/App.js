import React from "react";
import AppTheme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroBox } from "./components/index";
import {
  Home,
  AboutMe,
  Projects,
  Project,
  Blogs,
  ContactMe,
} from "./pages/index";
import { AppAppBar, Footer } from "./layout/index";

function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <AppAppBar />
        <HeroBox>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Project />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </HeroBox>
      </Router>
      <Footer />
    </AppTheme>
  );
}

export default App;
