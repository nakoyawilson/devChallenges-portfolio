import Paragraph from "../paragraph/Paragraph";

const Experience = (props) => {
  return (
    <div className="experience-container">
      <div>
        <div className="logo-container">
          <img src={props.logoSource} alt="" className="logo" />
        </div>
      </div>
      <div>
        <span className="time-period">{props.timePeriod}</span>
        <h3 className="experience-title">{props.experienceTitle}</h3>
        <Paragraph
          content={props.description}
          paragraphClass="experience-paragraph"
        />
      </div>
    </div>
  );
};

export default Experience;
