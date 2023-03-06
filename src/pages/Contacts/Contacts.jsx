import { ContactForm, ContactList, Filter, Loader } from 'components';
import PrivateWithRedirect from 'HOC/PrivateWithRedirect';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';
import { Container } from 'styles/Container.styled';
import { Section } from 'styles/Section.styled';

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
    <Section>
      <Container>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length !== 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>Your contacts list is empty</p>
        )}
        {loading && <Loader />}
      </Container>
    </Section>
  );
}

export default PrivateWithRedirect(ContactsPage, '/login');
