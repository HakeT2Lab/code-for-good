import { Box, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import "../components/donation_box.css";

import React from "react";

const Donation_box = () => {

  const donate_button = {
    borderRadius: 35,
    backgroundColor: "#FD0000",
    fontSize: "18px",
    margin: 20
  }

  const amount_div = {
    paddingTop: 35
  }

  const donation_amount = {
    backgroundColor: "#EFFDFC",
    margin: 10
  }

  const payment_method = {
    backgroundColor: "#EFFDFC",
    margin: 10
  }

  const Dono_box = {
    backgroundColor: "#D706F9",
    height: 270,
    alignItems: 'center'
  }

  return (
    <div className="donobox">
      <Box sx={{ width: 350, textAlign: 'center' }}>
        <div id="container_div" style={Dono_box}>
          <div id="amount_div" style={amount_div}>
            <Button size="large" variant="outlined" style={donation_amount}>$25</Button>
            <Button size="large" variant="outlined" style={donation_amount}>$50</Button>
            <Button size="large" variant="outlined" style={donation_amount}>$100</Button>
          </div>

          <Button variant="contained" style={donate_button}>Donate</Button>

          {/* Donation button */}
          <div id="payment_div">
            <Button size="small" variant="outlined" style={payment_method}>Check</Button>
            <Button size="small" variant="outlined" style={payment_method}>Credit Card</Button>
            <Button size="small" variant="outlined" style={payment_method}>Crypto</Button>
          </div>
        </div>
        <div>
          <Typography variant="caption">
            100% of your donations goes to people in need
          </Typography>
        </div>
      </Box>
    </div>

  );
};

export default Donation_box;
