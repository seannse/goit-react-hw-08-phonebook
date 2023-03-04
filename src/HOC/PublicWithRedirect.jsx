const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectLogin } = require('redux/selectors');

function PublicWithRedirect(Component, pathTo) {
  function PublicComponent(props) {
    const isLogin = useSelector(selectLogin);
    return !isLogin ? <Component {...props} /> : <Navigate to={pathTo} />;
  }

  return PublicComponent;
}

export default PublicWithRedirect;
