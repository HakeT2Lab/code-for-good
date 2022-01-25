import { Box, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import React from "react";

const Donation_box = () => {
  const button_Style = {
    borderRadius: 35,
    backgroundColor: "#FD0000",
    // padding: "18px 36px",
    fontSize: "18px"
  }

  const donation_amount = {
    backgroundColor: "white",
  }

  const Don_box ={
    backgroundColor:"#D706F9"
  }
  return (
 
  <Box>
    <div id="container_div" style={Don_box}>
      <div id="amount_div">
        <Button variant="outlined" style={donation_amount}>$1</Button>
        <Button variant="outlined" style={donation_amount}>$5</Button>
        <Button variant="outlined" style={donation_amount}>$10</Button>
      </div>

      <Button variant="contained" style={button_Style}>Donate</Button>

      <div id="text">
        <Typography variant="caption">
          People like us the world a safer place, let's make someone's life with
          helping hands for the homeless
        </Typography>
      </div>

      {/* Donation button */}
      <div id="payment_method">
        <Button variant="outlined" style={donation_amount}>Check</Button>
        <Button variant="outlined" style={donation_amount}>Credit Card</Button>
        <Button variant="outlined" style={donation_amount}>Crypto</Button>
      </div>
    </div>
    <div>
      <Typography variant="caption">
        100% of your donations goes to people in need
      </Typography>
    </div>
  </Box>

  
  );
};

export default Donation_box;
