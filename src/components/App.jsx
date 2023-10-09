import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { MainHeader, Header, MainWrap } from './App.styled';
import ContactList from './contactList/contactList';
import Filter from './contactFilter/contactFilter';
import ContactForm from './contactForm/contactForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainWrap>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList />
    </MainWrap>
  );
};

export default App;
