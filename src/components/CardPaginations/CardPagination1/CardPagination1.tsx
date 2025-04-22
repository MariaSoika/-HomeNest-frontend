import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import Card from "../../Card/Card.tsx"; // імпортуємо Card компонент
import { Property } from "../../MockData/Apartments.ts";

interface CardPaginationProps {
    data: Property[];         // масив карток
    cardsPerPage?: number;    // скільки карток на сторінку (за замовчуванням 6)
}

const CardPagination1: React.FC<CardPaginationProps> = ({
                                                            data,
                                                            cardsPerPage = 6,
                                                        }) => {
    const [page, setPage] = useState(1);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = data.slice(startIndex, endIndex);
    const pageCount = Math.ceil(data.length / cardsPerPage);

    return (
        <Box>
            <Box
                className="card-grid"
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 1,
                    mb: 2,
                }}
            >
                {currentCards.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </Box>

            <Box display="flex" justifyContent="center">
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default CardPagination1;
