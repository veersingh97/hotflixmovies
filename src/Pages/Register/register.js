import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="register-section">
      <div className="register-content">
        <div className="register-text">
          <h1 className="register-title">Register</h1>
          <label className="label email">Email :</label>
          <input  className="input adress" type="email" required></input>
          <label className="label password">Password :</label>
          <input  className="input pass" type="password" required></input>
          <label className="label password">Confirm Password :</label>
          <input  className="input pass" type="password" required></input>
          
          <button className="btn">
            Register
          </button>
          </div>
      </div>
    </div>
  )
}

export default Register;