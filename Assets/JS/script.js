/* --- Toggle Menu Bar --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

navHandler = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* --- Control Active Links --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    navbar.classList.remove('active');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < (offset + height)) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};


/* --- Typewriter Effect --- */
const typed = new Typed('.multiple-roles', {
    strings: ['Problem Solver', 'UI/UX Designer', 'Web Developer', 'Data Scientist',  'ML Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});