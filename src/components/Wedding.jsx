import React from 'react';
import { Box, Container, Typography, Card, CardMedia, Slide, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// Isolated Card component handling individual scroll boundaries independently
const AnimatedWeddingCard = ({ item, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger animation once to save system memory
        threshold: 0.15,   // Start transition when 15% of the card enters viewport
    });

    return (
        <Box
            ref={ref}
            sx={{
                width: {
                    xs: "100%",   // Mobile: 1 Column
                    sm: "47%",    // Tablet: 2 Columns
                    md: "30%",    // Medium screens: 3 Columns
                    lg: "23%",    // Large screens/Desktops: 4 Columns
                }
            }}
        >
            {/* Cards glide upward elegantly with a custom staggered delay */}
            <Slide direction="up" in={inView} style={{ transitionDelay: `${(index % 4) * 120}ms` }} timeout={800}>
                <Box>
                    <Card
                        sx={{
                            position: 'relative',
                            borderRadius: 3,
                            overflow: "hidden",
                            backgroundColor: 'transparent',
                            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            // Soft overlay layer initialized for micro-interaction hover tinted glow
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(109, 23, 52, 0)',
                                transition: 'background-color 0.4s ease',
                                pointerEvents: 'none'
                            },
                            "&:hover": {
                                transform: "translateY(-8px)", // Elevates physical framework
                                boxShadow: "0 15px 35px rgba(109, 23, 52, 0.25)", // Brand custom luxury drop shadow
                                '&::after': {
                                    backgroundColor: 'rgba(109, 23, 52, 0.1)' // Soft brand color mask
                                },
                                "& .wedding-img": {
                                    transform: "scale(1.06)" // Internal image zoom effect
                                }
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={item.image}
                            className="wedding-img"
                            alt={`Wedding Decoration Setup ${item.id}`}
                            sx={{
                                width: "100%",
                                height: { xs: 220, sm: 240, md: 250, lg: 260 },
                                objectFit: "cover",
                                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}
                        />
                    </Card>
                </Box>
            </Slide>
        </Box>
    );
};

const Wedding = () => {
    // Viewport observer setup for the main hero section container
    const { ref: heroRef, inView: heroInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Viewport observer setup for the grid gallery header section
    const { ref: galleryHeaderRef, inView: galleryHeaderInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const setups = [
        { id: 1, image: "/images/wedding/w1.png" },
        { id: 2, image: "/images/wedding/w2.png" },
        { id: 3, image: "/images/wedding/w3.png" },
        { id: 4, image: "/images/wedding/w4.png" },
        { id: 5, image: "/images/wedding/w5.png" },
        { id: 6, image: "/images/wedding/w6.png" },
        { id: 7, image: "/images/wedding/w7.png" },
        { id: 8, image: "/images/wedding/w8.png" },
    ];

    return (
        <>
            {/* HERO BANNER SECTION */}
            <Box
                ref={heroRef}
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "420px", md: "450px" },
                    backgroundImage: "url('/images/wedding/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: { xs: "100%", md: "50%" }, // Expanded horizontal area for crisp layout text readability
                        height: "100%",
                        background: {
                            xs: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
                            md: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 40%, rgba(255, 255, 255, 0.7) 75%, rgba(255,255,255,0) 100%)'
                        },
                        zIndex: 1,
                    },
                }}
            >
                <Container
                    disableGutters
                    maxWidth={false}
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        pl: { xs: 3, sm: 5, md: 7, lg: 10 }, // Extended layout left-side margin padding alignments
                        pr: { xs: 3, sm: 5, md: 4 }
                    }}
                >
                    {/* Main Hero Content Typography Wrapper */}
                    <Box
                        sx={{
                            maxWidth: { xs: '100%', sm: '420px', md: '500px' },
                            ml: 0,
                            mr: 'auto',
                            // Dynamic CSS adjustment to flip baseline text colors automatically for small screens
                            color: { xs: '#ffffff', md: '#333333' }
                        }}
                    >
                        {/* Top Subtitle Component */}
                        <Fade in={heroInView} timeout={600}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: '"Cinzel", "Playfair Display", serif',
                                    fontWeight: 500,
                                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                    letterSpacing: '1px',
                                    color: { xs: '#f0f0f0', md: '#555555' }
                                }}
                            >
                                Plan Your
                            </Typography>
                        </Fade>

                        {/* Accent Highlighted Core Title */}
                        <Slide direction="right" in={heroInView} timeout={700}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontFamily: '"Cinzel", "Playfair Display", serif',
                                    fontWeight: 700,
                                    color: '#b3862b', // Luxury signature gold balance color code
                                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                    lineHeight: 1.1,
                                    mb: 2,
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Dream Wedding
                            </Typography>
                        </Slide>

                        {/* Main Descriptive Block Line */}
                        <Fade in={heroInView} style={{ transitionDelay: '300ms' }} timeout={800}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: '"Montserrat", sans-serif',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.95rem', md: '1.15rem' },
                                    lineHeight: 1.5,
                                    maxWidth: '380px',
                                    color: { xs: '#e0e0e0', md: '#4f4f4f' }
                                }}
                            >
                                We Create Memories That Last Forever
                            </Typography>
                        </Fade>
                    </Box>
                </Container>
            </Box>

            {/* GALLERY GRID SECTION */}
            <Box sx={{ py: 10, bgcolor: "#fff" }}>
                <Container maxWidth="xl">
                    {/* Main Title Section Module */}
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
                                ✦ Our Recent Wedding Setups ✦
                            </Typography>
                        </Fade>
                    </Box>

                    {/* Flexible Column Matrix Grid Block Layout */}
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: 4, // Uniform clean margins mapping out standard desktop displays
                        }}
                    >
                        {setups.map((item, index) => (
                            <AnimatedWeddingCard key={item.id} item={item} index={index} />
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Wedding;