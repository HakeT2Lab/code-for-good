import React from "react";
import { Typography } from "@material-ui/core";
import "./home.css";

import Donation_box from "../../components/Donation_box";

const Home = () => {

  return (
    <div>
      <div id="body">
        <div className="text">
          <Typography variant="caption">
            People like us the world a safer place, let's make someone's life
            with helping hands for the homeless
          </Typography>
          <Donation_box />

        </div>
      </div>
    </div>
  );
};

export default Home;
