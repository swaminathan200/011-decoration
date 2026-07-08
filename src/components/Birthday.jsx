import React from 'react';
import { Box, Container, Typography, Stack, Link, Card, CardMedia, Fade, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Independent card component rendering with its own lazy intersection-observer trigger
const AnimatedBirthdayCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates once upon scrolling down to optimize performance
    threshold: 0.15,   // Triggers when 15% of the element is within viewport
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: {
          xs: "100%",   // Mobile view: Full width single stack
          sm: "46%",    // Tablet layout: Balanced double grid columns
          md: "30%",    // Medium screens: 3 Columns
          lg: "23%",    // Standard Desktop screens: 4 Columns
        }
      }}
    >
      {/* Individual items glide up seamlessly using a grid staggered mathematical layout */}
      <Slide direction="up" in={inView} style={{ transitionDelay: `${(index % 4) * 120}ms` }} timeout={800}>
        <Box>
          <Card
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              position: 'relative',
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
                transform: "translateY(-8px)", // Card lift action
                boxShadow: "0 15px 35px rgba(109, 23, 52, 0.25)",
                '&::after': {
                  backgroundColor: 'rgba(109, 23, 52, 0.1)' // Custom brand touch tint overlay
                },
                "& .birthday-img": {
                  transform: "scale(1.06)" // Internal item image zooming response
                }
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              className="birthday-img"
              alt={`Birthday Decoration Setup ${item.id}`}
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

const Birthday = () => {
  // UseInView hook initialization to trigger Hero Section animation when scrolled into view
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true, // Animates once when the user scrolls down to this section
    threshold: 0.1,    // Triggers when 10% of the Hero section is within the viewport
  });

  // Gallery header container viewport hook initialization
  const { ref: galleryHeaderRef, inView: galleryHeaderInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const setups = [
    { id: 1, image: "/images/birthday/b1.png" },
    { id: 2, image: "/images/birthday/b2.png" },
    { id: 3, image: "/images/birthday/b3.png" },
    { id: 4, image: "/images/birthday/b4.png" },
    { id: 5, image: "/images/birthday/b8.png" },
    { id: 6, image: "/images/birthday/b6.png" },
    { id: 7, image: "/images/birthday/b1.png" },
    { id: 8, image: "/images/birthday/b2.png" },
  ];

  return (
    <>
      {/* HERO BANNER SECTION - Ref attached here to observe scroll entry */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", md: "480px" },
          minHeight: { xs: "420px", md: "auto" },
          backgroundImage: "url('/images/birthday/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          py: { xs: 8, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: { xs: "100%", md: "60%" }, // Restricted to left side on desktop to preserve background visibility
            height: "100%",
            background: {
              xs: 'linear-gradient(to bottom, rgba(35, 6, 6, 0.85) 0%, rgba(0, 0, 0, 0.65) 60%, rgba(0, 0, 0, 0.85) 100%)', // Mobile full dim overlay
              md: 'linear-gradient(to right, rgba(35, 6, 6, 0.95) 45%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0) 100%)' // Desktop left fade
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
            textAlign: { xs: 'center', md: 'left' }, // Centers on mobile, Left-aligns on desktop
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }, // Cross-axis alignments adapt across viewports
            pl: { xs: 3, sm: 4, md: 5, lg: 8 },
            pr: { xs: 3, sm: 4, md: 4 }
          }}
        >
          {/* Breadcrumbs Navigation Stack - Animates when scrolled into view */}
          <Fade in={heroInView} timeout={600}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }} // Dynamic cross-axis alignment placement
              spacing={0.5}
              sx={{ mb: { xs: 2.5, md: 3 } }}
            >
              <Link href="/" underline="none" sx={{ color: '#c5a059', fontSize: '0.85rem', fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                Home
              </Link>
              <NavigateNextIcon sx={{ color: '#c5a059', fontSize: '1rem' }} />
              <Typography sx={{ color: '#ffffff', fontSize: '0.85rem', fontFamily: '"Montserrat", sans-serif', fontWeight: 500 }}>
                Birthday
              </Typography>
            </Stack>
          </Fade>

          {/* Core Typography Content Presentation Box */}
          <Box
            sx={{
              maxWidth: { xs: '100%', sm: '520px', md: '600px' },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }, // Alignment changes on desktop
              justifyContent: "center",
            }}
          >
            {/* Primary Header Section - Animates when scrolled into view */}
            <Slide direction="down" in={heroInView} timeout={700}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Cinzel", "Playfair Display", serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 1
                }}
              >
                Make Birthdays
              </Typography>
            </Slide>

            {/* Stylized Italic Secondary Subheader Badge - Animates when scrolled into view */}
            <Fade in={heroInView} style={{ transitionDelay: '200ms' }} timeout={800}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                spacing={1.5}
                sx={{ mb: 3, width: '100%' }}
              >
                <Box sx={{ color: '#c5a059', fontSize: { xs: '1.2rem', md: '1.5rem' }, display: 'flex', alignItems: 'center' }}>✨</Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Playfair Display", "Georgia", serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: '#c5a059',
                    fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                    lineHeight: 1,
                    textTransform: 'none'
                  }}
                >
                  Extra Special
                </Typography>
                <Box sx={{ color: '#c5a059', fontSize: { xs: '1.2rem', md: '1.5rem' }, display: 'flex', alignItems: 'center' }}>✨</Box>
              </Stack>
            </Fade>

            {/* Paragraph Descriptive Body Content Text - Animates when scrolled into view */}
            <Fade in={heroInView} style={{ transitionDelay: '400ms' }} timeout={900}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  color: '#e0e0e0',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.6,
                  letterSpacing: '0.4px',
                  maxWidth: '520px'
                }}
              >
                From fun-filled parties to elegant celebrations, we design unforgettable birthday experiences tailored perfectly to your unique moments.
              </Typography>
            </Fade>
          </Box>
        </Container>
      </Box>

      {/* GALLERY GRID SECTION */}
      <Box sx={{ py: 10, bgcolor: "#fff" }}>
        <Container maxWidth="xl">
          {/* Main Module Header Section */}
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
                ✦ Our Recent Birthday Setups ✦
              </Typography>
            </Fade>
          </Box>

          {/* Flex columns positioning grid system for smooth cross-device transitions */}
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
    </>
  );
};

export default Birthday;