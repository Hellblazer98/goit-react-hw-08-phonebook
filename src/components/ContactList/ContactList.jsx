import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ItemStyled, ListStyled } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
    return (
        <ListStyled sx={{ width: '100%', maxWidth: 320, margin: 'auto'}}>
            {contacts.map(contact => (
                <ItemStyled key={contact.id}>
                    <ContactItem contact={contact}/>
                </ItemStyled>
            ))}
        </ListStyled>
    )
}

