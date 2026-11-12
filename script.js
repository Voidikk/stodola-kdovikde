// 1. SEZNAM VŠECH FOTEK DO GALERIE
// Stačí připsat nebo upravit řádky podle skutečných názvů tvých fotek ve složce fotky/
const vsechnyFotky = [
  { src: 'fotky/01.jpg', alt: 'Posezení pod vínem' },
  { src: 'fotky/02.jpg', alt: 'Venkovní prostory' },
  { src: 'fotky/03.jpg', alt: 'Venkovní jezírko' },
  { src: 'fotky/04.jpg', alt: 'Venkovní posezení' },
  { src: 'fotky/05.jpg', alt: 'Jezírko s vodopádem' },
  { src: 'fotky/06.jpg', alt: 'Ubytování u stodoly' },
  { src: 'fotky/07.jpg', alt: 'Pohled na stodolu z venku' },
  { src: 'fotky/08.jpg', alt: 'Pohled na areál ze silnice' },
  { src: 'fotky/09.jpg', alt: 'Venkovní areál s grilem' },
  { src: 'fotky/091.jpg', alt: 'Psí voiléry' }
  // Další fotku přidáš tak, že za předchozí dáš čárku a připíšeš nový řádek:
  // ,{ src: 'fotky/foto5.jpg', alt: 'Popis páté fotky' }
];

// Prvky lightboxu a tlačítka pro otevření
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');
const openGalleryBtn = document.getElementById('open-gallery-btn');

let aktualniIndex = 0;

// Funkce pro otevření galerie
function otevritLightbox(index = 0) {
  if (vsechnyFotky.length === 0) return;
  aktualniIndex = index;
  lightboxImg.src = vsechnyFotky[aktualniIndex].src;
  lightboxCaption.textContent = `${vsechnyFotky[aktualniIndex].alt} (${aktualniIndex + 1} / ${vsechnyFotky.length})`;
  lightbox.classList.add('active');
}

// Kliknutí na tlačítko "Otevřít fotogalerii" pod videem
openGalleryBtn.addEventListener('click', () => {
  otevritLightbox(0);
});

// Další fotka
function dalsiFoto() {
  aktualniIndex = (aktualniIndex + 1) % vsechnyFotky.length;
  otevritLightbox(aktualniIndex);
}

// Předchozí fotka
function predchoziFoto() {
  aktualniIndex = (aktualniIndex - 1 + vsechnyFotky.length) % vsechnyFotky.length;
  otevritLightbox(aktualniIndex);
}

// Zavření
function zavritLightbox() {
  lightbox.classList.remove('active');
}

// Ovládání tlačítky
nextBtn.addEventListener('click', dalsiFoto);
prevBtn.addEventListener('click', predchoziFoto);
closeBtn.addEventListener('click', zavritLightbox);

// Zavření kliknutím mimo fotku
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    zavritLightbox();
  }
});

// Ovládání šipkami a klávesou ESC
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') dalsiFoto();
  if (e.key === 'ArrowLeft') predchoziFoto();
  if (e.key === 'Escape') zavritLightbox();
});