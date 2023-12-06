/* --- Add year ---*/
let yearText = document.querySelector('#year');
yearText.textContent = new Date().getFullYear();

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
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
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


/* --- Contact Form --- */
const scriptURL = 'https://script.google.com/macros/s/AKfycbwGXdViIerw0KmwqK5jlR7qgAeobSLv3ODxSceoPgkrgNnaeG6CesDeJIVKUZVMDvnEPQ/exec';
const form = document.forms['contact-form'];
let mssg = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => mssg.style.display = 'block')
        .then(() => document.querySelector('#contact').scrollIntoView())
        .catch(error => alert("Your message is not sent"))
})
