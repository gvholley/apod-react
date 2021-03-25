import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Card from './components/card';
import Navbar from './components/navbar';
import Loader from  './components/loader';
import './App.css';

const SaveFavorites = () => {
  [favorites, setFavorites] = useState([]);
  useEffect(()=> {

      const photoFavorites = JSON.parse(
        localStorage.getItem('app-favorites')
        );
      if (photoFavorites) {
        setFavorites(photoFavorites);
      }
  }, []);
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
