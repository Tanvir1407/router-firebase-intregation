import React from 'react';
import './Register.css';

const Register = () => {
  
    return (
      <div className="register">
        <h2>Please Register !!</h2>
        <div className="register-box">
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <input type="email" placeholder="Enter Your Email" />
          <br />
          <input type="password" placeholder="Enter Your Password" />
          <br />
          <button className="btn">Register </button>
          
        </div>
      </div>
    );
};

export default Register;