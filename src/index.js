import './style.css';
import dQuery from './initialLoader.js';
import clear from './clear';
import contactLoader from './contactLoader';
import getListeners from './getListeners';
import menuLoader from './menuLoader';
import menuTabLoader from './menuTabLoader';

// calls other modules, add eventListeners
const main = (() => {
  dQuery(); 
  menuLoader('home');
})();


