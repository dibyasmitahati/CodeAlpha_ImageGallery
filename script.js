// Images array
const images = [
    {src: 'images/coffee1.jpg', category: 'coffee'},
    {src: 'images/coffee2.jpg', category: 'coffee'},
    {src: 'images/cats1.jpg', category: 'cats'},
    {src: 'images/cats2.jpg', category: 'cats'},
    {src: 'images/nature3.jpg', category: 'nature'},
    {src: 'images/nature4.jpg', category: 'nature'},
    {src: 'images/nature5.jpg', category: 'nature'},
    {src: 'images/cats3.jpg', category: 'cats'},
    {src: 'images/cats4.jpg', category: 'cats'},
    {src: 'images/coffee3.jpg', category: 'coffee'},
    {src: 'images/coffee4.jpg', category: 'coffee'},
    {src: 'images/city3.jpg', category: 'city'},
    {src: 'images/city4.jpg', category: 'city'},
    {src: 'images/coffee5.jpg', category: 'coffee'},
    {src: 'images/coffee6.jpg', category: 'coffee'},
    {src: 'images/cats5.jpg', category: 'cats'},
    {src: 'images/cats6.jpg', category: 'cats'},
    {src: 'images/city1.jpg', category: 'city'},
    {src: 'images/nature1.jpg', category: 'nature'},
    {src: 'images/nature2.jpg', category: 'nature'},
    {src: 'images/nature6.jpg', category: 'nature'},
    {src: 'images/city2.jpg', category: 'city'},
    {src: 'images/city5.jpg', category: 'city'},
    {src: 'images/city6.jpg', category: 'city'},
];

// References
const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Load gallery
function loadGallery(category = 'all') {
    gallery.innerHTML = '';
    let filtered = category === 'all' ? images : images.filter(img => img.category === category);
    filtered.forEach((img, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        imgEl.alt = img.category;
        imgEl.dataset.index = index;
        imgEl.addEventListener('click', () => openLightbox(filtered, index));
        gallery.appendChild(imgEl);
    });
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loadGallery(btn.dataset.category);
    });
});

// Lightbox
let lightboxImages = [];

function openLightbox(array, index) {
    lightbox.style.display = 'flex';
    lightboxImages = array;
    currentIndex = index;
    lightboxImg.src = lightboxImages[currentIndex].src;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % lightboxImages.length;
    lightboxImg.src = lightboxImages[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
    lightboxImg.src = lightboxImages[currentIndex].src;
}

// Events
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });

// Initial load
loadGallery();