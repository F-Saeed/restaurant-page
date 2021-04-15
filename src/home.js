const homePage = {
  init() {
    this.cacheDOM();
    this.render();
  },
  cacheDOM() {
    this.content = document.querySelector('.content');
    this.content.id = 'home';
  },
  render() {
    this.content.innerHTML = 'Welcome to an authentic Indian experience!';
  },
};

export { homePage };
