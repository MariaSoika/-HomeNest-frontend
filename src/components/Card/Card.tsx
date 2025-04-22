import React from "react";
import {
    Box,
    Card as MuiCard,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
    Typography,
    CircularProgress
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckIcon from "@mui/icons-material/Check";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Thene/Theme.ts";

import { Property } from "../MockData/Apartments.ts"; // ІМПОРТУЄМО ТИП

interface CardProps {
    data: Property;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <MuiCard
                sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    width: 275,
                    flexDirection: "column",
                }}
            >
                <CardActionArea component="div" sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        image={data.photo}
                        alt={data.title}
                        sx={{
                            height: 200,
                            objectFit: "cover",
                            width: "100%",
                        }}
                    />

                    <Chip
                        label={data.type}
                        color={data.type === "Продаж" ? "sale" : "rent"}
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            fontWeight: "bold",
                        }}
                    />

                    <Chip
                        icon={
                            data.verification === "Верифіковано" ? (
                                <CheckIcon sx={{ padding: "10px" }} />
                            ) : (
                                <CircularProgress
                                    variant="determinate"
                                    value={80}
                                    size={20}
                                    color="inherit"
                                />
                            )
                        }
                        color={data.verification === "Верифіковано" ? "verified" : "waiting"}
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 100,
                            width: "40px",
                            padding: 0,
                            ".MuiChip-icon": {
                                margin: "0px -18px 0px 5px",
                                width: "100%",
                                display: "flex",
                            },
                        }}
                    />

                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            backgroundColor: "rgba(255,255,255,0.8)",
                        }}
                    >
                        <FavoriteBorderIcon />
                    </IconButton>
                </CardActionArea>

                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        mb={0.5}
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {data.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mb={1.5}>
                        {data.address}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mb={1.5}>
                        <span>ЖК "{data.residentialComplexName}"</span>
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 1,
                            color: "text.secondary",
                            fontSize: "15px",
                        }}
                    >
                        <Typography component="span">{data.rooms} кім.</Typography>
                        <span>•</span>
                        <Typography component="span">{data.area} м²</Typography>
                        <span>•</span>
                        <Typography component="span">{data.floor} поверх</Typography>
                    </Box>

                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                        {data.price.toLocaleString()} грн
                    </Typography>
                </CardContent>
            </MuiCard>
        </ThemeProvider>
    );
};

export default Card;