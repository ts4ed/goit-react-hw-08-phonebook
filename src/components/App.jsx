import ContactForm from './ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <Phonebook />
      <ToastContainer />
    </div>
  );
}
