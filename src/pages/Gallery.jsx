import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { GalleryCard } from "../components";
import galleryData from "../data/galleries.json";

export default function Gallery() {
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
          {galleryData?.map((item, index) => (
            <GalleryCard item={item} index={index} key={item?.id} />
          ))}
        </Grid>
      </Box>
      {/* <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={galleryData?.meta?.pagination?.page}
          boundaryCount={5}
          sx={{
            "& .MuiPaginationItem-icon": {
              color: "rgb(255 255 255 / 70%)",
            },
          }}
        />
      </Grid> */}
    </Container>
  );
}
