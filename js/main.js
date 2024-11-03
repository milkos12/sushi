/* SHOW MENÚ RESPONSIVE */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');



if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('nav__menu--show');
    });
}

if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('nav__menu--show');
    });
}



function shadowHeader () {
    const header = document.getElementById('header');
    
    if(this.scrollY > 35) {
        header.classList.add('header--shadow');
    } else {
        header.classList.remove('header--shadow');
    }
}


window.addEventListener('scroll', shadowHeader);


function hiddenShowScrollUP() {
    const buttomScrollUp = document.getElementById('scroll-up');
    const valueScrool = this.scrollY;

    if(valueScrool >= 350){
        buttomScrollUp.classList.remove('scrollup-hidden');
    } else {
        buttomScrollUp.classList.add('scrollup-hidden');
    }
}

window.addEventListener('scroll', hiddenShowScrollUP);




let sections = document.querySelectorAll('section');
let startsEndSections = [];
let current = 0;

sections.forEach(section => {
    let heigthSection = section.clientHeight;
    startsEndSections.push([current, current + heigthSection - 30]);
    current += heigthSection - 30;
});

function comprobationScroll () {
    for(let i = 0; i <= startsEndSections.length; i++) {
        let actualSection = this.scrollY >= startsEndSections[i][0] && this.scrollY <= startsEndSections[i][1] ? 1 : 0;
        let idSection = sections[i].id;
        let navName = document.getElementById(`nav_${idSection}`);

        if(actualSection) {
            navName.classList.add('nav_ilumination-name');
        } else {
            navName.classList.remove('nav_ilumination-name');
        }

    }
}

window.addEventListener('scroll', comprobationScroll);



function modeDarck() {
    let buttonDarck = document.querySelector(".change-theme");
    let body = document.body;
    let listClass = buttonDarck.className;
    let confirm = listClass.includes('ri-sun-line') == true? 0: 1;
    
    if(confirm) {
        buttonDarck.classList.add('ri-sun-line');
        buttonDarck.classList.remove('ri-moon-line')
        body.classList.add('dark-theme');
    } else {
        buttonDarck.classList.remove('ri-sun-line');
        buttonDarck.classList.add('ri-moon-line');
        body.classList.remove('dark-theme');
    }

    
}


let buttonDarck = document.querySelector(".change-theme");
buttonDarck.addEventListener('click', modeDarck);




function hiddenButtomMenuWidth() {
   let widht = window.innerWidth;
   let toggle = document.getElementById('nav-toggle');
   let nav = document.getElementById('nav-menu');
   let listClass = document.getElementById('nav__list');

   if(widht >= 915) {
        toggle.classList.add('nav__toggle__pc');
        nav.classList.remove('nav__menu');
        listClass.classList.remove('nav__list');
   } else {
        toggle.classList.remove('nav__toggle__pc');
        nav.classList.add('nav__menu');
        listClass.classList.add('nav__list');
   }
}

hiddenButtomMenuWidth();
window.addEventListener('resize', hiddenButtomMenuWidth);


const scrollreveal = ScrollReveal({
    distance: '30px',
    duration: 2000,
    delay: 10,
});

scrollreveal.reveal('.home__img');
scrollreveal.reveal('.home__data', {
    origin: 'top'
});

scrollreveal.reveal('.about__container--img, .popular__card, .recently__data, .recently__img, .newsletter__container, .newsletter__spinach-leaf, .footer__logo, .footer__description, .footer__onion, .footer__spinach, .footer__title, .footer__links, .ri-facebook-circle-fill')
scrollreveal.reveal('.about__data',{
    origin: 'top'
})


