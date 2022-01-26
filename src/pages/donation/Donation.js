import { Box, Typography } from "@material-ui/core";
import React from "react";
import "../donation/donation.css";
import Nav from "../../components/Nav";
import Donation_box from "../../components/Donation_box";


const Donation = () => {
  return (
    <div>
      <Nav />
      <div className="orgs">
        <Typography>
          <Box id="body" sx={{ textAlign: "center", fontFamily: "Monospace" }}>
            <h1> Donations and Organizations</h1>
          </Box>
          <Donation_box />
        </Typography>

        <br></br>
        <br></br>

        <Typography>
          <Box
            id="body"
            sx={{ width: 1000, textAlign: "left", fontFamily: "Monospace" }}>
            <div className="donopage">
              <div id="text">
                <h2>
                  New Story: Founded in San Francisco in 2014, New Story is a
                  housing non-profit organization that strives to build a world
                  without homelessness. 100% of money donated goes towards building
                  homes for the homeless worldwide, with 2000+ homes developed
                  across Latin America in their lifetime.
                  <br></br>
                  <br></br>
                  <Box sx={{ textAlign: "center" }}>
                    <a
                      href="https://newstorycharity.org/donate/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="donoimgs"
                        alt="newstory"
                        src="https://bookface-images.s3.amazonaws.com/logos/51cee965158622173d095ba644d46988b16c6ec7.png"
                        width="300"
                        height="140"
                      />
                    </a>
                  </Box>
                  <br></br>
                  <br></br>
                  The Bowery Mission: Founded in New York City in 1870, The Bowery
                  Mission handles the needs of homeless and hungry New Yorkers. In
                  2019 alone, more than 7 million dollars worth of donated clothing,
                  food, and other products contributed to this charity.
                  <br></br>
                  <br></br>
                  <Box sx={{ textAlign: "center" }}>
                    <a
                      href="https://www.bowery.org/donate/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="donoimgs"
                        alt="bowery"
                        src="https://www.hfny.org/sites/default/files/styles/affiliate_logo_330xy_/public/2018-04/bowery.png?itok=w2Gesmsm"
                        width="300"
                        height="140"
                      />
                    </a>
                  </Box>
                  <br></br>
                  <br></br>
                  Win: Founded in the early 1980s in New York City as a shelter for
                  homeless women and their children to live, Win has grown to an
                  organization that finds housing for homeless families all across
                  New York City. One of their latest projects was opening the stone
                  house building providing 96 houses for homeless families.
                </h2>
              </div>
              <br></br>
              <br></br>
              <Box sx={{ textAlign: "center" }}>
                <a
                  href="https://support.winnyc.org/give/178036/#!/donation/checkout"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="donoimgs"
                    alt="win"
                    src="https://winnyc.org/wp-content/uploads/2019/04/logo.svg"
                    width="300"
                    height="140"
                  />
                </a>
              </Box>
              <br></br>
              <br></br>
            </div>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Donation;
