import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { List, ListItem } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
    return (
        <List>
            {contacts.map(contact => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact}/>
                </ListItem>
            ))}
        </List>
    )
}

