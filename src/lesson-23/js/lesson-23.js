const images = document.querySelectorAll('.lazyload');
const rootBox = document.querySelector('.images')

function loadImage(img) {
  img.src = img.dataset.src;
  img.addEventListener('load', () => {
    img.classList.add('lazyloaded');
    console.log(`Зображення "${img.alt}" завантажене`);
  });
}


const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      obs.unobserve(entry.target);
    }
  });
},
  {
    // root: null,
    root: rootBox,
    threshold: 0.5
  }
);

images.forEach(img => observer.observe(img));


document.getElementById('loadImagesBtn').addEventListener('click', () => {
  images.forEach(img => {
    loadImage(img);
    observer.unobserve(img);
  });
});
