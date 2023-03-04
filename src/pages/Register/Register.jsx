import { SignForm } from 'components';
import PublicWithRedirect from 'HOC/PublicWithRedirect';
import { useDispatch } from 'react-redux';
import { registerRequest } from 'redux/user/operations';

function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = data => {
    dispatch(registerRequest(data));
  };
  return (
    <div>
      <SignForm onSubmit={handleRegister} />
    </div>
  );
}

export default PublicWithRedirect(RegisterPage, '/contacts');
