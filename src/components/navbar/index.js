import React from "react";
import "./style.css";

let Navbar = function (props) {
  return (
    <nav className="navbar navbar-dark   info-color-dark justify-content-center">
      <span className="navbar-brand">
        <img
          src="https://fontmeme.com/permalink/200603/5f60922e5be351d2ce3e32d9d13d6d21.png"
          height="35"
          alt="mdb logo"
          className="mr-1"
        />
        {/* {props.title} */}
      </span>
    </nav>
  );
};

export default Navbar;
