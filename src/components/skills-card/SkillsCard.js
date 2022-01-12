import Skill from "./Skill";
import "./SkillsCard.css";

const SkillsCard = (props) => {
  const skills = props.skills;

  const createSkill = (skill) => {
    return (
      <Skill
        key={skills.indexOf(skill)}
        skillHeading={skill[0]}
        skillProgress={skill[1]}
      />
    );
  };

  return (
    <div
      className={`card skills-card-${props.cardOrientation}`}
      id={props.cardID}
    >
      <div>
        <h2 className="job-field">{props.jobField}</h2>
      </div>
      <div className={`skills-grid-${props.cardOrientation}`}>
        {skills.map(createSkill)}
      </div>
    </div>
  );
};

export default SkillsCard;
