import React from "react";

import Card from "./Card";
import Maintaiance from "../SearchCatagory/Maintaiance"
import { MyProvider } from "./Product/Context";
// import { MyProvider } from "./Product/Context";


const SearchCatagory = () => {
  

  return (
    <>
      <div className=" justify-start items-baseline flex my-14 max-lg:flex">
        <h1 className="font-bold text-3xl">
          Search By <span className="text-sky-600">Category</span>
        </h1>
      </div>

      <div>
        
         <MyProvider>
          <Card/>
         </MyProvider>
        
      </div>
    </>
  );
};

export default SearchCatagory;
