  //Home

const menuLoader = (option) => {
  const container = document.querySelector('.container');
  const main = document.querySelector(".main");
  const footer = document.querySelector('.footer');
  main.innerHTML = '';
  const para1 = document.createElement('p');

  switch (option) {
  case 'home': 
    para1.textContent = "HomeLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";
    break;
  case 'menu': 
    para1.textContent = "MenuLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";
    break;
  case 'contact': 
    para1.textContent = "ContactLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";
    break;
  }
  main.appendChild(para1);
  container.insertBefore(main, footer);  
}

export default menuLoader;
  
  