import React from 'react';
import earth from './earth.svg';


function Loader() {
  return (
    <div className="loader hidden">
      <img src= {earth} alt="earth-loader" />
    </div>
  )
}

export default Loader;
