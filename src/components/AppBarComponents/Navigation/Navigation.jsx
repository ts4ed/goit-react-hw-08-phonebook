import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { Container, Button, Text } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const screenWidth = window.screen.width;
  const isDesktop = useRef(true);
  if (screenWidth < 620) {
    isDesktop.current = false;
  }
  return (
    <Container>
      <Text as={Link} to="/home">
        {isDesktop.current ? `Contactbook` : ''}
      </Text>
      <Button as={Link} to="/home">
        Home
      </Button>
      {isLoggedIn && (
        <Button as={Link} to="/contacts">
          Contacts
        </Button>
      )}
    </Container>
  );
}

export default Navigation;
