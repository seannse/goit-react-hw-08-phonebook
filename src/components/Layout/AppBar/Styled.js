import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.form`
  font-size: 24px;
  display: flex;
  gap: 30px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid;
  border-image: linear-gradient(
      to right,
      rgb(182, 60, 142),
      rgb(10, 108, 223),
      rgb(182, 60, 142)
    )
    1 0% / 1 / 1 stretch;

  li {
    padding: 5px;
  }

  .button {
    padding: 5px;
    :hover,
    :focus-visible {
      border-radius: 6px;
      background: linear-gradient(
        135deg,
        rgba(191, 57, 137, 1) 0%,
        rgba(9, 107, 222, 1) 100%
      );
    }

    /* &:disabled {
      background: rgb(3, 5, 36);
    } */
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 5px;
  &.active {
    border-bottom: 1px solid rgb(246, 250, 250);
  }

  :hover,
  :focus-visible {
    border-bottom: 1px solid rgb(246, 250, 250);
  }
`;
