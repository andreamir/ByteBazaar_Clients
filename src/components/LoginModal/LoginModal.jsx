import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

function LoginModal({ handleDismiss }) {

  return (
    <Modal title='Login Form' handleDismiss={handleDismiss}>
      <LoginForm handleDismiss={handleDismiss} />
    </Modal>
  );
}

export default LoginModal;