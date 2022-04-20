import clear from "./clear";

const homeLoader = () => {  
  clear();
  const main = document.querySelector('.main');
  const container = document.querySelector('.container');
  const footer = document.querySelector(".footer");
  
  const para1 = document.createElement('p');
  para1.setAttribute('class', 'para1');
  const menuContainer = document.createElement('div'); 
  menuContainer.setAttribute('class', 'menuContainer');
  para1.textContent = "Welcome to the restaurant!";

  menuContainer.appendChild(para1);
  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
};

export default homeLoader;