import React from "react";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { gray, brand } from "../theme/themePrimitives";

const Search = () => {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "25ch" } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{
          flexGrow: 1,
          backgroundColor: gray[900],
          color: "#eee",
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
        startAdornment={
          <InputAdornment
            position="start"
            sx={{ color: "rgb(255 255 255 / 70%)" }}
          >
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
};
export default Search;
