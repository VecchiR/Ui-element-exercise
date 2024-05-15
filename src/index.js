import './style.css';

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
  let actualFactor = parseInt(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--carousel-factor')
  );

  if (setFactor >= -1 && setFactor <= 1) {
    document.documentElement.style.setProperty(
      '--carousel-factor',
      parseInt(setFactor)
    );
    return;
  } else if (direction === 'left') {
    if (actualFactor === 1) {
      actualFactor *= -2;
    }
    document.documentElement.style.setProperty(
      '--carousel-factor',
      actualFactor + 1
    );
  } else {
    if (actualFactor === -1) {
      actualFactor *= -2;
    }
    document.documentElement.style.setProperty(
      '--carousel-factor',
      actualFactor - 1
    );
  }
}
