import React, { useState, useEffect } from "react";
import AppTheme from "./theme/AppTheme";
import { CssBaseline, Box, LinearProgress } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HeroBox, Loader } from "./components/index";
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

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

function App(props) {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Box>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
              }}
            >
              <LinearProgress
                variant="determinate"
                value={scrollProgress}
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#05070a", // Color of the progress bar
                  },
                }}
              />
            </Box>
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
      </Box>
    </AppTheme>
  );
}

export default function AppWrapper(props) {
  return (
    <Router>
      <ScrollToTop>
        <App {...props} />
      </ScrollToTop>
    </Router>
  );
}
