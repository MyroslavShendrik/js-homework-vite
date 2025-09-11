export function openModal(box) {
  box.classList.add('is-open');
}

export function closeModal(box, img) {
  box.classList.remove('is-open');
  img.src = '';
  img.alt = '';
}