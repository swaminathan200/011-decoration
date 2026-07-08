import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CollectionsIcon from '@mui/icons-material/Collections';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'; // Creative Designs
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; // Quality Service
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; // On-Time Delivery
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; // Affordable Pricing

import Anniversary from './Anniversary';
import Wedding from './Wedding';
import Birthday from './Birthday';
import KidsSpecial from './KidsSpecial';
import BabyShower from './BabyShower';
import Festivals from './Festivals';

// Custom Keyframe Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const iconPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 8px rgba(197, 160, 89, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
`;

export default function Home() {
    const features = [
        {
            id: 1,
            title: 'Creative Designs',
            desc: 'Unique & creative ideas tailored to your needs.',
            icon: <LightbulbOutlinedIcon />,
        },
        {
            id: 2,
            title: 'Quality Service',
            desc: 'We use the best quality materials & decor.',
            icon: <WorkspacePremiumOutlinedIcon />,
        },
        {
            id: 3,
            title: 'On-Time Delivery',
            desc: 'Timely setup & hassle-free event experience.',
            icon: <AccessTimeOutlinedIcon />,
        },
        {
            id: 4,
            title: 'Affordable Pricing',
            desc: 'Beautiful decorations within your budget.',
            icon: <LocalOfferOutlinedIcon />,
        },
    ];

    return (
        <>
            {/* Hero Section Container */}
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
                    overflow: 'hidden'
                }}
            >
                {/* Hero Animated Content Wrapper */}
                <Box
                    sx={{
                        maxWidth: '850px',
                        width: '100%',
                        animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) forwards`
                    }}
                >
                    {/* Main Title */}
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
                            animation: `${fadeIn} 1.2s ease-in-out`
                        }}
                    >
                        Celebrate Every Moment
                    </Typography>

                    {/* Subtitle with line decorations */}
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
                            animation: `${fadeInUp} 1.2s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
                            animationDelay: '0.3s',
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
                            animation: `${fadeIn} 1.4s ease-in-out backwards`,
                            animationDelay: '0.5s'
                        }}
                    >
                        From weddings to birthdays and every special event,<br />
                        we create unforgettable experiences with our creative decor.
                    </Typography>

                    {/* Interactive Action Buttons Wrapper */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px',
                            width: '100%',
                            animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
                            animationDelay: '0.7s'
                        }}
                    >
                        {/* Primary CTA Button */}
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon className="btn-icon" />}
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
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                '& .btn-icon': { transition: 'transform 0.3s ease' },
                                '&:hover': {
                                    backgroundColor: '#3b040e',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 25px rgba(80, 6, 19, 0.4)',
                                    '& .btn-icon': { transform: 'translateX(5px)' }
                                },
                                '&:active': { transform: 'translateY(-1px)' }
                            }}
                        >
                            Contact Us
                        </Button>

                        {/* Secondary Gallery Button */}
                        <Button
                            variant="outlined"
                            endIcon={<CollectionsIcon className="btn-icon-alt" />}
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
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                '& .btn-icon-alt': { transition: 'transform 0.3s ease' },
                                '&:hover': {
                                    backgroundColor: '#ffffff',
                                    color: '#500613',
                                    border: '2px solid #ffffff',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 8px 25px rgba(255, 255, 255, 0.25)',
                                    '& .btn-icon-alt': { transform: 'scale(1.1) rotate(5deg)' }
                                },
                                '&:active': { transform: 'translateY(-1px)' }
                            }}
                        >
                            View Gallery
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Features Info Bar Section */}
            {/* Features Info Bar Section */}
            <Container
                maxWidth={false}
                sx={{
                    my: 5,
                    px: { xs: 2, md: 5 },
                    maxWidth: { md: '1350px', lg: '1400px' },
                    display: 'flex',
                    justifyContent: 'center',
                    mx: 'auto'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#500613',
                        padding: { xs: '20px 15px', md: '25px 40px' },
                        borderTop: '1px solid rgba(197, 160, 89, 0.3)',
                        borderBottom: '1px solid rgba(197, 160, 89, 0.3)',
                        overflowX: { xs: 'auto', md: 'visible' },
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '50px',
                        boxShadow: '0 10px 30px rgba(80, 6, 19, 0.15)',
                        animation: `${fadeInUp} 1s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
                        animationDelay: '0.4s',
                    }}
                >
                    {/* FIXED: Single Clean Grid Wrapper Container */}
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
                                    borderRight: index !== features.length - 1 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none',
                                    px: 3,
                                    transition: 'all 0.3s ease',
                                    animation: `${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
                                    animationDelay: `${0.5 + index * 0.1}s`,
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        '& .icon-ring': {
                                            animation: `${iconPulse} 1.2s infinite ease-in-out`,
                                            backgroundColor: 'rgba(197, 160, 89, 0.2)',
                                            borderColor: '#ffffff'
                                        },
                                        '& .icon-svg': {
                                            transform: 'scale(1.1) rotate(-5deg)',
                                            color: '#ffffff'
                                        }
                                    }
                                }}
                            >
                                {/* Circle Badge Container */}
                                <Box
                                    className="icon-ring"
                                    sx={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '50%',
                                        border: '1px solid #c5a059',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        flexShrink: 0,
                                        transition: 'all 0.4s ease'
                                    }}
                                >
                                    {React.cloneElement(item.icon, {
                                        className: 'icon-svg',
                                        sx: { fontSize: '1.4rem', color: '#c5a059', transition: 'all 0.3s ease' }
                                    })}
                                </Box>

                                {/* Feature Text Description Column */}
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontFamily: '"Montserrat", "Segoe UI", sans-serif',
                                            fontWeight: 600,
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

            {/* Child Event Showcase Component Blocks Stack Layout */}
            <Anniversary />
            <Wedding />
            <Birthday />
            <KidsSpecial />
            <BabyShower />
            <Festivals />
        </>
    );
}