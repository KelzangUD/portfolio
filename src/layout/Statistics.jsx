import { Box, Container, Grid2 as Grid } from "@mui/material";
import { Header, StatisticsCard } from "../components/index";
import statsData from "../data/stats.json";

export default function Statistics() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box id="whatIDo" sx={{ py: { xs: 0, md: 4 }, mb: 6 }}>
          <Header
            header="In The Numbers"
            subheader="“Key Metrics at a Glance.”"
          />

          <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
            {statsData?.map((item, index) => (
              <StatisticsCard item={item} key={index} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
