const item = document.querySelector('.square');
const table = document.querySelector('.table');

const img = document.createElement('img')

img.src = './image/goblin.png';
img.classList.add('goblin');
item.insertBefore(img, null);

//<img class="goblin" src="./image/goblin.png" alt="">