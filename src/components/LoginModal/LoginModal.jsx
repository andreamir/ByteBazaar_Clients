import AuthModal from "../AuthModal/AuthModal";

function LoginModal({ handleDismiss, toggleRegisterModal, toggleRecoveryModal }) {
  return (
      <AuthModal 
        variant='login'
        handleDismiss={handleDismiss}
        openSecondary={toggleRegisterModal}
        openTertiary={toggleRecoveryModal}
      />
  );
}

export default LoginModal;
