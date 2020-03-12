import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Box = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const history = useHistory();
  const formOnSubmitHandler = event => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: inputEmail,
        password: inputPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          history.push("/services");
        } else if (data.error) {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={formOnSubmitHandler}>
      <div>
        <div className="container mt-5">
          <form>
            <div className="form-group text-muted">
              <label for="exampleInputEmail1 ">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={inputEmail}
                name={inputEmail}
                onChange={e => setInputEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group text-muted">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={inputPassword}
                name={inputPassword}
                onChange={e => setInputPassword(e.target.value)}
              />
            </div>
            <div className="form-group form-check text-muted">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </form>
  );
};
export default Box;
