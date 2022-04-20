const homeLoader = () => {

  const container = document.querySelector('.container');
  const main = document.querySelector(".main");
  const footer = document.querySelector('.footer');
  const para1 = document.createElement('p');
  
  main.innerHTML = '';


  const homeContainer = document.createElement('div'); 
  homeContainer.setAttribute('class', 'homeContainer');
  para1.textContent = "HomeLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";

  homeContainer.appendChild(para1);
  main.appendChild(homeContainer);
};

export default homeLoader;