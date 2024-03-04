/**
 * TODO: Create "To..." low-level component
 * This component is almost identical to "ToRegister",
 * and even to "ToRecovery" becuase we could use conditional
 * rendering for the first span of text.
 */

import { styled } from 'styled-components';

const ToLogin = styled.div`
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

function StyledToLogin({ handleDismiss, toggleShowLoginModal }) {
  return (
    <ToLogin>
      <P>¿Ya tienes cuenta?</P>
      <A
        onClick={() => {
          handleDismiss();
          toggleShowLoginModal();
        }}
      >
        Inicia sesión aquí
      </A>
    </ToLogin>
  );
}

export default StyledToLogin;