import React, { useState, useEffect } from "react";
import AppTheme from "./theme/AppTheme";
import { CssBaseline } from "@mui/material";
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
  Vlogs,
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <HeroBox>
        {loading ? (
          <Loader />
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
              <Route path="/vlogs" element={<Vlogs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
            <Footer />
          </>
        )}
      </HeroBox>
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
