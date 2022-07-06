import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';

export default function NavLinks() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
