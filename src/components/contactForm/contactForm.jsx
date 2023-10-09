import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { nanoid } from '@reduxjs/toolkit';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './contactForm.styled';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from '../redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const number = formData.get('number');

    if (contacts.some(contact => contact.name === name)) {
      toast.error(`${name}. You already have this contact.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    event.target.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: '30px',
            padding: '10px',
            color: 'black',
          },
        }}
      />
    </FormContainer>
  );
};

export default ContactForm;
