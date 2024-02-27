import { styled } from 'styled-components';

const ButtonText = styled.span`
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    margin-left: 12px;

    &:first-child {
      margin-left: 0;
    }
  }

`;

function StyledButtonText({ children }) {
  return (
    <ButtonText>
      {children}
    </ButtonText>
  )
}

export default StyledButtonText;
