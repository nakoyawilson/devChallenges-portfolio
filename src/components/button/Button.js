import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={props.buttonClasses}
      onClick={props.clickFunction}
      id={props.buttonName}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
