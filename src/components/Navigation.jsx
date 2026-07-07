import React, { useState } from 'react';
import { 
  AppBar, Box, InputBase, Typography, Link, 
  IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider 
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons Import
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Menu for Mobile

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ChurchIcon from '@mui/icons-material/Church';
import CakeIcon from '@mui/icons-material/Cake';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

// Styled Search & Contact Container (Desktop view)
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
  [theme.breakpoints.down('md')]: {
    display: 'none', // டேப்லெட் மற்றும் மொபைலில் இதை மறைக்கிறோம்
  }
}));

// Styled Social Media Circle
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
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

// Categories Container
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
  [theme.breakpoints.down('md')]: {
    display: 'none', // மொபைலில் இந்த நீண்ட பார் மறைந்துவிடும்
  }
}));

const NavItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#e5c1a7',
  cursor: 'pointer',
  transition: 'color 0.3s ease, transform 0.2s ease',
  '&:hover': {
    color: '#ffffff',
    transform: 'translateY(-1px)',
  },
});

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'ANNIVERSARIES', icon: <CardGiftcardIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 2, label: 'WEDDING', icon: <ChurchIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 3, label: 'BIRTHDAY', icon: <CakeIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 4, label: 'BABY SHOWER', icon: <ChildCareIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 5, label: 'FESTIVAL', icon: <AutoAwesomeIcon sx={{ fontSize: '1.4rem' }} /> },
    { id: 6, label: 'KIDS SPECIAL', icon: <EscalatorWarningIcon sx={{ fontSize: '1.4rem' }} /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer (Sidebar) Content
  const drawerContent = (
    <Box sx={{ width: 280, backgroundColor: '#1a0f0a', height: '100%', color: '#e5c1a7', pt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', px: 2, pb: 2, color: '#d4af37' }}>
        <SpaIcon />
        <Typography variant="h6" sx={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Elegance</Typography>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }} />
      
      {/* Mobile Categories Menu */}
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.id} sx={{ '&:hover': { backgroundColor: 'rgba(229, 193, 167, 0.1)' } }}>
            <ListItemIcon sx={{ color: '#e5c1a7', minWidth: '40px' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px' }} />
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ backgroundColor: 'rgba(212, 175, 55, 0.3)', my: 2 }} />
      
      {/* Mobile Social Handles */}
      <Typography variant="caption" sx={{ px: 2, display: 'block', color: '#d4af37', mb: 1, letterSpacing: '1px' }}>FOLLOW US</Typography>
      <List>
        <ListItem sx={{ gap: 2 }}><InstagramIcon fontSize="small"/> <Typography variant="body2">@ElegznceDecor</Typography></ListItem>
        <ListItem sx={{ gap: 2 }}><PinterestIcon fontSize="small"/> <Typography variant="body2">@EleganceDecor</Typography></ListItem>
        <ListItem sx={{ gap: 2 }}><FacebookIcon fontSize="small"/> <Typography variant="body2">@EleganceDvcer</Typography></ListItem>
        <ListItem sx={{ gap: 2 }}><XIcon fontSize="small"/> <Typography variant="body2">@EleganceDecor</Typography></ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '10px 15px', md: '15px 40px' }, // மொபைலில் பேடிங் குறையும்
          background: 'linear-gradient(to right, #000000 0%, #1a0f0a 20%, #ebdcc9 50%, #faf8f5 100%)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          height: '90px',
        }}
      >
        {/* Hamburger Menu Icon (Visible only on mobile/tablet) */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { md: 'none' }, color: '#d4af37' }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* 1. Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d4af37' }}>
          <SpaIcon sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }} />
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

        {/* 2. Combined Search & Contact Bar (Desktop only) */}
        <SearchContactContainer>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <SearchIcon sx={{ color: '#8c7662', mr: 1, fontSize: '1.4rem' }} />
            <InputBase placeholder="Search" sx={{ width: '100%', fontSize: '1.1rem', color: '#555', fontFamily: 'inherit' }} />
          </Box>
          <Link 
            href="tel:9876543210" 
            underline="none"
            sx={{
              display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#500613', color: '#ffffff',
              height: '100%', padding: '0 30px', borderRadius: '0 50px 50px 0', transition: 'background 0.3s ease',
              '&:hover': { backgroundColor: '#3b040e' },
            }}
          >
            <PhoneIcon sx={{ color: '#e5c1a7', fontSize: '1.2rem' }} />
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', color: '#ffffff' }}>
              98765 43210
            </Typography>
          </Link>
        </SearchContactContainer>

        {/* Mobile Call Icon (Visible only on mobile instead of the large bar) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
          <IconButton href="tel:9876543210" sx={{ backgroundColor: '#500613', color: '#e5c1a7', p: 1 }}>
            <PhoneIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* 3. Social Media Section (Desktop only) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SocialCircle><InstagramIcon sx={{ fontSize: '1.2rem' }} /></SocialCircle>
            <Typography sx={{ fontSize: '0.55rem', color: '#555', fontWeight: 600 }}>@ElegznceDecor</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SocialCircle><PinterestIcon sx={{ fontSize: '1.2rem' }} /></SocialCircle>
            <Typography sx={{ fontSize: '0.55rem', color: '#555', fontWeight: 600 }}>@EleganceDecor</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SocialCircle><FacebookIcon sx={{ fontSize: '1.2rem' }} /></SocialCircle>
            <Typography sx={{ fontSize: '0.55rem', color: '#555', fontWeight: 600 }}>@EleganceDvcer</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <SocialCircle><XIcon sx={{ fontSize: '1rem' }} /></SocialCircle>
            <Typography sx={{ fontSize: '0.55rem', color: '#555', fontWeight: 600 }}>@EleganceDecor</Typography>
          </Box>
        </Box>
      </AppBar>

      {/* Categories Navbar (Desktop only) */}
      <NavContainer>
        {menuItems.map((item) => (
          <NavItem key={item.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: '#e5c1a7' }}>{item.icon}</Box>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', fontFamily: '"Montserrat", sans-serif' }}>
              {item.label}
            </Typography>
          </NavItem>
        ))}
      </NavContainer>

      {/* Responsive Drawer Component for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Mobile performance-க்காக
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, border: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}