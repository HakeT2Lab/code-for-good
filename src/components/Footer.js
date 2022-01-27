import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from 'react';

const Footer = () => {
    return <Typography variant="h4">
        <Box sx={{ bgcolor: '#D09AFA', textAlign: 'center', fontFamily: 'Monospace' }}>
            Created by: Dante, Hakeem, Kathryna and Sean
        </Box>
    </Typography>
};

export default Footer;
