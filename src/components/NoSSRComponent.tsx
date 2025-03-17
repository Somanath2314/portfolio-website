'use client';

import { useEffect } from 'react';

const NoSSRComponent = () => {
  useEffect(() => {
    // This code runs only in the browser.
    if (typeof document !== 'undefined') {
      const tag = document.createElement('div');
      tag.innerText = 'Hello, client side!';
      document.body.appendChild(tag);

      // Optional cleanup: remove the element when the component unmounts.
      return () => {
        document.body.removeChild(tag);
      };
    }
  }, []);

  return (
    <div>
      <h2>NoSSR Component</h2>
      <p>This component safely accesses document within useEffect.</p>
    </div>
  );
};

export default NoSSRComponent;
