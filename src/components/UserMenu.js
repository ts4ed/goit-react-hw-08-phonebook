import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button
        variant="contained"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
