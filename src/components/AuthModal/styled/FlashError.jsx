import { styled } from 'styled-components';

const Container = styled.div`
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Content = styled.div`
  background-color: #fee3e1;
  color: #0d0d0d;
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 26px 18px;
  }
`;

const Icon = styled.i`
  display: block;
  font-size: 24px;
  line-height: 24px;
  margin-right: 14px;

  font-family: cx-icon, serif !important;
  font-style: normal;
  -moz-osx-font-smoothing: grayscale;
  color: #0d0d0d;

  ::before {
    content: 'ℹ️';
  }
`;

const MessageContainer = styled.div`
  color: #0d0d0d;

  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: unset;
    flex-wrap: unset;
    font-size: 14px;
    font-weight: 400;
    justify-content: unset;
    line-height: 18px;
  }
`;

const MessageContent = styled.span`
  display: inline-block;
  font-weight: 400;
  margin-right: 8px;
  color: #0d0d0d;

  @media (min-width: 768px) {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 18px;
  }
`;

function StyledFlashError({ children, variant }) {
  let message;

  const VARIANTS = {
    notImplemented: 'API Fetch not yet implemented',
    mailOrPassword:
      'Lo sentimos, al parecer tu correo electrónico o tu contraseña no son correctos. Por favor, revisalos e intentalo de nuevo',
    therms:
      'Por favor, confirma tu edad y acepta nuestros Términos y Condiciones y la Política de Privacidad para registrarte',
    name: 'Caracter inválido en la casilla nombre.',
    surname: 'Caracter inválido en la casilla apellido.',
    email: 'Email no valido.',
    password:
      'Tu contraseña es incorrecta. Por favor revisa e intenta de nuevo.',
  };

  if (children) {
    message = children;
  } else {
    message = VARIANTS[variant];
  }

  return (
    <Container>
      <Content>
        <Icon />
        <MessageContainer>
          <MessageContent>{message}</MessageContent>
        </MessageContainer>
      </Content>
    </Container>
  );
}

export default StyledFlashError;
