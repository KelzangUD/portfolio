import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { BlogCard, CategoryFilter, Search } from "../components/index";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/blogs?populate=*`
      );
      if (response.status == 200) {
        setBlogs(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchBlogs();
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
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div>
          <Typography variant="h1" gutterBottom>
            Blogs
          </Typography>
          <Typography>“Stay in the loop.”</Typography>
        </div>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            justifyContent: "space-between",
            alignItems: { xs: "start", md: "center" },
            gap: 4,
            overflow: "auto",
          }}
        >
          <CategoryFilter data={blogs} />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              gap: 1,
              width: { xs: "100%", md: "fit-content" },
              overflow: "auto",
            }}
          >
            <Search />
          </Box>
        </Box>
        <Grid container spacing={3} columns={12}>
          {blogs?.map((item, index) => (
            <BlogCard item={item} index={index} key={item} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 4 }}>
          <Pagination
            variant="outlined"
            shape="rounded"
            count={blogs?.meta?.pagination?.page}
            boundaryCount={5}
          />
        </Box>
      </Box>
    </Container>
  );
}
