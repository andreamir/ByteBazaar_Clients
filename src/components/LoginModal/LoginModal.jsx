import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

function LoginModal({ handleDismiss }) {

  return (
    <Modal handleDismiss={handleDismiss}>
      <LoginForm title='Login Form' handleDismiss={handleDismiss} />
    </Modal>
  );
}

export default LoginModal;