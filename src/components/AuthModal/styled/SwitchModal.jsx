import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const P = styled.p`
  margin-right: 4px;

  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const A = styled.a`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  /* a */
  background-color: transparent;
  color: #0d0d0d;
  cursor: pointer;
  text-decoration: underline currentcolor solid;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const AloneLink = styled.a`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  /* a */
  background-color: transparent;
  color: #0d0d0d;
  cursor: pointer;
  text-decoration: underline currentcolor solid;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

function SwitchModal({ description, linkText, handleSwitch }) {
  if (description) {
    return (
      <Container>
        <P>{description}</P>
        <A onClick={handleSwitch}>{linkText}</A>
      </Container>
    );
  } else {
    return (
      <Container>
        <AloneLink onClick={handleSwitch}>{linkText}</AloneLink>
      </Container>
    );
  }
}

export default SwitchModal;
