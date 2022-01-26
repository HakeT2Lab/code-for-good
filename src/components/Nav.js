import {Container, Box ,} from '@material-ui/core';
import React from "react";
import Logo from './images/logo.jpg'


const Nav = () => {
    return (
        <Box sx={{bgcolor:'#D09AFA' ,fontFamily: 'Monospace'}}>
        <Container>  
         <p id="donations-button"><a href=" ">Donations</a></p>
         <p id="home-button"><a href=" ">Home</a></p>
         <p id="about-button"><a href=" ">About</a></p>
         <p id="logo"><img src={Logo} height={80} width={80}/></p>
        </Container> 
        </Box>
        )
    
};

export default Nav;