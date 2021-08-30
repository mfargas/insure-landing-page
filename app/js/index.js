const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 425px)');


const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");

function handleScreenResize(e) {
    if (e.matches) {
        burger.addEventListener('click', () => {
            nav.classList.toggle("menuToggle");
        });
    }
}

mediaQueryMobile.addListener(handleScreenResize)

handleScreenResize(mediaQueryMobile);
