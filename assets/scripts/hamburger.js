const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');

hamburger.addEventListener('click', () => {
    burger.classList.toggle('open');
});