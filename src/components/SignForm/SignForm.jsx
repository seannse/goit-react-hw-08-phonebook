import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledForm } from './Styled';
import { Container } from 'styles/Container.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

function SignForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loading = useSelector(selectLoading);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <h2 className="form-title">{isLoginForm ? 'Sign In' : 'Sign Up'}</h2>
        {isLoginForm ? null : (
          <label className="input-group">
            <input
              className="input"
              type="text"
              name="name"
              placeholder={'name'}
              ref={nameInputRef}
              required
            />
          </label>
        )}
        <label className="input-group">
          <input
            className="input"
            type="email"
            name="email"
            placeholder={'e-mail'}
            ref={emailInputRef}
            required
          />
        </label>
        <label className="input-group">
          <input
            className="input"
            type="password"
            name="password"
            minLength={7}
            placeholder={'password'}
            ref={passwordInputRef}
            required
          />
        </label>

        <button className="form-btn" type="submit" disabled={loading}>
          {isLoginForm ? 'Log In' : 'Sign Up'}
        </button>
      </StyledForm>
    </Container>
  );
}

SignForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignForm;
