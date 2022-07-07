import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Wrapper, Button, Form } from './LoginPage.styled';
import { motion } from 'framer-motion';

import TextField from '@mui/material/TextField';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <h1>Hello</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={email}
          size="small"
          color="grey"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          value={password}
          size="small"
          color="grey"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          disabled={!email || !password}
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Log in
        </Button>
      </Form>
    </Wrapper>
  );
}
