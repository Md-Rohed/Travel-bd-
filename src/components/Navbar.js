import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import { navigate } from "@reach/router";
import store from "store";
import "../App.css";

class NavbarMain extends React.Component {
  state = {
    isOpen: false,
    loggedIn: true
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogin = () => {
    const { isLoggedIn } = store.get("user");
    if (isLoggedIn) {
      this.setState({ loggedIn: false });
      store.set("user", { isLoggedIn: false });
    } else {
      navigate("/login");
    }
  };

  render() {
    const { isLoggedIn } = store.get("user");
    console.log("isLoggedIn", isLoggedIn)
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="/">Manila Tourism</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#mainCarousel">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Package</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/my-blogs">Blogs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/create-blogs">Create Blogs</NavLink>
                </NavItem>
                <Button color="success" onClick={this.handleLogin}>
                  {isLoggedIn ? "Logout" : "Login"}
                </Button>{" "}
                  {isLoggedIn ? "" : <NavLink href="/reg">Register</NavLink>}
                {" "}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
