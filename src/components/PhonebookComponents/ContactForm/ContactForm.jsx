import { useCreateContactMutation } from 'redux/contacts/contactsApi';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { Form, Button } from './ContactForm.styled';

import useLocalStorage from 'hooks/useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  const [createContact, { isLoading: isCreating }] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const newContact = { name, number };
    const isExistContact = data.find(
      dat => dat.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistContact) {
      alert(`${name} is already in contacts`);
    }
    if (!isExistContact) {
      try {
        await createContact(newContact);
      } catch (error) {}
    }

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form type="submit" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          size="small"
          color="grey"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Number"
          variant="standard"
          value={number}
          size="small"
          type="tel"
          color="grey"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
        />

        <Button type="submit" disabled={!name || !number || isCreating}>
          {isCreating ? 'Сreate a contact..' : 'Add contact'}
          <AddIcon />
        </Button>
      </Form>
    </div>
  );
}
