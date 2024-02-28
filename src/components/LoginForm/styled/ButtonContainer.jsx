import { styled } from 'styled-components';

const ButtonContainer = styled.div`
  // No styles applied
`;

function StyledButtonContainer({ children }) {

  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  );
}

export default StyledButtonContainer;