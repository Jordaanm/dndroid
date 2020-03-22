import React from "react";
import "./os.scss";

import { OSNavBar } from "../components/os-nav-bar";
import { OSAppBar } from "../components/os-app-bar";
import { OSNotificationBar } from "../components/os-notification-bar";

import { Home } from "./home";
import { CharSheet } from "./char-sheet";
import { useStores } from "../utils/contexts";
import { observer } from "mobx-react-lite";
import { LockScreen } from "./lock-screen";
import { DM } from "./dungeon-master";
import { Googax } from "./googax";

const getApp = currentApp => {
  console.log("CURRENT APP", currentApp);
  switch((currentApp || '').toLowerCase()) {
    case "sheet": return <CharSheet />;
    case "dm": return <DM />;
    case "googax": return <Googax />;
    default: return <Home />;
  }
}

export const OS = observer(props => {
  const { os } = useStores();

  console.log("os");
  const app = getApp(os.currentApp);
  const heroName = (os.hero && os.hero.name || '').toLowerCase();
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
