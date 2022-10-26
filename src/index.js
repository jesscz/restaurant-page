import './style.css';
import {initLoad} from './mainpage';
import {homeLoad} from './home';
import {menuLoad} from './menu';
import {contactLoad} from './contact';

(function component() {
  const element = document.createElement('div');
  element.append(initLoad());
  document.body.appendChild(element);


  const homeBtn = document.getElementById('homelink');
  homeBtn.addEventListener('click', homeLoad);

  const menuBtn = document.getElementById('menulink');
  menuBtn.addEventListener('click', menuLoad);

  const contactBtn = document.getElementById('contactlink');
  contactBtn.addEventListener('click', contactLoad);
    
   
})();
