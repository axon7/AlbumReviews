import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { registerUser } from '../../actions/authentication';

const Register = ({ setAlert, registerUser }) => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const onChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    // console.log(registerData);
    if (registerData.password !== registerData.password2) {
      setAlert('passwords are not equal', 'danger');
    } else {
      // eslint-disable-next-line no-use-before-define
      registerUser({ name, password, email });
    }

    // check for passwords equality
  };

  const { name, email, password, password2 } = registerData;
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            name="email"
            placeholder="E-mail address "
            value={email}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            name="password"
            minLength="6"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <div>
          <input
            name="password2"
            minLength="6"
            type="password"
            placeholder="repeat password"
            value={password2}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, registerUser }
)(Register);
