import { Box, Container, Grid2 as Grid} from "@mui/material";
import { Header, WhatIDoCard } from "../components/index";
import whatIDoData from "../data/whatIDo.json";

export default function WhatIDo() {
  return (
    <Container maxWidth="lg">
      <Box id="whatIDo" sx={{ py: { xs: 0, md: 4 }, mb: 6 }}>
        <Header
          header="What I Do?"
          subheader="“I try to balance passion and purpose, constantly exploring, learning, and growing.”"
        />
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          {whatIDoData?.map((item, index) => (
            <WhatIDoCard item={item} index={index} key={item?.documentId} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
