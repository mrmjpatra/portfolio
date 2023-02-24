import SimpleAccordion from "../../components/SimpleAccordion"
import './skills.css'
import { SkillList } from "./SkillList"

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="accordion">
        {
          SkillList.map(list => {
            return (
              <SimpleAccordion className='accordion' {...list} key={list.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills