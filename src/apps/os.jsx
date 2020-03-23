import React from "react";
import { observer } from "mobx-react-lite";

import "./os.scss";

import { Home } from "./home";
import { CharSheet } from "./char-sheet";
import { LockScreen } from "./lock-screen";
import { DM } from "./dungeon-master";
import { Googax } from "./googax";
import { Spells } from "./spells";

import { OSNavBar } from "../components/os-nav-bar";
// import { OSAppBar } from "../components/os-app-bar";
import { OSNotificationBar } from "../components/os-notification-bar";
import { useStores } from "../utils/contexts";

const getApp = currentApp => {
  switch((currentApp || '').toLowerCase()) {
    case "sheet": return <CharSheet />;
    case "dm": return <DM />;
    case "googax": return <Googax />;
    case "spells": return <Spells />;
    default: return <Home />;
  }
}

export const OS = observer(props => {
  const { os } = useStores();

  const app = getApp(os.currentApp);
  const heroName = ((os.hero && os.hero.name) || '').toLowerCase();
  return (
    <div className={`container ${heroName} ${os.isLocked ? 'blur' : ''}`}>
      <OSNotificationBar />
      {os.isLocked && <LockScreen />}
      {!os.isLocked && <>
        <div className="body">
          {app}
          {/* <OSAppBar /> */}
          <OSNavBar />
        </div>
      </>}
    </div>
  );
});
