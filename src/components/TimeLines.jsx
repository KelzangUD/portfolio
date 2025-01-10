import React from "react";
import { Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";

const data = [
  {
    year: "2022-Present",
    company: "Tashi InfoComm Private Limited",
    role: "Software Developer",
    description:
      "As a Software Developer, my role revolves around translating concepts into functional and scalable software applications. Ispecialize in writing clean, efficient code to build robust and user-friendly solutions. From conceptualization to deployment, I thrive on problem-solving and innovation, ensuring that every line of code contributes to a seamless user experience.",
  },
  {
    year: "2021-2022",
    company: "Next Generation Next Technology",
    role: "Software Developer",
    description:
      "As a Software Developer, my role revolves around translating concepts into functional and scalable software applications. Ispecialize in writing clean, efficient code to build robust and user-friendly solutions. From conceptualization to deployment, I thrive on problem-solving and innovation, ensuring that every line of code contributes to a seamless user experience.",
  },
  {
    year: "2021-2021",
    company: "Fuzzy Automation",
    role: "Electronics Engineer",
    description:
      "In this role, I leverage my expertise to design and implement cutting-edge electronic systems. From concept to execution, I am committed to transforming ideas into tangible solutions, ensuring seamless integration and optimal performance.",
  },
];

export default function Timelines() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
      {data?.length > 0 &&
        data?.map((item, index) => (
          <TimelineItem key={`${item?.company}&${item?.role}`}>
            <TimelineSeparator>
              <TimelineDot />
              {index < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                sx={{
                  textAlign:
                    (index + 1) % 2 === 0
                      ? { xs: "left", md: "right" }
                      : { xs: "left" },
                  mb: 2,
                }}
              >
                {item?.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign:
                    (index + 1) % 2 === 0
                      ? { xs: "left", md: "right" }
                      : { xs: "left" },
                  fontWeight: "bold",
                }}
              >
                {item?.company}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign:
                    (index + 1) % 2 === 0
                      ? { xs: "left", md: "right" }
                      : { xs: "left" },
                  fontWeight: "500",
                  mb: 2,
                }}
              >
                {item?.role}
              </Typography>
              <Typography
                sx={{
                  textAlign:
                    (index + 1) % 2 === 0
                      ? { xs: "left", md: "right" }
                      : { xs: "left" },
                }}
              >
                {item?.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
}
