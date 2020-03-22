import { observable, decorate, action} from 'mobx'
import { allHeroes } from '../data/hero-presets/heroes';
import { delay } from '../utils/promises';
import { Voice } from '../utils/voice';
import openSocket from 'socket.io-client';

const DEFAULT_APPS = ['sheet'];
const LOCAL_STORAGE_CHAR_KEY = 'characterData';

export class OSStore {
  currentApp = null;
  isLocked = true;
  isDM = false;
  hero = null;
  voice = new Voice();
  socket = null;
  apps = [];
  dmScreen = {
    players: []
  };

  constructor() {
    window.dmMode = () => {
      this.apps.push('dm');
      this.isDM = true;
    }
    setInterval(() => {
      this.save();
      console.log("Saving...");
    }, 15000);
  }

  async enableDefaultApps() {
    for(let x in DEFAULT_APPS) {
      console.log("X", x);
      const appName = DEFAULT_APPS[x];
      if(!this.apps.includes(appName)) {
        await delay(1500);
        this.apps.push(appName);
      }
    }
  }

  unlockApp(appName) {
    if(!this.apps.includes(appName)) {
      this.apps.push(appName);
    }
  }

  initialise() {
    const val = this.connectSocket();
    this.load();
    return val;
  }

  connectSocket() {
    this.socket = openSocket('http://localhost:8000');
    this.socket.on('speak', msg => this.voice.speak(msg));
    this.socket.on('unlockApp', appName => this.unlockApp(appName));
    this.socket.on('dmReceivePlayers', p => {
      this.dmScreen.players = p;
    });
    // os.socket.on('timer', timestamp => console.log(timestamp));
    // os.socket.emit('subscribeToTimer', 1000);
    return () => this.socket.close();
  }

  tryUnlock(password) {
    const chosenHero = allHeroes.find(x => x.password === password.toLowerCase());
    if(!chosenHero) {
      return Promise.reject("Incorrect Password, Try Again");
    } else {
      this.hero = chosenHero;
      delay(2000).then(() => {
        this.isLocked = false;
        this.enableDefaultApps();
      });
      this.socket.emit('selectedHero', chosenHero.name);
      return Promise.resolve(chosenHero);
    }
  }

  save() {
    const data = {
      password: this.hero.password,
      unlockedApps: this.apps,
      health: 0, //TODO
      mana: 0, //TODO
      inventory: [], //TODO
      skillUses: [] //TODO
    };

    localStorage.setItem(LOCAL_STORAGE_CHAR_KEY, JSON.stringify(data));
  }

  load() {
    const dataString = localStorage.getItem(LOCAL_STORAGE_CHAR_KEY);
    if(!dataString) { return; }

    const data = JSON.parse(dataString);

    //Load Hero   
    const chosenHero = allHeroes.find(x => x.password === data.password.toLowerCase());
    this.hero = chosenHero;
    this.isLocked = false;
    this.socket.emit('selectedHero', chosenHero.name);
    
    //Unlock Apps
    this.apps = data.unlockedApps;

    // this.hero.hp = data.health;
    // this.hero.mana = data.mana;
    // this.inventory = data.inventory;
    // this.hero.skillUses = data.skillUses
  }
} 

decorate(OSStore, {
  currentApp: observable,
  isLocked: observable,
  isDM: observable,
  hero: observable,
  tryUnlock: action,
  apps: observable,
  dmScreen: observable,
  load: action
});