import React, { Component } from 'react';
import {
  Button, 
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import {connect} from 'react-redux';
import { signin } from '../redux/authActions';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types"

class Signin extends Component {
  
 state={
   modal: false,
   email:"",
   password:"",
   redirect: false,
   errors: ""
 }
  
 toggle = () => {
  this.setState({
    modal: !this.state.modal,
  });
};

onChange = (name) => (e) => {
  const value = name === "image" ? e.target.files[0] : e.target.value;
  this.setState({ [name]: value });
};

onSubmit = (e) => {
  e.preventDefault();
  
  this.props.signin(this.state.email, this.state.password);
  
  if(this.props.error){
    this.setState({errors: this.props.error})
  } else (
  this.setState({redirect: true})
  )
  this.toggle();
 
};

  render(){
    if(this.state.redirect){
      return(
      <Redirect to={"/products"}/>
      )
    }

    if(this.state.errors){
      return(
      <Alert>{this.state.errors}</Alert>
      )
    }

      return (
    <div>
      
      <Button  outline onClick={this.toggle}>
        Login
      </Button>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={this.onChange("email")}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={this.onChange("password")}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
     </div>
 )
}
}

Signin.propTypes = {
  signin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  error: PropTypes.string
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.user.error
});

export default connect(mapStateToProps, { signin })(Signin);

