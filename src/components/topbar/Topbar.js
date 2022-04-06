import React from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

const Topbar = () => {
  return (
    <div>
      <h1 className="heading">
        <Link to={"/accordion"}>
          <span>Accordion</span>
        </Link>
        <Link to={"/search"}>
          <span>Search</span>
        </Link>
        <Link to={"/dropdown"}>
          <span>Dropdown</span>
        </Link>
      </h1>
    </div>
  );
};

export default Topbar;
