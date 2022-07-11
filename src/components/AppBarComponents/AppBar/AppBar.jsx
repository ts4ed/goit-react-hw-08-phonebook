import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import { Header } from './AppBar.styled';
import { motion } from 'framer-motion';

export default function NavLinks() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Header>
    </motion.div>
  );
}
