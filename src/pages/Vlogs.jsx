import Box from "@mui/material/Box";
import { Container, Grid2 as Grid, styled, Typography } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import ReactPlayer from "react-player";
import vlogsData from "../data/vlogs.json";

const StyledBox = styled("div")(({ theme }) => ({
  position: "relative",
  alignSelf: "center",
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "4px solid",
  overflow: "hidden",
  border: "1px solid",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
  outlineColor: "hsla(220, 20%, 42%, 0.1)",
  borderColor: (theme.vars || theme).palette.grey[700],
  "&:hover": {
    boxShadow: "0 0 32px 16px hsla(210, 100%, 30%, 0.4)",
    transform: "scale(1.01)",
    outlineColor: "hsla(220, 20%, 50%, 0.5)",
  },
  "& .hoverContent": {
    position: "absolute",
    top: "15%",
    left: "10%",
    color: "#fff",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    pointerEvents: "none",
  },
  "&:hover .hoverContent": {
    opacity: 1,
    pointerEvents: "auto",
  },
}));

export default function Vlogs() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box id="projects" sx={{ py: { xs: 0, md: 4 } }}>
          <Typography
            variant="h1"
            sx={{
              alignItems: "left",
              fontSize: "clamp(2rem, 10vw, 3rem)",
              fontFamily: "Titan One, sans-serif",
              fontWeight: 300,
              color: "#eee",
            }}
          >
            Vlogs
          </Typography>
          <Grid
            container
            sx={{ justifyContent: "space-between", opacity: 0.9 }}
            spacing={2}
            mt={4}
          >
            {vlogsData?.map((item) => (
              <>
                <Grid size={{ xs: 12, md: 6 }} key={item?.url}>
                  <Slide direction="up" triggerOnce>
                    <StyledBox>
                      <ReactPlayer
                        url={item?.url}
                        controls
                        width="100%"
                        light
                        height={{ xs: "1000px", md: "318px" }}
                      />
                    </StyledBox>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "clamp(1rem, 2vw, 1rem)",
                        fontFamily: "Titan One, sans-serif",
                        fontWeight: 10,
                        marginTop: "16px",
                        color: "#eee",
                      }}
                    >
                      {item?.title}
                    </Typography>
                  </Slide>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
