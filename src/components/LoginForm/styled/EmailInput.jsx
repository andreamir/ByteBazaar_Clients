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

function StyledEmailInput({ value, setEmail }) {
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
            value={value}
            onChange={(e) => setEmail(e.target.value)}
          />
        </TextField>
      </FormGroup>
    </EmailInput>
  )
}

export default StyledEmailInput;