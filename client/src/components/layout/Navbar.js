import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>New releases</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
