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
                    Home<span style={{ color: "black" }}>Nest</span>  <span style={{fontWeight: "100", fontFamily: "initial"}}> Real Estate</span>
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
                <Button variant="outlined" sx={{ borderColor: "red", color: "red" }}>
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

// import { styled } from "@mui/material/styles";
//
// styled(Box)(({ theme, ownerState }) => {
//     const { palette, functions, borders, boxShadows } = theme;
//     const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;
//
//     const { gradients, grey, white } = palette;
//     const { linearGradient } = functions;
//     const { borderRadius: radius } = borders;
//     const { colored } = boxShadows;
//
//     const greyColors = {
//         "grey-100": grey[100],
//         "grey-200": grey[200],
//         "grey-300": grey[300],
//         "grey-400": grey[400],
//         "grey-500": grey[500],
//         "grey-600": grey[600],
//         "grey-700": grey[700],
//         "grey-800": grey[800],
//         "grey-900": grey[900],
//     };
//
//     const validGradients = [
//         "primary",
//         "secondary",
//         "info",
//         "success",
//         "warning",
//         "error",
//         "dark",
//         "light",
//     ];
//
//     const validColors = [
//         "transparent",
//         "white",
//         "black",
//         "primary",
//         "secondary",
//         "info",
//         "success",
//         "warning",
//         "error",
//         "light",
//         "dark",
//         "text",
//         "grey-100",
//         "grey-200",
//         "grey-300",
//         "grey-400",
//         "grey-500",
//         "grey-600",
//         "grey-700",
//         "grey-800",
//         "grey-900",
//     ];
//
//     const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
//     const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];
//
//
//     // background value
//     let backgroundValue = bgColor;
//
//     if (variant === "gradient") {
//         backgroundValue = validGradients.find((el) => el === bgColor)
//             ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
//             : white.main;
//     } else if (validColors.find((el) => el === bgColor)) {
//         backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
//     } else {
//         backgroundValue = bgColor;
//     }
//
//     // color value
//     let colorValue = color;
//
//     if (validColors.find((el) => el === color)) {
//         colorValue = palette[color] ? palette[color].main : greyColors[color];
//     }
//
//     // borderRadius value
//     let borderRadiusValue = borderRadius;
//
//     if (validBorderRadius.find((el) => el === borderRadius)) {
//         borderRadiusValue = radius[borderRadius];
//     }
//
//     // boxShadow value
//     let boxShadowValue = "none";
//
//     if (validBoxShadows.find((el) => el === shadow)) {
//         boxShadowValue = boxShadows[shadow];
//     } else if (coloredShadow) {
//         boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
//     }
//
//     return {
//         opacity,
//         background: backgroundValue,
//         color: colorValue,
//         borderRadius: borderRadiusValue,
//         boxShadow: boxShadowValue,
//     };
// });
//