import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

function LoginModal({ handleDismiss, toggleRegisterModal, toggleRecoveryModal }) {
  return (
    <Modal handleDismiss={handleDismiss}>
      <LoginForm
        title="Login Form"
        handleDismiss={handleDismiss}
        toggleRegisterModal={toggleRegisterModal}
        toggleRecoveryModal={toggleRecoveryModal}
      />
    </Modal>
  );
}

export default LoginModal;
