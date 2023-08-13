import React from 'react'
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/operations';
import { LoginDiv, LoginInput, LoginLabel,StyledLoginForm, LoginSubmitButton, LoginTitle} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
    form.reset()
  };

  return (
    <LoginDiv>
      <LoginTitle>Login</LoginTitle>
      <StyledLoginForm onSubmit={handleSubmit}>
        <LoginLabel htmlFor="email">
          Email:
          <LoginInput id="email" name="userEmail" type="email" required />
        </LoginLabel>
        <LoginLabel htmlFor="password">
          Password:
          <LoginInput
            id="password"
            name="userPassword"
            type="password"
            required
            minLength={7}
          />
        </LoginLabel>
        <LoginSubmitButton type="submit">Sign In</LoginSubmitButton>
      </StyledLoginForm>
    </LoginDiv>
  );
}
export default LoginForm
