import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const formOnSubmitHandler = e => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);

        if (data.token) {
          history.push("/home");
        } else if (data.error) {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={formOnSubmitHandler}>
          <div className="form-group text-white">
            <label for="exampleInputEmail1 ">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-white">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={password}
              onChange={p => setPassword(p.target.value)}
            />
          </div>
          <div className="form-group form-check text-white">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
