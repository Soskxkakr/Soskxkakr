import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Skill = ({ title }) => {
  return (
    <Typography variant="h6" sx={{ p: 2 }}>
      <CheckIcon sx={{ verticalAlign: "middle" }} fontSize="small" /> {title}
    </Typography>
  );
};

const Skills = ({ data }) => {
  if (data) {
    var skills = data.skills;
  }
  return (
    <Grid container justifyContent="center" alignItems="center">
      {skills && skills.length !== 0
        ? skills.map((skill, idx) => <Skill key={idx} title={skill} />)
        : null}
    </Grid>
  );
};

export default Skills;
