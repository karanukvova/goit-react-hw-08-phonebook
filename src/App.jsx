import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken, selectUserData, selectUserError, selectUserLoading } from 'redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import { StyledButton, StyledHeader, StyledNav, StyledNavDiv, StyledNavLink, StyledP } from 'App.styled';
import { AppFooter } from 'components/AppFooter/AppFooter';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));


export const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const auth = useSelector(selectAuthentificated);
  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectUserLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);
  useEffect(() => {
    if (!error) return; 
    toast.error(error)
  }, [error]);
  useEffect(() => {
    if (!auth) return;
    toast.success(`Welcome ${userData.name}`);
  }, [auth, userData]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledNavDiv>
          <StyledNavLink to="/">Home</StyledNavLink>
          {auth && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
          </StyledNavDiv>
          {!auth ? (
            <StyledNavDiv>
              <StyledNavLink to="/register">Sign in</StyledNavLink>
              <StyledNavLink to="/login">Sign up</StyledNavLink>
            </StyledNavDiv>
          ) : (
            <StyledNavDiv>
              <StyledP>{userData.email}</StyledP>
              <StyledButton onClick={handleLogOut}>Log out</StyledButton>
            </StyledNavDiv>
          )}
        </StyledNav>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
        {isLoading && <Loader />}
      </main>
      <AppFooter/>
    </div>
  );
};
