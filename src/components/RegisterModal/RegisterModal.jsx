import Modal from '../Modal/Modal';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterModal({ handleDismiss, toggleShowLoginModal }) {
  return (
    <Modal handleDismiss={handleDismiss}>
      <RegisterForm
        title="Register Form"
        handleDismiss={handleDismiss}
        toggleShowLoginModal={toggleShowLoginModal}
      />
    </Modal>
  );
}

export default RegisterModal;
