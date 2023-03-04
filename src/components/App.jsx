import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle, PhonebookTitle, ContactsTitle } from './GlobalStyles';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box
      as="section"
      mx="auto"
      my="150px"
      width="400px"
      p={5}
      bg="yellow"
      border="normal"
      borderRadius="normal"
      borderColor="black"
      boxShadow="regular"
    >
      <Box as="div" mb={5}>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </Box>
      <Box as="div">
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </Box>
      <GlobalStyle />
    </Box>
  );
};
