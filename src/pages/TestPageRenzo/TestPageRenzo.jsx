import React from 'react';
import useToggle from '../../hooks/use-toggle.hook';
import LoginModal from '../../components/LoginModal/LoginModal';

function TestPageRenzo() {
  const [showLoginModal, toggleShowLoginModal] = useToggle(false);

  return (
    <>
      <h1>Test Page Renzo</h1>
      <button onClick={() => toggleShowLoginModal(true)}>Login</button>
      <p>
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
      {showLoginModal && <LoginModal handleDismiss={toggleShowLoginModal} />}
    </>
  );
}

export default TestPageRenzo;
