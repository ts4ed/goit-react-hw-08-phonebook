import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { authOperations } from '../../../redux/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContainer, Button, Text } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();

  const screenWidth = window.screen.width;
  const isDesktop = useRef(true);

  const logoutCab = () => {
    dispatch(authOperations.logOut());
    window.setTimeout(function () {
      document.location.reload();
    }, 500);
  };
  if (screenWidth < 620) {
    isDesktop.current = false;
  }
  return (
    <UserContainer>
      <Button onClick={logoutCab} type="button">
        <Text>Logout</Text>
        <LogoutIcon />
      </Button>
    </UserContainer>
  );
}
