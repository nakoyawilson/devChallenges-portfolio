import Paragraph from "../paragraph/Paragraph";
import "./BlogPostCard.css";

const BlogPostCard = (props) => {
  const paragraphs = props.postDescription;
  const createBlogParagraph = (paragraph) => {
    return (
      <Paragraph
        key={paragraphs.indexOf(paragraph)}
        content={paragraph}
        paragraphClass="post-description"
      />
    );
  };
  return (
    <div
      className={`card blog-card-${props.cardOrientation}`}
      id={props.cardID}
    >
      <div className="blog-card-title">
        <span className="card-descriptor">Blog</span>
        <h2 className="post-title">{props.postTitle}</h2>
      </div>
      <div className="blog-card-paragraph">
        <div>{paragraphs.map(createBlogParagraph)}</div>
        <div>
          <a href={props.postLink} className="post-link">
            {props.postPlatform}
          </a>
        </div>
      </div>
      <div className={`post-image-container-${props.cardOrientation}`}>
        <img src={props.postImage} alt="" className="post-image" />
      </div>
    </div>
  );
};

export default BlogPostCard;
