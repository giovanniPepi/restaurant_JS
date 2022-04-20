import homeLoader from "./home";

//Dinamyically change main div content 

const menuLoader = (option) => {
  //clear previous menu
  
  switch (option) {
  case 'home': 
    homeLoader();
    break;
  case 'menu': 
    para1.textContent = "MenuLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";
    main.appendChild(para1);
    break;
  case 'contact': 
    para1.textContent = "ContactLLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";
    main.appendChild(para1);
    break;
  }

  container.insertBefore(main, footer);  
}

export default menuLoader;
  
  