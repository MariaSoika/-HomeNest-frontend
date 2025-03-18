import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent
} from "@mui/material";

interface Category {
    title: string;
    image: string;
}

const categories: Category[] = [
    {
        title: "Продаж комерційної нерухомості",
        image:
            "https://build.kovalska.com/uploads/3/17013-13318_img02260_ezgif_com_optijpeg.jpg"
    },
    {
        title: "Продаж квартир",
        image:
            "https://www.common.com/_next/image?url=%2Fimages%2Fsplash-page.jpeg&w=3840&q=75"
    },
    {
        title: "Оренда квартир",
        image:
            "https://photos.zillowstatic.com/fp/0cae684918575c7c75ace51453a3487f-cc_ft_960.jpg"
    },
    {
        title: "Оренда комерційної нерухомості",
        image:
            "https://cdn.riastatic.com/photosnewr/dom/photo/realty__312934242-1850x1040x90.webp"
    },
    {
        title: "Продаж будинків",
        image:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
    },
    {
        title: "Оренда будинків",
        image:
            "https://medias.renoassistance.ca/image/upload/v1730239135/renoassistance/residential/articles/2023-12/styles-de-maison/Maison-moderne-piscine.jpg"
    }
];

const RealEstateCategories: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="overline"
                    color="error"
                    textAlign="center"
                    display="block"
                    mb={1}
                >
                    НЕРУХОМІСТЬ
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign="center"
                    mb={6}
                >
                    Оголошення{" "}
                    <Box component="span" color="error.main">
                        на ринку
                    </Box>{" "}
                    нерухомості
                </Typography>

                <Grid container spacing={4}>
                    {categories.map((category, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "300px",
                                    position: "relative",
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: 3
                                }}
                            >
                                <CardActionArea sx={{ height: "100%" }}>
                                    {/* Фонове зображення */}
                                    <Box
                                        sx={{
                                            height: "100%",
                                            backgroundImage: `url(${category.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            filter: "brightness(0.4)"
                                        }}
                                    />

                                    {/* Контент по центру */}
                                    <CardContent
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            height: "100%",
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontWeight="800"
                                            color="#fff"
                                            textAlign="center"
                                        >
                                            {category.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default RealEstateCategories;
