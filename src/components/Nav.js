import { Container, Box } from "@material-ui/core";
import React from "react";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Nav = () => {
  const Links = [
    {
      destination: "/",
      text: "Home",
    },
    {
      destination: "/about",
      text: "About",
    },
    {
      destination: "/donation",
      text: "Donation",
    },
  ];

  return (
    <Box
      className="nav_container"
      sx={{ bgcolor: "#D09AFA", fontFamily: "Monospace" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={Logo} height={80} width={80} />
        </Grid>

        {Links.map((link) => (
          <Grid item xs={2}>
            <Link className="nav_link" to= {link.destination}>
              {link.text}
            </Link>
          </Grid>
        ))}
      </Grid>

      {/* <Container className="nav_link_container">
        <p id="logo">
          <img src={Logo} height={80} width={80} />
        </p>

        <p id="home-button">
          <Link to="/ ">Home</Link>
        </p>
        <p id="about-button">
          <Link to="/about ">About</Link>
        </p>
        <p id="donations-button">
          <Link to="/donation ">Donations</Link>
        </p>
      </Container> */}
    </Box>
  );
};

export default Nav;
