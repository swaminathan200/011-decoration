import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

// ==========================================
// FESTIVAL IMAGES DATA
// ==========================================
const festivalCards = [
  { image: "/images/Festival/Krishna.png" },
  { image: "/images/Festival/ramzan.png" },
  { image: "/images/Festival/chritmas.png" },
  { image: "/images/Festival/deepavali.png" },
  { image: "/images/Festival/pongal.png" },
  { image: "/images/Festival/bakrid.png" },
  { image: "/images/Festival/milad.png" },
  { image: "/images/Festival/navratri.png" },
  { image: "/images/Festival/easter.png" },
  { image: "/images/Festival/day27.png" },
  { image: "/images/Festival/maha.png" },
  { image: "/images/Festival/sarasvathi.png" },
];

// ==========================================
// VALUE PROPOSITION / FEATURES DATA
// ==========================================
const features = [
  {
    title: "Custom Themed Decor",
    description: "Personalized themes based on your festival and style.",
    icon: <AutoAwesomeIcon />,
  },
  {
    title: "Premium Quality",
    description: "We use high-quality flowers, fabrics & decorative items.",
    icon: <WorkspacePremiumOutlinedIcon />,
  },
  {
    title: "Timely Setup",
    description: "On-time decoration for a stress-free event.",
    icon: <AccessTimeOutlinedIcon />,
  },
  {
    title: "Affordable Packages",
    description: "Beautiful decor that fits your budget perfectly.",
    icon: <LocalOfferOutlinedIcon />,
  },
];

function Festival() {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        bgcolor: "#fffaf2",
        // Global keyframe for structural elements fading and lifting up
        "@keyframes smoothFadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* ==========================================
          HERO BANNER SECTION
         ========================================== */}
      <Box
        sx={{
          minHeight: {
            xs: "520px",
            sm: "480px",
            md: "390px",
          },
          backgroundImage: `
            linear-gradient(
              rgba(28, 8, 0, 0.50),
              rgba(28, 8, 0, 0.50)
            ),
            url("/images/Festival/festivalbanner.png")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "850px",
            color: "#fff",
            // Smooth reveal animation for the hero content on load
            animation: "smoothFadeInUp 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards"
          }}
        >
          {/* Subtle Accent Header */}
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              letterSpacing: "3px",
              fontWeight: 600,
              mb: 2,
            }}
          >
            ✣ CELEBRATE THE JOY OF FESTIVALS ✣
          </Typography>

          {/* Core Title */}
          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: { xs: "42px", sm: "55px", md: "75px" },
              fontWeight: 500,
              lineHeight: 1.05,
              textShadow: "0 3px 10px rgba(0,0,0,0.5)",
            }}
          >
            Festival Decorations
          </Typography>

          {/* Decorative Divider Line */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: 2,
              mb: 2,
            }}
          >
            <Box sx={{ width: "40px", height: "1px", bgcolor: "rgba(255,255,255,0.4)" }} />
            <FavoriteIcon sx={{ fontSize: "14px", color: "#fff" }} />
            <Box sx={{ width: "40px", height: "1px", bgcolor: "rgba(255,255,255,0.4)" }} />
          </Box>

          {/* Stylized Italic Subtitle */}
          <Typography
            sx={{
              mt: 1,
              fontFamily: '"Great Vibes", "Alex Brush", "Georgia", cursive, serif',
              fontStyle: "italic",
              fontSize: { xs: "25px", sm: "30px", md: "42px" },
              color: "#f6d29a",
            }}
          >
            ✣ Tradition. Devotion. Decoration. ✣
          </Typography>

          {/* Promotional Description */}
          <Typography
            sx={{
              mt: 2,
              mx: "auto",
              maxWidth: "650px",
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: 1.6,
              color: "#fff",
            }}
          >
            From traditional festivals to cultural celebrations,
            <br />
            we create vibrant and divine setups that
            <br />
            reflect the true spirit of every occasion.
          </Typography>
        </Box>
      </Box>

      {/* ==========================================
          FESTIVAL DISPLAY CARDS SECTION
         ========================================== */}
      <Box
        sx={{
          py: { xs: 5, md: 6 },
          background: "linear-gradient(135deg, #fffdf8, #fff8eb)",
        }}
      >
        {/* Section Typography Intro */}
        <Box
          sx={{
            textAlign: "center",
            mb: 4.5,
            px: 2,
            animation: "smoothFadeInUp 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards"
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              color: "#65001b",
              fontSize: { xs: "30px", sm: "38px", md: "50px" },
              fontWeight: 600,
            }}
          >
            ❈ Our Popular Festival Themes ❈
          </Typography>
          <Typography sx={{ color: "#7b351f", fontSize: "14px", mt: 0.5 }}>
            Beautiful setups for all your festive celebrations
          </Typography>
        </Box>

        {/* CSS Interactive Grid Showcase */}
        <Box
          sx={{
            width: "100%",
            px: { xs: 2, sm: 3, md: 4 },
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: "24px",
          }}
        >
          {festivalCards.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                aspectRatio: "4 / 3.1",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                cursor: "pointer",
                backgroundColor: "#fff",
                opacity: 0, // Starts completely hidden before animation kicks in
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",

                // Triggers structural load animation with a continuous calculated waterfall cascade delay
                animation: "smoothFadeInUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards",
                animationDelay: `${index * 0.08}s`,

                // Advanced Card Elevation on Hover
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 14px 28px rgba(101, 0, 27, 0.18)",
                },
                // Inner Image Zoom Coordination
                "&:hover img": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={`Festival Theme ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Festival;