import ContactForm from 'components/PhonebookComponents/ContactForm/ContactForm';
import Filter from 'components/PhonebookComponents/Filter/Filter';
import { Wrapper, Text } from './ContactsPage.styled';
import DataTable from 'components/PhonebookComponents/Tablet/Tablet';

export default function ContactPage() {
  return (
    <Wrapper>
      <Text>Add your new contact</Text>
      <ContactForm />
      <Filter />
      <DataTable />
    </Wrapper>
  );
}
