import React from 'react';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStores } from '../utils/contexts';
import { appMasterList} from '../apps/apps';
export const DM = observer(props => {
  const { os } = useStores();
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedApp, setSelectedApp] = useState('');
  const [quote, setQuote] = useState('hello');

  const refresh = () => {
    os.socket.emit('dmGetPlayers');
  };

  const speak = () => {
    os.socket.emit('dmForceSpeak', quote, selectedHero);
  }

  const unlockApp = () => {
    os.socket.emit('dmUnlockApp', selectedApp, selectedHero);
  }

  return (
    <div className="app bg dm">
      <div className="column center-content">
        <div className="row">
          <h1>DM Screen</h1>
        </div>
        <div className="row">
          <span>Target:</span>
          <select value={selectedHero} onChange={e => setSelectedHero(e.target.value)}>
            {os.dmScreen.players.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
          </select>
          <button onClick={() => refresh()}>REFRESH</button>
        </div>
        <div className="row">
          <textarea cols="30" rows="10" value={quote} onChange={e => setQuote(e.target.value)}></textarea>
          <button onClick={() => speak()}>Speak</button>
        </div>
        <div className="row">
          <select value={selectedApp} onChange={e => setSelectedApp(e.target.value)}>
            {Object.values(appMasterList).map(app => <option key={app.id} value={app.id}>{app.name}</option>)}
          </select>
          <button onClick={() => unlockApp()}>UnlockApp</button>
        </div>
      </div>
    </div>
  );
});