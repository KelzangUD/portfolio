import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2 as Grid,
  styled,
  Typography,
} from "@mui/material";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
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
        <AvatarGroup max={3}>
          {authors?.map((author, index) => (
            <Avatar
              key={index}
              alt={author?.name}
              src={author?.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors?.map((author) => author?.name).join(", ")}
        </Typography>
      </Box>
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}

export default function BlogsCard({ item, index }) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };
  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <SyledCard
        variant="outlined"
        onFocus={() => handleFocus(index)}
        onBlur={handleBlur}
        tabIndex={index}
        className={focusedCardIndex === index ? "Mui-focused" : ""}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          image={item?.img}
          sx={{
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        />
        <SyledCardContent>
          <Typography gutterBottom variant="caption" component="div">
            {item?.tag}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {item?.title}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary" gutterBottom>
            {item?.description}
          </StyledTypography>
        </SyledCardContent>
        <Author authors={item?.authors} date={item?.date} />
      </SyledCard>
    </Grid>
  );
}
