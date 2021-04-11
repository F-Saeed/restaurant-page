const mainPage = (capitalizeFirstLetter) => {
  const sharedFeatures = {
    init() {
      this.createElements();
      this.append();
      this.render();
    },
    createElements() {
      this.body = document.querySelector('body');

      this.header = document.createElement('header');
      this.nav = document.createElement('nav');

      this.signature = document.createElement('h1');
      this.signature.innerText = 'Teekha';

      this.tabs = document.createElement('div');
      this.tabs.id = 'tabs';

      this.main = document.createElement('main');
      this.content = document.createElement('div');

      this.tabArray = ['home', 'menu', 'contact'];

      this.content.className = 'content';
      this.content.id = 'home';
      this.content.innerHTML = 'Welcome to an authentic Indian experience!';

      this.footer = document.createElement('footer');
      this.footer.innerText = 'Perfecto © 2021 | All RIghts Reserved.';
    },
    append() {
      this.tabArray.forEach((value) => {
        let tab = document.createElement('a');
        if (value === 'home') {
          tab.className = 'tab active';
        } else {
          tab.className = 'tab';
        }
        tab.id = value;
        tab.innerText = capitalizeFirstLetter(value);
        this.tabs.appendChild(tab);
      });

      this.nav.appendChild(this.signature);
      this.nav.appendChild(this.tabs);
      this.header.appendChild(this.nav);
      this.main.appendChild(this.content);
    },
    render() {
      this.body.appendChild(this.header);
      this.body.appendChild(this.main);
      this.body.appendChild(this.footer);
    },
  };

  sharedFeatures.init();
  return { sharedFeatures };
};

export { mainPage };
