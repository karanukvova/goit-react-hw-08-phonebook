import styled from 'styled-components';
export const LoginDiv = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px auto 40px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const LoginTitle = styled.h1`
  margin-top: 0px;
  margin-bottom: 40px;
  text-align: center;
  color: #404bbf;
`;
export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--global-black-color);
`;
export const LoginInput = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:focus {
    outline: 1px solid #00b451;
  }
`;
export const LoginSubmitButton = styled.button`
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
  margin: 0 auto;
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
