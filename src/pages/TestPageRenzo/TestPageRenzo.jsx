import React from 'react';
import { useToggle } from "@uidotdev/usehooks";
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import RecoveryModal from '../../components/RecoveryModal/RecoveryModal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ProductList from '../../components/ProductList';

function TestPageRenzo() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);
  const [showRegisterModal, toggleRegisterModal] = useToggle(false);
  const [showRecoveryModal, toggleRecoveryModal] = useToggle(false);

  return (
    <Container>
      <h1 className="mt-3">Test Page</h1>
      <p>
        Test page for <strong>LoginModal</strong> and{' '}
        <strong>RegisterModal</strong> components.
      </p>
      <div>
        <Button onClick={() => toggleShowLoginModal()}>Login</Button>{' '}
        <Button onClick={() => toggleRegisterModal()}>Register</Button>{' '}
        <Button onClick={() => toggleRecoveryModal()}>Recovery</Button>
      </div>

      {showLoginModal && (
        <LoginModal
          handleDismiss={toggleShowLoginModal}
          toggleRegisterModal={toggleRegisterModal}
          toggleRecoveryModal={toggleRecoveryModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          handleDismiss={toggleRegisterModal}
          toggleShowLoginModal={toggleShowLoginModal}
        />
      )}
      {showRecoveryModal && (
        <RecoveryModal 
          handleDismiss={toggleRecoveryModal}
          toggleLoginModal={toggleShowLoginModal}
          toggleRegisterModal={toggleRegisterModal}
        />
      )}
      <h2>Scroll Lock</h2>
      <p>
        While a modal is open, you shouldn't be able to scroll the page.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductList />
      </div>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        odio, tempore, dolores doloribus est optio reprehenderit quas debitis
        repellendus mollitia dicta saepe molestias veritatis beatae illo at
        perferendis, fugiat asperiores? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Consectetur odio, tempore, dolores doloribus est optio
        reprehenderit quas debitis repellendus mollitia dicta saepe molestias
        veritatis beatae illo at perferendis, fugiat asperiores? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Consectetur odio, tempore,
        dolores doloribus est optio reprehenderit quas debitis repellendus
        mollitia dicta saepe molestias veritatis beatae illo at perferendis,
        fugiat asperiores?
      </p>
    </Container>
  );
}

export default TestPageRenzo;
