import clear from "./clear";

const homeLoader = () => {  
  clear();
  const main = document.querySelector('.main');
  const container = document.querySelector('.container');
  const footer = document.querySelector(".footer");

  //creation
  const menuContainer = document.createElement('div'); 
  menuContainer.setAttribute('class', 'menuContainer');

  const para1 = document.createElement('p');
  para1.setAttribute('class', 'para1');
  para1.textContent = "Welcome to the restaurant!";

  const para2 = document.createElement('p');
  para2.setAttribute('class', 'para2');
  para2.textContent = 'Welcome to the best pizza in the world! We '+
  'serve pizza made in a delicious wood oven, just like tradition demands. '+
  'Our ingredients are fresh and strictly controlled for quality. Try out '+
  'one of our specials and be amazed!';

  const para3 = document.createElement('p');
  para3.setAttribute('class', 'para3');
  para3.textContent = 'Hours';

  const mon = document.createElement('p');
  const tue = document.createElement('p');
  const wed = document.createElement('p');
  const thurs = document.createElement('p');
  const fri = document.createElement('p');
  const sat = document.createElement('p');
  const sun = document.createElement('p');
  mon.textContent = 'Monday: 6am - 6pm';
  tue.textContent = 'Tuesday: 6am - 6pm';
  wed.textContent = 'Wednesday: 6am - 6pm';
  thurs.textContent = 'Thursday: 6am - 10pm';
  fri.textContent = 'Friday: 6am - 10pm';
  sat.textContent = 'Saturday: 8am - 10pm';
  sun.textContent = 'Sunday: 8am - 12am';

  para3.appendChild(mon);
  para3.appendChild(tue);
  para3.appendChild(wed);
  para3.appendChild(thurs);
  para3.appendChild(fri);
  para3.appendChild(sat);
  para3.appendChild(sun);

  const para4 = document.createElement('p');
  para4.setAttribute('class', 'para4');
  para4.textContent = 'Location';

  const addr = document.createElement('p');
  addr.textContent = 'Via Santa Maria, 119, Pisa, IT'

  para4.appendChild(addr);

  //appends
  menuContainer.appendChild(para1);
  menuContainer.appendChild(para2);
  menuContainer.appendChild(para3);
  menuContainer.appendChild(para4);
  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
};

export default homeLoader;