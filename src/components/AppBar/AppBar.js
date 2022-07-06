import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';

export default function NavLinks() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
