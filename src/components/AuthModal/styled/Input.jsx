/**
 * Usage:
 * Import the component and specify the following props:
 * - variant // 'text' | 'email' | 'password' // must be valid html input type
 * - title // Will be displayed
 * - name // needed when updating form state as object
 * - placeholder // Will be displayed
 * - value // should come from state
 * - setValue // state setter funtion, needs no arguments
 * import Input from '...'
 * 
 * Example:
 * <Input
 *   variant="password"
 *   title="Contraseña"
 *   name="password"
 *   placeholder="Contraseña"
 *   value={formValues.password}
 *   setValue={handleChange}
 * />
 */

import { styled } from 'styled-components';
import { useToggle } from '@uidotdev/usehooks';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';

const InputContainer = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const TextFieldTitle = styled.label`
  color: #0d0d0d;
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

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

const Input = styled.input`
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
  overflow: visible;

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

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 14px;
  }
`;

const VisibilityIcon = styled.i`
  color: #0d0d0d;
  font-size: 18px;
  justify-content: right;
  padding-right: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

function StyledInput({
  variant = 'text', // must be valid html input type
  name = 'text',
  title = 'Missing title prop',
  placeholder = 'Missin placeholder prop',
  value = '',
  setValue = () => alert('Missing onChange Setter'),
}) {
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false);

  if (variant === 'email' || variant === 'text') {

    return (
      <InputContainer>
        <TextFieldTitle>{title}</TextFieldTitle>
        <TextField>
          <Input
            type={variant}
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={setValue}
          />
        </TextField>
      </InputContainer>
    );

  } else if (variant === 'password') {

    return (
      <InputContainer>
        <TextFieldTitle>{title}</TextFieldTitle>
        <TextField>
          <Input
            type={passwordVisibility ? 'text' : 'password'}
            name="password"
            placeholder={placeholder}
            autoComplete="off"
            value={value}
            onChange={setValue}
          />
          <VisibilityIcon>
            <div type="button" onClick={() => togglePasswordVisibility()}>
              {passwordVisibility ? <Eye /> : <EyeOff />}
            </div>
          </VisibilityIcon>
        </TextField>
      </InputContainer>

    );
  }
}

export default StyledInput;
