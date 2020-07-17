import React, { Component  } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from "reactstrap";
import { NavLink, Redirect, withRouter} from "react-router-dom";
import Logo from "../images/logo.png";
import Signin from './Signin';
import Signup from './Signup';
import {logout} from "../redux/authActions";
import PropTypes from "prop-types"
import { connect } from 'react-redux';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
      return { color: "aqua" };
  } else {
      return { color: "white" };
  }
};

class Header extends Component {

  constructor(props){
    super(props)
  this.state={
    isOpen:false,
    redirect: false
  }
  }

  isAuthenticated = () => {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return null;
    }
};

  handleLogout = () => {
    this.props.logout()
  this.setState({redirect: true})
}

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render(){
    const details = this.props.user;
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
               
                
                <Nav className="ml-5" navbar>
                {(this.isAuthenticated()) && <>
                  <NavItem>
                  <NavLink
                    className="nav-link mr-5"
                    to="/cart"
                    style={isActive(this.props.history, "/cart")}
                  >
                    {" "}
                    Cart
                  </NavLink>
                </NavItem>
                  <NavItem className="nav-link mr-5" style={{ color: "white" }} > {this.isAuthenticated().userExist.email} </NavItem>
                <NavItem><Button outline onClick={this.handleLogout}>Logout</Button></NavItem>
                
                </>
                 }
                 {(!this.isAuthenticated()) && <> <NavItem>  <Signin/> </NavItem>
                &nbsp; &nbsp;
                <NavItem>  <Signup/> </NavItem> </>}
                </Nav>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        {(this.state.redirect) ? <Redirect to={"/"}/> : ""}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  LoggedIn: PropTypes.bool
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  LoggedIn : state.user.isloggedIn
})


export default withRouter(connect(mapStateToProps, {logout})(Header));
