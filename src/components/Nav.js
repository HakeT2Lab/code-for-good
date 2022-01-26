import { Container, Box } from "@material-ui/core";
import React from "react";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box sx={{ bgcolor: "#D09AFA", fontFamily: "Monospace" }}>
      <Container>
        <p id="home-button">
          <Link to="/ ">Home</Link>
        </p>
        <p id="about-button">
          <Link to="/about ">About</Link>
        </p>
        <p id="donations-button">
          <Link to="/donation ">Donations</Link>
        </p>

        <p id="logo">
          <img src={Logo} height={80} width={80} />
        </p>
      </Container>
    </Box>
  );
};

export default Nav;
