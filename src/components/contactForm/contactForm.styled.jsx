import styled from 'styled-components';
export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
`;
export const StyledContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: 000;
`;
export const StyledContactInput = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  width: 350px;
  height: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:focus {
    outline: 1px solid #00b451;
  }
`;
export const ContactsSubmitButton = styled.button`
  width: 170px;
  height: 51px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #4d5ae5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border-radius: 4px;
  border: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #404bbf;
  }
  &:focus {
    background: #404bbf;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;