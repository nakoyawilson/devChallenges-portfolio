import { usePagination, DOTS } from "./usePagination";
import PaginationButton from "./PaginationButton";
import "./Pagination.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container">
      <PaginationButton
        paginationButtonClasses="pagination-item"
        clickFunction={onPrevious}
        paginationLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="arrow-icon left-arrow"
          >
            <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
          </svg>
        }
      />
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationButton
              paginationButtonClasses="pagination-item dots"
              clickFunction=""
              paginationLabel="&#8230;"
            />
          );
        }
        return (
          <PaginationButton
            paginationButtonClasses="pagination-item"
            clickFunction={() => onPageChange(pageNumber)}
            paginationLabel={pageNumber}
          />
        );
      })}
      <PaginationButton
        paginationButtonClasses="pagination-item"
        clickFunction={onNext}
        paginationLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="arrow-icon right-arrow"
          >
            <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
          </svg>
        }
      />
    </ul>
  );
};

export default Pagination;
