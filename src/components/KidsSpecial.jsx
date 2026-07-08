import React from "react";
import { Box, Typography, Grid, Card, CardMedia, Button } from "@mui/material";

// ================= ICONS =================
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
const kidsCards = [
    { title: "Princess Dream", category: "Birthday", image: "/images/kids/princess.png" },
    { title: "Space Adventure", category: "Birthday", image: "/images/kids/space.png" },
    { title: "Jungle Safari", category: "1st Birthday", image: "/images/kids/jungle.png" },
    { title: "Rainbow Fantasy", category: "Birthday", image: "/images/kids/rainbow.png" },
    { title: "Mickey Magic", category: "1st Birthday", image: "/images/kids/mickey.png" },
    { title: "Mermaid Underwater", category: "Birthday", image: "/images/kids/mermaid.png" },
    { title: "Floral Butterfly", category: "Birthday", image: "/images/kids/butterfly.png" },
    { title: "Hello Kitty", category: "1st Birthday", image: "/images/kids/kitty.png" },
];

// ========================================
// MAIN COMPONENT
// ========================================
function KidsSpecial() {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#fffaf2" }}>

            {/* =====================================
                HERO BANNER
            ===================================== */}
            <Box
                sx={{
                    minHeight: { xs: "250px", sm: "550px", md: "465px" },
                    backgroundImage: `url("/images/kids/kidsbanner.png")`,
                    backgroundSize: {xs:"100% 100% ",md:"cover"},
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
                {/* HERO CONTENT */}
                <Box sx={{ width: "100%", maxWidth: "850px", color: "#fff", mt: { xs: 0, md: -2 } }}>
                    {/* Crown */}
                    <Typography sx={{ color: "#f5bd36", fontSize: { xs: "30px", md: "48px" }, mb: 0.5 }}>
                        ♛
                    </Typography>

                    {/* Main Heading */}
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

                    {/* Script Subtitle */}
                    <Typography
                        sx={{
                            mt: 1.5,
                            fontFamily: '"Great Vibes", "Alex Brush", Georgia, cursive',
                            fontStyle: "italic",
                            fontWeight:"bolder",
                            fontSize: { xs: "24px", sm: "31px", md: "40px" },
                            color: "#efb332",
                            textShadow: "0 2px 5px rgb(26, 26, 26)",
                        }}
                    >
                        Magical Decor for Little Moments
                    </Typography>

                    {/* Description */}
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

            {/* =====================================
                CATEGORY BAR (FIXED VIA FLEXBOX)
            ===================================== */}
            <Box
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
                    py: { xs: 3, md: 2},
                }}
            >
               
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "row", md: "row" },
                        flexWrap: "wrap", /* மொபைலில் கீழே உடைய உதவும் */
                        justifyContent: "space-evenly", /* இடது-வலது சம இடைவெளி */
                        alignItems: "center",
                        textAlign:"center",
                        gap: { xs: 2, md: 0 }
                    }}
                >
                    {kidsCategories.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                /* டெஸ்க்டாப்பில் 7 ஐகான்களுக்கும் சமமான அகலத்தை (100 / 7) வழங்குகிறது */
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
                                "&:hover .category-icon": {
                                    bgcolor: "#65001b",
                                    color: "#fff",
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            {/* CATEGORY ICON */}
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

                            {/* CATEGORY TITLE */}
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

            {/* =====================================
                POPULAR KIDS SETUPS
            ===================================== */}
            <Box
                sx={{
                    pt: { xs: 5, md: 3 },
                    pb: 5,
                    px: { xs: 2, sm: 3, md: 4 },
                    background: "linear-gradient(135deg, #fffdf8, #fff8eb)",
                }}
            >
                {/* HEADING */}
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Typography
                        sx={{
                            fontFamily: "Georgia, serif",
                            color: "#65001b",
                            fontSize: { xs: "28px", sm: "35px", md: "50px" },
                            fontWeight: 600,
                        }}
                    >
                        ✦ Our Popular Kids Setups ✦
                    </Typography>
                    <Box sx={{ width: "75px", height: "2px", bgcolor: "#d4a23e", mx: "auto", mt: 1 }} />
                </Box>

                {/* CARDS */}
                <Grid container justifyContent="center" spacing={{ xs: 2, sm: 2, md: 3 }}>
                    {kidsCards.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                            <Card
                                sx={{
                                    width: "100%",
                                    ml:5,
                                    maxWidth: "360px",
                                    bgcolor: "transparent",
                                    boxShadow: "none",
                                    borderRadius: 0,
                                    overflow: "visible",
                                    cursor: "pointer",
                                    "&:hover .kids-image": { transform: "scale(1.08)" },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        
                                        height: { xs: "300px", sm: "280px", md: "300px", lg: "280px" },
                                        borderRadius: "14px",
                                        overflow: "hidden",
                                        boxShadow: "0 5px 14px rgba(50,0,10,0.15)",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        className="kids-image"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.55s ease",
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        mt: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: 1,
                                        px: 0.5,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#4c1520",
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            flexShrink: 0,
                                            bgcolor: "#ffe1a9",
                                            border: "1px solid #e0ad52",
                                            borderRadius: "5px",
                                            px: 1,
                                            py: 0.25,
                                        }}
                                    >
                                        <Typography sx={{ color: "#6b351c", fontSize: "10px", fontWeight: 500 }}>
                                            {item.category}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
export default KidsSpecial;