import { useState, useEffect } from 'react';
import { IUsePagination } from '../types/interfaces';
const usePagination = ( { total, pageSize, setCurrentPage }: IUsePagination) => {
  const maxVisiblePages = 6;
  const [totalPages, setTotalPages] = useState<number>(Math.max(1, Math.round(total / pageSize)));
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [navigationRange, setNavigationRange] = useState<[number, number]>([1, 6]);

  const updateNavigationRange = (page: number) => {
    const [currentStart, currentEnd] = navigationRange;

    let newStart = currentStart;
    let newEnd = currentEnd;

    if (page === currentStart) {
      newStart = Math.max(1, currentStart - (maxVisiblePages - 1));
      newEnd = Math.min(totalPages, newStart + maxVisiblePages - 1);
    } else if (page === currentEnd) {
      newEnd = Math.min(totalPages, currentEnd + (maxVisiblePages - 1));
      newStart = Math.max(1, newEnd - maxVisiblePages + 1);
    }

    setNavigationRange([newStart, newEnd]);
    localStorage.setItem('range', JSON.stringify([newStart, newEnd]));
    setActiveIndex(page);
    setCurrentPage(page);
  };

  useEffect(() => {
    const newTotalPages = Math.max(1, Math.round(total / pageSize));
    setTotalPages(newTotalPages);

    setNavigationRange((prevRange) => {
      const [prevStart, prevEnd] = prevRange;
      
      const newStart = Math.max(1, Math.min(prevStart, newTotalPages - maxVisiblePages + 1));
      
      const newEnd = Math.min(newTotalPages, newStart + maxVisiblePages - 1);

      return [newStart, newEnd];

    });
    setActiveIndex(1);
  }, [total, pageSize]);

  const navigationNumbers = Array.from(
    { length: navigationRange[1] - navigationRange[0] + 1 },
    (_, i) => navigationRange[0] + i
  );

  useEffect(() => {
    setCurrentPage(activeIndex);
    localStorage.setItem('page', String(activeIndex));
  }, [activeIndex, setCurrentPage]);

  const handleNextPage = () => {
    if (activeIndex < totalPages) {
      setActiveIndex(activeIndex + 1);
      if (activeIndex >= navigationRange[1]) {
        const newStart = Math.min(totalPages - maxVisiblePages + 1, navigationRange[1]);
        const newEnd = newStart + maxVisiblePages - 1 <= totalPages ? newStart + maxVisiblePages - 1 : totalPages;
        setNavigationRange([newStart, newEnd]);
        localStorage.setItem('range', JSON.stringify([newStart, newEnd]));
      }
    }
  };

  return {
    activeIndex,
    navigationNumbers,
    navigationRange,
    updateNavigationRange,
    handleNextPage,
  };
};

export default usePagination;
