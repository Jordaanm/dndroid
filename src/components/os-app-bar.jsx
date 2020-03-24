import React from "react";
import "./os-app-bar.scss";
import { useStores } from "../utils/contexts";

export const OSAppBar = props => {
  const { os } = useStores();
  const openApp = (name) => () => { os.launchApp(name); };

  return (
    <div className="apps">
      <div className="app-shortcut sheet" onClick={openApp('sheet')}>
        <img
          src="http://crimenb.ca/wp-content/uploads/2014/12/stats_icon2.png"
          alt="CharacterSheet"
        />
      </div>
      <div className="app-shortcut messages">
        <img
          src="https://www.androidpolice.com/wp-content/uploads/2016/10/nexus2cee_logo_messenger_round_launcher_color_48dp.png"
          alt="Messages"
        />
      </div>
      <div className="app-shortcut menu">
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
      <div className="app-shortcut chrome">
        <img
          src="http://icons.iconarchive.com/icons/dtafalonso/android-l/512/Chrome-icon.png"
          alt="Chrome"
        />
      </div>
      <div className="app-shortcut camera">
        <img
          src="http://www.androidpolice.com/wp-content/uploads/2015/02/nexus2cee_MotorolaCameraNew.png"
          alt="Camera"
        />
      </div>
    </div>
  );
};
