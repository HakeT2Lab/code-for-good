import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./home.css";
import Logo from "../../components/images/logo.png"

import Donation_box from "../../components/Donation_box";
import Nav from "../../components/Nav";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <div id="top_image"></div>
      <Nav />
      <div id="home_background">
        <div id="home_front">
          <Grid container>
            <Grid item xs={6}>
              <Typography style={{ color: "#FAA09A" }} variant="h1">
                <Box sx={{ fontWeight: 'bold', marginLeft: 40, marginTop: 40, fontFamily: 'Monospace' }}>
                  Lend a helping hand.
                </Box>
              </Typography>
              <Typography style={{ color: "#FAA09A" }} variant="h3">
                <Box sx={{ marginLeft: 40, marginTop: 40, fontFamily: 'Monospace' }}>
                  Share in giving the gift of a home to someone in need.
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginRight: 20 }}>
                <Donation_box />
              </Box>
            </Grid >
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
