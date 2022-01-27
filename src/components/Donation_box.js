import { Box, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import "../components/donation_box.css";

import React from "react";

const Donation_box = () => {

  const donate_button = {
    borderRadius: 35,
    backgroundColor: "#9AF4FA",
    fontSize: "18px",
    margin: 20
  }

  const option_div = {
    paddingTop: 40
  }

  const amount_div = {
    paddingTop: 10
  }

  const donation_option = {
    backgroundColor: "#EFFDFC",
    margin: 20
  }

  const donation_amount = {
    backgroundColor: "#EFFDFC",
    margin: 20
  }

  const Dono_box = {
    backgroundColor: "#D09AFA",
    height: 370,
    alignItems: 'center',
    borderRadius: 25
  }

  return (
    <div className="donobox">
      <Box sx={{ width: 550, textAlign: 'center' }}>
        <div id="container_div" style={Dono_box}>
          <div id="option_div" style={option_div}>
            <Typography>
              <Box sx={{ fontWeight: 'bold', fontFamily: "Monospace" }}>
                You can donate once a month or once today.
              </Box>
            </Typography>
            <Button size="large" variant="outlined" style={donation_option}>Give Monthly</Button>
            <Button size="large" variant="outlined" style={donation_option}>Give Once</Button>
          </div>
          <div id="amount_div" style={amount_div}>
            <Button size="large" variant="outlined" style={donation_amount}>$25</Button>
            <Button size="large" variant="outlined" style={donation_amount}>$50</Button>
            <Button size="large" variant="outlined" style={donation_amount}>$100</Button>
            <Button size="large" variant="outlined" style={donation_amount}>Custom</Button>
          </div>
          <Button variant="contained" style={donate_button}>Donate</Button>
          <Typography>
            <Box sx={{ fontWeight: 'bold', fontFamily: "Monospace" }}>
              100% of your donations goes to the homeless
            </Box>
          </Typography>
        </div>
      </Box>
    </div>

  );
};

export default Donation_box;
