import React from "react";
import { observer} from 'mobx-react-lite';

import "./home.scss";
import "./apps.scss";

import { Clock } from "../components/header-clock";
import { appMasterList } from './apps';
import { useStores } from "../utils/contexts";

const moment = require("moment");

const getDateString = () => {
  return moment().format("dddd MMM Do");
};

export const Home = observer(props => {
  const { os } = useStores();
  const dateString = getDateString();
  const unlockedApps = os.apps.map(x => appMasterList[x]);

  const openApp = app => () => {
    os.currentApp = app.id;
  };

  return (
    <div className="app home">
      <div className="center-content">
        <div className="search-bar">
          <input className="googax" placeholder="Googax" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="center-content">
        <div className="clock">
          <span className="time-main">
            <Clock />
          </span>
          <span className="day">{dateString}</span>
        </div>
      </div>
      <div className="center-content">
        <div className="launcher-apps">
          {unlockedApps.map(app => {
            return (<div className="launcher-app" key={app.id} onClick={openApp(app)}>
              <div className={`icon icon--${app.icon}`}></div>
              <div className="label">{app.name}</div>
            </div>);
          })}
        </div>
      </div>
    </div>
  );
});
