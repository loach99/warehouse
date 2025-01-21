import styles from "./styles/Pagination.module.scss";
import { IPagination } from "../../types/interfaces";
import arrow from "../../assets/MiscIcons/arrow.svg";
import usePagination from "../../hooks/usePagination";
import usePageSize from "../../hooks/usePageSize";
const Pagination = ({ total, pageSize, setPageSize, setCurrentPage }: IPagination) => {
  const { 
    activeIndex, 
    navigationNumbers, 
    updateNavigationRange, 
    handleNextPage 
  } = usePagination({total, pageSize, setCurrentPage});

  const { pageSize: currentPageSize, handlePageSizeChange } = usePageSize(pageSize, setPageSize);

  return (
    <div className={styles.pagination}>
      <div>
        {navigationNumbers.map((el) => (
          <div
            key={el}
            className={`${styles.pagination__item} ${el === activeIndex ? styles.pagination__item__active : ''}`}
            onClick={() => updateNavigationRange(el)}
          >
            {el}
          </div>
        ))}
        <div onClick={handleNextPage} className={styles.pagination__arrow}>
          <img src={arrow} alt="Next" />
        </div>
      </div>
      <div>
        Показывать по:
        <select className={styles.pagination__select} value={currentPageSize} onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
