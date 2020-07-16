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
import { NavLink, Redirect} from "react-router-dom";
import Logo from "../images/logo.png";
import Signin from './Signin';
import Signup from './Signup';
import {logout} from "../redux/authActions";
import PropTypes from "prop-types"
import { connect } from 'react-redux';


class Header extends Component {

  state={
    isOpen:false,
    redirect: false
  }
  

  handleLogout = () => {
    this.props.logout()
  this.setState({redirect: true})
}

  toggle = () => {
    this.setState({isOpen: true})
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
                {(details) ? <NavItem><Button outline onClick={this.handleLogout}>Logout</Button></NavItem>
                : <> <NavItem>  <Signin/> </NavItem>
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
}

const mapStateToProps = (state) => ({
  user: state.user.user
})


export default connect(mapStateToProps, {logout})(Header);
