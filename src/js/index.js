const menu = document.getElementById('menu-icon');
const navigation = document.querySelector('.menu-nav');
const imgIcon = document.querySelector('.img-icon');
const body = document.body;

const showMenu = () => {
    navigation.classList.add('show');
    navigation.style.top = '82px';
    imgIcon.src = 'src/images/icon-close.svg';
    body.classList.add('menu-open'); // Adiciona a classe menu-open ao corpo
}

const hideMenu = () => {
    navigation.classList.remove('show');
    navigation.style.top = '-280px';
    imgIcon.src = 'src/images/icon-hamburger.svg';
    body.classList.remove('menu-open'); // Remove a classe menu-open do corpo
}

const toggleMenu = () => {
    if (navigation.classList.contains('show')) {
        hideMenu();
    } else {
        showMenu();
    }
}

menu.addEventListener('click', toggleMenu);
