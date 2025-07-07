import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material";
import { PostHogProvider } from "posthog-js/react";

const options = {
  api_host: process.env.REACT_APP_POSTHOG_HOST,
  capture_pageview: false,
  // defaults: "2025-05-24",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <PostHogProvider
        apiKey={process.env.REACT_APP_POSTHOG_API_KEY}
        options={options}
      >
        <App />
      </PostHogProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
reportWebVitals();
