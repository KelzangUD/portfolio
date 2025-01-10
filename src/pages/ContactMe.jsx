import React from "react";
import { Box, Button, Container } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { TextareaAutosize } from "@mui/base";

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

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

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
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${grey[500]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
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
      alignItems="center"
      sx={{
        alignItems: "center",
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Box>
        <Typography variant="h1" gutterBottom>
          CONTACT ME
        </Typography>
        <Typography>
          “Let’s Connect: Reach Out for Collaboration, Questions, or Just a
          Friendly Hello!”
        </Typography>
      </Box>
      <ContactMeContainer>
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
      </ContactMeContainer>
    </Container>
  );
}
