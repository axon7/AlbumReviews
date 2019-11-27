import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authentication";

const Login = ({ login, isAuthenticated }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginData;

  const onChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/search' />;
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            name='email'
            placeholder='E-mail address '
            value={email}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            name='password'
            minLength='6'
            type='password'
            placeholder='password'
            value={password}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
      <p>
        Dont have an account?<Link to='/register'>Register here</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
