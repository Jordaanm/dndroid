import React from "react";
import "./home.scss";

import { Clock } from "../components/header-clock";

const moment = require("moment");

const getDateString = () => {
  return moment().format("dddd MMM Do");
};

export const Home = props => {
  // const {} = props;
  const dateString = getDateString();

  return (
    <div className="app home">
      <div className="center-content">
        <div className="search-bar">
          <input className="googax" placeholder="Googax" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="clock">
        <span className="time-main">
          <Clock />
        </span>
        <span className="day">{dateString}</span>
      </div>
    </div>
  );
};
