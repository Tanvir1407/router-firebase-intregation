import React from 'react';
import useFirebase from "../../hooks/useFirebase";
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
      <div className="login">
        <h2>Please Login</h2>
        <div className="login-box">
          <input type="email" placeholder="Enter Your Email" />
          <br />
          <input type="password" placeholder="Enter Your Password" />
          <br />
          <button className="btn">Login</button>
          <button onClick={signInWithGoogle} className="btn">
            Google{" "}
          </button>
        </div>
      </div>
    );
};

export default Login;<h3>Please Login</h3>