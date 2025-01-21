import { useState, useEffect } from 'react';
const usePageSize = (initialPageSize: number, setPageSize: (size: number) => void) => {
  const [pageSize, setLocalPageSize] = useState<number>(initialPageSize);

  const handlePageSizeChange = (newPageSize: number) => {
    setLocalPageSize(newPageSize);
    setPageSize(newPageSize);
    localStorage.setItem('pageSize', String(newPageSize));
  };

  useEffect(() => {
    const savedPageSize = localStorage.getItem('pageSize');
    if (savedPageSize) {
      setLocalPageSize(Number(savedPageSize));
      setPageSize(Number(savedPageSize));
    }
  }, [setPageSize]);

  return {
    pageSize,
    handlePageSizeChange,
  };
};

export default usePageSize;
