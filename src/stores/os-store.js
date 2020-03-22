import { observable, decorate, action} from 'mobx'
import { allHeroes } from '../data/hero-presets/heroes';
import { delay } from '../utils/promises';
import { Voice } from '../utils/voice';
import openSocket from 'socket.io-client';

export class OSStore {
  currentApp = null;
  isLocked = true;
  hero = null;
  voice = new Voice();
  socket = null;

  connectSocket() {
    this.socket = openSocket('http://localhost:8000');
    this.socket.on('speak', msg => this.voice.speak(msg));
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
      });
      this.socket.emit('selectedHero', chosenHero.name);
      return Promise.resolve(chosenHero);
    }
  }
} 

decorate(OSStore, {
  currentApp: observable,
  isLocked: observable,
  hero: observable,
  tryUnlock: action
});