import clear from "./clear";
import pizza1 from "./img/pexels-brett-jordan-825661.jpg";
import pizza2 from "./img/pexels-daria-shevtsova-1260968.jpg";
import pizza3 from "./img/pexels-engin-akyurt-1552635.jpg";
import pizza4 from "./img/pexels-engin-akyurt-2619970.jpg";
import pizza5 from "./img/pexels-kristina-paukshtite-1146760.jpg";
import pizza6 from "./img/pexels-pixabay-315755.jpg";

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

  //grid items
  const pizz1 = document.createElement('div');
  pizz1.setAttribute('class', 'pizzaItem');
  
  const pizz1Img = new Image();
  pizz1Img.src = pizza1;
  pizz1Img.setAttribute('class', 'pizzaItemImg');

  const pizz1Desc = document.createElement('p');
  pizz1Desc.textContent = 'le pizze';

  const pizz2 = document.createElement('div');
  pizz2.setAttribute('class', 'pizzaItem');

  const pizz2Img = new Image();
  pizz2Img.src = pizza2;
  pizz2Img.setAttribute('class', 'pizzaItemImg');

  const pizz2Desc = document.createElement('p');
  pizz2Desc.textContent = 'le pizze2';

  const pizz3 = document.createElement('div');
  pizz3.setAttribute('class', 'pizzaItem');

  const pizz3Img = new Image();
  pizz3Img.src = pizza3;
  pizz3Img.setAttribute('class', 'pizzaItemImg');

  const pizz3Desc = document.createElement('p');
  pizz3Desc.textContent = 'le pizze3';

  const pizz4 = document.createElement('div');
  pizz4.setAttribute('class', 'pizzaItem');

  const pizz4Img = new Image();
  pizz4Img.src = pizza4;
  pizz4Img.setAttribute('class', 'pizzaItemImg');

  const pizz4Desc = document.createElement('p');
  pizz4Desc.textContent = 'le pizze4';

  const pizz5 = document.createElement('div');
  pizz5.setAttribute('class', 'pizzaItem');

  const pizz5Img = new Image();
  pizz5Img.src = pizza5;
  pizz5Img.setAttribute('class', 'pizzaItemImg');

  const pizz5Desc = document.createElement('p');
  pizz5Desc.textContent = 'le pizze5';

  const pizz6 = document.createElement('div');
  pizz6.setAttribute('class', 'pizzaItem');

  const pizz6Img = new Image();
  pizz6Img.src = pizza6;
  pizz6Img.setAttribute('class', 'pizzaItemImg');

  const pizz6Desc = document.createElement('p');
  pizz6Desc.textContent = 'le pizze6';

  const para5 = document.createElement('p');
  para5.setAttribute('class', 'para5');
  para5.textContent = "All pizzas are produced with natural fermentation";

  //appends

  pizz1.appendChild(pizz1Img);
  pizz1.appendChild(pizz1Desc);

  pizz2.appendChild(pizz2Img);
  pizz2.appendChild(pizz2Desc);

  pizz3.appendChild(pizz3Img);
  pizz3.appendChild(pizz3Desc);

  pizz3.appendChild(pizz3Img);
  pizz3.appendChild(pizz3Desc);

  pizz4.appendChild(pizz4Img);
  pizz4.appendChild(pizz4Desc);

  pizz5.appendChild(pizz5Img);
  pizz5.appendChild(pizz5Desc);

  pizz6.appendChild(pizz6Img);
  pizz6.appendChild(pizz6Desc);  

  menuGrid.appendChild(pizz1);
  menuGrid.appendChild(pizz2);
  menuGrid.appendChild(pizz3);
  menuGrid.appendChild(pizz4);
  menuGrid.appendChild(pizz5);
  menuGrid.appendChild(pizz6);

  menuContainer.appendChild(para1);
  menuContainer.appendChild(menuGrid);
  menuContainer.appendChild(para5);

  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
}

export default menuTabLoader;