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
    startsEndSections.push([current, current + heigthSection]);
    current += heigthSection;
});

function comprobationScroll () {
    for(let i = 0; i <= startsEndSections; i++) {
        let actualSection = startsEndSections[i][0] >= this.scrollY && startsEndSections[i][1] >= this.scrollY? 0 : 1;

        if(actualSection) {
            sections[i].classList.add('nav_ilumination-name');
        } else {
            sections[i].classList.remove('nav_ilumination-name');
        }

    }
}

window.addEventListener('scroll', comprobationScroll);