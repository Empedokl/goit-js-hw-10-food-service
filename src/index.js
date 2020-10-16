import './styles.css';
import itemsMenu from './menu/menu-items.hbs';
import menu from './menu/menu.json';
import './js/theme.js'

const markup = itemsMenu(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('afterbegin', markup);
