import React, { useState, useEffect } from "react";
import { Box, Chip } from "@mui/material";

const CategoryFilter = ({ data }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("All categories");
  useEffect(() => {
    setCategories([
      ...new Set(["All categories", ...data.map((item) => item?.tag)]),
    ]);
  }, [data]);
  const handleClick = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          gap: 3,
          overflow: "auto",
        }}
      >
        {categories?.map((item) => (
          <Chip
            onClick={() => handleClick(item)}
            size="medium"
            label={item}
            sx={{
              ...(selected === item
                ? {}
                : {
                    backgroundColor: "transparent",
                    border: "none",
                  }),
            }}
            key={item}
          />
        ))}
      </Box>
    </>
  );
};

export default CategoryFilter;
