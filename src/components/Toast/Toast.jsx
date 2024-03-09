import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';

function ShowToast(props) {

  const { type, title, message } = props
  const style = (type) ? type : 'Primary' 
  const className = style.toLowerCase();
  const heading = (title) ? title : '' // no title: no heading

  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
  };

  function toastHeader() {
    return (
      <Toast.Header closeButton={showToast}>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">{heading}</strong>
        <small>{}</small>
      </Toast.Header>
    );
  }

  return (
    <Toast
    className="d-inline-block m-1"
    bg={className}
    show={showToast}
    onClose={handleClose}
    >
      {(heading) ? toastHeader() : '' }
      <Toast.Body className={type === 'Dark' ? 'text-white' : ''}>
        {message}
      </Toast.Body>
    </Toast>
  );
}

export default ShowToast;
