import React, { Component } from "react";
import { Switch, Route,  withRouter, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Signin from "./Signin";
import Signup from "./Signup";
import OurProducts from "./OurProducts";
import Mouse from "./Mouse";
import Keyboard from "./Keyboard";

import { useSelector } from "react-redux";
import Mousepad from "./Mousepad";



function Main() {

    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch >
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/signup" component={Signup}/> */}
          <Route exact path="/signin" component={Signin}/>
          <Route exact path='/products' component={OurProducts}/>
          <Route exact path='/mouse' component={Mouse}/>
          <Route exact path='/keyboard' component={Keyboard}/>
          <Route exact path='/mousepad' component={Mousepad}/>
        </Switch>
       
      </div>
      </BrowserRouter>
    );
}

export default withRouter(Main);
