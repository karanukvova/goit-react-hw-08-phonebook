import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';

const LoginPage = () => {
  const auth = useSelector(selectAuthentificated);
  if (auth) return <Navigate to="/contacts" />;
  return (
    <div>
    <LoginForm />
    </div>
  )
}
export default LoginPage
