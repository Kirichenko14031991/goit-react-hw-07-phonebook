import { useSelector } from 'react-redux';
import ContactItem from '../contactItem/contactItem';
import { ListContainer } from './contactList.styled';
import {
  selectContacts,
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListContainer>
      {isLoading && !error ? (
        <p>Loading</p>
      ) : contacts.length === 0 && !error ? (
        <p>Empty. Add contact.</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))
      )}
    </ListContainer>
  );
}

export default ContactList;
