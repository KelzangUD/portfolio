import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import { gray } from "../theme/themePrimitives";
import { useTheme, useMediaQuery } from "@mui/system";

const DynamicIcon = ({ iconName }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    if (iconName && Icons[iconName]) {
      setIconComponent(Icons[iconName]);
    }
  }, [iconName]);

  return IconComponent ? <IconComponent /> : null;
};

export default function WhatIDoCard({ item, index }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const isTab = useMediaQuery(
  //   theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  // );
  // const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  // const getMarginTop = (isLarge, isTab, index) => {
  //   if (isLarge) {
  //     switch (index % 4) {
  //       case 0:
  //         return 0;
  //       case 1:
  //         return 6;
  //       case 2:
  //         return 12;
  //       case 3:
  //         return 18;
  //       default:
  //         return 0;
  //     }
  //   }
  //   if (isTab) {
  //     switch (index % 3) {
  //       case 0:
  //         return 0;
  //       case 1:
  //         return 6;
  //       case 2:
  //         return 12;
  //       default:
  //         return 0;
  //     }
  //   }
  //   return 0;
  // };
  return (
    <Grid
      sx={{ opacity: 0.9 }}
      key={item?.id}
      // mt={getMarginTop(isLarge, isTab, index)}
    >
      <Card
        sx={{
          maxWidth: isMobile ? "100%" : "260px",
          borderRadius: (theme.vars || theme).shape.borderRadius,
          outline: "2px solid",
          outlineColor: "hsla(220, 25%, 80%, 0.2)",
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.grey[200],
          boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 0 24px 12px hsla(220, 50%, 70%, 0.4)",
            transform: "scale(1.01)",
            outlineColor: "hsla(220, 25%, 90%, 0.5)",
            cursor: "default",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 1,
            height: "100%",
          }}
        >
          <Avatar sx={{ bgcolor: gray[900], height: 56, width: 56 }}>
            <DynamicIcon iconName={item?.icon} />
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              fontSize: isMobile
                ? "clamp(2rem, 10vw, 2rem)"
                : "clamp(1rem, 5vw, 1.5rem)",
              my: 2,
            }}
          >
            {item?.title}
          </Typography>
          <Typography
            color="text.secondary"
            mb={2}
            sx={{
              textAlign: "justify",
              height: 250,
              overflow: "hidden",
              lineHeight: 1.6,
            }}
          >
            {item?.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
