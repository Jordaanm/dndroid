import React from 'react';
import {Home} from './apps/home';

import './App.css';

function App() {
  return (
    <div className="dandroid-os">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto: 100,300,400"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Home />
    </div>
  );
}

export default App;
