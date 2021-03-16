import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import createDOMNodes from './components/card'
import './App.css';

//UI variables
const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

//NASA API
const count = 9;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray =[];
//Local Storage
let favorites = {};

//Shows correct navbar
function showContent(page) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  loader.classList.add('hidden');
  if (page === 'favorites') {
    resultsNav.classList.remove('hidden');
    favoritesNav.classList.add('hidden');
  } else {
    resultsNav.classList.add('hidden');
    favoritesNav.classList.remove('hidden');
  }
}

//Updates the DOM
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

// Get Images from NASA API

async function getNasaPictures() {
  //Show Loader
  loader.classList.remove('hidden');
  try {
    const response = await fetch(apiURL);
    resultsArray = await response.json();

    updateDOM('results');
  } catch (error) {
    //Catch error here
  }
}

//Add result to favorites
function saveFavorite(itemUrl) {
  resultsArray.forEach((item) => {
    if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
      favorites[itemUrl] = item;
      // Show save confirmation for 2 seconds
      saveConfirmed.hidden = false;
      setTimeout(() => {
        saveConfirmed.hidden = true;
      }, 2000);
      //SetFavorites in local storage
      localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    }
  });
}

//Remove from favorites

function removeFavorite(itemUrl) {
  if (favorites[itemUrl]) {
    delete favorites[itemUrl];
    localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    updateDOM('favorites')
  }
}
//On Load
getNasaPictures();

function App() {
  return (
    <div className="container">
    <Navbar />
    <div className="images-container">
    <createDOMNodes />
    </div>
    <div className="save-confirmed" hidden>
      <h1>ADDED!</h1>
    </div>
    </div>
  );
}

export default App;
