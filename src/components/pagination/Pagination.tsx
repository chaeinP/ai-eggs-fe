import ArrowLeft from "@public/icons/arrowLeft.svg";
import ArrowRight from "@public/icons/arrowRight.svg";
import { UsePaginationHook } from "./usePagination";
import styles from "@src/styles/components/_pagination.module.scss";

export default function Pagination({
  currentPage,
  setCurrentPage,
  pageList,
  setPageList,
  round,
  maxRound,
  handleNextRound,
  handlePrevRound,
}: UsePaginationHook) {
  const isFirst = round === 1 && currentPage === 1;
  const isLast = round === maxRound && currentPage === pageList[pageList.length - 1];

  return (
    <ul className={styles.pagination}>
      <li className={isFirst ? styles.arrow_disabled : styles.default} onClick={isFirst ? undefined : handlePrevRound}>
        <ArrowLeft fill="#2E3642" />
      </li>
      {pageList.map((page) => (
        <li
          className={currentPage === page ? styles.selected : styles.default}
          key={page}
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </li>
      ))}
      <li className={isLast ? styles.arrow_disabled : styles.default} onClick={isLast ? undefined : handleNextRound}>
        <ArrowRight fill="#2E3642" />
      </li>
    </ul>
  );
}
