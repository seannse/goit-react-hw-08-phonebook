import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: rgba(9, 107, 222, 0.5) 1px 2px 5px 0px;
  width: 250px;
  height: 200px;
  padding: 0 10px 0;
  position: fixed;
  right: 15px;

  .label {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
    position: relative;
  }
  .input {
    width: 100%;
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
