import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';
import { RegistrationDiv, RegistrationForm, RegistrationInput, RegistrationLabel, RegistrationSubmitButton, RegistrationTitle } from './RegisterForm.styled';


const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
    form.reset()
  };

    return (
      <RegistrationDiv>
        <RegistrationTitle>Registration</RegistrationTitle>
        <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
          <RegistrationLabel htmlFor="name">
            Name:
            <RegistrationInput
              id="name"
              name="userName"
              type="text"
              required
              minLength={2}
            />
          </RegistrationLabel>
          <RegistrationLabel htmlFor="email">
            Email:
            <RegistrationInput
              id="email"
              name="userEmail"
              type="email"
              required
            />
          </RegistrationLabel>
          <RegistrationLabel htmlFor="password">
            Password:
            <RegistrationInput
              id="password"
              name="userPassword"
              type="password"
              required
              minLength={7}
            />
          </RegistrationLabel>
          <RegistrationSubmitButton type="submit">
            Registration
          </RegistrationSubmitButton>
        </RegistrationForm>
      </RegistrationDiv>
    );
};
export default RegisterForm
