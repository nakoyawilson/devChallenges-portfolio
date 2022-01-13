import Paragraph from "../paragraph/Paragraph";

const Hobby = (props) => {
  return (
    <div>
      <div className={`hobby-image-container-${props.cardOrientation}`}>
        <img
          src={props.hobbyImage}
          alt=""
          className="hobby-image"
          id={`${props.hobby.toLowerCase()}-picture`}
        />
      </div>
      <h3 className="hobby-title">{props.hobby}</h3>
      <Paragraph
        content={props.description}
        paragraphClass={`hobby-paragraph hobby-paragraph-${props.cardOrientation}`}
      />
    </div>
  );
};

export default Hobby;
