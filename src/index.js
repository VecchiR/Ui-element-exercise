import './style.css';
import larrow  from "./icons/left_arrow.svg";
import rarrow from "./icons/right_arrow.svg";
import gh from "./icons/github_mark.svg";
import tanks from "./images/tanks.png";
import misato from "./images/misato.png";
import cross from "./images/cross.png";

const dropMenu = document.querySelectorAll('.dropdown-menu');
dropMenu.forEach((x) =>
    x.addEventListener('mouseenter', () => {
        x.querySelector(':first-child').removeAttribute('hidden');
    })
);
dropMenu.forEach((x) =>
    x.addEventListener('mouseleave', () => {
        x.querySelector(':first-child').setAttribute('hidden', true);
    })
);

const controls = document.querySelector('.controls');
controls.addEventListener('click', (e) => {
    if (e.target === controls.querySelector('.left-arrow')) {
        slideCarousel('left');
    } else if (e.target === controls.querySelector('.right-arrow')) {
        slideCarousel();
    } else if (e.target === controls.querySelector('.circles>[position="1"]')) {
        slideCarousel(false, 1);
    } else if (e.target === controls.querySelector('.circles>[position="2"]')) {
        slideCarousel(false, 0);
    } else if (e.target === controls.querySelector('.circles>[position="3"]')) {
        slideCarousel(false, -1);
    }
});

function slideCarousel(direction, setFactor) {
    const actualFactor = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--carousel-factor'));
    let newFactor = actualFactor;
    if (setFactor >= -1 && setFactor <= 1) {
        newFactor = setFactor;
        document.documentElement.style.setProperty('--carousel-factor', parseInt(newFactor));
        updCarouselCircles(newFactor);
        return;
    }

    else if (direction === 'left') {
        if (actualFactor === 1) { newFactor *= -2; }
        newFactor += 1;
        document.documentElement.style.setProperty('--carousel-factor', newFactor);
    }

    else {
        if (actualFactor === -1) { newFactor *= -2; }
        newFactor -= 1;
        document.documentElement.style.setProperty('--carousel-factor', newFactor);
    }

    updCarouselCircles(newFactor);
}

function updCarouselCircles(factor) {
    if (factor != undefined) {
        controls.querySelector(".checked:not(.radio-hidden)").classList.add('radio-hidden');
        controls.querySelector(".unchecked.radio-hidden").classList.remove('radio-hidden');
    }
    else if (factor === undefined) {
        factor = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--carousel-factor'));
    }

    const position = 2 - factor;

    controls.querySelector(`.unchecked[position='${position}']`).classList.add('radio-hidden');
    controls.querySelector(`.checked[position='${position}']`).classList.remove('radio-hidden');


}

updCarouselCircles();