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

// Section 3 box Product 

const cards = document.querySelectorAll('.listcard2 .box');

cards.forEach(card => {
    const overlay = card.querySelector('.overlay');
    const icon = card.querySelector('.overlay i');
    const texte = card.querySelector('.textCard p');
    const titre = card.querySelector('.textCard h4');
    const prix = card.querySelector('.price p');
    const priceBox = card.querySelector('.price');

    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#E9A636';
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0px 10px 30px rgba(0,0,0,0.15)';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
        icon.style.opacity = '1';
        texte.style.color = 'white';
        titre.style.color = 'white';
        prix.style.color = 'white';
        priceBox.style.border = '1px solid white';
        priceBox.style.borderRadius = '20px';
        priceBox.style.padding = '3px 10px';
    });

    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
        this.style.transform = 'translateY(0px)';
        this.style.boxShadow = 'none';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        icon.style.opacity = '0';
        texte.style.color = 'grey';
        titre.style.color = 'black';
        prix.style.color = 'grey';
        priceBox.style.border = '1px solid orange';
        priceBox.style.borderRadius = '20px';
        priceBox.style.padding = '3px 10px';
    });
});