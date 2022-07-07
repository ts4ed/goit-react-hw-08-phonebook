// import s from './PhonebookItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Tnumber, Tname } from './PhonebookItem.styled';

export default function PhonebookItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <Tname>{name}</Tname> <Tnumber>{number}</Tnumber>
      <Button
        variant="outlined"
        size="small"
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting....' : 'Delete'}
        <DeleteIcon />
      </Button>
      {/* <button className={s.button} type="button">
        Сhange
      </button> */}
    </>
  );
}

PhonebookItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
