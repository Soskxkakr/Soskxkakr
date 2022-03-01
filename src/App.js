import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Introduction from "./Components/Introduction";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

import "./App.css";
import Contacts from "./Components/Contacts";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => setResumeData(data));
  }, []);

  const Section = ({ title }) => {
    return (
      <Typography
        variant="h4"
        sx={{
          p: 2,
          borderBottom: 2,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        gutterBottom
      >
        {title}
      </Typography>
    );
  };

  return (
    <Container sx={{ pt: 20, pb: 5 }}>
      <Introduction data={resumeData.main} />
      <Box sx={{ pt: 20 }}>
        <Section title="About Me" />
        <About data={resumeData.main} />
        <Section title="Skills" />
        <Skills data={resumeData.resume} />
        <Section title="Experiences" />
        <Experiences data={resumeData.resume} />
        <Section title="Projects" />
        <Project data={resumeData.portfolio} />
        <Section title="Contacts" />
        <Contacts data={resumeData.main} />
      </Box>
    </Container>
  );
};

export default App;
