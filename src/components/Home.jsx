import React from 'react';
// Grid மற்றும் Container இம்போர்ட்டுகள் இங்கே சேர்க்கப்பட்டுள்ளன
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CollectionsIcon from '@mui/icons-material/Collections';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; // Creative Designs
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; // Quality Service
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; // On-Time Delivery
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; // Affordable Pricing

import Anniversary from './Anniversary'; 
export default function Home() {
    const features = [
        {
            id: 1,
            title: 'Creative Designs',
            desc: 'Unique & creative ideas tailored to your needs.',
            icon: <LightbulbOutlinedIcon sx={{ fontSize: '1.8rem', color: '#500613' }} />,
        },
        {
            id: 2,
            title: 'Quality Service',
            desc: 'We use the best quality materials & decor.',
            icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: '1.8rem', color: '#500613' }} />,
        },
        {
            id: 3,
            title: 'On-Time Delivery',
            desc: 'Timely setup & hassle-free event experience.',
            icon: <AccessTimeOutlinedIcon sx={{ fontSize: '1.8rem', color: '#500613' }} />,
        },
        {
            id: 4,
            title: 'Affordable Pricing',
            desc: 'Beautiful decorations within your budget.',
            icon: <LocalOfferOutlinedIcon sx={{ fontSize: '1.8rem', color: '#500613' }} />,
        },
    ];

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    minHeight: { xs: '60vh', md: '50vh', lg: '60vh' },
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 98%, #ffffff 0%), url('/images/home/bg.png')`,

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: { xs: '40px 20px', md: '60px 30px' },
                    boxSizing: 'border-box',
                }}
            >
                {/* Content Wrapper */}
                <Box sx={{ maxWidth: '850px', width: '100%' }}>

                    {/* Main Title: Celebrate Every Moment */}
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: '"Playfair Display", "Georgia", serif',
                            color: '#ffffff',
                            fontWeight: 600,
                            fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4.2rem' },
                            letterSpacing: '1px',
                            lineHeight: 1.2,
                            mb: 1,
                        }}
                    >
                        Celebrate Every Moment
                    </Typography>

                    {/* Sub Title: With Beautiful Decorations */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: '"Great Vibes", "Alex Brush", "Georgia", cursive, serif',
                            fontStyle: 'italic',
                            color: '#e5c1a7',
                            fontSize: { xs: '1.6rem', sm: '2.4rem', md: '3.2rem' },
                            fontWeight: 'normal',
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            '&::before, &::after': {
                                content: '""',
                                display: { xs: 'none', sm: 'block' },
                                width: '40px',
                                height: '1px',
                                backgroundColor: 'rgba(229, 193, 167, 0.5)',
                            }
                        }}
                    >
                        With Beautiful Decorations
                    </Typography>

                    {/* Description Paragraph */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#f7f5f0',
                            fontFamily: '"Montserrat", "Segoe UI", sans-serif',
                            fontSize: { xs: '0.9rem', sm: '1.05rem', md: '1.15rem' },
                            lineHeight: 1.6,
                            maxWidth: '650px',
                            margin: '0 auto 40px auto',
                            letterSpacing: '0.5px',
                            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                        }}
                    >
                        From weddings to birthdays and every special event,<br />
                        we create unforgettable experiences with our creative decor.
                    </Typography>

                    {/* Buttons Action Container */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px',
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: '#500613',
                                color: '#ffffff',
                                padding: '12px 35px',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                letterSpacing: '0.5px',
                                fontFamily: '"Montserrat", sans-serif',
                                width: { xs: '100%', sm: 'auto' },
                                height: '50px',
                                border: '1px solid transparent',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#3b040e',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                                },
                            }}
                        >
                            Explore Services
                        </Button>

                        <Button
                            variant="outlined"
                            endIcon={<CollectionsIcon />}
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                color: '#ffffff',
                                border: '2px solid #ffffff',
                                padding: '12px 35px',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                letterSpacing: '0.5px',
                                fontFamily: '"Montserrat", sans-serif',
                                width: { xs: '100%', sm: 'auto' },
                                height: '50px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                    color: '#500613',
                                    border: '2px solid #ffffff',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            View Gallery
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Features Bar Section */}
     <Container 
    maxWidth={false} 
    sx={{ 
        my: 4, 
        px: { xs: 2, md: 5 },
        maxWidth: { md: '1350px', lg: '1400px' }, 
        display: 'flex',
        justifyContent: 'center', 
        mx: 'auto' 
    }}
>
    <Box
        sx={{
            // Matches the exact signature deep burgundy from your logo header banner
            backgroundColor: '#500613', 
            borderRadius: '0px', // Flat, integrated section border style just like the image workflow
            padding: { xs: '20px 15px', md: '25px 40px' }, 
            // Premium muted gold horizontal borders to frame the dark section luxuriously
            borderTop: '1px solid rgba(197, 160, 89, 0.3)',
            borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
            overflowX: { xs: 'auto', md: 'visible' },
            width: '100%',
            display: 'flex',
            alignItems: 'center', 
            borderRadius: '50px', // Slightly rounded corners for a modern touch
        }}
    >
        <Grid 
            container 
            spacing={3} 
            alignItems="center" 
            wrap="nowrap"
            sx={{ minWidth: { xs: '750px', md: 'auto' } }} 
        >
            {features.map((item, index) => (
                <Grid
                    item
                    xs={3}
                    key={item.id}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px', 
                        justifyContent: 'flex-start',
                        // Elegant semi-transparent gold dividers between feature sets
                        borderRight: index !== features.length - 1 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
                        px: 3
                    }}
                >
                    <Box
                        sx={{
                            width: '44px', 
                            height: '44px',
                            borderRadius: '50%',
                            // Clear bright gold border ring around the icon
                            border: '1px solid #c5a059', 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // Slightly lighter translucent red-wine background inside the ring for contrast
                            backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                            flexShrink: 0
                        }}
                    >
                        {/* Shimmering Gold color applied directly to the line icons */}
                        {React.cloneElement(item.icon, { sx: { fontSize: '1.4rem', color: '#c5a059' } })}
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontFamily: '"Montserrat", "Segoe UI", sans-serif',
                                fontWeight: 600, 
                                // Pure crisp white for primary headers over the dark red canvas
                                color: '#ffffff', 
                                fontSize: { xs: '0.82rem', md: '0.92rem' }, 
                                lineHeight: 1.2,
                                mb: 0.2,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                fontFamily: '"Montserrat", "Segoe UI", sans-serif',
                                // Soft, luxurious champagne cream tone for secondary readable descriptions
                                color: '#f3e6d5', 
                                fontSize: { xs: '0.72rem', md: '0.76rem' },
                                lineHeight: 1.3,
                                display: 'block'
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
</Container>
<Anniversary />
        </>
    );
}