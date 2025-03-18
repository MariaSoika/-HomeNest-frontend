import {FC} from "react";
import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import OAuthSignInPage from "../SignIn/SignIn";
import "./Welcome.css";
import Navbar from "../../Menu/Menu.tsx";
import Footer from "../../Footer/Footer.tsx";
import RealEstateCategories from "../../RealEstateCategories/RealEstateCategories.tsx";
import PropertyList from "../../PropertyList/PropertyList.tsx";

const HomePage: FC = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signin");
    };

    return (
        <><Box className="wrapper">
            <Navbar/>
            <Container className="heroContent">
                <Box className={"box"}>
                    <Box>
                        <Typography variant="h2" fontWeight="bold" sx={{color: "red"}}>
                            Home<span style={{color: "black"}}>Nest</span>
                        </Typography>
                        <Typography variant="h6" sx={{mt: 2, mb: 4, maxWidth: "500px", color: "black"}}>
                            Тут ви знайдете домашнє гніздечко вашої мрії
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{backgroundColor: "red", color: "white", "&:hover": {backgroundColor: "darkred"}}}
                            onClick={handleGetStarted}>
                            Розпочати пошуки
                        </Button>
                        <Button sx={{color: "black", margin: "5px"}}>
                            Дізнатись більше
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
            <RealEstateCategories/>
            <PropertyList/>
            <Footer/>
        </>
    );
};

const Welcome: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signin" element={<OAuthSignInPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Welcome;
