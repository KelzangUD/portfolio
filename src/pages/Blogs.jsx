import React from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { BlogCard, CategoryFilter, Search } from "../components/index";

const cardData = [
  {
    img: "https://picsum.photos/800/450?random=1",
    tag: "Technology",
    title: "Revolutionizing software development with cutting-edge tools",
    description:
      "Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.",
    authors: [{ name: "Remy Sharp", avatar: "/static/images/avatar/1.jpg" }],
    date: "14th July, 2023",
  },
  {
    img: "https://picsum.photos/800/450?random=2",
    tag: "Technology",
    title: "Innovative product features that drive success",
    description:
      "Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.",
    authors: [{ name: "Erica Johns", avatar: "/static/images/avatar/6.jpg" }],
    date: "14th July, 2023",
  },
  {
    img: "https://picsum.photos/800/450?random=3",
    tag: "Design",
    title: "Designing for the future: trends and insights",
    description:
      "Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.",
    authors: [{ name: "Kate Morrison", avatar: "/static/images/avatar/7.jpg" }],
    date: "14th July, 2023",
  },
  {
    img: "https://picsum.photos/800/450?random=4",
    tag: "Company",
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: "Cindy Baker", avatar: "/static/images/avatar/3.jpg" }],
    date: "14th July, 2023",
  },
  {
    img: "https://picsum.photos/800/450?random=45",
    tag: "Engineering",
    title: "Pioneering sustainable engineering solutions",
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: "Agnes Walker", avatar: "/static/images/avatar/4.jpg" },
      { name: "Trevor Henderson", avatar: "/static/images/avatar/5.jpg" },
    ],
    date: "14th July, 2023",
  },
  {
    img: "https://picsum.photos/800/450?random=6",
    tag: "Product",
    title: "Maximizing efficiency with our latest product updates",
    description:
      "Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.",
    authors: [{ name: "Travis Howard", avatar: "/static/images/avatar/2.jpg" }],
    date: "14th July, 2023",
  },
];

export default function Blogs() {
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
            Blog
          </Typography>
          <Typography>
            “Stay in the loop with the latest about our products.”
          </Typography>
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
          <CategoryFilter data={cardData} />
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
        <Grid container spacing={2} columns={12}>
          {cardData?.map((item, index) => (
            <BlogCard item={item} index={index} key={item} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 4 }}>
          <Pagination
            hidePrevButton
            hideNextButton
            count={5}
            boundaryCount={5}
          />
        </Box>
      </Box>
    </Container>
  );
}
