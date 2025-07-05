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
import { Slide } from "react-awesome-reveal";
import professionJourneyData from "../data/professionalJourney.json";

export default function Timelines() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        {professionJourneyData?.length > 0 &&
          professionJourneyData?.map((item, index) => (
            <TimelineItem key={`${item?.company}&${item?.role}`}>
              <TimelineSeparator>
                <TimelineDot />
                {index < professionJourneyData?.length - 1 && (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  sx={{
                    textAlign:
                      (index + 1) % 2 === 0
                        ? { xs: "left", md: "right" }
                        : { xs: "left" },
                    fontWeight: "600",
                    color: "#eee",
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
                    color: "#eee",
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
                    color: "#eee",
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
