import { styled } from 'styled-components';

const Input = styled.input`
  // All inputs
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
  overflow: visible;

  // .form-group .textfield input
  background-color: transparent;
  border-color: currentcolor;
  border-image: none 100% 1 0 stretch;
  border-style: none;

  border-width: 0;
  color: #4d4d4d;
  font-size: 14px;
  padding: 12px;
  width: 100%;

  &:focus {
    outline: medium currentcolor;
  }

  /* // TODO: Find out how to do this: */
  /* &:autofill,
  &:autofill:active,
  &:autofill:focus,
  &input:autofill:hover {
    background-clip: text;
  } */

  /* // Originally was this...
  input:autofill, input:autofill:active, input:autofill:focus, input:autofill:hover {
    background-clip: text;
  } */

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px;
  }
`;

function StyledInput(props) {
  return <Input {...props} />;
}

export default StyledInput;
