import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { NavLink} from "react-router-dom";
import Logo from "../images/logo.png";
import Signin from './Signin';
import Signup from './Signup';

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar expand="md">
          <Container>
            <NavbarBrand className="mr-3" href="/">
              <h1>
                <img src={Logo} alt="" width="150" height="100" />
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} style={{backgroundColor:"gray"}} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="nav-link  mr-5"
                    to="/products"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Our Products{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/mouse"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Mouse
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/keyboard"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Keyboard{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/mousepad"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Mouse Pad
                  </NavLink>
                </NavItem>
                <Nav className="ml-5" navbar>
                <NavItem>  <Signin/> </NavItem>
                &nbsp; &nbsp;
                <NavItem>  <Signup/>  </NavItem>
                </Nav>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
