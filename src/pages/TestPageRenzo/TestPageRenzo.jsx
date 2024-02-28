import React from 'react';
import useToggle from '../../hooks/use-toggle.hook';
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function TestPageRenzo() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);
  const [showRegisterModal, toggleRegisterModal] = useToggle(false);

  return (
    <Container>
      <h1 className="mt-3">Test Page</h1>
      <p>
        Test page for <strong>LoginModal</strong> and{' '}
        <strong>RegisterModal</strong> components.
      </p>
      <Button onClick={() => toggleShowLoginModal()}>Login</Button>{' '}
      <Button onClick={() => toggleRegisterModal()}>Register</Button>
      {showLoginModal && (
        <LoginModal
          handleDismiss={toggleShowLoginModal}
          toggleRegisterModal={toggleRegisterModal}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          handleDismiss={toggleRegisterModal}
          toggleShowLoginModal={toggleShowLoginModal}
        />
      )}
      <h2>Long text for "scroll lock" testing</h2>
      <p>
        While a modal is open, you shouldn't be able to scroll the page behind.
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
