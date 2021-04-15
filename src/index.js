import { mainPage } from './mainPage';
import { capitalizeFirstLetter } from './functions';
import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';
import { homeButton, menuButton, contactButton } from './dom';

(function () {
  mainPage.init(capitalizeFirstLetter);

  document
    .querySelector('#home')
    .addEventListener('click', homeButton(homePage));

  document
    .querySelector('#menu')
    .addEventListener('click', menuButton(menuPage, capitalizeFirstLetter));

  document
    .querySelector('#contact')
    .addEventListener('click', contactButton(contactPage));
})();
