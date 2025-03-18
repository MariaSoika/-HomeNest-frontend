import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box className={"Footer"}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} HomeNest. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
