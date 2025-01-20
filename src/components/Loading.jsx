"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const initialOrder = [
  "rgba(0, 0, 0, 0.87)",
  "rgba(0, 0, 0, 0.47)",
  "rgba(0, 0, 0, 0.67)",
  "rgba(0, 0, 0, 0.27)",
];

function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.5);
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const item = {
  width: 60,
  height: 60,
  borderRadius: "6px",
};
export default function Loading() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 750);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        width: 150,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {order.map((backgroundColor) => (
        <motion.li
          key={backgroundColor}
          layout
          transition={spring}
          style={{ ...item, backgroundColor }}
        />
      ))}
    </Box>
  );
}
