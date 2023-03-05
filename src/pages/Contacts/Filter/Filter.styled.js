import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 30px;
  position: relative;

  .input {
    width: 200px;
    padding: 10px;
    font-size: 14px;
    display: inline-block;
    border-bottom: 2px solid hsl(234deg 48% 34%);
    background-color: transparent;
    color: rgb(246, 250, 250);
    border: none;
    border-bottom: 1px solid rgb(246, 250, 250);
    outline: none;
    padding-left: 10px;
    padding-right: 10px;

    &:active,
    &:focus {
      background-color: transparent;
    }
  }
`;

export const Img = styled(ImSearch)`
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 2px;
  right: 10px;
`;
