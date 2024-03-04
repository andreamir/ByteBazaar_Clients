import useToggle from '../../../hooks/use-toggle.hook';
import { styled } from 'styled-components';
import FormGroup from './FormGroup';
import TextFieldTitle from './TextFieldTitle';
import TextField from './TextField';
import Input from './Input';
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';

const PasswordInput = styled.div`
  margin-bottom: 16px;
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

function StyledPasswordInput({ title, value, setPassword }) {
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false);

  return (
    <PasswordInput>
      <FormGroup>
        <TextFieldTitle>{title}</TextFieldTitle>
        <TextField>
          <Input
            type={passwordVisibility ? 'text' : 'password'}
            name="password"
            placeholder={title}
            tabIndex=""
            autoComplete="off"
            value={value}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityIcon>
            <div type="button" onClick={() => togglePasswordVisibility()}>
              {passwordVisibility ? <Eye /> : <EyeOff />}
            </div>
          </VisibilityIcon>
        </TextField>
      </FormGroup>
    </PasswordInput>
  );
}

export default StyledPasswordInput;
