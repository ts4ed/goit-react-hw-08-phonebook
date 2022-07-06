import { NavLink } from 'react-router-dom';

function AuthNavigation() {
  return (
    <nav>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </nav>
  );
}

export default AuthNavigation;
