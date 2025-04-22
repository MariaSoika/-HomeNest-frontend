import React from "react";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
            <Toolbar>
                {/* Логотип */}
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "red" }}>
                    Home<span style={{ color: "black" }}>Nest</span>
                </Typography>

                {/* Меню для великих екранів */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                    <Button color="inherit">Купити</Button>
                    <Button color="inherit">Орендувати</Button>
                    <Button color="inherit">Послуги</Button>
                    <Button color="inherit">Продати/Здати</Button>
                    <Button color="inherit">Про нас</Button>
                </Box>

                {/* Контактний номер */}
                <Typography variant="body1" sx={{ mx: 2, display: { xs: "none", md: "block" } }}>
                    044 233 78 78
                </Typography>

                {/* Кнопка розміщення оголошення */}
                <Button variant="outlined" sx={{ borderColor: "red", color: "red" , "&:hover":{backgroundColor: "red", color: "white"} }}>
                    Розмістити оголошення
                </Button>

                {/* Меню для мобільних пристроїв */}
                <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={handleMenuOpen}>
                    <MenuIcon />
                </IconButton>

                <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Buy</MenuItem>
                    <MenuItem onClick={handleMenuClose}>To Rent</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Sell/Rent</MenuItem>
                    <MenuItem onClick={handleMenuClose}>About us</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Place ad</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
