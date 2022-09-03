import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieContext from "../MovieContext";
import { logout, useLocalStorage } from "../useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const navigate = useNavigate();

  const {login, user} = useContext(MovieContext)

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("")

  const changeHandler = (event) => {
    event.preventDefault();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const validateFormInputs = () => {
    let isValid = true;
    if (inputs.email === "" || inputs.password === "") {
      setError("Input field required")
      isValid = false;
    }
    return isValid
  }

  const signInHandler = (event) => {
    event.preventDefault();
    if (!validateFormInputs()) {
      return;
    }
    setInputs({
      email: "",
      password: "",
    });
    // setError("")
    login({email: inputs.email})
    navigate("/");
  };

  return (
    <div className="login_container">
      <FontAwesomeIcon className="back_icon" icon="fa-solid fa-arrow-left" onClick={() => navigate("/")}/>
      {!user.email ? (
        <div className="login_form">
        <div className="login_left">
          <h1>Login</h1>
          <form onSubmit={signInHandler}>
            <input
              className={error ? "error" : ""}
              onChange={changeHandler}
              value={inputs.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            ></input>
            <input
              className={error ? "error" : ""}
              onChange={changeHandler}
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <p style={{marginBottom: "10px", color: "red"}}>{error}</p>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="login_right">
          <img src="https://ak15suthar.github.io/Portfolio/img/work.png"></img>
        </div>
      </div>
      ) 
      : 
      <div className="logout">
        <div>
            <FontAwesomeIcon 
              style={{fontSize: "150px"}}
              icon="fa-solid fa-circle-user" 
              onClick={() => navigate("/login")}
            />
        </div>
        <h2>Email: {user.email}</h2>
        <button onClick={() => {
          logout()
          navigate("/")
          window.location.reload(false);
        }}>Logout</button>
      </div>
    }
    </div>
  );
};

export default Login;