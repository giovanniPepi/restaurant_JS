import homeLoader from "./homeLoader.js";
import menuTabLoader from "./menuTabLoader.js";
import contactLoader from "./contactLoader.js";

//Dinamyically change main div content 

const menuLoader = (option) => {
  //clear previous menu  
  switch (option) {
  case 'home': 
    homeLoader();
    break;
  case 'menu': 
    menuTabLoader();
    break;
  case 'contact': 
    contactLoader();
    break;
  }
}

export default menuLoader;
  
  