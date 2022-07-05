import s from './PhonebookItem.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export default function PhonebookItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      {name} : {number}
      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting....' : 'Delete'}
      </button>
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
