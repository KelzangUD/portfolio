import React from "react";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid2 as Grid,
  OutlinedInput,
  styled,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { gray, brand } from "../theme/themePrimitives";
import { Fade, Slide } from "react-awesome-reveal";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const ContactMeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 575,
  padding: theme.spacing(3),
  margin: "50px 0",
  borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
  border: "1px solid ",
  borderColor: (theme.vars || theme).palette.divider,
  background:
    "linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)",
  boxShadow: "0px 4px 8px hsla(210, 0%, 0%, 0.05)",
  [theme.breakpoints.up("xs")]: {
    height: 450,
  },
  [theme.breakpoints.up("sm")]: {
    height: 450,
  },
  [theme.breakpoints.up("md")]: {
    height: 350,
  },
  ...theme.applyStyles("dark", {
    background:
      "linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)",
    boxShadow: "0px 4px 8px hsl(220, 35%, 0%)",
  }),
}));

const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? gray[300] : gray[900]};
    background: ${theme.palette.mode === "dark" ? gray[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? gray[700] : gray[200]};
    box-shadow: 0 2px 2px ${
      theme.palette.mode === "dark" ? gray[900] : gray[50]
    };

    &:hover {
      border-color: ${gray[500]};
    }

    &:focus {
      border-color: ${brand[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? brand[600] : brand[200]
      };
    }

    /* firefox */
    &:focus-visible {
      outline: 0;
    }
  `
);

export default function ContactMe() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box>
        <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontFamily: "Titan One, sans-serif", fontWeight: 300 }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Satisfy, sans-serif",
              color: "text.secondary",
            }}
          >
            “Let’s Connect: Reach Out for Collaboration, Questions, or Just a
            Friendly Hello!”
          </Typography>
        </Fade>
      </Box>
      <ContactMeContainer>
        <Slide direction="up" triggerOnce>
          <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="name" required>
                Name
              </FormLabel>
              <OutlinedInput
                id="name"
                name="name"
                type="name"
                placeholder="John"
                autoComplete="name"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12, md: 6 }}>
              <FormLabel htmlFor="email" required>
                Email
              </FormLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                placeholder="john@email.com"
                autoComplete="email"
                required
                size="small"
              />
            </FormGrid>
            <FormGrid size={{ xs: 12 }}>
              <FormLabel htmlFor="message" required>
                Message
              </FormLabel>
              <Textarea
                id="message"
                aria-label="minimum height"
                minRows={4}
                placeholder="Message"
              />
            </FormGrid>
            <Button fullWidth variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </Slide>
      </ContactMeContainer>
    </Container>
  );
}
