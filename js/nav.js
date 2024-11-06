const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
    } else {
        nav.style.position = 'relative'; /* or static */
    }
});