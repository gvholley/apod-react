import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Card from './components/card';
import Navbar from './components/navbar';
import Loader from  './components/loader';
import './App.css';

const [favorites, setFavorites] = useState([]);

function updateDOM(page) {
  //Gets Favorites from localStorage
  if (localStorage.getItem('nasaFavorites')) {
    favorites = JSON.parse(localStorage.getItem('nasaFavorites'))

  }
  //Removes elements appended to container
  imagesContainer.textContent = '';
  createDOMNodes(page)
  showContent()
}


function App() {
  return (
    <div className="container">
    <Navbar />
    <Loader />
    <Card />
    <div className="save-confirmed" hidden>
      <h1>ADDED!</h1>
    </div>
    </div>
  );
}

export default App;
