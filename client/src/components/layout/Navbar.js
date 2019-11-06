import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/authentication';

const Navbar = ({ authentication: { isAuthenticated, loading }, logout }) => {
  const loggedUserLinks = (
    <ul>
      <li>
        <Link to="/">Browse albums</Link>
      </li>
      <li>
        <Link to="/search">Search albums</Link>
      </li>
      <li>
        <Link to="/" onClick={() => logout()}>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/">Browse albums</Link>
      </li>
      <li>
        <Link to="/search">Search albums</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <header>
      <nav>
        <h1>
          <Link to="/">ALBUM REVIEWS</Link>
        </h1>
      </nav>
      {!loading && <>{isAuthenticated ? loggedUserLinks : guestLinks}</>}
    </header>
  );
};

Navbar.propTypes = {
  authentication: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
