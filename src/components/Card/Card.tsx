import React from "react";
import {Box, Card as MuiCard, CardActionArea, CardContent, CardMedia, Chip, Grid, IconButton, Typography} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";


interface Property {
    residentialComplexName: string;
    id: number;
    photo: string;
    title: string;
    price: number;
    area: number;
    rooms: number;
    floor: number;
    address: string;
    status: string;
    type: "Продаж" | "Оренда";
    category: string;
    verification: "Верифіковано" | "Очікує";
}

const apartment: Property[] = [
    {
        residentialComplexName: "Новий",
        id: 1,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Продаж",
        category: "Квартира",
        verification: "Верифіковано"
    },
    {
        residentialComplexName: "Новий",
        id: 2,
        photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
        title: "3к квартира вул. Осиповського 9",
        price: 3946168,
        area: 34,
        rooms: 2,
        floor: 4,
        address: "вул. Олександра Олеся 5А",
        status: "Доступна",
        type: "Оренда",
        category: "Квартира",
        verification: "Очікує"
    }
];


const Card: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {apartment.map((apartment) => (
                <Grid item xs={12} sm={6} md={3} key={apartment.id}>
                    <MuiCard
                        sx={{
                            borderRadius: 3,
                            boxShadow: 2,
                            position: "relative",
                            overflow: "hidden",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <CardActionArea component="div" sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={apartment.photo}
                                alt={apartment.title}
                            />

                            <Chip
                                label={apartment.type}
                                color={apartment.type === "Продаж" ? "error" : "info"}
                                sx={{
                                    position: "absolute",
                                    top: 16,
                                    left: 16,
                                    color: "#fff",
                                    fontWeight: "bold",
                                }}
                            />

                            <Chip
                                icon={
                                    apartment.verification === "Верифіковано" ? (
                                        <CircularProgress
                                            variant="determinate"
                                            value={80}
                                            size={20}
                                            color="inherit"
                                        />
                                    ) : (
                                        <CheckIcon
                                            sx={{ padding: "10px"}}
                                        />
                                    )
                                }
                                color={apartment.verification === "Верифіковано" ? "info" : "success"}
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
                                {apartment.title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={1.5}>
                                {apartment.address}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" mb={1.5}>
                                <span>ЖК "{apartment.residentialComplexName}"</span>
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
                                <Typography component="span">{apartment.rooms} кім.</Typography>
                                <span>•</span>
                                <Typography component="span">{apartment.area} м²</Typography>
                                <span>•</span>
                                <Typography component="span">{apartment.floor} поверх</Typography>
                            </Box>

                            <Typography variant="h6" fontWeight="bold" color="text.primary">
                                {apartment.price.toLocaleString()} грн
                            </Typography>
                        </CardContent>
                    </MuiCard>

                </Grid>
            ))}
        </Grid>
    )
};

export default Card;