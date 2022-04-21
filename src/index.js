import './style.css';
import dQuery from './initialLoader.js';
import menuLoader from './menuLoader';

// calls other modules, add eventListeners
const main = (() => {
  dQuery(); 
  menuLoader('home');
})();


