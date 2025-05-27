import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
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
  return (
    <Box key={item?.id}>
      <Grid sx={{ opacity: 0.9 }}>
        <Box
          sx={{
            animation: `fadeInFromBottom ${index + 2}s ease-in-out`,
            "@keyframes fadeInFromBottom": {
              from: {
                opacity: 0,
                transform: "translateY(50%)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
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
              <Avatar sx={{ bgcolor: gray[100], height: 56, width: 56 }}>
                <DynamicIcon iconName={item?.icon} />
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontSize: isMobile
                    ? "clamp(1rem, 5vw, 1rem)"
                    : "clamp(1rem, 5vw, 1.1rem)",
                  my: 2,
                  fontFamily: "Titan One, sans-serif",
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
        </Box>
      </Grid>
    </Box>
  );
}
