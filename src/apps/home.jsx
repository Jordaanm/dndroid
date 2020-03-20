import React from 'react';
import "./home.scss";

import { OSNavBar } from '../components/os-nav-bar';
import { OSAppBar } from '../components/os-app-bar';
import { OSNotificationBar } from '../components/os-notification-bar';
import { Clock } from '../components/header-clock';

const moment = require('moment');

const getDateString = () => {
  return moment().format('dddd MMM Do');
};

export const Home = props => {
  // const {} = props;
  const dateString = getDateString();

  return (
    <>
      <div className="container">
        <OSNotificationBar />
        <div className="body">
          <div className="search-bar">
            <input className="googax" placeholder="Googax" />
            <i className="material-icons mic">mic</i>
          </div>
          <div className="clock">
            <span className="time-main"><Clock /></span>
            <span className="day">{dateString}</span>
          </div>
          <div className="page">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="playstore">
            <img
              src="https://9to5google.files.wordpress.com/2017/05/nexus2cee_ic_launcher_play_store_old-1.png?w=496&h=496&crop=1&quality=82&strip=all"
              alt="Play_Store"
            />
          </div>
          <span className="play-text">Play Store</span>
          <OSAppBar />
          <OSNavBar />
        </div>
      </div>
    </>
  );
};
