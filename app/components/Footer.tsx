"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

/**
 * Footer-komponenten som visar kontaktinformation och sociala medier.
 *
 * @returns {JSX.Element} Footer-komponenten för webbplatsen.
 */
function Footer() {
  const [selected, setSelected] = useState("contact");

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid black",
        justifyContent: "space-around",
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        marginTop: "20px",
        flexDirection: "row",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          Kontakta mig här:
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>Ida´s parfym blogg </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          ida_casperson@hotmail.com
        </Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          ©️ Copyright av
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          Ida Casperson
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
          Ida´s parfym blogg 2024
        </Typography>
      </Box>

      <Box
        sx={{
          "@media (max-width: 600px)": {
            paddingBottom: "15px",
          },
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "14px", fontWeight: "bold" }}
        >
          Följ mig
        </Typography>
        <FacebookIcon sx={{ fontSize: "2rem" }}></FacebookIcon>
        <InstagramIcon sx={{ fontSize: "2rem" }}></InstagramIcon>
        <YouTubeIcon sx={{ fontSize: "2rem" }}></YouTubeIcon>
      </Box>
    </Box>
  );
}

export default Footer;
