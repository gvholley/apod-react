import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import './App.css';

//Selects HTML elements
const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

//NASA API
const count = 6;
const apiKey = 'Qx2dxWtEzDNgGAZ0MQdXyZZwjkBMctbDhzt6ACNd'
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray =[];
//Local Storage
let favorites = {};



//Creates card
function createDOMNodes(page) {
  const currentArray = page === 'results' ? resultsArray : Object.values(favorites);

  currentArray.forEach((result) => {
    const card = document.createElement('div');
    card.classList.add('card')
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA APOD';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;
    const saveText = document.createElement('p');
    saveText.classList.add('clickable');
    if (page === 'results') {
      saveText.textContent = 'Add to Favorites';
      saveText.setAttribute('onclick', `saveFavorite('${result.url}')`);
  } else {
      saveText.textContent = 'Remove from Favorites';
      saveText.setAttribute('onclick', `removeFavorite('${result.url}')`);
  }
    const cardText = document.createElement('p');
    cardText.textContent = result.explanation;
    const footer = document.createElement('small');
    footer.classList.add('text-muted');
    const date = document.createElement('strong');
    date.textContent = result.date;
    const copyrightResult = result.copyright === undefined ? '' : result.copyright;
    const copyright = document.createElement('span');
    copyright.textContent = `${copyrightResult}`;
    footer.append(date, copyright);
    cardBody.append(cardTitle, saveText, cardText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imagesContainer.appendChild(card);
  });
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
}

// Get Images from NASA API

async function getNasaPictures() {
  //Show Loader
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
    </div>
    <div className="save-confirmed" hidden>
      <h1>ADDED!</h1>
    </div>
    </div>
  );
}

export default App;
