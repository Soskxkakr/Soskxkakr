import { Typography } from "@mui/material";

const About = ({ data }) => {
  if (data) {
    var post_introduction = data.post_introduction;
    var introduction = data.introduction;
  }
  return (
    <>
      <Typography variant="h6" sx={{ p: 2 }} paragraph>
        {post_introduction}
      </Typography>
      <Typography variant="h6" sx={{ p: 2 }} paragraph>
        {introduction}
      </Typography>
    </>
  );
};

export default About;
