import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { useTheme, useMediaQuery } from "@mui/system";
import ProfessionalBg from "../assets/jpgs/professional_image.jpg";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";

export default function ProfessionalJourney() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: `url(${ProfessionalBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Box id="logoCollection" sx={{ py: 4, width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          PROFESSIONAL JOURNEY
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 4,
          }}
        >
          "Professional Journey: Where Expertise Meets Experience"
        </Typography>
        <Grid
          container
          sx={{
            mt: 0.5,
            opacity: 0.6,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Timeline
            position={isMobile ? "right" : "alternate"}
            sx={{
              ...(isMobile && {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }),
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    textAlign: "left",
                    mb: 2,
                  }}
                >
                  2022-Present
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  Tashi InfoComm Private Limited
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontWeight: "500",
                    mb: 2,
                  }}
                >
                  Software Developer
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  As a Software Developer, my role revolves around translating
                  concepts into functional and scalable software applications. I
                  specialize in writing clean, efficient code to build robust
                  and user-friendly solutions. From conceptualization to
                  deployment, I thrive on problem-solving and innovation,
                  ensuring that every line of code contributes to a seamless
                  user experience.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "right" },
                    mb: 2,
                  }}
                >
                  2021-2022
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: { xs: "left", md: "right" },
                    fontWeight: "bold",
                  }}
                >
                  Next Generation Next Technology
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: { xs: "left", md: "right" },
                    mb: 2,
                  }}
                >
                  Software Developer
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "justify", md: "right" },
                  }}
                >
                  As a Software Developer, my role revolves around translating
                  concepts into functional and scalable software applications. I
                  specialize in writing clean, efficient code to build robust
                  and user-friendly solutions. From conceptualization to
                  deployment, I thrive on problem-solving and innovation,
                  ensuring that every line of code contributes to a seamless
                  user experience.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    textAlign: "left",
                    mb: 2,
                  }}
                >
                  2021-2021
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  FUZZY AUTOMATION
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    mb: 2,
                  }}
                >
                  Electronics Engineer
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  In this role, I leverage my expertise to design and implement
                  cutting-edge electronic systems. From concept to execution, I
                  am committed to transforming ideas into tangible solutions,
                  ensuring seamless integration and optimal performance.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Box>
    </Container>
  );
}
