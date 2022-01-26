import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./home.css";

import Donation_box from "../../components/Donation_box";
import Nav from "../../components/Nav";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <div id="top_image"></div>
      <Nav />
      <div id="home_background">
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h4">
              <Box sx={{ fontWeight: 'bold', padding:'20px', fontFamily: 'Monospace'} }>
                People like us makes the world a safer place. Let’s make
                someone's life safe with helping hands for the homeless.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Donation_box />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
