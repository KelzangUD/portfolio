import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import logo from "../assets/jpgs/logo.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: "#ffffff1a",
  backgroundColor: "transparent",
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          from: {
            opacity: 0,
            mt: 0,
          },
          to: {
            opacity: 1,
            mt: "calc(var(--template-frame-height, 0px) + 28px)",
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ alignItems: "center", px: 0 }}>
            <IconButton
              aria-label="Logo"
              onClick={() => navigate("/")}
              sx={{ border: "none" }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  height: "45px",
                  width: "auto",
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate("/about-me")}
            >
              About Me
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate("/blogs")}
            >
              Blogs
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate("/vlogs")}
            >
              Vlogs
            </Button>
            <Button
              color="primary"
              variant="text"
              size="small"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => navigate("/contact-me")}
            >
              Contact Me
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: 1,
            }}
          >
            <IconButton
              aria-label="Menu button"
              onClick={toggleDrawer(true)}
              sx={{ color: "#eee" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "#000" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{ color: "#eee" }}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem>
                  <Button
                    sx={{
                      border: "none",
                    }}
                    onClick={() => {
                      navigate("/");
                      setOpen(false);
                    }}
                  >
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        height: "25px",
                        width: "auto",
                      }}
                    />
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="text"
                    fullWidth
                    onClick={() => {
                      navigate("/about-me");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    About Me
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="text"
                    fullWidth
                    onClick={() => {
                      navigate("/projects");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    Projects
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="text"
                    fullWidth
                    onClick={() => {
                      navigate("/blogs");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    Blogs
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="text"
                    fullWidth
                    onClick={() => {
                      navigate("/vlogs");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    Vlogs
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    color="primary"
                    variant="text"
                    fullWidth
                    onClick={() => {
                      navigate("/gallery");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    Gallery
                  </Button>
                </MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      navigate("/contact-me");
                      setOpen(false);
                    }}
                    sx={{ border: "2px solid #ffffff1a" }}
                  >
                    Contact me
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
