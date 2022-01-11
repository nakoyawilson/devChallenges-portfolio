import "./Button.css";

const Button = (props) => {
  return <button className={props.buttonClasses}>{props.buttonName}</button>;
};

export default Button;
