import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Language = ({ language }) => {
  return (
    <Typography sx={{ color: "#999", borderLeft: 1, px: 1 }}>
      {language}
    </Typography>
  );
};

const Project = ({ project, expanded, setExpanded }) => {
  return (
    <Accordion
      sx={{ backgroundColor: "#111111", m: 2, p: 1 }}
      expanded={expanded === project.title}
      onChange={(e, isExpanded) =>
        setExpanded(isExpanded ? project.title : false)
      }
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {project.title}
        </Typography>
        {project.languages.map((language, idx) => (
          <Language key={idx} language={language} />
        ))}
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{project.description}</Typography>
      </AccordionDetails>
      <AccordionDetails>
        View more
        <IconButton href={project.url}>
          <VisibilityIcon />
        </IconButton>
      </AccordionDetails>
      <AccordionDetails>
        <Typography>{project.created_at}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Projects = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  if (data) {
    var projects = data.projects;
  }

  return (
    <>
      {projects && projects.length !== 0
        ? projects.map((project, idx) => (
            <Project
              key={idx}
              project={project}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))
        : null}
    </>
  );
};

export default Projects;
