import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../utils/contexts';

export const OSAppList = observer(() => {
  const { os } = useStores();
  const launch = name => os.launchApp(name);

  return (
    <div className="app-list widget">
      <div className="column flex-sb flex-ac">
        {os.appList.map(app => <AppListItem app={app} key={app.id} launch={launch} />)}
      </div>
    </div>
  )
});

const AppListItem = ({app, launch}) => {
  const { name, icon, id } = app;
  const fn = () => launch(id);

  return (
    <div className="app-shortcut row" onClick={fn}>
      <span className={`icon icon--${icon}`}></span>
      <span className="label">{name}</span>
    </div>
  );
};