const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectLogin } = require('redux/selectors');

function PrivateWithRedirect(Component, pathTo) {
  function PrivateComponent(props) {
    const isLogin = useSelector(selectLogin);
    return isLogin ? <Component {...props} /> : <Navigate to={pathTo} />;
  }

  return PrivateComponent;
}

export default PrivateWithRedirect;
