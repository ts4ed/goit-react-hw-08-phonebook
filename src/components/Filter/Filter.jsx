import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getFilter, setFilter } from 'redux/contactsSlice/contactsSlice';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <TextField
      id="standard-basic"
      label="Search"
      variant="standard"
      type="text"
      size="small"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
}
