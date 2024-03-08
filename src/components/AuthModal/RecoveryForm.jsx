import React from 'react';
import * as Form from '@radix-ui/react-form';
import FormContainer from './styled/FormContainer';
import FormHead from './styled/FormHead';
import Input from './styled/Input';
import Button from './styled/Button';

function Description({ children }) {
  return (
    <div
      style={{
        marginBottom: '16px',
        fontSize: '16px',
        lineHeight: '20px',
      }}
    >
      <p>{children}</p>
    </div>
  );
}

function OrDivider() {
  return (
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
  );
}

function TwoButtonsContainer({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      {children.map((child) => (
        <div
          style={{
            paddingRight: '8px',
            width: '50%',
            boxSizing: 'border-box',
            flexGrow: '0',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

function RecoveryForm({
  title,
  handleDismiss,
  toggleLoginModal,
  toggleRegisterModal,
}) {
  const [formValues, setFormValues] = React.useState(() => ({
    email: '',
  }));

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <FormContainer title={title}>
      <FormHead handleDismiss={handleDismiss}>
        ¿Olvidaste tu contraseña?
      </FormHead>

      <Form.Root>
        <Description>
          Por favor ingresa tu dirección de correo electrónico y haz clic en
          'Continuar'
        </Description>

        <Input
          variant="email"
          title="Dirección de email"
          name="email"
          placeholder="Dirección de email"
          value={formValues.email}
          setValue={handleChange}
        />

        <Button
          title="Continuar" 
          type="submit"
          variant="submit"
        />

        <OrDivider />

        <TwoButtonsContainer>

          <Button 
            title="Iniciar Sesión"
            type="button"
            variant="outline"
            handleSwitch={() => {
              handleDismiss();
              toggleLoginModal();
            }}
          />

          <Button 
            title="¡Regístrate!"
            type="button"
            variant="outline"
            handleSwitch={() => {
              handleDismiss();
              toggleRegisterModal();
            }}
          />

        </TwoButtonsContainer>
      </Form.Root>
    </FormContainer>
  );
}

export default RecoveryForm;
