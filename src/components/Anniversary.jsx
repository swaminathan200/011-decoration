import React from 'react';
import { Box, Typography, Container, Card, CardMedia, Zoom, Fade } from '@mui/material';
import { keyframes } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Subtle pulsing heart keyframe animation
const heartBeat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.12); }
  40% { transform: scale(1); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

// Single Gallery Card Component watching its own viewport reveal state
const AnimatedGalleryCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: {
          xs: "100%",
          sm: "46%",
          md: "30%",
          lg: "23%",
        }
      }}
    >
      {/* Cards drop-fade into view dynamically as the user scrolls down */}
      <Zoom in={inView} style={{ transitionDelay: `${(index % 4) * 120}ms` }} timeout={700}>
        <Card
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: "hidden",
            backgroundColor: 'transparent',
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
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
              transform: "scale(1.03) translateY(-5px)",
              boxShadow: "0 15px 30px rgba(109, 23, 52, 0.2)",
              '&::after': {
                backgroundColor: 'rgba(109, 23, 52, 0.12)'
              },
              "& .gallery-img": {
                transform: "scale(1.06)"
              }
            },
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            className="gallery-img"
            alt={`Anniversary Decoration Setup ${item.id}`}
            sx={{
              width: "100%",
              height: { xs: 220, sm: 240, md: 250, lg: 260 },
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
          />
        </Card>
      </Zoom>
    </Box>
  );
};

const Anniversary = () => {
  // Viewport tracking hook for the Hero Section
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Viewport tracking hook for the Gallery Title Header
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/anniversary/bgs.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '60px 20px',
  };

  const setups = [
    { id: 1, image: "/images/anniversary/AN1.png" },
    { id: 2, image: "/images/anniversary/AN2.png" },
    { id: 3, image: "/images/anniversary/AN3.png" },
    { id: 4, image: "/images/anniversary/AN4.png" },
    { id: 5, image: "/images/anniversary/AN5.png" },
    { id: 6, image: "/images/anniversary/AN6.png" },
    { id: 7, image: "/images/anniversary/AN1.png" },
    { id: 8, image: "/images/anniversary/AN2.png" },
  ];

  return (
    <>
      {/* HERO BANNER SECTION */}
      <Box ref={heroRef} sx={backgroundImageStyle}>
        <Container maxWidth="md">
          {/* Subtitle Line reveal */}
          <Fade in={heroInView} timeout={600}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: '16px', height: '1px', bgcolor: 'rgba(255,255,255,0.6)' }} />
              <Typography variant="subtitle2" sx={{ letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.85rem' }, color: '#f0f0f0', fontFamily: '"Montserrat", sans-serif' }}>
                Celebrate Love, Celebrate You
              </Typography>
              <Box sx={{ width: '16px', height: '1px', bgcolor: 'rgba(255,255,255,0.6)' }} />
            </Box>
          </Fade>

          {/* Main title zoom presentation */}
          <Zoom in={heroInView} style={{ transitionDelay: '150ms' }} timeout={700}>
            <Typography variant="h2" component="h1" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, mb: 3, fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' }, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Anniversary Decorations
            </Typography>
          </Zoom>

          {/* Icon Divider Line reveal */}
          <Fade in={heroInView} style={{ transitionDelay: '300ms' }} timeout={600}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Box sx={{ width: '40px', height: '1px', bgcolor: 'rgba(255,255,255,0.4)' }} />
              <FavoriteIcon sx={{ fontSize: '14px', color: '#fff', animation: `${heartBeat} 2.5s ease-in-out infinite` }} />
              <Box sx={{ width: '40px', height: '1px', bgcolor: 'rgba(255,255,255,0.4)' }} />
            </Box>
          </Fade>

          {/* Paragraph text content fade-in reveal */}
          <Fade in={heroInView} style={{ transitionDelay: '400ms' }} timeout={800}>
            <Typography variant="body1" sx={{ maxWidth: '600px', margin: '0 auto', fontSize: { xs: '0.95rem', sm: '1.1rem' }, lineHeight: 1.6, fontWeight: 300, color: '#e0e0e0', fontFamily: '"Montserrat", sans-serif' }}>
              Make your special day unforgettable with our stunning anniversary decoration setups.
            </Typography>
          </Fade>
        </Container>
      </Box>

      {/* GALLERY GRID SECTION */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="xl">
          {/* Main Gallery Section Header Title */}
          <Box ref={titleRef}>
            <Fade in={titleInView} timeout={800}>
              <Typography variant="h3" align="center" sx={{ color: "#6d1734", fontWeight: 700, mb: 6, fontFamily: "'Playfair Display', serif" }}>
                ✦ Our Recent Anniversary Setups ✦
              </Typography>
            </Fade>
          </Box>

          {/* Flexible Grid displaying separate cascading instances of AnimatedGalleryCard */}
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
            {setups.map((item, index) => (
              <AnimatedGalleryCard key={item.id} item={item} index={index} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Anniversary;