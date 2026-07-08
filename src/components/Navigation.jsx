import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar, Box, InputBase, Typography, Link,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from "react-router-dom";

// Icons Import
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ChurchIcon from '@mui/icons-material/Church';
import CakeIcon from '@mui/icons-material/Cake';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

import HomeIcon from '@mui/icons-material/Home';

// Keyframe Animations
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Slide down animation for the active scroll-up header
const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled Components
const SearchContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f7f4ee',
  border: '2px solid #d4af37',
  borderRadius: '50px',
  width: '45%',
  maxWidth: '650px',
  height: '50px',
  paddingLeft: '15px',
  overflow: 'hidden',
  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.05)',
  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
  '&:focus-within': {
    borderColor: '#500613',
    boxShadow: '0 8px 20px rgba(80, 6, 19, 0.15), inset 0 1px 3px rgba(0,0,0,0.05)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const SocialCircle = styled(Box)({
  width: '35px',
  height: '35px',
  background: 'radial-gradient(circle, #f3e7da 0%, #cc9a6a 100%)',
  border: '1px solid #b38455',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4a1521',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  '&:hover': {
    transform: 'scale(1.2) rotate(12deg)',
    boxShadow: '0 6px 14px rgba(0,0,0,0.2)',
    color: '#ffffff',
    background: 'radial-gradient(circle, #500613 0%, #3b040e 100%)',
    borderColor: '#d4af37'
  },
});

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#500613',
  padding: '12px 20px',
  borderTop: '1px solid #d4af37',
  borderBottom: '1px solid #d4af37',
  width: '100%',
  boxSizing: 'border-box',
  animation: `${fadeInDown} 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
  animationDelay: '0.2s',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const NavItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#e5c1a7',
  cursor: 'pointer',
  position: 'relative',
  padding: '6px 0',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#ffffff',
    '&::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    },
    '& .MuiSvgIcon-root': {
      transform: 'scale(1.2) translateY(-2px)',
      color: '#d4af37'
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: '#d4af37',
    transformOrigin: 'bottom right',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '& .MuiSvgIcon-root': {
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  }
});

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: 'HOME', path: '/', icon: <HomeIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 2, label: 'ANNIVERSARIES', path: '/anniversary', icon: <CardGiftcardIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 3, label: 'WEDDING', path: '/wedding', icon: <ChurchIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 4, label: 'BIRTHDAY', path: '/birthday', icon: <CakeIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 5, label: 'BABY SHOWER', path: '/baby-shower', icon: <ChildCareIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 6, label: 'FESTIVAL', path: '/festivals', icon: <AutoAwesomeIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 7, label: 'KIDS SPECIAL', path: '/kids-special', icon: <EscalatorWarningIcon sx={{ fontSize: '1.4rem' }} /> },
  ];

  // Scroll Tracking Logic for Dynamic Top-Bottom Navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if the header should go into sticky state (after scrolling past the header height)
      if (currentScrollY > 150) {
        setIsSticky(true);

        // 2. If scrolling down, hide header. If scrolling up, show header.
        if (currentScrollY > lastScrollY.current) {
          setShowHeader(false); // Scrolling down
        } else {
          setShowHeader(true);  // Scrolling up
        }
      } else {
        // Reset back to absolute top positioning when at the absolute top of page
        setIsSticky(false);
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const drawerContent = (
    <Box sx={{ width: 280, backgroundColor: '#1a0f0a', height: '100%', color: '#e5c1a7', pt: 2 }}>
      <Box
        component={RouterLink}
        to="/"
        onClick={() => handleNavigation('/')}
        sx={{
          display: 'flex', alignItems: 'center', gap: '10px', px: 2, pb: 2, color: '#d4af37', textDecoration: 'none',
          transition: 'all 0.3s', '&:hover': { opacity: 0.8, transform: 'translateX(4px)' }
        }}
      >
        <SpaIcon />
        <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Elegance</Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                px: 2.5,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  paddingLeft: '32px',
                  '& .MuiListItemIcon-root': { color: '#ffffff', transform: 'scale(1.1)' }
                }
              }}
            >
              <ListItemIcon sx={{ color: '#e5c1a7', minWidth: '40px', transition: 'all 0.3s' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', my: 2 }} />

      <Typography variant="caption" sx={{ px: 2, display: 'block', color: '#d4af37', mb: 1, letterSpacing: '1px' }}>FOLLOW US</Typography>
      <List sx={{ px: 0.5 }}>
        {[
          { icon: <InstagramIcon fontSize="small" />, handle: '@ElegznceDecor' },
          { icon: <PinterestIcon fontSize="small" />, handle: '@EleganceDecor' },
          { icon: <FacebookIcon fontSize="small" />, handle: '@EleganceDvcer' },
          { icon: <XIcon fontSize="small" />, handle: '@EleganceDecor' }
        ].map((social, i) => (
          <ListItem
            key={i}
            sx={{
              gap: 2, cursor: 'pointer', transition: 'all 0.3s ease',
              '&:hover': { color: '#ffffff', transform: 'translateX(8px)', '& .MuiSvgIcon-root': { color: '#d4af37' } }
            }}
          >
            {social.icon}
            <Typography variant="body2">{social.handle}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Wrapper switches from relative to sticky depending on the user scroll action */}
      <Box
        sx={{
          position: isSticky ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          zIndex: 1100,
          width: '100%',
          transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
          transition: isSticky ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          boxShadow: isSticky ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: { xs: '10px 15px', md: '15px 40px' },
            background: 'linear-gradient(to right, #000000 0%, #1a0f0a 20%, #ebdcc9 50%, #faf8f5 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            height: '90px',
            animation: isSticky ? 'none' : `${fadeInDown} 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 1, display: { md: 'none' }, color: '#d4af37',
              transition: 'transform 0.2s', '&:active': { transform: 'scale(0.85)' }
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Logo Section */}
          <Box
            component={RouterLink}
            to="/"
            onClick={() => handleNavigation('/')}
            sx={{
              display: 'flex', alignItems: 'center', gap: '10px', color: '#d4af37', textDecoration: 'none',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                transform: 'scale(1.04)',
                '& .logo-icon': { transform: 'rotate(15deg)' }
              }
            }}
          >
            <SpaIcon className="logo-icon" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, transition: 'transform 0.4s ease' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#e5c1a7', lineHeight: 1, fontWeight: 'medium',
                  fontSize: { xs: '1.2rem', md: '1.6rem' }
                }}
              >
                Elegance
              </Typography>
              <Typography variant="caption" sx={{ letterSpacing: '3px', color: '#ffffff', fontWeight: 'bold', fontSize: '0.75rem' }}>
                DECOR
              </Typography>
            </Box>
          </Box>

          {/* Search & Contact Bar */}
          <SearchContactContainer>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <SearchIcon sx={{ color: '#8c7662', mr: 1, fontSize: '1.4rem', transition: 'color 0.3s' }} />
              <InputBase placeholder="Search" sx={{ width: '100%', fontSize: '1.1rem', color: '#555', fontFamily: 'inherit' }} />
            </Box>
            <Link
              href="tel:9876543210"
              underline="none"
              sx={{
                display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#500613', color: '#ffffff',
                height: '100%', padding: '0 30px', borderRadius: '0 50px 50px 0',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: '#3b040e',
                  paddingRight: '38px',
                  '& .phone-icon': { transform: 'scale(1.2) rotate(-15deg)' }
                },
                '&:active': { transform: 'scale(0.96)' }
              }}
            >
              <PhoneIcon className="phone-icon" sx={{ color: '#e5c1a7', fontSize: '1.2rem', transition: 'transform 0.3s ease' }} />
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', color: '#ffffff' }}>
                98765 43210
              </Typography>
            </Link>
          </SearchContactContainer>

          {/* Mobile Contact Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton
              href="tel:9876543210"
              sx={{
                backgroundColor: '#500613', color: '#e5c1a7', p: 1,
                transition: 'all 0.3s',
                '&:hover': { backgroundColor: '#3b040e' },
                '&:active': { transform: 'scale(0.85)' }
              }}
            >
              <PhoneIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
            {[
              { icon: <InstagramIcon sx={{ fontSize: '1.2rem' }} />, tag: '@ElegznceDecor' },
              { icon: <PinterestIcon sx={{ fontSize: '1.2rem' }} />, tag: '@EleganceDecor' },
              { icon: <FacebookIcon sx={{ fontSize: '1.2rem' }} />, tag: '@EleganceDvcer' },
              { icon: <XIcon sx={{ fontSize: '1rem' }} />, tag: '@EleganceDecor' }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                  animation: isSticky ? 'none' : `${fadeInDown} 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards`,
                  animationDelay: isSticky ? '0s' : `${0.1 * index}s`
                }}
              >
                <SocialCircle>{item.icon}</SocialCircle>
                <Typography sx={{ fontSize: '0.55rem', color: '#555', fontWeight: 600 }}>{item.tag}</Typography>
              </Box>
            ))}
          </Box>
        </AppBar>

        {/* Desktop Categories Navbar */}
        <NavContainer>
          {menuItems.map((item) => (
            <NavItem key={item.id} onClick={() => handleNavigation(item.path)}>
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#e5c1a7' }}>{item.icon}</Box>
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', fontFamily: '"Montserrat", sans-serif' }}>
                {item.label}
              </Typography>
            </NavItem>
          ))}
        </NavContainer>
      </Box>

      {/* Responsive Drawer Component for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            border: 'none',
            backgroundColor: '#1a0f0a',
            boxShadow: '10px 0 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important'
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}