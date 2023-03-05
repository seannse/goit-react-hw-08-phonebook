import styled from 'styled-components';

export const List = styled.ol`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 5px 0px;
    cursor: pointer;
    color: rgb(246, 250, 250);
    background: linear-gradient(
      135deg,
      rgba(191, 57, 137, 1) 0%,
      rgba(9, 107, 222, 1) 100%
    );
    border: 0px solid transparent;

    &:hover,
    &:focus {
    }
  }

  .item {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;

    .p {
      flex-shrink: 2;
      margin-bottom: 0;
    }
  }
`;
