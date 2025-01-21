import { useState, useEffect } from "react";
import { IUseActivePage } from "../types/interfaces";
const useActivePage = ({ initialPage, totalPages, setCurrentPage }: IUseActivePage) => {
  const [activeIndex, setActiveIndex] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(activeIndex);
    localStorage.setItem("page", String(activeIndex));
  }, [activeIndex, setCurrentPage]);

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setActiveIndex(page);
    }
  };
  return [activeIndex, setPage] as const;
};

export default useActivePage;