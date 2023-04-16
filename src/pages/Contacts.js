import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactsList } from 'components/ContactList/ContactList';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <HelmetProvider>
            <Helmet>
                <title>Contacts</title>
            </Helmet>
            <h1>Phonebook</h1>
            <ContactsForm />
            <h2>Contacts</h2>
            <Filter />
            {isLoading ? <Loader />
                : error ? <p>{error}</p>
                    : <ContactsList />}
        </HelmetProvider>

    )
};

export default Contacts;
