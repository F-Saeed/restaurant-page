const contactPage = {
  contactArray: [
    'Telephone: +98-766-5554321',
    'Cellphone: +98-434-5554321',
    'Email: fst@teekha.com',
  ],
  addContact(details) {
    this.contactArray.push(details);
  },
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
  },
  appendAndRender() {
    this.content.appendChild(this.heading);

    this.contactArray.forEach((value) => {
      const para = document.createElement('p');
      para.innerHTML = value;

      this.content.appendChild(para);
    });
  },
};

export { contactPage };
