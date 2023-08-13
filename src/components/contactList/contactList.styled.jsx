import styled from 'styled-components';
export const StyledContactsList = styled.ul`
  width: 350px;
  list-style: none;
  margin-left: 10px;
  padding: 0;
  color: var(--global-black-color);
`;
export const StyledContactsItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const StyledContactsItemCircle = styled.span`
  width: 10px;
  height: 10px;
  margin: 0;
  padding: 0;
  background-color: #00b451;
  border-radius: 50%;
`;
export const StyledContactsItemName = styled.p`
  font-weight: 500;
  color: 000;
`;
export const StyledContactsItemNumber = styled.span`
  margin-left: 5px;
`;
export const StyledContactsItemButton = styled.button`
  width: 70px;
  height: 30px;
  margin-left: auto;
  background-color: #4d5ae5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #404bbf;
  }
  &:focus {
    background: #404bbf;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;