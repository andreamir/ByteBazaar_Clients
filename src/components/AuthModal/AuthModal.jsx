import Modal from '../Modal/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import RecoveryForm from './RecoveryForm';

function AuthModal({ variant, handleDismiss, openSecondary, openTertiary }) {

  return (
    <Modal handleDismiss={handleDismiss}>
      {variant === 'login' && (
        <LoginForm 
          title='Login Form'
          handleDismiss={handleDismiss}
          toggleRegisterModal={openSecondary}
          toggleRecoveryModal={openTertiary}
        />
      )}
      {variant === 'register' && (
        <RegisterForm 
          title='Register Form'
          handleDismiss={handleDismiss}
          toggleShowLoginModal={openSecondary}
        />
      )}
      {variant === 'recovery' && (
        <RecoveryForm 
          title='Recovery Form'
          handleDismiss={handleDismiss}
          toggleLoginModal={openSecondary}
          toggleRegisterModal={openTertiary}
        />
      )}
    </Modal>
  );
}

export default AuthModal;
