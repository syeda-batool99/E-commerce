import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from "reactstrap";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import Logo from "../images/logo.png";
import Signin from "./Signin";
import Signup from "./Signup";
import { logout } from "../redux/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {itemTotal} from "./cartHelpers";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "aqua" };
  } else {
    return { color: "white" };
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      redirect: false,
    };
  }

  handleLogout = () => {
    this.props.logout();
    this.setState({ redirect: true });
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
            <NavbarToggler
              onClick={this.toggle}
              style={{ backgroundColor: "gray" }}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    className="nav-link  mr-5"
                    to="/products"
                    style={isActive(this.props.history, "/products")}
                  >
                    {" "}
                    Our Products{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/mouse"
                    style={isActive(this.props.history, "/mouse")}
                  >
                    {" "}
                    Mouse
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/keyboard"
                    style={isActive(this.props.history, "/keyboard")}
                  >
                    {" "}
                    Keyboard{" "}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/mousepad"
                    style={isActive(this.props.history, "/mousepad")}
                  >
                    {" "}
                    Mouse Pad
                  </NavLink>
                </NavItem>

                {(this.props.LoggedIn) && (
                  <>
                    <NavItem>
                      <NavLink
                        className="nav-link mr-5"
                        to="/cart"
                        style={isActive(this.props.history, "/cart")}
                      >
                        {" "}
                        Cart
                        <sup>
                        <medium className="cart-badge" style={{color:"aqua"}}>({itemTotal()})</medium>
                    </sup>
                      </NavLink>
                    </NavItem>
                    <NavItem
                      className="nav-link mr-5"
                      style={{ color: "white" }}
                    >
                      {" "}
                      {this.props.user.email}{" "}
                    </NavItem>
                    <NavItem>
                      <Button outline onClick={this.handleLogout}>
                        Logout
                      </Button>
                    </NavItem>
                  </>
                )}
                {(!this.props.LoggedIn) && (
                  <>
                    {" "}
                    <NavItem>
                      {" "}
                      <Signin />{" "}
                    </NavItem>
                    &nbsp; &nbsp;
                    <NavItem>
                      {" "}
                      <Signup />{" "}
                    </NavItem>{" "}
                  </>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        {this.state.redirect ? <Redirect to={"/"} /> : ""}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  LoggedIn: PropTypes.bool,
  token: PropTypes.string
};

const mapStateToProps = (state) => ({
  user: state.user.user,
  token: state.user.token,
  LoggedIn: state.user.isloggedIn,
});

export default withRouter(connect(mapStateToProps, { logout })(Header));
