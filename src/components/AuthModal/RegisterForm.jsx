import React from 'react';
import styles from './Dialogs.module.css';
import { useToggle } from '@uidotdev/usehooks';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import * as Form from '@radix-ui/react-form';
import Button from './styled/Button';
import SwitchModal from './styled/SwitchModal';
import FormCheck from './styled/FormCheck';
import FormGroupRow from './styled/FormGroupRow';
import Input from './styled/Input';
import FlashError from './styled/FlashError';

function RegisterForm({ title, handleDismiss, toggleShowLoginModal }) {
  const [formValues, setFormValues] = React.useState(() => ({
    name: '', surname: '', email: '', password: '',
    passwordConfirmation: '', phone: '',
  }));
  // console.log(formValues);
  const [showNotImplemented, toggleShowNotImplementes] = useToggle(false);
  const [invalidTherms, toggleInvalidTherms] = useToggle(false);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleShowNotImplementes();
    setFormValues({
      name: '', surname: '', email: '', password: '',
      passwordConfirmation: '', phone: '',
    });
  }

  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>
        Regístrate con ByteBazaar
      </FormHead>
      <Form.Root onSubmit={handleSubmit}>

        {showNotImplemented && <FlashError variant={'notImplemented'} />}

        {/* Switch to Login Modal */}
        <SwitchModal
          description="¿Ya tienes cuenta?"
          linkText="Inicia sesión aquí"
          handleSwitch={() => {
            handleDismiss();
            toggleShowLoginModal();
          }}
        />

        <FormGroupRow>
          <Input
            variant="name"
            type="text"
            title="Nombre"
            name="name"
            placeholder="Nombre"
            value={formValues.name}
            setValue={handleChange}
          />

          <Input
            variant="surname"
            type="text"
            title="Apellido"
            name="surname"
            placeholder="Apellido"
            value={formValues.surname}
            setValue={handleChange}
          />

          <Input
            variant="email"
            type="email"
            title="Dirección de email"
            name="email"
            placeholder="Dirección de email"
            value={formValues.email}
            setValue={handleChange}
          />

          <Input
            variant="password"
            type="password"
            title="Contraseña"
            name="password"
            placeholder="Contraseña"
            value={formValues.password}
            setValue={handleChange}
          />

          <Input
            variant="passwordConfirmation"
            mustMatch={formValues.password}
            type="password"
            title="Confirmar contraseña"
            name="passwordConfirmation"
            placeholder="Confirmar contraseña"
            value={formValues.passwordConfirmation}
            setValue={handleChange}
          />

          <Input
            variant="phone"
            type="text"
            title="Teléfono de contacto (optional)"
            name="phone"
            placeholder="Teléfono de contacto"
            value={formValues.phone}
            setValue={handleChange}
          />
        </FormGroupRow>

        {/* CHECKBOXES */}
        <div className={styles['mb-base']}>
          <FormCheck>Mantenerme informado por correo electrónico</FormCheck>
          <FormCheck>Mantenerme informado por SMS</FormCheck>
          <FormCheck>
            <span>Confirmo que tengo 13 años o más y acepto los</span>{' '}
            <a className={styles['register-form-a']} href="/" target="blank">
              Términos y condiciones
            </a>{' '}
            y la{' '}
            <a className={styles['register-form-a']} href="/" target="blank">
              Política de Privacidad
            </a>
          </FormCheck>
        </div>

        <Button type="submit" variant="submit" title="Crear cuenta" />
      </Form.Root>
    </FormContainer>
  );
}

export default RegisterForm;

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
