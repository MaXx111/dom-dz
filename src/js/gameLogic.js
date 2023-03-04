export default class GameLogic {
  constructor(elem) {
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }
    this._elem = elem;
    this.interval = 0;
  }

  init() {
    this.imgMove();
    this.interval = setInterval(() => {
      this.clearImg();
      this.imgMove();
    }, 1000);
  }

  imgMove() {
    const items = this._elem.querySelectorAll('.square');
    const img = document.createElement('img');
    const random = Math.floor(Math.random() * items.length);
    img.src = './image/goblin.png';
    img.classList.add('goblin');
    items[random].insertBefore(img, null);
  }

  clearImg() {
    const img = this._elem.querySelector('.goblin');
    const parent = img.parentNode;
    parent.removeChild(img);
  }
}
