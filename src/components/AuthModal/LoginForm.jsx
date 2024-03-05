import React from 'react';
import * as Form from '@radix-ui/react-form';
// import { useToggle } from '@uidotdev/usehooks';
import useApi from '../../hooks/useApi';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import SwitchModal from './styled/SwitchModal';
import Input from './styled/Input';
import Button from './styled/Button';
import FlashError from './styled/FlashError';

function LoginForm({
  title,
  handleDismiss,
  toggleRegisterModal,
  toggleRecoveryModal,
}) {
  const [formValues, setFormValues] = React.useState(() => ({
    email: '',
    password: '',
  }));

  const { data, error, isLoading, getData } = useApi();

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

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

    setEmail(() => '');
    setPassword(() => '');
  }

  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>Iniciar Sesión</FormHead>
      <Form.Root onSubmit={handleSubmit}>
        {/* ---> ---> ---> FLASH MESSAGES HERE <--- <--- <--- */}

        {/* Switch to Register Modal */}
        <SwitchModal
          description="¿No tienes cuenta?"
          linkText="¡Regístrate!"
          handleSwitch={() => {
            handleDismiss();
            toggleRegisterModal();
          }}
        />

        {/* Email Input */}
        <Input
          variant="email"
          title="Dirección de email"
          name="email"
          placeholder="Dirección de email"
          value={formValues.email}
          setValue={handleChange}
        />

        {/* Password Input */}
        <Input
          variant="password"
          title="Contraseña"
          name="password"
          placeholder="Contraseña"
          value={formValues.password}
          setValue={handleChange}
        />

        {/* Switch to Recovery Modal */}
        <SwitchModal
          linkText="¿Olvidaste tu contraseña?"
          handleSwitch={() => {
            handleDismiss();
            toggleRecoveryModal();
          }}
        />

        <Button 
          variant='submit'
          type='submit'
          title='Iniciar Sesión'
        />

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
