import { Container, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from 'react';

const Footer = () => {
    return <Typography component="div">
        <Box sx={{ bgcolor: '#D09AFA', textAlign: 'center', fontFamily: 'Monospace' }}>
            <Container>
                <Typography variant="h4">Created by: Dante, Hakeem, Kathryna and Sean
                </Typography>
            </Container>
        </Box>
    </Typography>
};

export default Footer;
