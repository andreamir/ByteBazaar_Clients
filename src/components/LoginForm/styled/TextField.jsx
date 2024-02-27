import { styled } from 'styled-components';

/**
 * This component is intended to return an <input /> as children
 */

const TextField = styled.div`
  align-items: center;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: #f9f9f9;
  background-image: none;
  background-origin: padding-box;
  background-position: 0 0;
  background-repeat: repeat;
  background-size: auto;
  border: 1px solid #f2f2f2;
  
  /* DEGUB */
  /* border: 2px solid red; */
  
  border-image: none 100% 1 0 stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: unset;
  flex-wrap: unset;
  justify-content: left;

  @media (min-width: 768px) {
    border-radius: 24px;
  }
`;

function StyledTextField({children}) {
  return (
    <TextField>
      {children}
    </TextField>
  )
}

export default StyledTextField;

/**
 * Note:
 * On the Cex page, TextField styles are applied ony if
 * the TextField is inside a FormGroup. I don't know how
 * to approah that with styled-components.
 * In this particular case, all TextField's are inside
 * FormGroup's, so it will work.
 */
