
import React, { useEffect, useState } from 'react';
import './Pagination.scss';

const Pagination = ({ noOfBlogs, paginateHandler }) => {  
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = isMobile ? 18 : 6;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  let noOfPaginateItems = Math.ceil(noOfBlogs / itemsPerPage) 

if (noOfBlogs < currentPage * itemsPerPage){
  noOfPaginateItems += 11  
  
  
}


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginateHandler(currentPage - 1);
    }
  };

  const handleNextPage = () => {
 
    if (currentPage < noOfPaginateItems) {
      setCurrentPage(currentPage + 1);
      paginateHandler(currentPage + 1);
    }
  };

   // Determine o índice inicial e final para renderizar os botões de página
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, noOfBlogs);


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
      
    
      {
      Array.from({ length: noOfPaginateItems}).map((_, idx) => {
          idx += 5;
       
          console.log(`Índice: ${idx}`);
        return (
          <button
            type="button"
            className={`paginate-item font-rubik bg-purple flex align-center justify-center text-white ${
              currentPage === idx + 1 ? 'active' : ''
            }`}
            onClick={() => {
              setCurrentPage(idx + 1);
              paginateHandler(idx + 1);
            }}
            key={idx}
          >
            {idx + 1}
          </button>
        );
      })}

      {isMobile && (
        <button
          type="button"
          className={`paginate-item font-rubik text-purple flex align-center justify-center ${
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

