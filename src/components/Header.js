import React, { useState, useEffect  } from "react";
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
import { useDispatch } from 'react-redux';


function Header (props) {

  const [isOpen, setOpen] = useState(false);;
  const dispatch = useDispatch();
  

  const handleLogout = () => {
  dispatch(logout());
  redirect()
}

const redirect = ()=> {
  return (
    <div>
    <Redirect to={"/"}/>
    </div>
  )
}
  const toggle = () => {
    setOpen(!isOpen);
  };

    const token = props.isLogged;
    return (
      <div>
        <Navbar expand="md">
          <Container>
            <NavbarBrand className="mr-3" href="/">
              <h1>
                <img src={Logo} alt="" width="150" height="100" />
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} style={{backgroundColor:"gray"}} />
            <Collapse isOpen={isOpen} navbar>
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
                {token ? (
                  <>
              <NavItem style={{ color: "white" }}>{token.name}</NavItem>
              <NavItem style={{ color: "white" }}> <Button onClick={handleLogout}>Sign Out</Button> </NavItem>
              </>
            ) : (
              <>
              <NavItem>  <Signin/> </NavItem>
                &nbsp; &nbsp;
                <NavItem>  <Signup/>  </NavItem>
                </>
            )}
                </Nav>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Header;
