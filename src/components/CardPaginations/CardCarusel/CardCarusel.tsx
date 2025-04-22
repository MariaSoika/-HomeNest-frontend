import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../../Card/Card.tsx";
import { Property } from "../../MockData/Apartments.ts";
import "../CardCarusel/CardCarusel.css"

interface CardCaruselProps {
    data: Property[];         // масив карток
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1536 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1536, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
    },
};

const CardCarusel: React.FC<CardCaruselProps> = ({ data }) => {
    return (
        <Carousel
            responsive={responsive}
            infinite
            autoPlay={false}
            itemClass="carousel-item-padding"
            containerClass="carousel-container"
        >
            {data.map((item) => (
                <Card key={item.id} data={item} />
            ))}
        </Carousel>
    );
};

export default CardCarusel;