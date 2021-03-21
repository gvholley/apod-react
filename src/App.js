import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Card from './components/card';
import Navbar from './components/navbar';
import Loader from  './components/loader';
import './App.css';

const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

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

function removeLoader() {
  loader.classList.remove('hidden');
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
