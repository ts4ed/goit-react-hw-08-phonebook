import React from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Wrapper, TextTyped, Title, Button } from './HomePage.styled';

const HomePage = () => {
  const el = useRef(null);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm the one you've been looking for so long.... I'm"], // Strings to display
      startDelay: 1200,
      typeSpeed: 40,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Wrapper>
      <TextTyped ref={el}></TextTyped>
      <Title
        as={motion.h1}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 5.1 }}
      >
        Phonebook
      </Title>
      {!isLoggedIn && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 6.2 }}
        >
          <Button
            as={Link}
            to="/register"
            className="home-page__button"
            variant="secondary"
          >
            Sign Up
          </Button>
          <Button as={Link} to="/login" variant="secondary">
            Sign In
          </Button>
        </motion.div>
      )}
    </Wrapper>
  );
};

export default HomePage;
