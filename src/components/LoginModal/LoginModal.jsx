import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

function LoginModal({ handleDismiss }) {

  return (
    <Modal title='Login Form' handleDismiss={handleDismiss}>
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;