import React from 'react';
import * as Form from '@radix-ui/react-form';
import styles from './LoginForm.module.css';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import FormBody from './styled/FormBody';
import ToRegister from './styled/ToRegister';
import EmailInput from './styled/EmailInput';
import PasswordInput from './styled/PasswordInput';
import ToRecovery from './styled/ToRecovery';
import Footer from './styled/Footer';
import ButtonContainer from './styled/ButtonContainer';
import Button from './styled/Button';
import useApi from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom'

function LoginForm({
  title,
  handleDismiss,
  toggleRegisterModal,
  toggleRecoveryModal,
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { data, error, isLoading, getData } = useApi();
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    await getData({
      route: '/auth/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    });

    

    console.log(data);
    navigate('/account')

    setEmail(() => '');
    setPassword(() => '');
  }

  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>Iniciar Sesión</FormHead>
      <Form.Root onSubmit={handleSubmit}>
        <FormBody>
          <ToRegister
            handleDismiss={handleDismiss}
            toggleRegisterModal={toggleRegisterModal}
          />
          <EmailInput value={email} setEmail={setEmail} />
          <PasswordInput value={password} setPassword={setPassword} title="Contraseña" />
          <ToRecovery
            handleDismiss={handleDismiss}
            toggleRecoveryModal={toggleRecoveryModal}
          />
        </FormBody>
        <Footer>
          <ButtonContainer>
            <Button>Iniciar Sesión</Button>
          </ButtonContainer>
        </Footer>
      </Form.Root>
    </FormContainer>
  );
}

export default LoginForm;

/**
 * Unstyled Radix Components in use... (for reference)
 * https://www.radix-ui.com/primitives/docs/components/form#form
 */

/**
 * TODO: Replace returning tag with Radix unstyled components
 * EmailInput / PasswordInput -> Form.Field
 * TextFieldTitle -> Form.Label
 * Input -> Form.Control with nested input... with asChild attr?
 * Form.Message ... implement usage for error and other messages
 * <Form.Message match="valueMissing">Dirección de email</Form.Message>
 * <Form.Message match="typeMismatch">Por favor ingrese un email válido</Form.Message>
 * <Form.Submit asChild>
 *   <button style={{ marginTop: 10 }}>Login</button>
 * </Form.Submit>
 */
