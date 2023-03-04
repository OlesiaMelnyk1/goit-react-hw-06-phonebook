import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { List, Item } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filterValue);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactItem id={contact.id} data={contact} />
          </Item>
        );
      })}
    </List>
  );
};
