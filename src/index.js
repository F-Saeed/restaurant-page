import { mainPage } from './mainPage';
import { capitalizeFirstLetter } from './functions';
import { homeTab } from './home';
import { menuTab } from './menu';
import { contactTab } from './contact';
import { home, menu, contact } from './dom';

(function () {
  mainPage(capitalizeFirstLetter);

  document.querySelector('#home').addEventListener('click', home(homeTab));

  document
    .querySelector('#menu')
    .addEventListener('click', menu(menuTab, capitalizeFirstLetter));

  document
    .querySelector('#contact')
    .addEventListener('click', contact(contactTab));
})();
