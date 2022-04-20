import clear from "./clear";

const contactLoader = () => {
  clear();
  const main = document.querySelector('.main');
  const container = document.querySelector('.container');
  const footer = document.querySelector(".footer");

  const para1 = document.createElement('p');
  const menuContainer = document.createElement('div'); 
  menuContainer.setAttribute('class', 'menuContainer');
  para1.textContent = "contactLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";

  menuContainer.appendChild(para1);
  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
}

export default contactLoader;