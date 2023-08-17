import Loader from 'components/Loader/Loader';
import ContactForm from 'components/contactForm/contactForm';
import ContactList from 'components/contactList/contactList';
import Filter from 'components/filter/filter';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestContactsThunk, selectContactsError, selectContactsIsLoading, selectUserContacts } from 'redux/contactsSlice';
import { selectAuthentificated } from 'redux/selectors';
import { ContactsTitle, Container } from './ContactsPage.styled';
const ContactsPage = () => {
   const error = useSelector(selectContactsError);
   const isLoading = useSelector(selectContactsIsLoading);
   const dispatch = useDispatch();
  const auth = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);

   useEffect(() => {
     if (!auth) return;

     dispatch(requestContactsThunk());
   }, [auth, dispatch]);

  
   return (
     <Container className="App">
       <div>
         <ContactsTitle>Phonebook</ContactsTitle>
         <ContactForm />
       </div>
       <div>
         <ContactsTitle>Contacts</ContactsTitle>
         <Filter />
         {error !== null && (
           <p className="c-error">
             Oops, some error occured. Please, try again later. Error: {error}
           </p>
         )}
         {contacts && <ContactList />}
         {isLoading && <Loader />}
       </div>
     </Container>
   );
}
export default ContactsPage
