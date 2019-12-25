import React, { Component } from "react";
import "./styleRegistration/registration.css";
import axios from "axios"
import { navigate } from "@reach/router"
import store from "store"


export default class SignUp extends Component {
    async createUser(event){
        event.preventDefault();
        const {first, email, pass} = event.target
        const { userId, token } = store.get("user");
        let config = {
          headers: {
            "x-access-token": token
          }
        };
        const payload = {
            "name": first.value,
            "email": email.value,
            "password": pass.value,
            "confirmed": true
        }

        try {
            const { data } = await axios.post(
              "http://localhost:8000/api/user",
               payload,
              config
            );
            
            navigate("/login")

          } catch (error) {
            console.log(error);
            alert("sorry could not register")
          }
    }

    render() {
        return (
            <form className="form" onSubmit={this.createUser}>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="first" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  name="pass"/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}