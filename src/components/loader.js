import React from 'react';
import earth from './earth.svg';

const loader = document.querySelector('.loader');

 setTimeout(function(){
            loader.classList.add('hidden');
    }, 3000);


function Loader() {
  return (
    <div className="loader">
      <img src= {earth} alt="earth-loader" />
    </div>

  )
}

export default Loader;
