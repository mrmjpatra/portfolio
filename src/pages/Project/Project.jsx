import { projectList } from "./ProjectList"
import CardComponent from '../../components/CardComponent'
import './project.css'
const Project = () => {
  return (
    <div className='project'>
      <div className="project-container">
        {
          projectList.map(project => {
            return (
              <CardComponent {...project} key={project.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Project