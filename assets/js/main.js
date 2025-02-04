// Função para rolar suavemente até o topo (scripts.js)
document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Efeito de digitação automática (scripts.js)
var typed = new Typed(".input", {
  strings: ["Frontend Developer", "Python Developer", "Web Developer", "Backend Developer", "Fullstack Developer", "Data Analyst"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true
});

// Menu responsivo (scripts.js)
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
  this.classList.toggle("click");
  nav.classList.toggle("open");
});


// Código para o Swiper, setas e bolinhas (main.js + scripts.js combinado)
document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector('.card__content');
  const paginationContainer = document.querySelector(".pagination");
  const cards = Array.from(cardContainer.querySelectorAll(".card__article")); // Seleciona os cards

  // Inicializa o Swiper
  let swiperCards = new Swiper(".card__content", {
      loop: false, // Desativa o loop infinito
      spaceBetween: 32,
      grabCursor: true,
      slidesPerView: 'auto',
      pagination: false,
      navigation: false,
      breakpoints: {
          600: {
              slidesPerView: 2,
          },
          968: {
              slidesPerView: 3,
          },
      },
  });

  // Setas personalizadas
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowLeft.addEventListener('click', () => {
      cardContainer.scrollLeft -= 370;
  });

  arrowRight.addEventListener('click', () => {
      cardContainer.scrollLeft += 370;
  });

  // Bolinhas de paginação
  cards.forEach((_, index) => {
      const bullet = document.createElement("span");
      bullet.classList.add("pagination-bullet");
      if (index === 0) bullet.classList.add("pagination-bullet-active");
      bullet.setAttribute("data-index", index);
      paginationContainer.appendChild(bullet);
  });

  const bullets = document.querySelectorAll(".pagination-bullet");
  let currentCard = 0;

  function updatePagination(activeIndex) {
      bullets.forEach((bullet, index) => {
          bullet.classList.toggle("pagination-bullet-active", index === activeIndex);
      });
  }

  function onScroll() {
      const containerRect = cardContainer.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Number.MAX_VALUE;

      cards.forEach((card, index) => {
          const slideRect = card.getBoundingClientRect();
          const slideCenterX = slideRect.left + slideRect.width / 2;
          const distance = Math.abs(slideCenterX - containerCenterX);

          if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
          }
      });

      updatePagination(closestIndex);
  }

  cardContainer.addEventListener("scroll", onScroll);

  bullets.forEach((bullet) => {
      bullet.addEventListener("click", function () {
          const index = parseInt(this.getAttribute("data-index"));
          cardContainer.scrollTo({
              left: cards[index].offsetLeft - cardContainer.offsetLeft,
              behavior: "smooth"
          });
          updatePagination(index);
      });
  });

  onScroll(); // Chamada inicial
});