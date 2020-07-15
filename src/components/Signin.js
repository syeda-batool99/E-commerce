import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../redux/authActions';
import { clearErrors } from '../redux/errorActions';

class Signin extends Component {
  
    state={
        modal: false,
        email: "",
        password:"",
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        token: PropTypes.element,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired
    }

  toggle = () => {
      this.setState({
          modal: !this.state.modal
      })
  }

  onChange = e => {
      this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = e => {
      e.preventDefault();
    
      const {email, password} = this.state;

      const newUser = {
          email, password
      };

      this.props.login(newUser);
      
  }

  render(){
      return (
    <div>
      <Button  outline onClick={this.toggle} href="#">
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
                onChange={this.onChange}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={this.onChange}
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


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(
  Signin
);

