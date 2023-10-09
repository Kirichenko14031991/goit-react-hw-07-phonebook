import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './contactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </ListItem>
  );
};

export default ContactItem;
