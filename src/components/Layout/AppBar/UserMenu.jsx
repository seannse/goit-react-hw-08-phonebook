import { useDispatch, useSelector } from 'react-redux';

import { selectLoading, selectName } from 'redux/selectors';
import { logOutRequest } from 'redux/user/operations';
import { HeaderWrapper, StyledLink } from './Styled';

function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(selectName);
  const loading = useSelector(selectLoading);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        </ul>
      </nav>
      <span>Hello, {userName}</span>
      <button
        className="button"
        type="button"
        onClick={handleLogOut}
        disabled={loading}
      >
        Logout
      </button>
    </HeaderWrapper>
  );
}

export default UserMenu;
