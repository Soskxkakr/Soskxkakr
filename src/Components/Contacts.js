import { Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = ({ social }) => {
  return (
    <IconButton size="large" color="inherit" href={social.url}>
      {social.name === "Instagram" ? (
        <InstagramIcon />
      ) : social.name === "LinkedIn" ? (
        <LinkedInIcon />
      ) : social.name === "GitHub" ? (
        <GitHubIcon />
      ) : null}
    </IconButton>
  );
};

const Contacts = ({ data }) => {
  if (data) {
    var socials = data.social;
  }
  console.log("ASD", socials);
  return (
    <Grid container justifyContent="center">
      {socials && socials.length !== 0
        ? socials.map((social, idx) => <Contact key={idx} social={social} />)
        : null}
    </Grid>
  );
};

export default Contacts;
