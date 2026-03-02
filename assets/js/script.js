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

    // changer contenu ( là c est le meme texte)
    uptitle.textContent = u;
    title.textContent = t;
    text.textContent = p;
    btn1.textContent = b;
}

next.addEventListener("click", function () {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    updateSlide(index);
});

prev.addEventListener("click", function () {
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
    lien.addEventListener('mouseover', function () {
        this.style.color = 'orange';
    });
    lien.addEventListener('mouseout', function () {
        this.style.color = 'white';
    });
});

// dropdown dans la nav

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function () {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("visible");
});

dropdown.addEventListener("mouseout", function () {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("visible");
});

// fleche deviennent noir avec moueover

const fleches = document.querySelectorAll('#prev, #next');

fleches.forEach(fleche => {
    fleche.addEventListener('mouseover', function () {
        this.style.color = 'black';
    });
    fleche.addEventListener('mouseout', function () {
        this.style.color = 'orange';
    });
});

// la nav qui change 

const navBackround = document.querySelector(".navBackround");

window.addEventListener("scroll", function () {
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

    card.addEventListener('mouseover', function () {
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

    card.addEventListener('mouseout', function () {
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

// Section 5 OUR TEAM

const teamCards = document.querySelectorAll('.teamCard');

teamCards.forEach(card => {
    const info = card.querySelector('.teamInfo');
    const social = card.querySelector('.teamSocial');

    card.addEventListener('mouseover', function () {
        social.style.transform = 'translateY(0)';
        info.style.opacity = '0';
    });

    card.addEventListener('mouseout', function () {
        social.style.transform = 'translateY(100%)';
        info.style.opacity = '1';
    });
});


// SECTION REVIEW

const conteneur = document.querySelector('.reviewsCards');
const wrapper = document.querySelector('.reviewsCardsWrapper');
const boutons = document.querySelectorAll('.reviewsBoutonCercle');
const boutonGauche = boutons[0];
const boutonDroite = boutons[1];

const gap = 16;
const cardsVisibles = 3;
let indexActuel = 0;
let isAnimating = false;

const originalCards = Array.from(document.querySelectorAll('.reviewCard'));
const totalOriginal = originalCards.length;

// Cloner pour boucle infinie : ajouter copies avant et après

function setupClones() {
    // Ajouter les dernières cartes au début
    for (let i = totalOriginal - 1; i >= totalOriginal - cardsVisibles; i--) {
        const clone = originalCards[i].cloneNode(true);
        clone.classList.add('clone');
        conteneur.insertBefore(clone, conteneur.firstChild);
    }
    // Ajouter les premières cartes à la fin
    for (let i = 0; i < cardsVisibles; i++) {
        const clone = originalCards[i].cloneNode(true);
        clone.classList.add('clone');
        conteneur.appendChild(clone);
    }
}

function getCardWidth() {
    const largeurWrapper = wrapper.offsetWidth;
    return (largeurWrapper - gap * (cardsVisibles - 1)) / cardsVisibles;
}

function setCardWidths() {
    const largeurCard = getCardWidth();
    const allCards = document.querySelectorAll('.reviewCard');
    allCards.forEach(card => {
        card.style.width = largeurCard + 'px';
        card.style.minWidth = largeurCard + 'px';
    });
}

function goToIndex(index, animate = true) {
    const largeurCard = getCardWidth();
    const offset = (index + cardsVisibles) * (largeurCard + gap);
    if (!animate) {
        conteneur.style.transition = 'none';
    } else {
        conteneur.style.transition = 'transform 0.5s ease';
    }
    conteneur.style.transform = `translateX(-${offset}px)`;
}

function init() {
    setupClones();
    setCardWidths();
    goToIndex(indexActuel, false);
    // Hover couleur texte
    document.querySelectorAll('.reviewCard').forEach(card => {
        card.addEventListener('mouseover', function () {
            this.querySelector('.reviewNom h4').style.color = 'white';
            this.querySelector('.reviewNom p').style.color = 'white';
            this.querySelector('.reviewTexte p').style.color = 'white';
        });
        card.addEventListener('mouseout', function () {
            this.querySelector('.reviewNom h4').style.color = 'black';
            this.querySelector('.reviewNom p').style.color = 'grey';
            this.querySelector('.reviewTexte p').style.color = 'grey';
        });
    });
}

boutonDroite.addEventListener('click', function () {
    if (isAnimating) return;
    isAnimating = true;
    indexActuel++;
    goToIndex(indexActuel);
});

boutonGauche.addEventListener('click', function () {
    if (isAnimating) return;
    isAnimating = true;
    indexActuel--;
    goToIndex(indexActuel);
});

conteneur.addEventListener('transitionend', function () {
    isAnimating = false;
    // Saut silencieux si on dépasse les bornes
    if (indexActuel >= totalOriginal) {
        indexActuel = 0;
        goToIndex(indexActuel, false);
    } else if (indexActuel < 0) {
        indexActuel = totalOriginal - 1;
        goToIndex(indexActuel, false);
    }
});

window.addEventListener('load', init);
window.addEventListener('resize', () => {
    setCardWidths();
    goToIndex(indexActuel, false);
});
// https://codepen.io/Marouen/pen/OxyEEY

// ===============================================================




// FOOTER

const footerTextes = document.querySelectorAll('.footerLiens p, .footerAdresse p');

footerTextes.forEach(p => {
    p.addEventListener('mouseover', function() {
        this.style.color = '#E9A636';
        this.style.transform = 'translateX(5px)';

    });
    p.addEventListener('mouseout', function() {
        this.style.color = 'rgba(255,255,255,0.8)';
        this.style.transform = 'tran';
    });
});

// Bouton retour en haut
const boutonHaut = document.querySelector('.boutonHaut');

boutonHaut.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo