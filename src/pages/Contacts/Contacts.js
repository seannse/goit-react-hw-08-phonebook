import { ContactForm, ContactList, Filter, Loader } from 'components';
import PrivateWithRedirect from 'HOC/PrivateWithRedirect';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';

import css from '../../styles/App.module.css';

function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Ooops, bad getaway');
  }, [error]);

  return (
    <div className={css}>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p>Your contacts list is empty</p>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default PrivateWithRedirect(ContactsPage, '/login');
