import { Box } from "@mui/material";

const HeroBox = ({ children }) => {
  return (
    <Box
      id="hero"
      sx={() => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), #000)",
        paddingBottom: "10px",
      })}
    >
      {children}
    </Box>
  );
};
export default HeroBox;
