import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
} from "@mui/material";

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

function BabyShower() {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#fffaf8" }}>

            {/* ==================================================
                    HERO SECTION
   One Full Banner Image + Right Side Content
================================================== */}

            <Box
                sx={{
                    width: "100%",
                    minHeight: {
                        xs: "700px",
                        sm: "650px",
                        md: "620px",
                        lg: "650px",
                    },

                    /* FULL BANNER IMAGE */
                    backgroundImage: 'url("/images/baby/babybanner.png")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",

                    backgroundPosition: {
                        xs: "30% center",
                        sm: "25% center",
                        md: "center center",
                    },

                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* ==================================================
                  RIGHT SIDE CONTENT
  ================================================== */}

                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "50%",
                        },

                        ml: {
                            xs: 0,
                            md: "50%",
                        },

                        minHeight: {
                            xs: "700px",
                            sm: "650px",
                            md: "620px",
                            lg: "650px",
                        },

                        display: "flex",
                        alignItems: {
                            xs: "flex-end",
                            md: "center",
                        },
                        justifyContent: "center",

                        px: {
                            xs: 2,
                            sm: 4,
                            md: 4,
                            lg: 6,
                        },

                        py: {
                            xs: 4,
                            md: 3,
                        },

                        boxSizing: "border-box",
                    }}
                >
                    {/* CONTENT WRAPPER */}

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "620px",

                            textAlign: "center",

                            /* Mobile readability */
                            bgcolor: {
                                xs: "rgba(255, 250, 248, 0.94)",
                                md: "transparent",
                            },

                            borderRadius: {
                                xs: "24px",
                                md: 0,
                            },

                            p: {
                                xs: 3,
                                sm: 4,
                                md: 0,
                            },
                        }}
                    >
                        {/* SMALL TITLE */}

                        <Typography
                            sx={{
                                fontFamily:
                                    '"Great Vibes", "Brush Script MT", cursive',

                                color: "#ed7892",

                                fontSize: {
                                    xs: "28px",
                                    sm: "34px",
                                    md: "38px",
                                },

                                lineHeight: 1,
                                mb: 1,
                            }}
                        >
                            Celebrate The
                        </Typography>

                        {/* MAIN TITLE */}

                        <Typography
                            sx={{
                                fontFamily: "Georgia, serif",

                                color: "#2c1717",

                                fontSize: {
                                    xs: "38px",
                                    sm: "50px",
                                    md: "56px",
                                    lg: "62px",
                                },

                                fontWeight: 600,
                                lineHeight: 1.05,
                            }}
                        >
                            Little Miracle
                        </Typography>

                        {/* SUB TITLE */}

                        <Typography
                            sx={{
                                color: "#ed7892",

                                fontSize: {
                                    xs: "13px",
                                    sm: "15px",
                                    md: "16px",
                                },

                                fontWeight: 600,
                                mt: 1.2,
                            }}
                        >
                            With Beautiful Baby Shower Decorations
                        </Typography>

                        {/* HEART DIVIDER */}

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                gap: 1.5,

                                my: {
                                    xs: 2,
                                    md: 2.5,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        xs: "70px",
                                        sm: "110px",
                                    },
                                    height: "1px",
                                    bgcolor: "#d9ad58",
                                }}
                            />

                            <FavoriteIcon
                                sx={{
                                    color: "#ed7892",
                                    fontSize: "16px",
                                }}
                            />

                            <Box
                                sx={{
                                    width: {
                                        xs: "70px",
                                        sm: "110px",
                                    },
                                    height: "1px",
                                    bgcolor: "#d9ad58",
                                }}
                            />
                        </Box>

                        {/* DESCRIPTION */}

                        <Typography
                            sx={{
                                color: "#594949",

                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "14px",
                                },

                                lineHeight: 1.7,

                                maxWidth: "500px",
                                mx: "auto",

                                mb: {
                                    xs: 3,
                                    md: 3.5,
                                },
                            }}
                        >
                            From adorable themes to elegant setups, we create
                            <br />
                            magical moments for your little one&apos;s special
                            celebration.
                        </Typography>

                        {/* ================= FEATURES GRID ================= */}

                        <Grid
                            container
                            rowSpacing={2.5}
                            columnSpacing={4}
                            sx={{
                                maxWidth: "520px",
                                mx: "auto",
                                mb: 3,
                            }}
                        >
                            {features.map((item, index) => (
                                <Grid
                                    item
                                    xs={6}
                                    key={index}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 1.2,
                                            textAlign: "left",
                                            minHeight: "58px",
                                        }}
                                    >
                                        {/* ICON */}
                                        <Box
                                            sx={{
                                                width: "30px",
                                                minWidth: "30px",
                                                height: "30px",

                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",

                                                color: "#ed7892",

                                                mt: 0.2,

                                                "& svg": {
                                                    fontSize: "23px",
                                                },
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        {/* CONTENT */}
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                sx={{
                                                    color: "#2c1717",
                                                    fontSize: {
                                                        xs: "11px",
                                                        sm: "12px",
                                                        md: "13px",
                                                    },
                                                    fontWeight: 700,
                                                    lineHeight: 1.2,
                                                    mb: 0.4,
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#594949",
                                                    fontSize: {
                                                        xs: "9px",
                                                        sm: "10px",
                                                        md: "11px",
                                                    },
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        <Box
                            sx={{
                                display: "flex",

                                flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                },
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                mt: {
                                    xs: 3,
                                    md: 4,
                                },
                            }}
                        >
                            {/* EXPLORE BUTTON */}
                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    bgcolor: "#ef6f8c",
                                    color: "#fff",

                                    minWidth: {
                                        xs: "100%",
                                        sm: "250px",
                                    },
                                    px: 3,
                                    py: 1.3,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    boxShadow: "none",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#d95776",
                                        transform: "translateY(-3px)",
                                        boxShadow:
                                            "0 8px 20px rgba(239,111,140,0.30)",
                                    },
                                }}
                            >
                                Explore Baby Shower Themes
                            </Button>
                            {/* GALLERY BUTTON */}
                            <Button
                                variant="outlined"
                                endIcon={<PhotoLibraryOutlinedIcon />}
                                sx={{
                                    borderColor: "#ef6f8c",
                                    color: "#5c3333",
                                    minWidth: {
                                        xs: "100%",
                                        sm: "180px",
                                    },
                                    px: 3,
                                    py: 1.3,
                                    borderRadius: "30px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        borderColor: "#d95776",
                                        bgcolor: "#fff1f4",
                                        transform: "translateY(-3px)",
                                    },
                                }}
                            >
                                View Gallery
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ py: { xs: 6, md: 8 }, background: "linear-gradient(180deg, #fffaf8 0%, #fff7f5 100%)" }}>
                <Container maxWidth={false} sx={{ maxWidth: "1550px", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
                    {/* SECTION HEADING */}
                    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
                        <Typography
                            sx={{
                                fontFamily: '"Great Vibes", "Brush Script MT", cursive',
                                color: "#ed7892",
                                fontSize: { xs: "18px", md: "40px" },
                                mb: 0.5,
                            }}
                        >
                            ~ Most Loved ~
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Georgia, serif",
                                color: "#321b1b",
                                fontSize: { xs: "30px", sm: "38px", md: "46px" },
                                fontWeight: 600,
                            }}
                        >
                            Popular Baby Shower Themes
                        </Typography>

                        {/* DECORATION LINE */}
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mt: 1.5 }}>
                            <Box sx={{ width: "60px", height: "1px", bgcolor: "#d9ad58" }} />
                            <FavoriteIcon sx={{ fontSize: "14px", color: "#ed7892" }} />
                            <Box sx={{ width: "60px", height: "1px", bgcolor: "#d9ad58" }} />
                        </Box>
                    </Box>

                    {/* CARDS GRID */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)",
                            },
                            gap: { xs: 2.5, md: 3 },
                            justifyContent: "center",
                        }}
                    >
                        {babyShowerCards.map((item, index) => (
                            <Card
                                key={index}
                                sx={{
                                    width: "100%",
                                    bgcolor: "#fff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid #f2e4e6",
                                    boxShadow: "0 4px 15px rgba(91, 45, 45, 0.04)",
                                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                                    "&:hover": {
                                        transform: "translateY(-7px)",
                                        boxShadow: "0 15px 35px rgba(126, 47, 69, 0.12)",
                                        "& .baby-img": { transform: "scale(1.06)" },
                                    },
                                }}
                            >
                                <Box sx={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
                                    <CardMedia
                                        component="img"
                                        className="baby-img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.5s ease",
                                        }}
                                    />
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
export default BabyShower;