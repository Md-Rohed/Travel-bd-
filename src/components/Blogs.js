import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import store from "store";

import "../App.css";

class Blogs extends React.Component {
  state = {
    blogs: []
  };

  async componentDidMount() {
    const { userId, token } = store.get("user");
    let config = {
      headers: {
        "x-access-token": token
      }
    };
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/blog/my-blog",
        config
      );
      this.setState({ blogs: data.response });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="subComponent">
        <Container>
          blogPage
          {this.state.blogs.map(blog => {
            return <h1>{blog.title}</h1>;
          })}
        </Container>
      </div>
    );
  }
}

export default Blogs;
