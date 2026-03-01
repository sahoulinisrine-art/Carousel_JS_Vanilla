// CAROUSEL

const slides = document.querySelectorAll(".slide");
const uptitle = document.getElementById("uptitle");
const title = document.getElementById("title");
const text = document.getElementById("text");
const btn1 = document.getElementById("btn1");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

function updateSlide(i) {

  // enlever active partout
  for (let slide of slides) {
    slide.classList.remove("active");
  }

  // activer slide
  slides[i].classList.add("active");

  // récupérer data
  const bg = slides[i].dataset.bg;
  const u = slides[i].dataset.uptitle;
  const t = slides[i].dataset.title;
  const p = slides[i].dataset.text;
  const b = slides[i].dataset.btn1;

  // appliquer background
  slides[i].style.backgroundImage = "url(" + bg + ")";

  // changer contenu
  uptitle.textContent = u;
  title.textContent = t;
  text.textContent = p;
  btn1.textContent = b;
}

next.addEventListener("click", function() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  updateSlide(index);
});

prev.addEventListener("click", function() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateSlide(index);
});

updateSlide(index);


// Lien en orange

const liens = document.querySelectorAll('.pagesNav a');

liens.forEach(lien => {
    lien.addEventListener('mouseover', function() {
        this.style.color = 'orange';
    });
    lien.addEventListener('mouseout', function() {
        this.style.color = 'white';
    });
});

// dropdown dans la nav

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function() {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("visible");
});

dropdown.addEventListener("mouseout", function() {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("visible");
});

// fleche deviennent noir avec moueover

const fleches = document.querySelectorAll('#prev, #next');

fleches.forEach(fleche => {
    fleche.addEventListener('mouseover', function() {
        this.style.color = 'black';
    });
    fleche.addEventListener('mouseout', function() {
        this.style.color = 'orange';
    });
});

// la nav qui change 

const navBackround = document.querySelector(".navBackround");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navBackround.classList.add("scrolled");
    } else {
        navBackround.classList.remove("scrolled");
    }
});