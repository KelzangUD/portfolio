import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
} from "@mui/material";
import { Header, GalleryCard } from "../components";
import galleryData from "../data/galleries.json";

export default function Gallery() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box>
        <Header header="Gallery" subheader="“Moments Captured in Time.”" />
        <Grid container spacing={1} columns={12}>
          {galleryData?.slice(0, 6).map((item, index) => (
            <GalleryCard item={item} index={index} key={item?.id} />
          ))}
        </Grid>
      </Box>
      <Grid sx={{ display: "flex", justifyContent: "flex-end", my: 4 }}>
        <Stack
          useFlexGap
          sx={{
            mt: 6,
            width: { xs: "100%", sm: "200px" },
            mb: { sm: 6, md: 2 },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ minWidth: "fit-content" }}
            onClick={() => navigate("/gallery")}
          >
            View Gallery
          </Button>
        </Stack>
      </Grid>
    </Container>
  );
}
