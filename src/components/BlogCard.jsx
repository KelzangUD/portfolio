import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  styled,
  Typography,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import { Slide } from "react-awesome-reveal";

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const StyledButton = styled("button")(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 3),
  color: "#000",
  border: "2px solid #eee",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "#eee",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

function Author({ authors, date }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="caption" color="#eee">
          {authors?.map((author) => author?.name).join(", ")}
        </Typography>
      </Box>
      <Typography variant="caption" color="#eee">
        {date}
      </Typography>
    </Box>
  );
}

export default function BlogsCard({ item, index }) {
  const [focusedCardIndex, setFocusedCardIndex] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };
  const viewHandle = () => {
    navigate(`/blogs/${item?.documentId}`);
  };
  const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 0,
    height: isMobile ? "100%" : "600px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    "&:hover": {
      background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.1))`,
      transform: "scale(1.01)",
      border: "none",
      boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
      outline: "6px solid",
      outlineColor: "hsla(220, 25%, 80%, 0.2)",
    },
    "& .hoverContent": {
      position: "absolute",
      bottom: "25%",
      left: "50%",
      transform: "translate(-50%, 50%)",
      color: "#fff",
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
      pointerEvents: "none",
    },
    "&:hover .hoverContent": {
      opacity: 1,
      pointerEvents: "auto",
    },
    "&:focus-visible": {
      outline: "3px solid",
      outlineColor: "hsla(210, 98%, 48%, 0.5)",
      outlineOffset: "2px",
    },
  }));

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Slide direction="up" triggerOnce>
        <StyledCard
          variant="outlined"
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          tabIndex={index}
          className={focusedCardIndex === index ? "Mui-focused" : ""}
        >
          <CardMedia
            component="img"
            alt={item?.alt}
            image={item?.img_url}
            sx={{
              aspectRatio: "16 / 9",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
          <StyledCardContent>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              color="#eee"
            >
              {item?.tag}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="#eee">
              {item?.title}
            </Typography>
            <StyledTypography
              variant="body2"
              color="rgb(255 255 255 / 70%)"
              gutterBottom
            >
              {item?.description}
            </StyledTypography>
          </StyledCardContent>
          <Author authors={item?.authors} date={item?.date} />
          <div className="hoverContent">
            <StyledButton onClick={viewHandle}>Read Blog</StyledButton>
          </div>
        </StyledCard>
      </Slide>
    </Grid>
  );
}
