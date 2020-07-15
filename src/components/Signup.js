import React, {useEffect,useState } from 'react';
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
import { connect,useSelector,useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../redux/authActions';
import { clearErrors } from '../redux/errorActions';
import { Redirect } from 'react-router-dom';

function Signup (props) {

  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { userInfo } = userRegister;
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
      dispatch(register(username, email, password));
  }

  
      return (
    <div>
      <Button outline onClick={toggle} href="#">
        Register
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
           <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="username">Name</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="mb-3"
                onChange={(e) => setUsername(e.target.value)}
              />

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
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
     </div>
      )
}

export default Signup;

