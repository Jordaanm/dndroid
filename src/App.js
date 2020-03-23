import React, { useEffect } from 'react';
import {OS} from './apps/os';

import './global.scss';
import './fonts.scss';
import './phb.scss';
import { useStores } from './utils/contexts';


function App() {
  const {os} = useStores();
  
  useEffect(() => {
    return os.initialise();
  });

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
