import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const onChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(loginData);
    //check for passwords equality
  };

  const { email, password } = loginData;
  return (
    <Fragment>
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
        Don't have an account?<Link to='/register'>Register here</Link>
      </p>
    </Fragment>
  );
};

export default Login;
