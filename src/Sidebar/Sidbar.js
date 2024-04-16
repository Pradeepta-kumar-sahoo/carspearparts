import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import Signin from "../Navbar/Sign in/Signin";
const Sidbar = () => {
  return (
    <div className="flex flex-1 ">
      <div className="bg-slate-400 h-screen w-48 flex flex-col px-4">
        <Link>Search by Vehicle</Link>
        <Link>Search by Number Plate </Link>
        <Link>Brands </Link>
        <Link> Car Makers</Link>
        <Link> Contact Us</Link>
      </div>
      <FontAwesomeIcon icon={faSquareXmark} />
      {/* <div>home</    */}
      {/* <Signin/> */}
    </div>
  );
};

export default Sidbar;
