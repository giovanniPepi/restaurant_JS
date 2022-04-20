import clear from "./clear";
import pizza1 from "./img/pexels-brett-jordan-825661.jpg";
import pizza2 from "./img/pexels-daria-shevtsova-1260968.jpg";
import pizza3 from "./img/pexels-engin-akyurt-1552635.jpg";
import pizza4 from "./img/pexels-engin-akyurt-2619970.jpg";
import pizza5 from "./img/pexels-kristina-paukshtite-1146760.jpg";
import pizza6 from "./img/pexels-narda-yescas-1566837.jpg";



const menuTabLoader = () => {
  clear();
  const main = document.querySelector('.main');
  const container = document.querySelector('.container');
  const footer = document.querySelector(".footer");

  //creation
  const menuContainer = document.createElement('div'); 
  menuContainer.setAttribute('class', 'menuContainer');

  const para1 = document.createElement('p');
  para1.setAttribute('class', 'para1');
  para1.textContent = "Menu";

  const menuGrid = document.createElement('div');
  menuGrid.setAttribute('class', 'menuGrid');

  const pizz1 = new Image();
  pizz1.src = pizza1;
  pizz1.setAttribute('class', 'pizzaItem');

  const pizz2 = new Image();
  pizz2.src = pizza2;
  pizz2.setAttribute('class', 'pizzaItem');

  const pizz3 = new Image();
  pizz3.src = pizza3;
  pizz3.setAttribute('class', 'pizzaItem');

  const pizz4 = new Image();
  pizz4.src = pizza4;
  pizz4.setAttribute('class', 'pizzaItem');

  const pizz5 = new Image();
  pizz5.src = pizza5;
  pizz5.setAttribute('class', 'pizzaItem');

  const pizz6 = new Image();
  pizz6.src = pizza6;
  pizz6.setAttribute('class', 'pizzaItem');

  //appends

  menuGrid.appendChild(pizz1);
  menuGrid.appendChild(pizz2);
  menuGrid.appendChild(pizz3);
  menuGrid.appendChild(pizz4);
  menuGrid.appendChild(pizz5);
  menuGrid.appendChild(pizz6);


  
  menuContainer.appendChild(para1);
  menuContainer.appendChild(menuGrid);
  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
}

export default menuTabLoader;