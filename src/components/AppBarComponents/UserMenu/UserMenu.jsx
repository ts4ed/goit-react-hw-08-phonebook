import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { authSelectors, authOperations } from '../../../redux/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContainer, Button, UserName, Text } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const screenWidth = window.screen.width;
  const isDesktop = useRef(true);
  if (screenWidth < 620) {
    isDesktop.current = false;
  }
  return (
    <UserContainer>
      <UserName style={{ color: '#fff' }}>
        {isDesktop.current ? `Welcome, ${name}` : ''}
      </UserName>
      <Button onClick={() => dispatch(authOperations.logOut())} type="button">
        <Text>Logout</Text>
        <LogoutIcon />
      </Button>
    </UserContainer>
  );
}
