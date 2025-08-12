import { useState } from "react";
import {
  // Alert,
  Box,
  Button,
  Container,
  FormHelperText,
  FormLabel,
  Grid2 as Grid,
  OutlinedInput,
  styled,
  Snackbar,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { gray, brand } from "../theme/themePrimitives";
import { Fade, Slide } from "react-awesome-reveal";
import axios from "axios";

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
  borderColor: "#ffffff1a",
  [theme.breakpoints.up("xs")]: {
    height: 450,
  },
  [theme.breakpoints.up("sm")]: {
    height: 450,
  },
  [theme.breakpoints.up("md")]: {
    height: 350,
  },
  background:
    "linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)",
  boxShadow: "0px 4px 8px hsl(220, 35%, 0%)",
}));

const Textarea = styled(TextareaAutosize)(
  () => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${gray[300]};
    background: ${gray[900]};
    border: 0.5px solid ${gray[700]};
    box-shadow: 0 1px 1px ${gray[900]};
    &:hover {
      border-color: ${gray[500]};
    }
    &:focus {
      border-color: ${brand[500]};
      box-shadow: 0 0 0 1px ${brand[400]};
    }
    /* firefox */
    &:focus-visible {
      outline: 0;
    }
    &::placeholder {
      color: ${gray[500]};
      opacity: 1;
    }
  `
);

export default function ContactMe() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [userInputState, setUserInputState] = useState({
    nameRequired: false,
    emailRequired: false,
    messageRequired: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({ type: "success", message: "" });
  const sendHandle = async () => {
    if (userInput?.name === "") {
      setUserInputState({
        ...userInputState,
        nameRequired: true,
      });
      return;
    }
    if (userInput?.email === "") {
      setUserInputState({
        ...userInputState,
        emailRequired: true,
      });
      return;
    }
    if (userInput?.message === "") {
      setUserInputState({
        ...userInputState,
        messageRequired: true,
      });
      return;
    }
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contacts`,
      {
        data: {
          name: userInput?.name,
          email: userInput?.email,
          message: userInput?.message,
        },
      }
    );
    if (response?.status === 201) {
      setUserInputState({
        nameRequired: false,
        emailRequired: false,
        messageRequired: false,
      });
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
      setAlert({ type: "success", message: "Thank you for your message!" });
      setShowAlert(true);
    } else {
      setShowAlert(true);
      setAlert({ type: "error", message: "Something went wrong!" });
    }
  };
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
        <Box>
          <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontFamily: "Titan One, sans-serif",
                fontWeight: 300,
                color: "#eee",
              }}
            >
              Contact Me
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Satisfy, sans-serif",
                color: "rgb(255 255 255 / 70%)",
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
                <FormLabel
                  htmlFor="name"
                  required
                  sx={{ color: "rgb(255 255 255 / 70%)" }}
                >
                  Name
                </FormLabel>
                <OutlinedInput
                  id="name"
                  name="name"
                  type="name"
                  placeholder="John"
                  autoComplete="name"
                  required
                  value={userInput?.name}
                  size="small"
                  sx={{
                    color: gray[300],
                    backgroundColor: gray[900],
                    border: `1px solid ${gray[700]}`,
                    boxShadow: `0 2px 2px ${gray[900]}`,
                    "&:hover": {
                      borderColor: gray[500],
                    },
                    "&:focus": {
                      borderColor: brand[400],
                      boxShadow: `0 0 0 3px ${brand[600]}`,
                    },
                    "&:focus-visible": {
                      outline: 0,
                    },
                  }}
                  onChange={(e) => {
                    setUserInputState({
                      ...userInputState,
                      nameRequired: false,
                    });
                    setUserInput({ ...userInput, name: e?.target?.value });
                  }}
                />
                {userInputState?.nameRequired && (
                  <FormHelperText sx={{ color: "rgb(255 255 255 / 70%)" }}>
                    Name is required
                  </FormHelperText>
                )}
              </FormGrid>
              <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel
                  htmlFor="email"
                  required
                  sx={{ color: "rgb(255 255 255 / 70%)" }}
                >
                  Email
                </FormLabel>
                <OutlinedInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  autoComplete="email"
                  required
                  value={userInput?.email}
                  size="small"
                  sx={{
                    color: gray[300],
                    backgroundColor: gray[900],
                    border: `1px solid ${gray[700]}`,
                    boxShadow: `0 2px 2px ${gray[900]}`,
                    "&:hover": {
                      borderColor: gray[500],
                    },
                    "&:focus": {
                      borderColor: brand[400],
                      boxShadow: `0 0 0 3px ${brand[600]}`,
                    },
                    "&:focus-visible": {
                      outline: 0,
                    },
                  }}
                  onChange={(e) => {
                    setUserInputState({
                      ...userInputState,
                      emailRequired: false,
                    });
                    setUserInput({ ...userInput, email: e?.target?.value });
                  }}
                />
                {userInputState?.emailRequired && (
                  <FormHelperText sx={{ color: "rgb(255 255 255 / 70%)" }}>
                    Email is required
                  </FormHelperText>
                )}
              </FormGrid>
              <FormGrid size={{ xs: 12 }}>
                <FormLabel
                  htmlFor="message"
                  required
                  sx={{ color: "rgb(255 255 255 / 70%)" }}
                >
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Message"
                  value={userInput?.message}
                  onChange={(e) => {
                    setUserInputState({
                      ...userInputState,
                      messageRequired: false,
                    });
                    setUserInput({ ...userInput, message: e?.target?.value });
                  }}
                />
                {userInputState?.nameRequired && (
                  <FormHelperText sx={{ color: "rgb(255 255 255 / 70%)" }}>
                    Message is required
                  </FormHelperText>
                )}
              </FormGrid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={sendHandle}
              >
                Send
              </Button>
            </Grid>
          </Slide>
        </ContactMeContainer>
      </Container>
      {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
          anchorOrigin={{ vertical: "top", horizontal: "middle" }}
          message={alert?.message}
        />
      )}
    </>
  );
}
