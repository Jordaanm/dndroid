import React from "react";
import { observer } from "mobx-react-lite";

import "./os.scss";

import { Home } from "./home";
import { CharSheet } from "./char-sheet";
import { LockScreen } from "./lock-screen";
import { DM } from "./dungeon-master";
import { Googax } from "./googax";
import { Combat } from "./combat";

import { OSNavBar } from "../components/os-nav-bar";
import { OSNotificationBar } from "../components/os-notification-bar";
import { OSAppList} from '../components/app-list';
import { useStores } from "../utils/contexts";

const getApp = appName => {
  console.log("GetAPP", appName);
  switch((appName || '').toLowerCase()) {
    case "sheet": return <CharSheet />;
    case "dm": return <DM />;
    case "googax": return <Googax />;
    case "combat": return <Combat />;
    default: return <Home />;
  }
}

export const OS = observer(() => {
  const { os } = useStores();
  const { showAppList } = os;
  console.log("ShowAppList ? ", showAppList);

  const app = getApp(os.currentApp);
  const heroName = (os.hero ? os.hero.name : '').toLowerCase();
  return (
    <div className={`container ${heroName} ${os.isLocked ? 'blur' : ''}`}>
      <OSNotificationBar />
      {os.isLocked && <LockScreen />}
      {!os.isLocked && <>
        <div className="body">
          {app}
          <OSNavBar />
          {showAppList && <OSAppList />}
        </div>
      </>}
    </div>
  );
});
