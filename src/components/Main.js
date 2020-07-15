import React, { Component } from "react";
import { Switch, Route,  withRouter, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Signin from "./Signin";
import Signup from "./Signup";
import OurProducts from "./OurProducts";
import Mouse from "./Mouse";
import Keyboard from "./Keyboard";
import Footer from "./Footer"
import { useSelector } from "react-redux";



function Main() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


    return (
      <BrowserRouter>
      <div>
        <Header isLogged={userInfo}/>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path='/products' component={OurProducts}/>
          <Route exact path='/mouse' component={Mouse}/>
          <Route exact path='/keyboard' component={Keyboard}/>
        </Switch>
       <Footer/> 
      </div>
      </BrowserRouter>
    );
}

export default withRouter(Main);
