import { styled } from 'styled-components'
import { Eye } from 'react-feather';
import { EyeOff } from 'react-feather';
import useToggle from '../../hooks/use-toggle.hook.js'

const StyledPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  background: #f9f9f9;
  border: 1px solid #f2f2f2;
  margin-right: 16px;
  width: 60%;
  & input {
    background: transparent;
    letter-spacing: -.3px;
    margin-right: 0;
    background-color: transparent;
    border-image: none 100% 1 0 stretch;
    border-style: none;
    border-width: 0;
    color: #4d4d4d;
    padding: 12px;
    width: 100%;
    outline: none;
    &:focus {
      outline: none;
    }
  }
`

const VisibilityIcon = styled.i`
  color: #0d0d0d;
  font-size: 18px;
  justify-content: right;
  padding-right: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;


function Password(props) {
  const { name, placeholder, handleInput } = props;
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false);

  return (
    <StyledPasswordContainer>
      <input key={placeholder}
        name={name}
        placeholder={placeholder}
        type={passwordVisibility ? 'text' : 'password'}
        onChange={handleInput} />
      <VisibilityIcon>
        <div type="button" onClick={() => togglePasswordVisibility()}>
          {passwordVisibility ? <Eye /> : <EyeOff />}
        </div>
      </VisibilityIcon>
    </StyledPasswordContainer>
  )
}

export default Password