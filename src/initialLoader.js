import avatar from './img/GitHub-Mark-64px.png';

const dQuery = () => {
 
  const logo = document.querySelector('.logo');
  const git = new Image();  
  git.src = avatar;
  git.setAttribute('id', 'logo');
  
  logo.appendChild(git);

  // HTML base skeleton creator
  const container = document.querySelector('.container');

  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  const tabs = document.createElement('div');
  tabs.setAttribute('class', 'tabs');

  const home = document.createElement('div');
  home.setAttribute('class', 'home');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');
  menu.textContent = 'Menu';
  
  const contact = document.createElement('div');
  contact.setAttribute('class', 'contact');
  contact.textContent = 'Contact';

  tabs.appendChild(home);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  header.appendChild(tabs);
  
  container.prepend(header);



  //Home main menu creator

  const main = document.querySelector('.main');
  const para1 = document.createElement('p');
  para1.textContent = "LLorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eius quis ad omnis maiores provident ullam officia dolorem molestiae ratione rem cumque fuga voluptatibus vel, est minima necessitatibus hic quam?";

  main.appendChild(para1);

};

export default dQuery;