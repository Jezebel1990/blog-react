import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = ({ noOfBlogs, paginateHandler, currentPage }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const itemsPerPage = isMobile ? 18 : 6;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  const noOfPaginateItems = Math.ceil(noOfBlogs / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginateHandler(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < noOfPaginateItems) {
      paginateHandler(currentPage + 1);
      setVisibleItems(itemsPerPage); 
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + visibleItems, noOfBlogs);

  return (
    <div className="paginate-items flex align-center justify-center">
      {isMobile && (
        <button
          type="button"
          className={`paginate-item font-rubik text-purple flex align-center justify-center ${
            currentPage === 1 ? 'active' : ''
          }`}
          onClick={handlePrevPage}
        >
          {'<'}
        </button>
      )}

      {Array.from({ length: noOfPaginateItems }).map((_, idx) => {
        return (
          <button
            type="button"
            className={`paginate-item font-rubik bg-purple flex align-center justify-center text-white ${
              currentPage === idx + 1 ? 'active' : ''
            }`}
            onClick={() => paginateHandler(idx + 1)}
            key={idx}
          >
            {idx + 1}
          </button>
        );
      })}

      {isMobile && (
        <button
          type="button"
          className={`paginate-item font-rubik  text-purple flex align-center justify-center ${
            currentPage === noOfPaginateItems ? 'active' : ''
          }`}
          onClick={handleNextPage}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Pagination;
