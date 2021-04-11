const menuTab = (capitalizeFirstLetter) => {
  const menuFeatures = {
    init() {
      this.cacheDOM();
      this.appendAndRender();
    },
    cacheDOM() {
      this.content = document.querySelector('.content');
      this.content.id = 'menu';
      this.content.innerHTML = '';

      this.mainHeading = document.createElement('h1');
      this.mainHeading.innerText = 'Menu';

      this.itemArray = ['biryani', 'curry', 'paneer'];
    },
    appendAndRender() {
      this.content.appendChild(this.mainHeading);

      this.itemArray.forEach((value) => {
        const item = document.createElement('div');
        const image = document.createElement('img');
        const heading = document.createElement('h2');
        const para = document.createElement('p');
        const hr = document.createElement('hr');

        image.src = `../src/assets/images/${value}.jpg`;
        item.className = 'item';
        if (value === 'paneer') {
          heading.innerText = 'Palak Paneer';
        } else if (value === 'curry') {
          heading.innerText = 'Chicken Curry';
        } else {
          heading.innerText = capitalizeFirstLetter(value);
        }
        para.innerText =
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat facere earum';

        item.appendChild(image);
        item.appendChild(heading);
        item.appendChild(para);
        item.appendChild(hr);

        this.content.appendChild(item);
      });
    },
  };

  menuFeatures.init();
};

export { menuTab };
