import { IconButton } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = ({ title }) => {
  return (
    <IconButton size="large" color="inherit">
      {title === "GitHub" ? (
        <GitHubIcon />
      ) : title === "WhatsApp" ? (
        <WhatsAppIcon />
      ) : title === "Email" ? (
        <EmailIcon />
      ) : title === "LinkedIn" ? (
        <LinkedInIcon />
      ) : null}
    </IconButton>
  );
};

export default Contact;
