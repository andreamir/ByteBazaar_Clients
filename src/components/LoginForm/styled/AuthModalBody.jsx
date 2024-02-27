import { styled } from 'styled-components';

/**
 * This component is just a box to contain other components.
 * I want to have it so I can test styles around the children,
 * mainly for debugging.
 */

const AuthModalBody = styled.div`
  /* No styles applied */
`;

function StyledAuthModalBody({ children }) {
  return (
    <>
    {children}
    </>
  );
};

export default StyledAuthModalBody;
