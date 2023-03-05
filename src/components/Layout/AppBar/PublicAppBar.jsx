import { HeaderWrapper, StyledLink } from './Styled';

function PublicAppBar() {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Sign up</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
}

export default PublicAppBar;
