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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../redux/authActions';
import { clearErrors } from '../redux/errorActions';

class Signup extends Component {
  
    state={
        modal: false,
        username: "",
        email: "",
        password:"",
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        token: PropTypes.element,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        if(error !== prevProps.error) {
            if(error.id === "REGISTER_FAIL"){
                this.setState({msg: error.msg.msg});
            } else {
                this.setState({msg: null})
            }
        }
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
    
      const {username, email, password} = this.state;

      const newUser = {
          username, email, password
      };

      this.props.register(newUser);

  }

  render(){
      return (
    <div>
      <Button outline onClick={this.toggle} href="#">
        Register
      </Button>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Register</ModalHeader>
        <ModalBody>
        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="username">Name</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="mb-3"
                onChange={this.onChange}
              />

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
                Register
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

export default connect(mapStateToProps, { register, clearErrors })(
  Signup
);

