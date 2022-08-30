import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="MeTube" height={45} />
        <Typography
          sx={{
            display: { xs: "none", md: "inline-block" },
            color: "#fff",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          MeTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
