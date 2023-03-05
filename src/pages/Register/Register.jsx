import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignForm } from 'components';
import PublicWithRedirect from 'HOC/PublicWithRedirect';

import { selectError } from 'redux/selectors';
import { registerRequest } from 'redux/user/operations';
import { Section } from 'styles/Section.styled';

function RegisterPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Ooops, bad getaway');
  }, [error]);

  const handleRegister = data => {
    dispatch(registerRequest(data));
  };
  return (
    <Section>
      <SignForm onSubmit={handleRegister} />
    </Section>
  );
}

export default PublicWithRedirect(RegisterPage, '/contacts');
