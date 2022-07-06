import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Phonebook from 'components/Phonebook/Phonebook';

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <Filter />
      <Phonebook />
    </>
  );
}
