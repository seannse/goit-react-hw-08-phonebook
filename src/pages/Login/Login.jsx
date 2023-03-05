import { SignForm } from 'components';
import PublicWithRedirect from 'HOC/PublicWithRedirect';
import { Notify } from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { loginRequest } from 'redux/user/operations';
import { Container } from 'styles/Container.styled';
import { Section } from 'styles/Section.styled';

function LoginPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    Notify.failure('Ooops, bad getaway');
  }, [error]);

  const handleLogin = data => {
    dispatch(loginRequest(data));
  };
  return (
    <Section>
      <Container>
        <SignForm onSubmit={handleLogin} isLoginForm />
      </Container>
    </Section>
  );
}

export default PublicWithRedirect(LoginPage, '/contacts');
