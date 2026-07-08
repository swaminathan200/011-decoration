import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Anniversaries", path: "/anniversary" },
  { name: "Wedding", path: "/wedding" },
  { name: "Birthday", path: "/birthday" },
  { name: "Baby Shower", path: "/babyshower" },
  { name: "Festival", path: "/festival" },
  { name: "Kids Special", path: "/kidsspecial" },
];

const services = [
  "Wedding Decorations",
  "Birthday Decorations",
  "Anniversary Setups",
  "Baby Shower Decor",
  "Festival Decorations",
  "Kids Theme Parties",
];

const socialIcons = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <PinterestIcon />, label: "Pinterest" },
  { icon: <XIcon />, label: "X" },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        overflow: "hidden",
        color: "#fff",
        background: `
          radial-gradient(
            circle at 15% 20%,
            rgba(213, 164, 65, 0.12),
            transparent 25%
          ),
          radial-gradient(
            circle at 85% 70%,
            rgba(213, 164, 65, 0.08),
            transparent 25%
          ),
          linear-gradient(
            135deg,
            #160006 0%,
            #31000e 40%,
            #570018 70%,
            #240009 100%
          )
        `,
      }}
    >
      {/* =========================================
          TOP GOLD LINE
      ========================================= */}
      <Box
        sx={{
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, #d5a441, #f3c94d, #d5a441, transparent)",
        }}
      />

      {/* =========================================
          NEWSLETTER SECTION
      ========================================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            mb: { xs: 4, md: 5 },
            px: { xs: 2.5, sm: 4, md: 5 },
            py: { xs: 3.5, md: 4 },
            borderRadius: { xs: "20px", md: "28px" },
            border: "1px solid rgba(213, 164, 65, 0.35)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(213,164,65,0.06))",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <AutoAwesomeIcon sx={{ color: "#f3c94d", fontSize: "20px" }} />
              <Typography
                sx={{
                  color: "#f3c94d",
                  fontSize: { xs: "11px", sm: "12px" },
                  fontWeight: 700,
                  letterSpacing: "2px",
                }}
              >
                STAY INSPIRED
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: { xs: "24px", sm: "28px", md: "34px" },
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Make Every Celebration Beautiful
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "12px", sm: "13px" },
                mt: 1,
              }}
            >
              Subscribe for decoration ideas, themes and special offers.
            </Typography>
          </Box>

          {/* SUBSCRIBE BOX */}
          <Box
            sx={{
              width: { xs: "100%", md: "470px" },
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              borderRadius: "30px",
              overflow: "hidden",
              border: "1px solid #d5a441",
              height: "50px",
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email address"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                px: 2.5,
                "& input": {
                  fontSize: { xs: "12px", sm: "13px" },
                  color: "#3b1c1c",
                },
              }}
            />

            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{
                minWidth: { xs: "110px", sm: "145px" },
                height: "100%",
                px: { xs: 2, sm: 3 },
                bgcolor: "#720020",
                color: "#fff",
                borderRadius: 0,
                textTransform: "none",
                fontWeight: 700,
                fontSize: { xs: "11px", sm: "13px" },
                "&:hover": {
                  bgcolor: "#8b0027",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>

      {/* =========================================
          MAIN FOOTER CONTENT
      ========================================= */}
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 26 }} sx={{ pb: { xs: 4, md: 5 } }}>
          {/* BRAND SECTION */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2.5,
              }}
            >
              {/* GOLD FLOWER ICON */}
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(213,164,65,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(213,164,65,0.08)",
                }}
              >
                <Typography sx={{ color: "#f3c94d", fontSize: "27px", lineHeight: 1 }}>
                  ❈
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: { xs: "25px", md: "29px" },
                    color: "#f5d88d",
                    lineHeight: 1,
                  }}
                >
                  Elegance
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    letterSpacing: "5px",
                    fontWeight: 700,
                    mt: 0.6,
                    lineHeight: 1,
                  }}
                >
                  DECOR
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                maxWidth: "360px",
                color: "rgba(255,255,255,0.72)",
                fontSize: { xs: "13px" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Creating unforgettable celebrations with elegant, creative and
              beautifully crafted decorations for every special moment of your life.
            </Typography>

            {/* SOCIAL ICONS */}
            <Stack direction="row" spacing={1.5}>
              {socialIcons.map((item, index) => (
                <IconButton
                  key={index}
                  aria-label={item.label}
                  sx={{
                    width: "40px",
                    height: "40px",
                    color: "#f3c94d",
                    border: "1px solid rgba(213,164,65,0.5)",
                    bgcolor: "rgba(213,164,65,0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#d5a441",
                      color: "#3a0010",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={6} sm={6} md={2}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                color: "#f3c94d",
                fontSize: "19px",
                fontWeight: 600,
                mb: 2.5,
              }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.5}>
              {quickLinks.map((item, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "13px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '"›"',
                      color: "#d5a441",
                      fontSize: "18px",
                      lineHeight: 1,
                    },
                    "&:hover": {
                      color: "#f3c94d",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* SERVICES */}
          <Grid item xs={6} sm={6} md={2.5}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                color: "#f3c94d",
                fontSize: "19px",
                fontWeight: 600,
                mb: 2.5,
              }}
            >
              Our Services
            </Typography>

            <Stack spacing={1.5}>
              {services.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '"›"',
                      color: "#d5a441",
                      fontSize: "18px",
                      lineHeight: 1,
                    },
                    "&:hover": {
                      color: "#f3c94d",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* CONTACT SECTION */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                color: "#f3c94d",
                fontSize: "19px",
                fontWeight: 600,
                mb: 2.5,
              }}
            >
              Get In Touch
            </Typography>

            <Stack spacing={2.5}>
              {/* PHONE */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <PhoneOutlinedIcon sx={{ color: "#d5a441", fontSize: "22px" }} />
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", mb: 0.2 }}>
                    Call Us
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                    +91 98765 43210
                  </Typography>
                </Box>
              </Box>

              {/* EMAIL */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <EmailOutlinedIcon sx={{ color: "#d5a441", fontSize: "22px" }} />
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", mb: 0.2 }}>
                    Email Us
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    hello@elegancedecor.com
                  </Typography>
                </Box>
              </Box>

              {/* LOCATION */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <LocationOnOutlinedIcon sx={{ color: "#d5a441", fontSize: "22px", mt: 0.3 }} />
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", mb: 0.2 }}>
                    Visit Us
                  </Typography>
                  <Typography sx={{ fontSize: "13px", lineHeight: 1.5 }}>
                    Mayiladuthurai, <br /> Tamil Nadu, India
                  </Typography>
                </Box>
              </Box>

              {/* TIME */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <AccessTimeOutlinedIcon sx={{ color: "#d5a441", fontSize: "22px" }} />
                <Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", mb: 0.2 }}>
                    Working Hours
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    Mon - Sun : 9 AM - 9 PM
                  </Typography>
                </Box>
              </Box>
            </Stack>

            {/* WHATSAPP BUTTON */}
            <Button
              startIcon={<WhatsAppIcon />}
              sx={{
                mt: 3,
                px: 3,
                py: 1,
                borderRadius: "25px",
                bgcolor: "#d5a441",
                color: "#31000e",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "13px",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#f3c94d",
                  transform: "scale(1.02)"
                },
              }}
            >
              Chat on WhatsApp
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* =========================================
          DIVIDER
      ========================================= */}
      <Container maxWidth="xl">
        <Divider sx={{ borderColor: "rgba(213,164,65,0.22)" }} />
      </Container>

      {/* =========================================
          BOTTOM FOOTER
      ========================================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* COPYRIGHT */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              fontSize: { xs: "11px", sm: "12px" },
              textAlign: "center",
            }}
          >
            © 2026 Elegance Decor. All Rights Reserved.
          </Typography>

          {/* MADE WITH LOVE */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              fontSize: { xs: "11px", sm: "12px" },
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            Crafted with
            <FavoriteIcon sx={{ color: "#ef6f8c", fontSize: "14px" }} />
            for beautiful celebrations
          </Typography>

          {/* LEGAL LINKS */}
          <Stack direction="row" spacing={3}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "11px",
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: "#f3c94d" },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "11px",
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: "#f3c94d" },
              }}
            >
              Terms & Conditions
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;