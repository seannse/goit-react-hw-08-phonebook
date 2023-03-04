import { SignForm } from 'components';
import PublicWithRedirect from 'HOC/PublicWithRedirect';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'redux/user/operations';

function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(loginRequest(data));
  };
  return (
    <div>
      <SignForm onSubmit={handleLogin} isLoginForm />
    </div>
  );
}

export default PublicWithRedirect(LoginPage, '/contacts');
