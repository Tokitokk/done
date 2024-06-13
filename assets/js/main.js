const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active-link'))
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

const themeButton = document.getElementById('theme-button');
const logoImage = document.getElementById('logo-image');
const logoImageFooter = document.querySelector('.footer__logo img');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
const lightLogo = 'assets/img/favicon.png';
const darkLogo = 'assets/img/favicon_ak.png';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

function setFavicon(theme) {
    logoImage.src = theme === 'dark' ? darkLogo : lightLogo;
    logoImageFooter.src = theme === 'dark' ? darkLogo : lightLogo;
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
    setFavicon(selectedTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    const currentTheme = getCurrentTheme();
    const currentIcon = getCurrentIcon();
    setFavicon(currentTheme);
    localStorage.setItem('selected-theme', currentTheme);
    localStorage.setItem('selected-icon', currentIcon);
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.bas__data`)
sr.reveal(`.bas__img`, {delay: 500})
sr.reveal(`.bas__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(` .questions__group`,{interval: 5})

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var button = document.getElementById('toggleButton');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        button.innerHTML = 'Close the steps';
    } else {
        section.style.display = 'none';
        button.innerHTML = 'Open the steps';
    }
}

$(document).ready(function(){
    $('.slick-carousel').slick({
      dots: true,
      infinite: true,
      slidesToShow: 4, // колво слайдов
      slidesToScroll: 4, // колво слайдов
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
const srSteps = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 300,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

srSteps.reveal('.steps__card', {
    interval: 200,
    reset: true,
    scale: 1,
    viewFactor: 0.2
});

