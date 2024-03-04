import AuthModal from '../AuthModal/AuthModal';

function RegisterModal({ handleDismiss, toggleShowLoginModal }) {
  return (
    <AuthModal 
      variant='register'
      handleDismiss={handleDismiss}
      openSecondary={toggleShowLoginModal}
    />
  );
}

export default RegisterModal;
