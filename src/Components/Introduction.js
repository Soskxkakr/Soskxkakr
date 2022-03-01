import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../assets/CV - Reinaldo Taslim.pdf";
import Me from "../assets/me2.jpg";

const downloadResume = () => {
  const link = document.createElement("a");
  link.download = Resume;
  link.href = Resume;
  link.click();
};

const Introduction = ({ data }) => {
  if (data) {
    var name = data.name;
    var job = data.job;
    var caption = data.caption;
  }
  return (
    <Grid
      container
      spacing={2}
      py={4}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Grid item xs container direction="column">
          <Grid item xs>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Hi, I'm {name}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h3" sx={{ mt: 2, textAlign: "center" }}>
              {/* ━ */} {job}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
              {caption}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
              onClick={(e) => downloadResume()}
            >
              <IconButton>
                <DownloadIcon />
              </IconButton>
              Resume
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Avatar src={Me} sx={{ width: 200, height: 200, mx: "auto" }} />
      </Grid>
    </Grid>
  );
};

export default Introduction;
