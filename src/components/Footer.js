import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from 'react';

const Footer = () => {
    return <Typography component="div">
        <Box sx={{ bgcolor: '#D09AFA', textAlign: 'center', fontFamily: 'Monospace' }}>
            <Container>
                <h1>Created by: Dante, Hakeem, Kathryna and Sean
                </h1>
            </Container>
        </Box>
    </Typography>
};

export default Footer;
