import AuthModal from "../AuthModal/AuthModal";

function RecoveryModal({
  handleDismiss,
  toggleLoginModal,
  toggleRegisterModal,
}) {
  return (
    <AuthModal 
      variant='recovery'
      handleDismiss={handleDismiss}
      openSecondary={toggleLoginModal}
      openTertiary={toggleRegisterModal}
    />
  );
}

export default RecoveryModal;
