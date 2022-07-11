import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { authOperations } from '../../../redux/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContainer, Button, Text, P } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();

  const screenWidth = window.screen.width;
  const isDesktop = useRef(true);
  const isCurrentUser = useSelector(authSelectors.getName);
  console.log(isCurrentUser.user.name);

  const logoutCab = () => {
    dispatch(authOperations.logOut());
    window.setTimeout(function () {}, 500);
  };
  if (screenWidth < 620) {
    isDesktop.current = false;
  }
  return (
    <UserContainer>
      {isCurrentUser ? <P>Welcome {isCurrentUser.user.name}</P> : ''}

      <Button onClick={logoutCab} type="button">
        <Text>Logout</Text>
        <LogoutIcon />
      </Button>
    </UserContainer>
  );
}
