import { Box, Typography } from "@material-ui/core";
import React from "react";
import "./about.css";
import Homelessness from "../../images/Homelessness.jpg";
import Factors from "../../images/Factors.gif";
import Nav from "../../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <Box
        sx={{
          bgcolor: "#fafafa",
          textAlign: "center",
          fontFamily: "Monospace",
        }}
      >
        <h1>Breaking The Cycle of Homelessness </h1>
        <br />
        <Typography variant="subtitle1">
          We formed the Group People Aid in January of 2022, and our mission is
          to show people that homelessness is not a promblem that will go away
          overnight. Over two percent of the World's population faces this
          promblem daily. That is over 154 million people living on the streets,
          at refugee camps, and in other dangerous conditions worldwide. In the
          United States alone, homelessness has risen nationally by almost one
          percent over the past few years.
        </Typography>
        <br />

        <img
          src={Homelessness}
          className="Aboutimage"
          height="500px"
          width="1000px"
        />

        <Typography variant="subtitle1">
          People Aid knows the impact homelessness has on the world.
          Homelessness affects all of us. It impacts the availability of
          healthcare resources, crime and safety, the workforce, use of tax
          dollars. Further, homelessness impacts the present as well as our
          future. It benefits all of us to break the cycle of homelessness: one
          person, one family at a time.
        </Typography>
        <br />
        <img
          src={Factors}
          className="Aboutimage"
          height="500px"
          width="1000px"
        />
        <Typography variant="subtitle1">
          So, we created this page to connect people to organizations we
          researched in the fight against homelessness. Click the donation tab
          above to learn about these organizations.
        </Typography>
      </Box>
    </>
  );
};

export default About;
