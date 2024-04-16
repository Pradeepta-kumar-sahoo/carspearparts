import React from "react";
import Marketlist from "./Marketlist";

const Market = () => {
  return (
    <>
      <div className="flex justify-start items-center my-16">
        <h1 className="text-3xl font-bold">
          Why Choose{" "}
          <span className="text-3xl font-bold text-blue-400">
            Aftermarket Products?
          </span>
        </h1>
      </div>
      {/* card list  */}
      <div className="  md:flex md:flex-col ">
        <div className="flex justify-between items-center flex-row w-auto h-96 gap-5 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg max-lg:my-96  ">
          {Marketlist.map((key) => {
            return (
              <>
                <div className=" flex justify-evenly hover:shadow-2xl shadow-xl items-baseline flex-col w-80  h-full py-7 md:flex md:flex-col ">
                  <img src={key.img}></img>
                  <h1 className="px-5 my-3">{key.title}</h1>
                  <p className="px-5">{key.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Market;
