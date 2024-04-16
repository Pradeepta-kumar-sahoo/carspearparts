import React,{useContext} from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Maintaiance from "./Maintaiance";
// import MyContext from "../../../../Mycontext/MyContext";
import { useMyContext } from "./Product/Context";

const Card = () => {
  const { basename } = useMyContext();
  return (
    <>

      <div className="flex flex-row justify-evenly max-lg:flex max-md:flex-col max-lg:flex-nowrap max-lg:justify-center max-lg:items-center max-lg:w-full gap-6">
        {/* <h1>{basename}</h1> */}
        {Maintaiance.map((list, index) => {
          return (
            // <Link key={index} to={list.path}> {/* Wrap the card with Link */}
              <div
                className="flex justify-evenly hover:shadow-2xl shadow-xl items-baseline w-full h-full py-7 md:flex md:flex-col"
                key={list.id}
              >
                <img
                  className="object-cover"
                  src={list.img}
                  alt={list.title}
                />
                <h1>{list.title}</h1>
              </div>
            //  </Link>
          );
        })}
      </div>
    </>
  );
};

export default Card;