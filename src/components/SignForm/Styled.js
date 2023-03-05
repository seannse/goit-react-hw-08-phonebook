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
    ::placeholder {
      font: inherit;
      font-size: 14px;
    }

    &:-internal-autofill-selected {
      background-color: transparent;
      color: rgb(246, 250, 250);
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
    height: 40px;
    /* background-image: linear-gradient(_, _),
      linear-gradient(45deg, #b63c8e, #0a6cdf);
    background-clip: content-box, border-box; */
    border: 1px solid rgb(246, 250, 250);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.55) 1px 2px 5px 0px;
    cursor: pointer;
    color: rgb(246, 250, 250);

    &:hover,
    &:focus {
      background: linear-gradient(
        135deg,
        rgba(191, 57, 137, 1) 0%,
        rgba(9, 107, 222, 1) 100%
      );
      border: 0px solid transparent;
    }
    /* 
    &:disabled {
      background: rgb(3, 5, 36);
    } */
  }
`;
