import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const signInHandler = (event) => {
    event.preventDefault();
    setInputs({
      email: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="login_container">
      <div className="login_form">
        <div className="login_left">
          <h1>Login</h1>
          <form onSubmit={signInHandler}>
            <input
              onChange={changeHandler}
              value={inputs.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            ></input>
            <input
              onChange={changeHandler}
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="login_right">
          <img src="https://ak15suthar.github.io/Portfolio/img/work.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;