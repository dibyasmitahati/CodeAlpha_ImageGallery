function filterImages(category) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    if (category === 'all' || image.classList.contains(category)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgElement.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}