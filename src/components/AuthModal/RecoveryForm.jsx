import React from 'react';
import * as Form from '@radix-ui/react-form';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import FormBody from './styled/FormBody';
import EmailInput from './styled/EmailInput';
import Footer from './styled/Footer';
import ButtonContainer from './styled/ButtonContainer';
import Button from './styled/Button';
import OutlinedButton from './styled/OutlinedButton';

function RecoveryForm({
  title,
  handleDismiss,
  toggleLoginModal,
  toggleRegisterModal,
}) {
  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>
        ¿Olvidaste tu contraseña?
      </FormHead>
      <Form.Root>
        <FormBody>
          <div
            style={{
              marginBottom: '16px',
              // color: '#0d0d0d',
              // fontFamily: 'Poppins,sans-serif',
              // fontSize: '16px',
              // letterSpacing: '-.3px',
              // lineHeight: '20px',
            }}
          >
            <p
              style={{
                fontSize: '16px',
                lineHeight: '20px',
                color: '#0d0d0d',
                // fontFamily: "Poppins,sans-serif",
              }}
            >
              Por favor ingresa tu dirección de correo electrónico y haz clic en
              'Continuar'
            </p>
          </div>
          <EmailInput />
        </FormBody>
        <Footer>
          <ButtonContainer>
            <Button>Continuar</Button>
          </ButtonContainer>
          <div
            style={{
              color: '#0d0d0d',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '20px',
              textAlign: 'center',
              marginBottom: '16px',
              marginTop: '16px',
            }}
          >
            Or
          </div>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
            }}
          >
            {/* The two divs are identical */}
            <div
              style={{
                paddingRight: '8px',
                width: '50%',
                boxSizing: 'border-box',
                flexGrow: '0',
              }}
            >
              <OutlinedButton
                handleDismiss={handleDismiss}
                toggleDifferentModal={toggleLoginModal}
              >
                Iniciar Sesión
              </OutlinedButton>
            </div>
            <div
              style={{
                paddingRight: '8px',
                width: '50%',
                boxSizing: 'border-box',
                flexGrow: '0',
              }}
            >
              <OutlinedButton
                handleDismiss={handleDismiss}
                toggleDifferentModal={toggleRegisterModal}
              >
                ¡Regístrate!
              </OutlinedButton>
            </div>
          </div>
        </Footer>
      </Form.Root>
    </FormContainer>
  );
}

export default RecoveryForm;
