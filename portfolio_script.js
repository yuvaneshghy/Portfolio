let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

// <============================ scroll reveal ===================================>
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_content, .heading, .Skill_heading, .contact_heading', {origin: 'top'});
ScrollReveal().reveal('.home_content', {origin: 'bottom'});
ScrollReveal().reveal('.home_image', {origin: 'top'});
ScrollReveal().reveal('.skill_container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home_content h1, .about_img', {origin: 'left'});
ScrollReveal().reveal('.about_content, .home_content p', {origin: 'right'});

// <============================ Typing Animation ===================================>
const typed = new Typed('.multi_text', {
    strings: ['Web Developer','Graphic Designer','Video Editor'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})