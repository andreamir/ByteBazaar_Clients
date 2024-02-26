import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { X as Close } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import useKeyDown from '../../hooks/use-keydown.hook';
import styles from './Modal.module.css';

function Modal({ title, handleDismiss, children }) {
  useKeyDown("Escape", handleDismiss);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div
            className={styles.dialog}
            role='dialog'
            aria-modal='true'
            aria-label={title}
          >
            <button
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close />
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  )
}

export default Modal;