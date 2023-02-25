const items = document.querySelectorAll('.square');

export default function renderImg() {
  const img = document.createElement('img');
  const random = Math.floor(Math.random() * (items.length - 1));
  img.src = './image/goblin.png';
  img.classList.add('goblin');
  items[random].insertBefore(img, null);
}
