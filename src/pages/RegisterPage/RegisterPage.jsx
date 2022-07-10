import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import TextField from '@mui/material/TextField';
import { Wrapper, Form, Button } from './RegisterPage.styled';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <h1>Registration</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          size="small"
          color="grey"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          size="small"
          color="grey"
          type="email"
          name="email"
          value={email}
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
          disabled={!name || !email || !password}
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Create account
        </Button>
      </Form>
    </Wrapper>
  );
}
