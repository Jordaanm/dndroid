import React from "react";
import { Clock } from '../components/header-clock';
import "./os-notification-bar.scss";

export const OSNotificationBar = props => {
  return (
    <div className="notif-bar">
      <span className="dandroid">Dndroid</span>
      {/* <i className="material-icons download">get_app</i>
          <i className="material-icons help">help</i>
          <i className="material-icons alarm">alarm</i>
          <i className="material-icons wifi">network_wifi</i>
          <i className="material-icons network">network_cell</i>
          <i className="material-icons battery">battery_full</i> */}
      <Clock />
    </div>
  );
};
