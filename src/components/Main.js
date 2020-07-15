import React, { Component } from "react";
import { Switch, Route,  withRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Signin from "./Signin";
import Signup from "./Signup";
import OurProducts from "./OurProducts";



class Main extends Component {

  render() {



    return (
      <div>
        <Header />
        <Switch location={this.props.location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route path='/products' component={OurProducts}/>
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(Main);
