import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";
import Tour from "./components/Tour";
import Login from "./components/Login";
import About from "./components/About";
import Blogs from "./components/Blogs";
import CreateBlogs from "./components/CreateBlogs";
import Registration from "./components/Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Tour path="tour/:id"/>
          <Login path="login"/>
           <Registration  path="reg"/> 
           <Blogs  path="my-blogs"/> 
           <CreateBlogs  path="create-blogs"/>
        </Router>
      </div>
    );
  }
}

export default App;
