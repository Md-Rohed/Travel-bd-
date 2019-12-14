import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import store from "store";
import { navigate } from "@reach/router";
import "./login/login.css";

import "../App.css";

import useForm from "react-hook-form";

function Blogs() {
  const { register, handleSubmit, watch, errors } = useForm();
  async function onSubmit(data) {
    console.log(data);
    const { userId, token } = store.get("user");
    const payload = {
      title: data.title,
      description: data.description,
      author: userId
    };
    let config = {
      headers: {
        "x-access-token": token
      }
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/blog",
        payload,
        config
      );
      navigate("/my-blogs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Title</h2>
        <input name="title" placeholder="Add blog Title" ref={register} />
        <h2>Description</h2>
        <textarea name="description" placeholder="blogs body..." ref={register({ required: true })} />
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Blogs;
