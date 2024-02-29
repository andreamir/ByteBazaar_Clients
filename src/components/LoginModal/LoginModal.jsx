import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

function LoginModal({ handleDismiss, toggleRegisterModal }) {
  return (
    <Modal handleDismiss={handleDismiss}>
      <LoginForm
        title="Login Form"
        handleDismiss={handleDismiss}
        toggleRegisterModal={toggleRegisterModal}
      />
    </Modal>
  );
}

export default LoginModal;
