import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Anniversary = () => {
  // Banner Background Style
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/anniversary/bgs.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '300px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '40px 20px',
  };

  // Image Gallery Array Data
const setups = [
  { id: 1, image: "/images/anniversary/AN1.png" },
  { id: 2,  image: "/images/anniversary/AN2.png" },
  { id: 3,  image: "/images/anniversary/AN3.png" },
  { id: 4, image: "/images/anniversary/AN4.png" },
  { id: 5, image: "/images/anniversary/AN5.png" },
  { id: 6, image: "/images/anniversary/AN6.png" },
  { id: 7, image: "/images/anniversary/AN1.png" },
  { id: 8, image: "/images/anniversary/AN2.png" },
];

  return (
    <>
      {/* HERO BANNER SECTION */}
      <Box sx={backgroundImageStyle}>
        <Container maxWidth="md">
          {/* Top Subtitle */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 1.5,
              mb: 1
            }}
          >
            <Box sx={{ width: '16px', height: '1px', bgcolor: 'rgba(255,255,255,0.6)' }} />
            <Typography 
              variant="subtitle2" 
              sx={{ 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                color: '#f0f0f0'
              }}
            >
              Celebrate Love, Celebrate You
            </Typography>
            <Box sx={{ width: '16px', height: '1px', bgcolor: 'rgba(255,255,255,0.6)' }} />
          </Box>

          {/* Main Heading */}
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              fontFamily: "'Playfair Display', 'Georgia', serif", 
              fontWeight: 600,
              mb: 1.5,
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Anniversary Decorations
          </Typography>

          {/* Heart Divider */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 2,
              mb: 3
            }}
          >
            <Box sx={{ width: '40px', height: '1px', bgcolor: 'rgba(255,255,255,0.4)' }} />
            <FavoriteIcon sx={{ fontSize: '14px', color: '#fff' }} />
            <Box sx={{ width: '40px', height: '1px', bgcolor: 'rgba(255,255,255,0.4)' }} />
          </Box>

          {/* Description Paragraph */}
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              mb: 4,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
              lineHeight: 1.6,
              fontWeight: 300,
              color: '#e0e0e0'
            }}
          >
            Make your special day unforgettable with our stunning anniversary decoration setups.
          </Typography>

          {/* Call to Action Button */}
        </Container>
      </Box>

      {/* GALLERY GRID SECTION */}
             <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        {/* Heading */}

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#6d1734",
            fontWeight: 700,
            mb: 5,
            fontFamily: "Playfair Display",
          }}
        >
          ✦ Our Recent Anniversary Setups ✦
        </Typography>

        {/* Gallery */}

       <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 3,
  }}
>
  {setups.map((item) => (
    <Box
      key={item.id}
      sx={{
        width: {
          xs: "100%",   // Mobile - 1 card
          sm: "48%",    // Tablet - 2 cards
          md: "31%",    // Small Laptop - 3 cards
          lg: "23%",    // Desktop - 4 cards
          xl: "23%",    // Large Desktop - 4 cards
        },
      }}
    >
      <Card
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          transition: "0.4s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 15px 35px rgba(0,0,0,.25)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={item.image}
          sx={{
            width: "100%",
            height: {
              xs: 220,
              sm: 240,
              md: 250,
              lg: 260,
            },
            objectFit: "cover",
            transition: "0.5s",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
      </Card>
    </Box>
  ))}
</Box>

        {/* Button */}

      </Container>
    </Box>
    </>
  );
};

export default Anniversary;