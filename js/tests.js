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
        let actualSection = actualSection[i][0] >= this.scrollY && actualSection[i][1] <= this.scrollY? 1 : 0;

        if(actualSection) {
            startsEndSections[i].classList.add('nav_ilumination-name');
        } else {
            startsEndSections[i].classList.remove('nav_ilumination-name');
        }

    }
}

window.addEventListener('scroll', comprobationScroll);
