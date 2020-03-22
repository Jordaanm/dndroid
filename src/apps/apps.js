import { CharSheet } from "./char-sheet";
import { Home } from './home';
import { DM } from './dungeon-master';

export const appMasterList = {
  'sheet': {
    id: 'sheet',
    name: 'Character Sheet',
    icon: 'stats',
    component: CharSheet,
  },
  // 'home': {
  //   id: 'home',
  //   name: 'Home',
  //   component: Home
  // },
  'dm': {
    id: 'DM',
    name: 'Dungeon Master',
    icon: 'd20',
    component: DM
  }
};
