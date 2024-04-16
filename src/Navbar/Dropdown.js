import React, { useState } from "react";
import { Menuitem } from "./Menuitem";
import { Link } from "react-router-dom";
import "./Dropdown.module.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const hadelClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={hadelClick}
        className={click ? 'dropdown-menu clicked' : "dropdown-menu"}
      >
        {Menuitem.map((item, index) => {
          return (

            <li key={index} onClick={() => setClick(false)}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
