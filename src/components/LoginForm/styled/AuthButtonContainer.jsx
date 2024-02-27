import { styled } from 'styled-components';

const AuthButtonContainer = styled.div`
  // No styles applied
`;

function StyledAuthButtonContainer({ children }) {

  return (
    <AuthButtonContainer>
      {children}
    </AuthButtonContainer>
  );
}

export default StyledAuthButtonContainer;