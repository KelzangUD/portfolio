import { alpha } from "@mui/material/styles";
import { gray, orange } from "../themePrimitives";

/* eslint-disable import/prefer-default-export */
export const feedbackCustomizations = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: `${alpha(orange[900], 0.5)}`,
        border: `1px solid ${alpha(orange[800], 0.5)}`,
        "& .MuiAlert-icon": {
          color: orange[500],
        },
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: () => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[800],
      }),
    },
  },
};
