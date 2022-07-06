import PhonebookItem from 'components/PhonebookItem/PhonebookItem';
import { useSelector } from 'react-redux';
import { getFilter, contactsFiltered } from 'redux/contactsSlice/contactsSlice';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';

export default function Phonebook() {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(getFilter);
  return (
    <ul>
      {isFetching && <p>Загружаем...</p>}
      {data &&
        contactsFiltered(data, filter).map(({ id, name, number }) => (
          <li key={id}>
            <PhonebookItem name={name} number={number} id={id} />
          </li>
        ))}
    </ul>
  );
}
