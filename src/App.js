import React, { useState, useEffect } from "react";
import AppTheme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroBox, Loading } from "./components/index";
import {
  Home,
  AboutMe,
  Projects,
  Project,
  Blogs,
  Blog,
  ContactMe,
  Gallery,
} from "./pages/index";
import { AppAppBar, Footer } from "./layout/index";

function App(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <HeroBox>
          {loading ? (
            <Loading />
          ) : (
            <>
              <AppAppBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<Project />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<Blog />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-me" element={<ContactMe />} />
              </Routes>
              <Footer />
            </>
          )}
        </HeroBox>
      </Router>
    </AppTheme>
  );
}

export default App;
