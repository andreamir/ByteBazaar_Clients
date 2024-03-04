/**
 * This file 'forwards' a variant of AuthModal, so we don't break imports that were pointing here.
 * Onwards, other components that need AuthModal should import it directly, and pass a 'variant' prop
 */

import AuthModal from '../AuthModal';

export default ({ handleDismiss, toggleLoginModal, toggleRegisterModal }) => {
  return (
    <AuthModal
      variant="recovery"
      handleDismiss={handleDismiss}
      openSecondary={toggleLoginModal}
      openTertiary={toggleRegisterModal}
    />
  );
};
