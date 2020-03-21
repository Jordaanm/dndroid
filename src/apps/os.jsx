import React from "react";
import "./os.scss";

import { OSNavBar } from "../components/os-nav-bar";
import { OSAppBar } from "../components/os-app-bar";
import { OSNotificationBar } from "../components/os-notification-bar";

import { Home } from "./home";
import { CharSheet } from "./char-sheet";

export const OS = props => {
  return (
    <div className="container">
      <OSNotificationBar />
      <div className="body">
        <CharSheet/>
        <OSAppBar />
        <OSNavBar />
      </div>
    </div>
  );
};
