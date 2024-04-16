import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log('currentPage:', currentPage);
  // console.log('pageNumbers:', pageNumbers);

  return (
    <nav>
      <ul className="pagination flex justify-center">
        {pageNumbers.map((number, index) => {
          // console.log('number:', number);
          // console.log('index:', index);
          return (
            <li key={number} className={`page-item ${currentPage === index + 1 ? 'active' : 'active:bg-white active:text-sky-400'}`}>
              <button
                onClick={() => paginate(number)}
                className={`page-link bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-white hover:text-sky-400 ${currentPage === index + 1 ? 'active:bg-white active:text-sky-400' : ''}`}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
