import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";

/* ================= BABY SHOWER CARDS DATA ================= */
const babyShowerCards = [
    { image: "/images/baby/pink.png" },
    { image: "/images/baby/bear.png" },
    { image: "/images/baby/blue.png" },
    { image: "/images/baby/garden.png" },
    { image: "/images/baby/prince.png" },
    { image: "/images/baby/boho.png" },
    { image: "/images/baby/elepant.png" },
    { image: "/images/baby/twinkle.png" },
];

/* ================= FEATURES DATA ================= */
const features = [
    { title: "Custom Themes", description: "Personalized setups as per your choice", icon: <CardGiftcardOutlinedIcon /> },
    { title: "Premium Quality", description: "High quality materials and perfect finishing", icon: <WorkspacePremiumOutlinedIcon /> },
    { title: "On-Time Delivery", description: "Timely delivery and professional setup", icon: <AccessTimeOutlinedIcon /> },
    { title: "Affordable Pricing", description: "Beautiful decorations within your budget", icon: <LocalOfferOutlinedIcon /> },
];

// Creating animated components using Framer Motion
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card animation
        }
    }
};

function BabyShower() {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#fffaf8" }}>

            {/* ================= HERO SECTION ================= */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: { xs: "700px", sm: "650px", md: "620px", lg: "650px" },
                    backgroundImage: 'url("/images/baby/babybanner.png")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: { xs: "30% center", sm: "25% center", md: "center center" },
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        ml: { xs: 0, md: "50%" },
                        minHeight: { xs: "700px", sm: "650px", md: "620px", lg: "650px" },
                        display: "flex",
                        alignItems: { xs: "flex-end", md: "center" },
                        justifyContent: "center",
                        px: { xs: 2, sm: 4, md: 4, lg: 6 },
                        py: { xs: 4, md: 3 },
                        boxSizing: "border-box",
                    }}
                >
                    {/* Hero content animation triggered on page load */}
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        sx={{
                            width: "100%",
                            maxWidth: "620px",
                            textAlign: "center",
                            bgcolor: { xs: "rgba(255, 250, 248, 0.94)", md: "transparent" },
                            borderRadius: { xs: "24px", md: 0 },
                            p: { xs: 3, sm: 4, md: 0 },
                        }}
                    >
                        <Typography sx={{ fontFamily: '"Great Vibes", cursive', color: "#ed7892", fontSize: { xs: "28px", md: "38px" }, lineHeight: 1, mb: 1 }}>
                            Celebrate The
                        </Typography>
                        <Typography sx={{ fontFamily: "Georgia, serif", color: "#2c1717", fontSize: { xs: "38px", md: "62px" }, fontWeight: 600, lineHeight: 1.05 }}>
                            Little Miracle
                        </Typography>
                        <Typography sx={{ color: "#ed7892", fontSize: { xs: "13px", md: "16px" }, fontWeight: 600, mt: 1.2 }}>
                            With Beautiful Baby Shower Decorations
                        </Typography>

                        {/* Heart Divider */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, my: { xs: 2, md: 2.5 } }}>
                            <Box sx={{ width: { xs: "70px", sm: "110px" }, height: "1px", bgcolor: "#d9ad58" }} />
                            <FavoriteIcon sx={{ color: "#ed7892", fontSize: "16px" }} />
                            <Box sx={{ width: { xs: "70px", sm: "110px" }, height: "1px", bgcolor: "#d9ad58" }} />
                        </Box>

                        <Typography sx={{ color: "#594949", fontSize: "14px", lineHeight: 1.7, maxWidth: "500px", mx: "auto", mb: 3.5 }}>
                            From adorable themes to elegant setups, we create <br /> magical moments for your little one's special celebration.
                        </Typography>

                        {/* Features Grid */}
                        <Grid container rowSpacing={2.5} columnSpacing={4} sx={{ maxWidth: "520px", mx: "auto", mb: 3 }}>
                            {features.map((item, index) => (
                                <Grid item xs={6} key={index}>
                                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, textAlign: "left" }}>
                                        <Box sx={{ color: "#ed7892" }}>{item.icon}</Box>
                                        <Box>
                                            <Typography sx={{ color: "#2c1717", fontSize: "13px", fontWeight: 700 }}>{item.title}</Typography>
                                            <Typography sx={{ color: "#594949", fontSize: "11px" }}>{item.description}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Action Buttons */}
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", gap: 2 }}>
                            <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#ef6f8c", borderRadius: "30px", textTransform: "none" }}>
                                Explore Themes
                            </Button>
                            <Button variant="outlined" endIcon={<PhotoLibraryOutlinedIcon />} sx={{ borderColor: "#ef6f8c", color: "#5c3333", borderRadius: "30px", textTransform: "none" }}>
                                View Gallery
                            </Button>
                        </Box>
                    </MotionBox>
                </Box>
            </Box>

            {/* ================= POPULAR THEMES SECTION ================= */}
            <Box sx={{ py: { xs: 6, md: 8 }, background: "linear-gradient(180deg, #fffaf8 0%, #fff7f5 100%)" }}>
                <Container maxWidth={false} sx={{ maxWidth: "1550px", mx: "auto", px: { xs: 2, sm: 4 } }}>

                    {/* Section Heading with Entrance Animation */}
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        sx={{ textAlign: "center", mb: 5 }}
                    >
                        <Typography sx={{ fontFamily: '"Great Vibes", cursive', color: "#ed7892", fontSize: { xs: "18px", md: "40px" } }}>
                            ~ Most Loved ~
                        </Typography>
                        <Typography sx={{ fontFamily: "Georgia, serif", color: "#321b1b", fontSize: { xs: "30px", md: "46px" }, fontWeight: 600 }}>
                            Popular Baby Shower Themes
                        </Typography>
                    </MotionBox>

                    {/* Cards Grid with Staggered Animation on Load */}
                    <MotionBox
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                            gap: 3,
                        }}
                    >
                        {babyShowerCards.map((item, index) => (
                            <MotionGrid variants={fadeInUp} key={index}>
                                <Card sx={{ borderRadius: "16px", overflow: "hidden", "&:hover .baby-img": { transform: "scale(1.06)" } }}>
                                    <Box sx={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                                        <CardMedia
                                            component="img"
                                            className="baby-img"
                                            image={item.image}
                                            sx={{ transition: "transform 0.5s ease" }}
                                        />
                                    </Box>
                                </Card>
                            </MotionGrid>
                        ))}
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}

export default BabyShower;