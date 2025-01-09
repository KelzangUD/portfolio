import React from "react";
import AppTheme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Project from "./components/Project";
import Blogs from "./pages/Blogs";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/Footer";

function App(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Router>
        <AppAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-me" element={<ContactMe />} />
          {/* <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<RecentActivity />} />
            <Route path="project/:id" element={<Project />} />
          </Route> */}
        </Routes>
      </Router>
      <Footer />
    </AppTheme>
  );
}

export default App;
