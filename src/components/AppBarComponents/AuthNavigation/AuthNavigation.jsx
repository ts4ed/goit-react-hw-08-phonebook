// import { NavLink } from 'react-router-dom';
import { Button } from './AuthNavigation.styled';
import { Link } from 'react-router-dom';

function AuthNavigation() {
  return (
    <nav>
      <Button as={Link} to="/register">
        Sign up
      </Button>
      <Button as={Link} to="/login">
        Log in
      </Button>
    </nav>
  );
}

export default AuthNavigation;
