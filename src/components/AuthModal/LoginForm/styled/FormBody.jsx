import { styled } from 'styled-components';

/**
 * This component is just a box to contain other components.
 * I want to have it so I can test styles around the children,
 * mainly for debugging.
 */

const FormBody = styled.div`
  /* No styles applied */
`;

function StyledFormBody({ children }) {
  return (
    <FormBody>
    {children}
    </FormBody>
  );
};

export default StyledFormBody;
