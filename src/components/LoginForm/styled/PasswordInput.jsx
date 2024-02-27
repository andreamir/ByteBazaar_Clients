import { styled } from 'styled-components';
import FormGroup from './FormGroup';
import TextFieldTitle from './TextFieldTitle';
import TextField from './TextField';
import Input from './Input';

const PasswordInput = styled.div`
  margin-bottom: 16px;
`;

function StyledPasswordInput() {
  return (
    <PasswordInput>
      <FormGroup>
        <TextFieldTitle>Contraseña</TextFieldTitle>
        <TextField>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            tabIndex=""
            autoComplete="off"
          />
        </TextField>
      </FormGroup>
    </PasswordInput>
  );
}

export default StyledPasswordInput;
