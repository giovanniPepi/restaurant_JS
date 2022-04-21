import clear from "./clear";
import mapImg from "./img/map.png"
import instIcon from "./img/inst.png"

const contactLoader = () => {
  clear();
  const main = document.querySelector('.main');
  const container = document.querySelector('.container');
  const footer = document.querySelector(".footer");

  //creation
  const menuContainer = document.createElement('div'); 
  menuContainer.setAttribute('class', 'menuContainer');

  const para1 = document.createElement('p');
  para1.setAttribute('class', 'para1');
  para1.textContent = "Contact Us";

  const para2 = document.createElement('p');
  para2.setAttribute('class', 'para2');
  para2.textContent = "Location"; 

  const para2Desc = document.createElement('p');
  para2Desc.setAttribute('class', 'para2Desc');
  para2Desc.textContent = "Via Santa Maria, 119, Pisa, IT "
  
  const para2Desc2 = document.createElement('div');
  para2Desc2.setAttribute('class', 'para2Desc2');
  
  const inst = new Image();
  inst.src = instIcon;
  inst.setAttribute('class', 'flatIcon');
  
  const para2Desc2Inst = document.createElement("p");
  para2Desc2Inst.setAttribute('class', 'inst');
  para2Desc2Inst.textContent = "@ohCheesePizzeriaa";  

  const para2Desc3 = document.createElement('p');
  para2Desc3.setAttribute('class', 'para2Desc3');
  para2Desc3.textContent = "📞 49 6568 7835";
  
  
  const map = new Image(); 
  map.src = mapImg;
  map.setAttribute("class", "mapImg");


  //appends
  para2Desc2.appendChild(inst);
  para2Desc2.appendChild(para2Desc2Inst);

  para2.appendChild(para2Desc);
  para2.appendChild(para2Desc2);
  para2.appendChild(para2Desc3);

  menuContainer.appendChild(para1);
  menuContainer.appendChild(para2);
  menuContainer.appendChild(map);
  main.appendChild(menuContainer);

  container.insertBefore(main, footer);
}

export default contactLoader;
