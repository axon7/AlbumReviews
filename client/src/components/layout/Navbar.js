import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Browse albums</Link>
          </li>
          <li>
            <Link to='/search'>Search albums</Link>
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
