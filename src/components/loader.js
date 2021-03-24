import React, { useEffect, useState } from 'react';
import earth from './earth.svg';

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => { clearTimeout(timeoutID); };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="loader">
      <img src= {earth} alt="earth-loader" />
    </div>
  );
}

export default Loader;
