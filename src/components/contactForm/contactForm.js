
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contactsSlice';

import { selectContacts } from 'redux/selectors';
import { ContactsSubmitButton, StyledContactForm, StyledContactInput, StyledContactLabel } from './contactForm.styled';

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const onSubmitData = data => {
    let nameArray = [];
    nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      dispatch(addContactThunk(data));
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    if (event.target.name === 'name') {
        setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
    
    }


    const handleSubmit = event => {
        event.preventDefault();

        const contactData = {
          name,
          number,
        };

        onSubmitData(contactData);
      setName('')
      setNumber('');
    }



    return (
      <StyledContactForm onSubmit={handleSubmit}>
        <StyledContactLabel htmlFor="name">
          Name:
          <StyledContactInput
            id="name"
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </StyledContactLabel>
        <StyledContactLabel htmlFor="number">
          Number:
          <StyledContactInput
            id="number"
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </StyledContactLabel>
        <ContactsSubmitButton type="submit">Add contact</ContactsSubmitButton>
      </StyledContactForm>
    );
  
  }
export default ContactForm