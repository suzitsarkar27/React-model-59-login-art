import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="From-Container">
      <form action="">
        <div>
          <h2 className="text-color">Login</h2>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />
          </div>
          <input className="submit-data" type="button" value="Submit Data" />
          <p className="infro">
            New to Ema-john ?
            <Link className="link-from" to={"/singpu"}>
              Create New Accoun
            </Link>
          </p>
        </div>
        <span className="from-border">
          <hr />
          or
          <hr />
        </span>
        <button className="from-google">Continu with Google</button>
      </form>
    </div>
  );
};

export default Login;
