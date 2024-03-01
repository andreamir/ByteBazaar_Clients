import Modal from '../Modal/Modal';
import RecoveryForm from '../RecoveryForm/RecoveryForm';

function RecoveryModal({
  handleDismiss,
  toggleLoginModal,
  toggleRegisterModal,
}) {
  return (
    <Modal handleDismiss={handleDismiss}>
      <RecoveryForm
        title="Recovery Form"
        handleDismiss={handleDismiss}
        toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
      />
    </Modal>
  );
}

export default RecoveryModal;
