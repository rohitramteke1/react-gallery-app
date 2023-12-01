import React from 'react';
import './App.css';

import GalleryComponent from './gallery/GalleryComponent';
const App = () => {
  return <>
    <div className="container">
      <h1 className='header'>Image Gallery</h1>
      <GalleryComponent />
      <h1 className='footer'>Copyright &#169; by Rohit {new Date().getFullYear()} </h1>
    </div>
  </>
}

export default App;