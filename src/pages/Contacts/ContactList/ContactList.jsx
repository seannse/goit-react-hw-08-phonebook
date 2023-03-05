import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
import { removeContact } from 'redux/contacts/operations';
import { List } from './List.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  // function filteredContacts() {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }

  return (
    <div>
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className="item" key={id}>
              <p className="p">
                {name}: {number}
              </p>

              <button
                className="button"
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                <RiDeleteBinLine height="30px" width="30px" />
              </button>
            </li>
          );
        })}
      </List>
    </div>
  );
};

export default ContactList;
