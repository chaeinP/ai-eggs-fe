import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface UsePaginationHook {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageList: number[];
  setPageList: Dispatch<SetStateAction<number[]>>;
  handleNextRound: () => void;
  handlePrevRound: () => void;
  maxRound: number;
  round: number;
  total: number;
}

export function usePagination({
  total,
  pageSize = 10,
  defaultPageListCount = 5,
}: {
  total: number;
  pageSize?: number;
  defaultPageListCount?: number;
}): UsePaginationHook {
  const [maxRound, setMaxRound] = useState(Math.ceil(total / (pageSize * defaultPageListCount)));
  const [round, setRound] = useState(1);
  const [pageList, setPageList] = useState(
    Array.from(
      {
        length: Math.ceil(total / pageSize) > defaultPageListCount ? defaultPageListCount : Math.ceil(total / pageSize),
      },
      (_, i) => i + 1
    )
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMaxRound(Math.ceil(total / (pageSize * defaultPageListCount)));
    setPageList(
      Array.from(
        {
          length:
            Math.ceil(total / pageSize) > defaultPageListCount ? defaultPageListCount : Math.ceil(total / pageSize),
        },
        (_, i) => i + 1
      )
    );
    setRound(1);
    setCurrentPage(1);
  }, [total]);

  const handleNextRound = () => {
    if (round === maxRound && currentPage === pageList[pageList.length - 1]) return;
    if (currentPage === pageList[pageList.length - 1]) {
      setRound(round + 1);
      const newPageList = Array.from(
        {
          length:
            Math.ceil(total / pageSize) > defaultPageListCount ? defaultPageListCount : Math.ceil(total / pageSize),
        },
        (_, i) => i + 1 + round * defaultPageListCount
      );

      setPageList(newPageList);
      setCurrentPage(newPageList[0]);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevRound = () => {
    if (round === 1 && currentPage === pageList[0]) return;
    if (currentPage === pageList[0]) {
      setRound(round - 1);
      const newPageList = pageList.map((page) => page - defaultPageListCount);
      setPageList(newPageList);
      setCurrentPage(newPageList[defaultPageListCount - 1]);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    pageList,
    setPageList,
    handleNextRound,
    handlePrevRound,
    maxRound,
    round,
    total,
  };
}
