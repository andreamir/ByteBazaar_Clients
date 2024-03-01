import { styled } from 'styled-components';
import FormGroup from './FormGroup';
import TextFieldTitle from './TextFieldTitle';
import TextField from './TextField';
import Input from './Input';

const EmailInput = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

function StyledEmailInput() {
  return (
    <EmailInput>
      <FormGroup>
        <TextFieldTitle>Dirección de email</TextFieldTitle>
        <TextField>
          <Input 
            type="text"
            name="email"
            placeholder="Dirección de email"
            autoComplete="off"
            tabIndex=""
          />
        </TextField>
      </FormGroup>
    </EmailInput>
  )
}

export default StyledEmailInput;