import { ExperienceList } from "./ExperienceList";
import Timeline from "./Timeline";

const Experience = () => {
  return (
    <div className='experience'>
        {
          ExperienceList.map(experience=>{
            return(
              <Timeline {...experience} key={experience.id} className='timeline'/>
            )
          })
        }
    </div>
  )
}

export default Experience