const PaginationButton = (props) => {
  return (
    <li className={props.paginationButtonClasses} onClick={props.clickFunction}>
      {props.paginationLabel}
    </li>
  );
};

export default PaginationButton;
