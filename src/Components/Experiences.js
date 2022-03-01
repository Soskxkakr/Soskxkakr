import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KD from "../assets/kingdom-digital.png";
import MW from "../assets/moving-walls.png";

const ExperienceDescription = ({ desc }) => {
  return (
    <Typography variant="h6">
      <ArrowRightIcon sx={{ verticalAlign: "middle" }} fontSize="large" />
      {desc}
    </Typography>
  );
};

const Experience = ({ work }) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 400, mx: "auto" }}>
          <CardMedia component="img" image={MW} alt="image" />
          <CardContent sx={{ backgroundColor: "#111111" }}>
            <Typography variant="h5" gutterBottom>
              <CorporateFareIcon
                sx={{ verticalAlign: "middle" }}
                fontSize="medium"
              />{" "}
              {work.industry}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <WorkIcon sx={{ verticalAlign: "middle" }} fontSize="medium" />{" "}
              {work.position}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <CalendarTodayIcon
                sx={{ verticalAlign: "middle" }}
                fontSize="medium"
              />{" "}
              {work.duration}
            </Typography>
            <Typography variant="subtitle1">
              {work.remote ? "Remote" : ""}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box p={4}>
          {work.description.map((desc, idx) => (
            <ExperienceDescription key={idx} desc={desc} />
          ))}
        </Box>
      </Grid>
    </>
  );
};

const Experiences = ({ data }) => {
  if (data) {
    var works = data.work;
  }
  return (
    <Grid container m={2} justifyContent="center" spacing={2}>
      {works && works.length !== 0
        ? works.map((work, idx) => <Experience key={idx} work={work} />)
        : null}
    </Grid>
  );
};

export default Experiences;
