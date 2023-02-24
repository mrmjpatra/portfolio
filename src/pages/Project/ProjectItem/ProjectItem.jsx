import { useParams } from "react-router-dom"
import { projectList } from '../ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";
const ProjectItem = () => {
  const param = useParams();
  const project = projectList[param.id-1];

  return (
    <div className="project-item">
      <img src={project.image} alt=""/>
      <h2 className="project-title">{project.title}</h2>
      <h3 className="project-skills">{project.skills}</h3>
      <div className="githubicon">
      <IconButton size="large"  href={project.link}><GitHubIcon fontSize="large"/></IconButton>
      </div>
    </div>
  )
}

export default ProjectItem