/**
 * TODO: Discuss where should we put low-level components
 * This component is usin several common components with LoginForm
 */

import styles from './Dialogs.module.css';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import * as Form from '@radix-ui/react-form';
import FormBody from './styled/FormBody';
import Footer from './styled/Footer';
import ButtonContainer from './styled/ButtonContainer';
import Button from './styled/Button';
import ToLogin from './styled/ToLogin';
import FormCheck from './styled/FormCheck';
import FormGroupRow from './styled/FormGroupRow';
import EmailInput from './styled/EmailInput';
import PasswordInput from './styled/PasswordInput'; // TODO: Use props to define stuff inside, the name is repeating
import TextInput from './styled/TextInput';

function RegisterForm({ title, handleDismiss, toggleShowLoginModal }) {
  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>
        Regístrate con ByteBazaar
      </FormHead>
      <Form.Root>
        <FormBody>
          <ToLogin handleDismiss={handleDismiss} toggleShowLoginModal={toggleShowLoginModal} />

          {/* MAIN INPUTS */}
          <FormGroupRow>
            <div className={styles["form-group-row-elements"]}>
              <TextInput title="Nombre" type="text" name="Nombre" placeholder="Nombre" />
            </div>
            <div className={styles["form-group-row-elements"]}>
              <TextInput title="Apellido" type="text" name="Apellido" placeholder="Apellido" />
            </div>
            <div className={styles["form-group-row-elements"]}>
              <EmailInput />
            </div>
            <div className={styles["form-group-row-elements"]}>
              <PasswordInput title="Contraseña" />
            </div>
            <div className={styles["form-group-row-elements"]}>
              <PasswordInput title="Confirmar contraseña" />
            </div>
            <div className={styles["form-group-row-elements"]}>
              <TextInput title="Teléfono de contacto (opcional)" type="text" name="phone" placeholder="Teléfono de contacto" />
            </div>
          </FormGroupRow>

          {/* CHECKBOXES */}
          <div className={styles['mb-base']}>
            <FormCheck>Mantenerme informado por correo electrónico</FormCheck>
            <FormCheck>Mantenerme informado por SMS</FormCheck>
            <FormCheck>
              <span>Confirmo que tengo 13 años o más y acepto los</span>{' '}
              <a 
                className={styles['register-form-a']}
                href="/"
                target="blank"
              >
                Términos y condiciones
              </a>{' '}
              y la{' '}
              <a 
                className={styles['register-form-a']}
                href="/"
                target="blank"
              >
                Política de Privacidad
              </a>
            </FormCheck>
          </div>
        </FormBody>
        <Footer>
          <ButtonContainer>
            <Button>Crear cuenta</Button>
          </ButtonContainer>
        </Footer>
      </Form.Root>
    </FormContainer>
  );
}

export default RegisterForm;
