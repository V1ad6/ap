const hatBtn = document.querySelector('.hat__btn');
const bg = document.querySelectorAll('.movable-bg');

hatBtn.addEventListener('click', () => {
  document.body.classList.toggle('noscroll');
  document.querySelector('.overlay')?.classList.toggle('overlay_visible');
  document.querySelector('menu')?.classList.toggle('menu_opened');
  hatBtn.classList.toggle('hat__btn_clicked');
});

document.addEventListener('scroll', moveBackground);
document.addEventListener('scroll', animate);

moveBackground();
setTimeout(animate, 700);

function moveBackground() {
  const div = [3, 5];

  function move(item, div) {
    if ((window.pageYOffset - item.offsetTop) >= item.offsetHeight * 1.3) {
      item.style.backgroundPositionY = (item.offsetHeight * 1.3) + 'px';
    } else if ((window.pageYOffset + window.innerHeight) <= item.offsetTop - 200) {
      item.style.backgroundPositionY = (item.offsetTop - 200) + 'px';
    } else {
      item.style.backgroundPositionY = (window.pageYOffset - item.offsetTop)/div + 'px';
    }
  }

  bg.forEach((item, i) => {
    move(item, div[i]);
  });
}

function animate() {
  document.querySelectorAll('.animate').forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight / 1.4) {
      item.classList.add('animated');
    }
  });
}


