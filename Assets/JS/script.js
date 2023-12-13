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
    document.querySelector('#contact').scrollIntoView();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => mssg.style.display = 'block')
        .catch(error => alert("Your message is not sent"))
})


/*--- Scroll Reaveal Efeects ---*/
ScrollReveal({ 
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-box, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content .social-media', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .home-content .btn', { origin: 'right' });