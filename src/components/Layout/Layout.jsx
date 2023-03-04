import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { selectLogin, selectName } from 'redux/selectors';
import { logOutRequest } from 'redux/user/operations';

function Layout() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectLogin);
  const userName = useSelector(selectName);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <>
      <header>
        <nav>
          {isLogin ? (
            <>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
              </ul>
              <span>Hello, {userName}</span>
              <button type="button" onClick={handleLogOut}>
                Logout
              </button>
            </>
          ) : (
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
