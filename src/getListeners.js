import menuLoader from './menuLoader.js';

const getListeners = () => {
  const homeBtn = document.querySelector('.home');
  homeBtn.addEventListener("click", () => menuLoader('home'));

  const menuBtn = document.querySelector('.menu');
  menuBtn.addEventListener("click", () => menuLoader('menu'));

  const contactBtn = document.querySelector('.contact');
  contactBtn.addEventListener("click", () => menuLoader('contact'));
}

export default getListeners;