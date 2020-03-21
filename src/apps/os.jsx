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

const getApp = currentApp => {
  switch(currentApp) {
    case "charsheet": return <CharSheet />;
    default: return <Home />;
  }
}

export const OS = observer(props => {
  const { os } = useStores();
  console.log("os");
  const app = getApp(os.currentApp);

  return (
    <div className={`container ${os.isLocked ? 'blur' : ''}`}>
      <OSNotificationBar />
      {os.isLocked && <LockScreen />}
      {!os.isLocked && <>
        <div className="body">
          {app}
          <OSAppBar />
          <OSNavBar />
        </div>
      </>}
    </div>
  );
});
