import { styled } from 'styled-components';
import { X as Close } from 'react-feather';
import VisuallyHidden from '../../../components/VisuallyHidden/VisuallyHidden';

const FormHead = styled.header`
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

const Heading = styled.div`
  color: #0d0d0d;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const ModalClose = styled.button`
  background-color: transparent;
  border-color: currentcolor;
  border-image: none 100% 1 0 stretch;
  border-style: none;

  border-width: medium;
  cursor: pointer;
  outline: medium currentcolor;
`;

const CloseIcon = styled.i`
  color: #0d0d0d;
  font-size: 24px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

function StyledFormHead({ children, handleDismiss }) {
  return (
    <FormHead>
      <Heading>{children}</Heading>
      <ModalClose onClick={handleDismiss}>
        <CloseIcon>
          {/* TODO: FIX UI BUG: ICON DOESN'T SCALE WITH MEDIA QUERIES */}
          <Close />
        </CloseIcon>
        <VisuallyHidden>Dismiss modal</VisuallyHidden>
      </ModalClose>
    </FormHead>
  );
}

export default StyledFormHead;
