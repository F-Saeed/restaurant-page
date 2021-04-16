const menuPage = {
  itemArray: ['biryani', 'curry', 'paneer'],
  headings: {
    biryani: function () {
      const tempHeading = document.createElement('h2');
      tempHeading.innerText = 'Chicken Biryani';
      return tempHeading;
    },
    curry: function () {
      const tempHeading = document.createElement('h2');
      tempHeading.innerText = 'Chicken Curry';
      return tempHeading;
    },
    paneer: function () {
      const tempHeading = document.createElement('h2');
      tempHeading.innerText = 'Palak Paneer';
      return tempHeading;
    },
  },
  addItems(item) {
    this.itemArray.push(item);
  },
  addHeading(item, heading) {
    this.headings[`${item}`] = function () {
      const tempHeading = document.createElement('h2');
      tempHeading.innerText = heading;
      return tempHeading;
    };
  },
  init() {
    this.cacheDOM();
    this.append();
  },
  cacheDOM() {
    this.content = document.querySelector('.content');
    this.content.id = 'menu';
    this.content.innerHTML = '';

    this.mainHeading = document.createElement('h1');
    this.mainHeading.innerText = 'Menu';
  },
  append() {
    this.content.appendChild(this.mainHeading);

    this.itemArray.forEach((value) => {
      const item = document.createElement('div');
      const image = document.createElement('img');
      const heading = this.headings[`${value}`]();
      const para = document.createElement('p');
      const hr = document.createElement('hr');

      item.className = 'item';
      image.src = `./assets/images/${value}.jpg`;
      para.innerText =
        'Lorem ipsum dolor, sit amet consectet adipisicing elit. Velit placeat facere earum';

      this.appendMultipleElements(item, image, heading, para, hr);

      this.render(item);
    });
  },
  appendMultipleElements(parent, ...elements) {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  },
  render(element) {
    this.content.appendChild(element);
  },
};

export { menuPage };
