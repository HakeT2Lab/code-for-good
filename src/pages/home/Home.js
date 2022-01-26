import React from "react";
import { Typography } from "@material-ui/core";
import "./home.css";

import Donation_box from "../../components/Donation_box";

const Home = () => {

  return (
    <div>
      
      <div id="home_background">
        <div className="text">
          <Typography variant="caption">
          People like us makes the world a safer place. 
          Let’s make someone's life safe with helping hands for the homeless.
          </Typography>
          <Donation_box />

        </div>
      </div>
    </div>
  );
};

export default Home;
