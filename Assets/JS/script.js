/* --- Toggle Menu Bar --- */
let clicked = () => {
    console.log("clicked");
}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

navHandler = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};