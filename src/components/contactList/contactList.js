
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contactsSlice';

import { selectContacts, selectFilter } from 'redux/selectors';
import { StyledContactsItem, StyledContactsItemButton, StyledContactsItemCircle, StyledContactsItemName, StyledContactsItemNumber, StyledContactsList } from './contactList.styled';
function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterArr = fArr => {
    let newArr = [];
    if (filter === '') {
      newArr = fArr;
    } else {
      newArr = fArr.filter(cur => cur.name.toUpperCase().includes(filter));
    }

    return newArr;
  };

  const deleteId = Id => {
    dispatch(deleteContactThunk(Id));
  };
  const CreateList = () => {
    const arr = filterArr(contacts)
    return arr.map(contact => {
      return (
        <StyledContactsItem key={contact.id}>
          <StyledContactsItemCircle></StyledContactsItemCircle>
          <StyledContactsItemName>
            {contact.name}:
            <StyledContactsItemNumber>
              {contact.number}
            </StyledContactsItemNumber>
          </StyledContactsItemName>
          <StyledContactsItemButton data-id={contact.id} onClick={() => deleteId(contact.id)}>
            Delete
          </StyledContactsItemButton>
        </StyledContactsItem>
      );
    });
  };


  return(
    <StyledContactsList>
      <CreateList />
    </StyledContactsList>
  )
  
}

export default ContactList;