import React from 'react';
import * as Form from '@radix-ui/react-form';
import styles from './LoginForm.module.css';
import AuthModalContent from './styled/AuthModalContent';
import AuthModalHead from './styled/AuthModalHead';
import AuthModalBody from './styled/AuthModalBody';
import ToRegister from './styled/ToRegister';
import EmailInput from './styled/EmailInput';
import PasswordInput from './styled/PasswordInput';
import ToRecovery from './styled/ToRecovery';
import Footer from './styled/Footer';
import AuthButtonContainer from './styled/AuthButtonContainer';
import Button from './styled/Button';

function LoginForm({ title, handleDismiss }) {
  return (
    <AuthModalContent title={title}>
      <AuthModalHead handleDismiss={handleDismiss}>
        Iniciar Sesión
      </AuthModalHead>
      <Form.Root>
        <AuthModalBody>
          <ToRegister />
          <EmailInput />
          <PasswordInput />
          <ToRecovery />
        </AuthModalBody>
        <Footer>
          <AuthButtonContainer>
            <Button>Iniciar Sesión</Button>
          </AuthButtonContainer>
        </Footer>

          {/* <Form.Field name="email">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <Form.Label>Email</Form.Label>
              <Form.Message match="valueMissing">
                Dirección de email
              </Form.Message>
              <Form.Message match="typeMismatch">
                Por favor ingrese un email válido
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input type="email" required />
            </Form.Control>
          </Form.Field> */}

          {/* <Form.Field name="password">
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
              }}
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Message match="valueMissing">Contraseña</Form.Message>
            </div>
            <Form.Control asChild>
              <input type="password" required />
            </Form.Control>
          </Form.Field> */}

        {/* <Form.Submit asChild> */}
          {/* <button style={{ marginTop: 10 }}>Login</button> */}
        {/* </Form.Submit> */}
        
      </Form.Root>
    </AuthModalContent>
  );
}

export default LoginForm;

/**
 * Unstyled Radix Components in use... (for reference)
 * https://www.radix-ui.com/primitives/docs/components/form#form
 */
