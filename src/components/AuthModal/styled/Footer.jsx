import { styled } from 'styled-components';

const Footer = styled.footer`
  /* No styles applied */
`;

function StyledFooter({ children }) {

  return (
    <Footer>
      {children}
    </Footer>
  );
}

export default StyledFooter;
