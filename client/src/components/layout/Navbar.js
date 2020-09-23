import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { logout } from "../../actions/authentication";

const StyledHeader = styled.header`
  width: 100%;
  background: grey;
  position: fixed;
  height: 3em;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2em;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledAppTitleLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding-left: 5px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  top: 8px;
  right: 10px;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    transition: all 0.3s linear;
    position: relative;
    background: white;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      display: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9;
  background: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
`;

const Navbar = ({ authentication: { isAuthenticated, loading }, logout }) => {
  const [open, setOpen] = useState(false);
  const loggedUserLinks = (
    <>
      <Link to='/' onClick={() => setOpen(!open)}>
        Browse albums
      </Link>

      <Link to='/search' onClick={() => setOpen(!open)}>
        Search albums
      </Link>

      <Link
        to='/'
        onClick={() => {
          logout();
          setOpen(!open);
        }}
      >
        Logout
      </Link>
    </>
  );

  const guestLinks = (
    <>
      <StyledLink to='/' onClick={() => setOpen(!open)}>
        Browse albums
      </StyledLink>
      <StyledLink to='/search' onClick={() => setOpen(!open)}>
        Search albums
      </StyledLink>
      <StyledLink to='/register' onClick={() => setOpen(!open)}>
        Register
      </StyledLink>
      <StyledLink to='/login' onClick={() => setOpen(!open)}>
        Login
      </StyledLink>
    </>
  );

  return (
    <StyledHeader>
      {/* <StyledAppTitleLink to='/'>ALBUM REVIEWS</StyledAppTitleLink> */}
      <StyledBurger
        aria-label='toggle menu'
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledNav open={open}>
        {!loading && <>{isAuthenticated ? loggedUserLinks : guestLinks}</>}{" "}
      </StyledNav>
    </StyledHeader>
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
