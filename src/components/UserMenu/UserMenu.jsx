import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <Button
        size="small"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
        <LogoutIcon />
      </Button>
    </div>
  );
}
