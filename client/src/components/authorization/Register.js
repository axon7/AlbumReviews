import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(registerData);
    //check for passwords equality
  };

  const { name, email, password, password2 } = registerData;
  return (
    <Fragment>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            name='name'
            placeholder='Name'
            value={name}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
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
        <div>
          <input
            name='password2'
            minLength='6'
            placeholder='repeat password'
            value={password2}
            onChange={e => {
              onChange(e);
            }}
          />
        </div>
        <input type='submit' value='Register' />
      </form>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
