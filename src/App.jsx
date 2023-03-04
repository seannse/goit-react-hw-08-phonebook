import { Layout } from 'components';
import ContactsPage from 'pages/Contacts/Contacts';
import HomePage from 'pages/Home/Home';
import LoginPage from 'pages/Login/Login';
import RegisterPage from 'pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Navigate, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/user/operations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <div>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
}
