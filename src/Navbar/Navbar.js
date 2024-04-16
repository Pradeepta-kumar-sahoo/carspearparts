import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import Dropdown from "./Dropdown";
// import { Link } from "react-router-dom";
// import SearchComponent from "../SearchComponent";

const Navbar = () => {
  return (
    <div className="flex  justify-evenly bg-transparent  shadow-lg shadow-white h-auto align-middle ">
      <h1 className="text-4xl font-bold text-black">
        Car <span className="text-sky-400">Spareparts</span>
      </h1>

      <div className="flex gap-3">
        <FontAwesomeIcon className="my-3 h-7" icon={faCartShopping} />
        <FontAwesomeIcon className=" my-3 h-7 " icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
