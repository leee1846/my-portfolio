import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to='/'>cartoon</Link>
      <Link to='/about'>about</Link>
      <Link to='/projects'>projects</Link>
    </nav>
  );
}

export default Nav;
