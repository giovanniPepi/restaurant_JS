import './style.css';
import dQuery from './initialLoader.js';
import menuLoader from './menuLoader.js';

// calls other modules, add eventListeners
const main = (() => {
  dQuery();

  const homeBtn = document.querySelector('.home');
  homeBtn.addEventListener("click", () => menuLoader('home'));

  const menuBtn = document.querySelector('.menu');
  menuBtn.addEventListener("click", () => menuLoader('menu'));

  const contactBtn = document.querySelector('.contact');
  contactBtn.addEventListener("click", () => menuLoader('contact'));
  
})();


