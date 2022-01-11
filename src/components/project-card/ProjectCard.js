import "./ProjectCard.css";
import Paragraph from "../paragraph/Paragraph";
import Button from "../button/Button";

const ProjectCard = (props) => {
  const projectTags = props.projectTags;
  const createTag = (tag) => {
    return (
      <span key={projectTags.indexOf(tag)} className="project-tag">
        {tag}
      </span>
    );
  };
  return (
    <div className={`card project-card-${props.cardOrientation}`}>
      <div className={`project-picture-container-${props.cardOrientation}`}>
        <img
          src={props.imageSrc}
          alt={`${props.projectTitle} screenshot`}
          className="project-mockup"
        />
      </div>
      <div className="project-details">
        <div className="project-tags">{projectTags.map(createTag)}</div>
        <h2 className="project-title">{props.projectTitle}</h2>
        <Paragraph
          content={props.paragraphContent}
          paragraphClass="project-description"
        />
        <div className="button-container">
          <a href={props.demoLink}>
            <Button buttonName="Demo" buttonClasses="button demo-button" />
          </a>
        </div>
        <div className="button-container">
          <a href={props.codeLink}>
            <Button buttonName="Code" buttonClasses="button code-button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
