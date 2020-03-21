import React from 'react';
import {OS} from './apps/os';
import { useStores } from './utils/contexts';

import './global.scss';

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
      <OS />
    </div>
  );
}

export default App;
