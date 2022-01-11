import Button from "../button/Button";
import "./Banner.css";

const Banner = (props) => {
  const tags = props.tags;
  let useTags;
  if (tags.length > 0) {
    useTags = true;
  } else {
    useTags = false;
  }

  const createButton = (tag) => {
    return (
      <Button
        key={tags.indexOf(tag)}
        buttonName={tag}
        buttonClasses="button tag-button"
      />
    );
  };

  return (
    <div className="card banner">
      <div>
        <h2 className="banner-title">
          {props.bannerTitle} ({props.count})
        </h2>
      </div>
      <div className="tags-container">{useTags && tags.map(createButton)}</div>
    </div>
  );
};

export default Banner;
