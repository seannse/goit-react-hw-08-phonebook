import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto 25px;

  .input {
    padding: 10px;
    font-size: 18px;
    display: inline-block;
    border-bottom: 2px solid hsl(234deg 48% 34%);
    background-color: transparent;
    color: rgb(246, 250, 250);
    border: none;
    border-bottom: 1px solid rgb(246, 250, 250);
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: rgb(246, 250, 250);

    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }

  .form-title {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  .form-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 24px;
    border-radius: 8px;
    box-shadow: rgba(9, 107, 222, 0.5) 2px 2px 5px 0px,
      rgba(9, 107, 222, 0.3) 4px 4px 5px 0px;
    cursor: pointer;
    color: rgb(246, 250, 250);
    position: relative;
    z-index: 100;

    &:before {
      border-radius: inherit;
      background-image: linear-gradient(
        135deg,
        rgba(9, 107, 222, 1) 0%,
        rgba(191, 57, 137, 1) 100%
      );
      border: 0px solid transparent;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      z-index: -100;
      transition: opacity 1s;
    }

    &:hover:before,
    &:focus:before {
      opacity: 1;
    }

    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
`;
