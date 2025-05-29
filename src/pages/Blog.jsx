import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import Markdown from "markdown-to-jsx";

export default function Blog() {
  const pathName = window?.location?.pathname;
  const [blog, setBlog] = useState([]);
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api${pathName}`
      );
      if (response.status === 200) {
        setBlog(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line
  }, []);
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: { xs: 12, sm: 20 },
        pb: { xs: 0, sm: 12 },
        gap: 4,
        color: "#eee",
        "& a": {
          color: "#90caf9",
          textDecoration: "underline",
        },
        "& a:hover": {
          color: "#42a5f5",
        },
      }}
    >
      <Markdown>{blog?.content}</Markdown>
    </Container>
  );
}
