import React, { useState } from 'react';
import Pagination from './Pagition/Pagination'; // Import Pagination component
import HundaiArray from './HundaiArray';

const Hundai = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page

  // Logic to get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = HundaiArray.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {currentItems.map((keys, index) => (
          <div key={index} className="flex flex-col items-center mx-4 my-4 justify-evenly gap-8 group">
            <div className="relative overflow-hidden w-60 h-60">
              <img className="object-cover w-full h-60" src={keys.ProductImg} alt={keys.ProductName} />
              <div className="absolute h-full bottom-0 bg-sky-400/70 text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-hover:ease-out duration-75">
                <p className="my-2 text-justify gap-2 px-1">{keys.ProductDescription}</p>
              </div>
            </div>
            <h1>{keys.ProductName}</h1>
            <div className="flex justify-between items-center w-60 mt-2">
              <h2>MRP: ₹{keys.ProductPrice}</h2>
              <button className="bg-sky-400 text-white px-4 py-2 rounded-md">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={HundaiArray.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Hundai;
