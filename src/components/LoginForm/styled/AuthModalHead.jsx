import { styled } from 'styled-components';
import { X as Close } from 'react-feather';
import VisuallyHidden from '../../../components/VisuallyHidden/VisuallyHidden';

const StyledAuthModalHead = styled.header`
  align-items: center;
  display: flex;
  flex-direction: unset;
  flex-wrap: unset;
  justify-content: space-between;
  margin-bottom: 24px; /* mb-m */

  @media (min-width: 768px) {
    margin-bottom: 32px; /* md-mb-l */
  }
`;

const StyledAuthModalHeading = styled.div`
  color: #0d0d0d;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const StyledAuthModalClose = styled.button`
  background-color: transparent;
  border-color: currentcolor;
  border-image: none 100% 1 0 stretch;
  border-style: none;

  border-width: medium;
  cursor: pointer;
  outline: medium currentcolor;
`;

const StyledCloseIcon = styled.i`
  color: #0d0d0d;
  font-size: 24px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  /* TODO 1: Find out how Cex puts an icon here */
  /* TODO 2: Find out if I can put a component here */
  /* TODO 3: Find out how to use variables here */

  /* &::before { */
    /* content: "ⅹ"; */
  /* } */
`;

function AuthModalHead({ children, handleDismiss }) {
  return (
    <StyledAuthModalHead>
      <StyledAuthModalHeading>{children}</StyledAuthModalHeading>
      <StyledAuthModalClose onClick={handleDismiss}>
        <StyledCloseIcon>
          {/* TODO: FIX UI BUG: ICON DOESN'T SCALE WITH MEDIA QUERIES */}
          <Close />
        </StyledCloseIcon>
        <VisuallyHidden>Dismiss modal</VisuallyHidden>
      </StyledAuthModalClose>
    </StyledAuthModalHead>
  );
}

export default AuthModalHead;
