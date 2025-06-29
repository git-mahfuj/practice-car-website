/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("nav-close")
const navLink = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click" , showNav);
navClose.addEventListener("click" , hideNav);
navLink.forEach((link) => {
    link.addEventListener("click" , hideNav)
})

function showNav() {
    navMenu.classList.add("show__menu")
}
function hideNav () {
    navMenu.classList.remove("show__menu")
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SWIPER HOME ===============*/ 
 const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 'auto',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + String(index + 1).padStart(2 , '0') + "</span>";
        },
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnIntaraction: false,
    },

  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.getElementById("header");
window.addEventListener("scroll" , () => {
    const height = window.pageYOffset;
    console.log(height)
    if(height > 200){
        header.classList.add("change__header");
    } else {
        header.classList.remove("change__header");
    }
})

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
});

sr.reveal('.home__bg', { scale: 1.1, opacity: 1 })
sr.reveal('.home__swiper', { origin: 'right', distance: '300px', delay: 800 })
sr.reveal('.home__data', { origin: 'bottom', distance: '120px', delay: 1600 })
sr.reveal('.swiper-pagination-bullet', { origin: 'top', delay: 1800, opacity: 0 })
sr.reveal('.home__button', { origin: 'top', delay: 2200 })
sr.reveal('.about__data, .contact__content', { origin: 'left' ,delay: 1800 })
sr.reveal('.about__video, .contact__img', { origin: 'right' ,delay: 1800 })
sr.reveal('.models__card', { interval: 100 , delay: 2000 })
sr.reveal('.info__img', { distance: '120px' })
sr.reveal('.info__number', { origin: 'bottom', distance: '80px', delay: 2800 })
sr.reveal('.info__group', { interval: 100, delay: 1300 })
sr.reveal('.footer__container')