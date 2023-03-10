import styled from 'styled-components';

export const Footer = styled.div`
  padding: 10px 0px;
  border-top: 5px solid;
  border-image: linear-gradient(
      to right,
      rgb(182, 60, 142),
      rgb(10, 108, 223),
      rgb(182, 60, 142)
    )
    1 0% / 1 / 1 stretch;
`;

export const WrapperAll = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
`;
