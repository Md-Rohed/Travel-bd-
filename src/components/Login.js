import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login/login.css";
import axios from "axios";
import store from "store";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    let resp;
    event.preventDefault();
    try {
      resp = await axios.post("http://localhost:8000/api/auth", {
        email,
        password
      });
      const { response, success } = resp.data;

      if (success) {
        response.isLoggedIn = true;
        store.set("user", response);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("could not login");
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
