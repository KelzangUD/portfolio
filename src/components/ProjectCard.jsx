import { useNavigate } from "react-router-dom";
import { styled, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/system";

export default function ProjectCard({ item, height = 700 }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const StyledBox = styled("div")(({ theme }) => ({
    position: "relative",
    alignSelf: "center",
    width: "100%",
    height: isMobile ? 200 : 400,
    marginTop: isMobile ? theme.spacing(1) : theme.spacing(6),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    outline: "6px solid",
    border: "1px solid",
    backgroundImage: `url(${item?.img_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.up("sm")]: {
      height: height,
    },
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
    "&:hover": {
      background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.39), rgba(255, 255, 255, 0.1))`,
      opacity: 1,
      boxShadow: "0 0 32px 16px hsla(210, 100%, 30%, 0.4)",
      transform: "scale(1.01)",
      outlineColor: "hsla(240, 0.50%, 62.90%, 0.50)",
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

  const StyledButton = styled("button")(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 3),
    color: "#eee",
    border: "2px solid #eee",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "transparent",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "#eee",
      color: "#000",
    },
  }));
  const projectHandle = () => {
    navigate(`/projects/${item?.id}`);
  };
  return (
    <StyledBox>
      <div className="hoverContent">
        <Typography
          variant="h1"
          sx={{
            alignItems: "left",
            fontSize: isMobile
              ? "clamp(1rem, 10vw, 1rem)"
              : "clamp(2rem, 10vw, 1rem)",
          }}
        >
          {new Date(item?.date).getFullYear()}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: isMobile
              ? "clamp(2rem, 10vw, 2rem)"
              : "clamp(3rem, 10vw, 3.5rem)",
          }}
        >
          {item?.title}
        </Typography>
        <StyledButton onClick={projectHandle}>View Project</StyledButton>
      </div>
    </StyledBox>
  );
}
