import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confromPassword, setConfromPassword] = useState("");
  const [error, setError] = useState("");
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };

  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const handelConmromPassword = (event) => {
    setConfromPassword(event.target.value);
  };

  const handelError = (event) => {
    setError(event.target.value);
  };
  const handCreactUser = (event) => {
    event.precentDefault();
    if (password !== confromPassword) {
      setError("Your password did not match");
      return;
    }
  };
  return (
    <div className="From-Container">
      <form onSubmit={handCreactUser}>
        <div>
          <h2 className="text-color">Sing Up</h2>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input onBlur={handelEmail} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              onBlur={handelPassword}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confrom Password:</label>
            <input
              onBlur={handelConmromPassword}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="submit-data" type="button" value="Submit Data" />
          <p className="infro">
            Already have an account?
            <Link className="link-from" to={"/login"}>
              Login
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

export default SingUp;
