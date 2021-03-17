import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Card from './components/card';
import Navbar from './components/navbar';
import './App.css';

const count = 6;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;


const App = () => {
  const [photoData, setPhotoData] = useState([]);
  const [favorites, setFavorites] = useState([]);


//Moved useEffect here from search
  useEffect(() => {
    const getPhotos = async () => {
    const response = await fetch(apiURL);
    const responseJson = await response.json();

    if(responseJson.Search) {
      setPhotoData(responseJson.Search);
    }
  };
    getPhotos();
  }, []);


  useEffect(()=> {

      const photoFavorites = JSON.parse(
        localStorage.getItem('app-favorites')
        );
      if (photoFavorites) {
        setFavorites(photoFavorites);
      }
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('app-favorites', JSON.stringify(items));
  };

  const addFavoritePhoto = (photo) => {
    const newFavoriteList = [...favorites, photo];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };


  const removeFavoriteMovie = (photo) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.date !== photo.date
      );


    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='container'>
        <Navbar />
        <Card />
      </div>
  );
};

export default App;
