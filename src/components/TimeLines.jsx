import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { Slide } from "react-awesome-reveal";

export default function Timelines() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [project, setProject] = useState([]);
  const fetchProfessionalData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/professional-journeys`
      );
      if (response.status === 200) {
        setProject(response?.data?.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchProfessionalData();
    // eslint-disable-next-line
  }, []);

  return (
    <Slide direction="up" triggerOnce>
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
        {project?.length > 0 &&
          project?.map((item, index) => (
            <TimelineItem key={`${item?.company}&${item?.role}`}>
              <TimelineSeparator>
                <TimelineDot />
                {index < project.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    textAlign:
                      (index + 1) % 2 === 0
                        ? { xs: "left", md: "right" }
                        : { xs: "left" },
                    fontWeight: "600",
                    color: "#eee"
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
                    fontWeight: 200,
                    fontFamily: "Titan One, sans-serif",
                    color: "#eee"
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
                    fontWeight: "600",
                    mb: 2,
                    color: "#eee"
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
                    color: "rgb(255 255 255 / 70%)",
                  }}
                >
                  {item?.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </Slide>
  );
}
