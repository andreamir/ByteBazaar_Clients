import { styled } from 'styled-components';

const ToRecovery = styled.div`
  margin-bottom: 16px;
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
    font-size: 14px;
    line-height: 18px;
  }
`;

function StyledToRecovery() {

  return (
    <ToRecovery>
      <A>¿Olvidaste tu contraseña?</A>
    </ToRecovery>
  );
}

export default StyledToRecovery;