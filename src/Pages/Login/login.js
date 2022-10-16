import React from "react";
import { Link,} from "react-router-dom";
import "./login.css";


const Login = () => {
  
    
  return (
    <div className="login-section">
      <div className="login-content">
        <div className="login-text">
          <h1 className="login-title">Log in</h1>
          <label className="label email">Email :</label>
          <input  className="input adress" type="email" required></input>
          <label className="label password">Password :</label>
          <input  className="input pass" type="password" required></input>
          
          <button className="btn">
            Log in
          </button>
          <p>Don't have a account with us! Register here</p>
          <Link to='/register'><button
            to="/signup"
            style={{ textDecoration: "none" }}
            className="login"
          >
            New User
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
