const contactTab = function () {
  const contactFeatures = {
    init() {
      this.cacheDOM();
      this.appendAndRender();
    },
    cacheDOM() {
      this.content = document.querySelector('.content');
      this.content.innerHTML = '';
      this.content.id = 'contact';

      this.heading = document.createElement('h1');
      this.heading.innerHTML = 'Contact Us';

      this.contactArray = [
        'Telephone: +98-766-5554321',
        'Cellphone: +98-434-5554321',
        'Email: fst@teekha.com',
      ];
    },
    appendAndRender() {
      this.content.appendChild(this.heading);

      this.contactArray.forEach((value) => {
        let para = document.createElement('p');
        para.innerHTML = value;

        this.content.appendChild(para);
      });
    },
  };

  contactFeatures.init();
};

export { contactTab };
