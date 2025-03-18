import React from "react";
import {
    Box,
    Container,
    Typography,
} from "@mui/material";
import Card from "../Card/Card.tsx"

const PropertyList: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#f4f6fa", py: 6 }}>
            <Container maxWidth="lg">
                {/* Верхній заголовок */}
                <Typography
                    variant="overline"
                    color="error"
                    textAlign="left"
                    display="block"
                    mb={1}
                >
                    НОВІ ОБ'ЄКТИ
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="left"
                    mb={4}
                >
                    Тільки{" "}
                    <Box component="span" color="error.main">
                        найкращі
                    </Box>{" "}
                    пропозиції на ринку
                </Typography>
                <Card/>
            </Container>
        </Box>
    );
};

export default PropertyList;
