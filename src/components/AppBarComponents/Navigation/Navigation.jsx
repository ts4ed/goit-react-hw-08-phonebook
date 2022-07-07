import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { Link } from 'react-router-dom';
import { Container, Button, Text } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Text as={Link} to="/home">
        Contactbook
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
