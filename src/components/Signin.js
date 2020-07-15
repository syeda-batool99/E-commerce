import React, { useEffect, useState } from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { signin } from '../redux/authActions';
import { clearErrors } from '../redux/errorActions';
import { Redirect } from 'react-router-dom';

function Signin(props) {
  
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (userInfo) {
      redirect();
    }
    return () => {
      //
    };
  }, [userInfo]);

  const redirect = ()=> {
    return (
      <div>
      <Redirect to={"/products"}/>
      </div>
    )
  }

  const toggle = () => {
    setModal(!modal);
}

  const onSubmit = e => {
      e.preventDefault();
      dispatch(signin(email, password));
      
  }

  
      return (
    <div>
      <Button  outline onClick={toggle}>
        Login
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => setPassword(e.target.value)}
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

export default Signin;

