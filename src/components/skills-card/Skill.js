const Skill = (props) => {
  return (
    <div className="skill">
      <div>
        <h3 className="skill-heading">{props.skillHeading}</h3>
      </div>
      <div className="skill-container">
        <div
          className="progress"
          style={{ width: `${props.skillProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
