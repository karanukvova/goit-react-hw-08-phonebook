import RegisterForm from 'components/RegisterFom/RegisterForm'
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/selectors';


const RegisterPage = () => {
  const auth = useSelector(selectAuthentificated);
  if (auth) return <Navigate to="/contacts" />;
  return (
    <div>
      <RegisterForm />
      
    </div>
  );
}
export default RegisterPage
