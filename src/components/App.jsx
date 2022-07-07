import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout/Layout';
const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import(
    '../pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */
  )
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import(
    '../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  )
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      {!isFetchingCurrentUser && (
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
        </Route>
      )}
    </Routes>
  );
};
