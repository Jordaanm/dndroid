import { observable, decorate, action, computed } from 'mobx'
import { allHeroes } from '../data/hero-presets/heroes';
import { delay } from '../utils/promises';
import { Voice } from '../utils/voice';
import { populateSheet } from "../utils/char-utils";
import openSocket from 'socket.io-client';
import { appMasterList } from '../apps/apps';

const DEFAULT_APPS = ['sheet', 'combat'];
const LOCAL_STORAGE_CHAR_KEY = 'characterData';

export class OSStore {
  appHistory = ['home'];
  showAppList = false;
  isLocked = true;
  isDM = false;
  hero = null;
  user = '';
  voice = new Voice();
  socket = null;
  apps = [];
  searchTerm = '';
  dmScreen = {
    players: []
  };

  constructor() {
    window.dmMode = () => {
      this.apps.push('dm');
      this.isDM = true;
    }
    setInterval(() => {
      if (!this.isLocked) {
        this.save();
        console.log("Saving...");
      }
    }, 15000);
  }

  async enableDefaultApps() {
    for(let x in DEFAULT_APPS) {
      const appName = DEFAULT_APPS[x];
      if(!this.apps.includes(appName)) {
        await delay(750);
        this.apps.push(appName);
      }
    }
  }

  unlockApp(appName) {
    if(!this.apps.includes(appName)) {
      this.apps.push(appName);
    }
  }

  toggleAppList() {
    this.showAppList = !this.showAppList;
  }

  get currentApp() {
    return this.appHistory[this.appHistory.length -1] || 'home';
  }

  get appList() {
    return this.appHistory
      .filter((val, index, self) => self.indexOf(val) === index) //Unique
      .filter(val => val !== 'home')
      .reverse()
      .map(appName => appMasterList[appName])
      .filter(Boolean);
  }

  launchApp(appName) {
    this.showAppList = false;
    if(this.appHistory[this.appHistory.length -1] !== appName) {
      this.appHistory.push(appName);
    }
  }

  goBack() {
    if(this.appHistory.length > 1) {
      this.appHistory.splice(-1, 1);
    }
  }

  initialise() {
    const val = this.connectSocket();
    this.load();
    return val;
  }

  connectSocket() {
    // const socketAddress = window.location.host.toString().replace(':3000', '') + ":8000";
    const socketAddress = 'ws://afternoon-eyrie-75824.herokuapp.com/';
    this.socket = openSocket(socketAddress);
    this.socket.on('speak', msg => this.voice.speak(msg));
    this.socket.on('unlockApp', appName => this.unlockApp(appName));
    this.socket.on('dmReceivePlayers', p => {
      this.dmScreen.players = p;
    });
    return () => this.socket.close();
  }

  tryUnlock(password, user) {
    const chosenHero = allHeroes.find(x => x.password === password.toLowerCase());
    if(!chosenHero) {
      return Promise.reject("Incorrect Password, Try Again");
    } else {
      this.hero = populateSheet(chosenHero);
      this.user = user;
      delay(2000).then(() => {
        this.isLocked = false;
        this.enableDefaultApps();
      });
      this.socket.emit('selectedHero', chosenHero.name, user);
      return Promise.resolve(chosenHero);
    }
  }

  save() {
    const data = {
      hero: this.hero,
      user: this.user,
      unlockedApps: this.apps
    };

    localStorage.setItem(LOCAL_STORAGE_CHAR_KEY, JSON.stringify(data));
  }

  load() {
    const dataString = localStorage.getItem(LOCAL_STORAGE_CHAR_KEY);
    if(!dataString) { return; }

    const data = JSON.parse(dataString);

    //Load Hero   
    this.hero = data.hero;
    this.user = data.user;
    this.isLocked = false;
    this.socket.emit('selectedHero', this.name, this.user);
    
    //Unlock Apps
    this.apps = data.unlockedApps;
  }
} 

decorate(OSStore, {
  currentApp: computed,
  appList: computed,
  showAppList: observable,
  appHistory: observable,
  isLocked: observable,
  isDM: observable,
  searchTerm: observable,
  hero: observable,
  user: observable,
  tryUnlock: action,
  apps: observable,
  dmScreen: observable,
  load: action
});