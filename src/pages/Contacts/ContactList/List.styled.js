import styled from 'styled-components';

export const List = styled.ol`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  width: 700px;

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
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    width: 200px;

    :hover,
    :focus {
      border-radius: 6px;
      box-shadow: rgba(9, 107, 222, 0.5) 2px 2px 5px 0px,
        rgba(9, 107, 222, 0.3) 4px 4px 5px 0px;
    }

    .p {
      flex-shrink: 2;
      margin-bottom: 0;
    }
  }
`;
