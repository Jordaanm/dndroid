import React from "react";
import "./os-app-bar.scss";

export const OSAppBar = props => {
  return (
    <div className="apps">
      <div className="phone">
        <img
          src="http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Phone-icon.png"
          alt="Phone"
        />
      </div>
      <div className="messages">
        <img
          src="https://www.androidpolice.com/wp-content/uploads/2016/10/nexus2cee_logo_messenger_round_launcher_color_48dp.png"
          alt="Messages"
        />
      </div>
      <div className="menu">
        <div className="menu-row">
          <span className="up"></span>
          <span className="up"></span>
          <span className="up"></span>
        </div>
        <div className="menu-row">
          <span className="down"></span>
          <span className="down"></span>
          <span className="down"></span>
        </div>
      </div>
      <div className="chrome">
        <img
          src="http://icons.iconarchive.com/icons/dtafalonso/android-l/512/Chrome-icon.png"
          alt="Chrome"
        />
      </div>
      <div className="camera">
        <img
          src="http://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_MotorolaCameraNew.png"
          alt="Camera"
        />
      </div>
    </div>
  );
};
