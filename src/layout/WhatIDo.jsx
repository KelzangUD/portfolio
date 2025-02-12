import React, { useState, useEffect } from "react";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import { Header, WhatIDoCard } from "../components/index";
import axios from "axios";
import { Slide } from "react-awesome-reveal";

export default function WhatIDo() {
  const [whatIdos, setWahtIDos] = useState([]);
  const fetchWhatIDosData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/what-i-dos`
      );
      if (response.status === 200) {
        setWahtIDos(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchWhatIDosData();
    // eslint-disable-next-line
  }, []);
  return (
    <Container maxWidth="lg">
      <Box id="whatido" sx={{ py: { xs: 0, md: 4 }, mb: 6 }}>
        <Header
          header="What I Do?"
          subheader="“I balance passion and purpose, constantly exploring, learning, and growing.”"
        />
        <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
          <Slide direction="up" cascade damping={0.2} triggerOnce>
            {whatIdos?.map((item, index) => (
              <WhatIDoCard item={item} index={index} key={item?.documentId} />
            ))}
          </Slide>
        </Grid>
      </Box>
    </Container>
  );
}
