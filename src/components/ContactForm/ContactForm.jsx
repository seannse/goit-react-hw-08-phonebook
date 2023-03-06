import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectLoading } from 'redux/selectors';

import { addContact } from 'redux/contacts/operations';
import { StyledForm } from 'components/SignForm/Styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  function handleChange({ target }) {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      contacts.some(
        ({ name: nameFromReduxState, number }) =>
          nameFromReduxState.toLowerCase().trim() ===
            name.toLowerCase().trim() || number.trim() === phone.trim()
      )
    ) {
      Notify.failure(`${name} or ${phone} is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number: phone }));
    setName('');
    setPhone('');
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <input
            className="input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            placeholder="name"
            required
          />
        </label>
        <label>
          <input
            className="input"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            onChange={handleChange}
            placeholder="phone number"
            required
          />
        </label>
        <button className="form-btn" disabled={loading} type="submit">
          Add Contact
        </button>
      </StyledForm>
    </div>
  );
}

export default ContactForm;
