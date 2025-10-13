import { useState } from "react";
import {
  Autocomplete,
  Box,
  Container,
  FormLabel,
  Grid2 as Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { GalleryCard } from "../components";
import { gray, brand } from "../theme/themePrimitives";
import galleryData from "../data/galleries.json";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState({ label: "ALL" });

  // Safely extract unique categories
  const categoryOptions = [
    { label: "ALL" },
    ...(Array.isArray(galleryData)
      ? [...new Set(galleryData.map((item) => item?.category))]
          .filter((category) => category != null && category !== "")
          .map((category) => ({ label: String(category) }))
      : []),
  ];

  // Filter gallery data based on selected category
  const filteredGalleryData = Array.isArray(galleryData)
    ? selectedCategory?.label === "ALL" || !selectedCategory
      ? galleryData
      : galleryData.filter((item) => item?.category === selectedCategory?.label)
    : [];

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
          component="h1"
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
        <Box mt={2}>
          <Autocomplete
            disablePortal
            value={selectedCategory}
            onChange={(event, newValue) => {
              setSelectedCategory(newValue || { label: "ALL" });
            }}
            options={categoryOptions}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            getOptionLabel={(option) => option?.label || ""}
            sx={{ width: "100%", maxWidth: 400 }}
            renderInput={(params) => (
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel
                  htmlFor="category-select"
                  sx={{ color: "rgb(255 255 255 / 70%)", mb: 1 }}
                >
                  Category
                </FormLabel>
                <TextField
                  {...params}
                  id="category-select"
                  placeholder="Select category"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: gray[300],
                      backgroundColor: gray[900],
                      border: `1px solid ${gray[700]}`,
                      boxShadow: `0 2px 2px ${gray[900]}`,
                      fontSize: "14px",
                      "&:hover": {
                        borderColor: gray[500],
                      },
                      "&.Mui-focused": {
                        borderColor: brand[400],
                        boxShadow: `0 0 0 3px ${brand[600]}`,
                      },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </FormGrid>
            )}
          />
        </Box>
        <Grid container spacing={1} columns={12} my={4}>
          {filteredGalleryData.length > 0 ? (
            filteredGalleryData.map((item, index) => (
              <GalleryCard item={item} index={index} key={`gallery-${index}`} />
            ))
          ) : (
            <Grid size={12}>
              <Typography
                sx={{
                  color: "rgb(255 255 255 / 70%)",
                  textAlign: "center",
                  py: 4,
                }}
              >
                No gallery items found
              </Typography>
            </Grid>
          )}
        </Grid>
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
      </Box>
    </Container>
  );
}
