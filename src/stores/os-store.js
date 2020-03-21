import { observable, decorate} from 'mobx'
export class OSStore {
  currentApp = null;
} 

decorate(OSStore, {
  currentApp: observable
});