import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    Container
} from "@mui/material";
import Fade from "@mui/material/Fade";

// ================= ICONS =================
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";

// ========================================
// KIDS CATEGORY DATA
// ========================================
const kidsCategories = [
    { title: "BIRTHDAY", secondLine: "PARTY", icon: <CakeOutlinedIcon /> },
    { title: "BABY", secondLine: "SHOWER", icon: <ChildFriendlyOutlinedIcon /> },
    { title: "1ST BIRTHDAY", secondLine: "(SMASH CAKE)", icon: <SmartToyOutlinedIcon /> },
    { title: "THEME", secondLine: "PARTY", icon: <CelebrationOutlinedIcon /> },
    { title: "RETURN GIFT", secondLine: "TABLE", icon: <CardGiftcardOutlinedIcon /> },
    { title: "SCHOOL", secondLine: "EVENTS", icon: <CastleOutlinedIcon /> },
];

// ========================================
// KIDS CARDS DATA
// ========================================
const setups = [
    { id: 1, image: "/images/kids/butterfly.png" },
    { id: 2, image: "/images/kids/space.png" },
    { id: 3, image: "/images/kids/rainbow.png" },
    { id: 4, image: "/images/kids/jungle.png" },
    { id: 5, image: "/images/kids/mermaid.png" },
    { id: 6, image: "/images/kids/mickey.png" },
    { id: 7, image: "/images/kids/butterfly.png" },
    { id: 8, image: "/images/kids/space.png" },
];

// ========================================
// ANIMATED CARD COMPONENT
// ========================================
function AnimatedBirthdayCard({ item, index }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    return (
        <Card
            ref={cardRef}
            sx={{
                width: { xs: "100%", sm: "45%", md: "22%" },
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                transitionDelay: `${index * 0.05}s`,
                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                }
            }}
        >
            <CardMedia
                component="img"
                image={item.image}
                alt={`Setup ${item.id}`}
                sx={{
                    height: "280px",
                    objectFit: "cover",
                }}
            />
        </Card>
    );
}

// ========================================
// MAIN COMPONENT
// ========================================
function KidsSpecial() {
    const [heroVisible, setHeroVisible] = useState(false);
    const [categoriesVisible, setCategoriesVisible] = useState(false);
    const [galleryHeaderInView, setGalleryHeaderInView] = useState(false);

    const heroRef = useRef(null);
    const categoriesRef = useRef(null);
    const galleryHeaderRef = useRef(null);

    useEffect(() => {
        const createObserver = (setVisibleState) => {
            return new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleState(true);
                    }
                },
                {
                    threshold: 0.15,
                    rootMargin: "0px 0px -50px 0px"
                }
            );
        };

        const heroObserver = createObserver(setHeroVisible);
        const categoriesObserver = createObserver(setCategoriesVisible);
        const galleryHeaderObserver = createObserver(setGalleryHeaderInView);

        if (heroRef.current) heroObserver.observe(heroRef.current);
        if (categoriesRef.current) categoriesObserver.observe(categoriesRef.current);
        if (galleryHeaderRef.current) galleryHeaderObserver.observe(galleryHeaderRef.current);

        return () => {
            if (heroRef.current) heroObserver.unobserve(heroRef.current);
            if (categoriesRef.current) categoriesObserver.unobserve(categoriesRef.current);
            if (galleryHeaderRef.current) galleryHeaderObserver.unobserve(galleryHeaderRef.current);
        };
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                overflowX: "hidden",
                bgcolor: "#fffaf2",
                "@keyframes smoothFadeInUp": {
                    from: { opacity: 0, transform: "translateY(50px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                },
                "@keyframes smoothFadeInDown": {
                    from: { opacity: 0, transform: "translateY(-30px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                }
            }}
        >
            {/* HERO BANNER */}
            <Box
                ref={heroRef}
                sx={{
                    minHeight: { xs: "250px", sm: "550px", md: "465px" },
                    backgroundImage: `url("/images/kids/kidsbanner.png")`,
                    backgroundSize: { xs: "100% 100%", md: "cover" },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "850px",
                        color: "#fff",
                        mt: { xs: 0, md: -2 },
                        opacity: heroVisible ? 1 : 0,
                        animation: heroVisible ? "smoothFadeInUp 0.9s cubic-bezier(0.215, 0.610, 0.355, 1) forwards" : "none"
                    }}
                >
                    <Typography sx={{ color: "#f5bd36", fontSize: { xs: "30px", md: "48px" }, mb: 0.5 }}>
                        ♛
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Georgia, serif",
                            fontSize: { xs: "48px", sm: "65px", md: "90px" },
                            fontWeight: 500,
                            lineHeight: 1,
                            color: "#fff",
                            textShadow: "0 4px 12px rgba(0,0,0,0.45)",
                        }}
                    >
                        ✦ Kids Special ✦
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1.5,
                            fontFamily: '"Great Vibes", "Alex Brush", Georgia, cursive',
                            fontStyle: "italic",
                            fontWeight: "bolder",
                            fontSize: { xs: "24px", sm: "31px", md: "40px" },
                            color: "#efb332",
                            textShadow: "0 2px 5px rgb(26, 26, 26)",
                        }}
                    >
                        Magical Decor for Little Moments
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            mx: "auto",
                            maxWidth: "650px",
                            fontSize: { xs: "14px", sm: "17px", md: "18px" },
                            lineHeight: 1.6,
                            color: "#fff",
                        }}
                    >
                        From playful themes to colourful celebrations,
                        <br />
                        we create unforgettable memories for your little ones.
                    </Typography>
                </Box>
            </Box>

            {/* CATEGORY BAR */}
            <Box
                ref={categoriesRef}
                sx={{
                    width: { xs: "80%", md: "80%" },
                    mx: "auto",
                    mt: { xs: 3, md: "-68px" },
                    position: "relative",
                    zIndex: 5,
                    bgcolor: "#fffaf4",
                    border: "1px solid #d8a23d",
                    borderRadius: "24px",
                    boxShadow: "0 10px 30px rgba(70, 20, 0, 0.12)",
                    px: { xs: 2, md: 1 },
                    py: { xs: 3, md: 2 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        textAlign: "center",
                        gap: { xs: 2, md: 0 }
                    }}
                >
                    {kidsCategories.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: "calc(50% - 16px)", sm: "calc(33.33% - 16px)", md: "14%" },
                                minHeight: "115px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                px: 0.5,
                                borderRight: {
                                    xs: "none",
                                    md: index !== kidsCategories.length - 1 ? "1px solid #eadcc8" : "none",
                                },
                                cursor: "pointer",
                                opacity: categoriesVisible ? 1 : 0,
                                animation: categoriesVisible ? `smoothFadeInDown 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards` : "none",
                                animationDelay: categoriesVisible ? `${index * 0.08}s` : "none",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-2px)"
                                },
                                "&:hover .category-icon": {
                                    bgcolor: "#65001b",
                                    color: "#fff",
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Box
                                className="category-icon"
                                sx={{
                                    width: "58px",
                                    height: "58px",
                                    borderRadius: "50%",
                                    border: "1px solid #d59c32",
                                    color: "#65001b",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 1,
                                    transition: "all 0.35s ease",
                                    "& svg": { fontSize: "28px" },
                                }}
                            >
                                {item.icon}
                            </Box>

                            <Typography
                                sx={{
                                    color: "#65001b",
                                    fontWeight: 700,
                                    fontSize: { xs: "11px", md: "12px" },
                                    lineHeight: 1.4,
                                }}
                            >
                                {item.title}
                                <br />
                                {item.secondLine}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* POPULAR KIDS SETUPS */}
            <Box sx={{ py: 10, bgcolor: "#fff" }}>
                <Container maxWidth="xl">
                    <Box ref={galleryHeaderRef}>
                        <Fade in={galleryHeaderInView} timeout={800}>
                            <Typography
                                variant="h3"
                                align="center"
                                sx={{
                                    color: "#6d1734",
                                    fontWeight: 700,
                                    mb: 6,
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                ✦ Our Recent Kids Setups ✦
                            </Typography>
                        </Fade>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 4,
                        }}
                    >
                        {setups.map((item, index) => (
                            <AnimatedBirthdayCard key={item.id} item={item} index={index} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default KidsSpecial;