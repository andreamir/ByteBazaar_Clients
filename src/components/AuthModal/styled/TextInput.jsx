import { styled } from 'styled-components';
import FormGroup from './FormGroup';
import TextFieldTitle from './TextFieldTitle';
import TextField from './TextField';
import Input from './Input';

const TextInput = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

function StyledTextInput({ title, type, name, placeholder, autocomplete="off", tabindex="" }) {
  return (
    <TextInput>
      <FormGroup>
        <TextFieldTitle>{title}</TextFieldTitle>
        <TextField>
          <Input 
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autocomplete}
            tabIndex={tabindex}
          />
        </TextField>
      </FormGroup>
    </TextInput>
  )
}

export default StyledTextInput;