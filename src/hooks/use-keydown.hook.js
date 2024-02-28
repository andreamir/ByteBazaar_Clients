import React from 'react';

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === key) {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}

export default useKeyDown;
