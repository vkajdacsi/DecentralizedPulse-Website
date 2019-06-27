alert ("hello");

const navbarSlide = () => {
  const burgericon = document.querySelector('.burgericon');
  const nav = document.querySelector('.navbar');
  const navbar = document.querySelectorAll('navbar li');


  burgericon.addEventListener('click', () => {
    //Toogle navbar
      nav.classList.toggle('nav-active');


  //Animate the links
  navbar.forEach((link, index) => {
      if (link.style.animation){
          link.style.animation = '';
      } else {
          link.style.animation = `navbarFade` 0.5s ease forwards ${index / 7 +0.3}s
      }
  });
  //Burger animation
  burgericon.classList.toggle('toggle');


  });
}

navbarSlide();
