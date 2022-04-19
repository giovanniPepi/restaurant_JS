import './style.css';
import avatar from './img/GitHub-Mark-64px.png';


// import other modules from different .js here

const logo = document.querySelector('.logo');
const myIcon = new Image();
myIcon.src = avatar;
myIcon.setAttribute('id', 'logo');

logo.appendChild(myIcon);