import React from 'react';
import { useSelector } from 'react-redux';
import { selectLogin, selectName } from 'redux/selectors';

import { StyledLink } from 'components/Layout/AppBar/Styled';
import { Container } from 'styles/Container.styled';
import { Section } from 'styles/Section.styled';

function HomePage() {
  const isLogin = useSelector(selectLogin);
  const userName = useSelector(selectName);

  return (
    <Section>
      <Container>
        <h1>Welcome to Phonebook</h1>
        {isLogin ? (
          <p>
            {userName}, we are happy to announce that you have access to all the
            features of the contact book!
          </p>
        ) : (
          <p>
            To access all features,{' '}
            <StyledLink to="/register">register</StyledLink> or{' '}
            <StyledLink to="/login">log in</StyledLink>
          </p>
        )}
      </Container>
    </Section>
  );
}

export default HomePage;
