import { styled } from 'styled-components';
import { useToggle } from '@uidotdev/usehooks';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import * as Form from '@radix-ui/react-form';

// Radix Form.Field
const InputContainer = styled(Form.Field)`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

// Radix Form.Label
const TextFieldTitle = styled(Form.Label)`
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

// Radix Form.Control
const Input = styled(Form.Control)`
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
  variant = 'text',
  type = 'text',
  name = 'text',
  mustMatch = undefined,
  title = 'Missing title prop',
  placeholder = 'Missing placeholder prop',
  value = '',
  disabled = false,
  setValue = () => alert('Missing onChange Setter'),
}) {
  // console.log(variant, value);
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false);
  const TEXT_VARIANTS = ['text', 'name', 'surname', 'email', 'phone'];
  const PASSWORD_VARIANTS = ['password', 'passwordConfirmation'];
  const INVALID_MESSAGE = {
    text: 'Please provide a valid text',
    name: 'Please provide a valid name',
    surname: ' Please provide a valid surname',
    email: 'Please provide a valid email',
    phone: 'Please provide a valid phone',
  };
  const INVALID_MISSING = {
    text: 'Please provide a text',
    name: 'Please provide a name',
    surname: ' Please provide a surname',
    email: 'Please provide an email',
    phone: 'Please provide a phone',
  };

  if (TEXT_VARIANTS.includes(variant)) {
    return (
      <InputContainer>
        <TextFieldTitle>{title}</TextFieldTitle>

        <TextField>

          <Input
            variant={variant}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            required={variant === 'phone' ? false : true}
            value={value}
            onChange={setValue}
          />

        </TextField>

        <Form.Message style={{ color: 'red' }} match="typeMismatch" name={name}>
          {INVALID_MESSAGE[variant]}
        </Form.Message>

        <Form.Message style={{ color: 'red' }} match="valueMissing" name={name}>
          {INVALID_MISSING[variant]}
        </Form.Message>

        {variant === 'phone' && (
          <Form.Message
            style={{ color: 'red' }}
            match={() => !(/^\d{7,12}$/.test(value))} // phone with 7 to 12 digits
            name={name}
          >
            Please provide a valid phone number
          </Form.Message>
        )}
        
      </InputContainer>
    );
  } else if (PASSWORD_VARIANTS.includes(variant)) {
    return (
      <InputContainer>
        <TextFieldTitle>{title}</TextFieldTitle>
        <TextField>
          <Input
            variant={variant}
            type={passwordVisibility ? 'text' : 'password'}
            name={name}
            required={true}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            value={value}
            onChange={setValue}
          />
          <VisibilityIcon>
            <div type="button" onClick={() => togglePasswordVisibility()}>
              {passwordVisibility ? <Eye /> : <EyeOff />}
            </div>
          </VisibilityIcon>
        </TextField>
        {variant === 'password' && (
          <Form.Message
            style={{ color: 'red' }}
            match="valueMissing"
            name={name}
          >
            Please enter your password
          </Form.Message>
        )}
        {variant === 'passwordConfirmation' && (
          <Form.Message
            style={{ color: 'red' }}
            match={() => value !== mustMatch}
            name={name}
          >
            Las contraseñas no coinciden
          </Form.Message>
        )}
      </InputContainer>
    );
  }
}

export default StyledInput;
