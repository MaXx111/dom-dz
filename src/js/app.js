const items = document.querySelectorAll('.square');

const img = document.createElement('img');
const random = Math.floor(Math.random() * (items.length - 1));
img.src = './image/goblin.png';
img.classList.add('goblin');
items[random].insertBefore(img, null);

// <img class="goblin" src="./image/goblin.png" alt="">
