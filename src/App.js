import React, { useEffect } from 'react';
import openSocket from 'socket.io-client';
import {OS} from './apps/os';

import './global.scss';
import { useStores } from './utils/contexts';


function App() {
  const {os} = useStores();
  
  useEffect(() => {
    os.socket = openSocket('http://localhost:8000');
    os.socket.on('timer', timestamp => console.log(timestamp));
    os.socket.emit('subscribeToTimer', 1000);
    return () => os.socket.close();
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
