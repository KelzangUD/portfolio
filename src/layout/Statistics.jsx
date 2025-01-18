import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Header, StatisticsCard } from "../components/index";
import axios from "axios";

export default function Statistics() {
  const [statisticsData, setStatisticsData] = useState([]);
  const fetchStatisticsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/statistics`
      );
      if (response.status == 200) {
        setStatisticsData(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchStatisticsData();
  }, []);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          backgroundRepeat: "no-repeat",
          background: "hsl(210, 100%, 99%)",
        }}
      >
        <Box id="whatido" sx={{ py: { xs: 0, md: 4 }, mb: 6 }}>
          <Header
            header="In The Numbers"
            subheader="“Key Metrics at a Glance.”"
          />
          <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
            {statisticsData?.map((item) => (
              <StatisticsCard item={item} key={item?.id} />
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
