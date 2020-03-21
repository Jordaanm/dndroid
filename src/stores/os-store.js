import { observable, decorate, action} from 'mobx'
import { allHeroes } from '../data/hero-presets/heroes';
import { delay } from '../utils/promises';
export class OSStore {
  currentApp = null;
  isLocked = true;
  hero = null;

  tryUnlock(password) {
    const chosenHero = allHeroes.find(x => x.password === password.toLowerCase());
    if(!chosenHero) {
      return Promise.reject("Incorrect Password, Try Again");
    } else {
      this.hero = chosenHero;
      delay(2000).then(() => {
        this.isLocked = false;
      });
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