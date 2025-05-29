import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { GalleryCard } from "../components";
import axios from "axios";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const fetchGalleryData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/galleries?populate=*`
      );
      if (response.status === 200) {
        setGallery(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchGalleryData();
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            alignItems: "left",
            fontSize: "clamp(2rem, 10vw, 3rem)",
            fontFamily: "Titan One, sans-serif",
            fontWeight: 300,
            color: "#eee",
          }}
        >
          Gallery
        </Typography>
        <Grid container spacing={2} columns={12} my={4}>
          {gallery?.map((item, index) => (
            <GalleryCard item={item} index={index} key={item?.id} />
          ))}
        </Grid>
      </Box>
      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={gallery?.meta?.pagination?.page}
          boundaryCount={5}
          sx={{
            "& .MuiPaginationItem-icon": {
              color: "rgb(255 255 255 / 70%)",
            },
          }}
        />
      </Grid>
    </Container>
  );
}
