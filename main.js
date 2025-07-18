let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');  // Fixed class selector

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;  // Fixed variable name
        let height = sec.offsetHeight;  // Fixed variable name
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {  // Fixed variable name
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  // Fixed selector syntax
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading ',{ origin:'top' });
ScrollReveal().reveal('.home-img, .Experience-container, .portfolio-box, .contact-form ',{ origin:'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img ',{ origin:'left' });
ScrollReveal().reveal('.home-contact p, .about-content ',{ origin:'right' });

const typed = new Typed('.multiple-text',{
    strings:['Software Engineer Fresh Graduate','Software Developer'],
    typespeed:30,
    backspeed:30,
    backDelay:2000,
    loop:true
});

