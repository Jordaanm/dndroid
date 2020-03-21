import React from 'react';
import { OSStore } from '../stores/os-store';

export const storesContext = React.createContext({
  os: new OSStore()
});

export const useStores = () => React.useContext(storesContext);