import { styled } from 'styled-components';

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

function StyledTextFieldTitle({children}) {
  return (
    <TextFieldTitle>
      {children}
    </TextFieldTitle>
  )
}

export default StyledTextFieldTitle;
