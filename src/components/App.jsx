import React from "react";
import { ContactsForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { GlobalStyles } from "./GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        <GlobalStyles/>
        <h1>Phonebook</h1>
        <ContactsForm/>
        <h2>Contacts</h2>
        <Filter />
        {isLoading ? <Loader />
          : error ? <p>{error}</p>
        : <ContactsList/>}
      </Layout>
    )
  
}