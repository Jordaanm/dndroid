import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../utils/contexts';

export const Googax = observer(props => {
  const { os } = useStores();
  return (
    <div className="app bg googax">
      <div className="column center-content">
        <div className="row">
          <h1>Googax</h1>
        </div>
        <div className="row">
          <input type="text" className="search"/>
          <button>Search</button>
        </div>
        <div className="column">
          <h2>Results</h2>          
        </div>
      </div>
    </div>
  );
});