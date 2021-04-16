const homeButton = (homeTab) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      homeTab.init();
      document.querySelector('.active').className = 'tab';
      document.querySelector('#home').className = 'tab active';
    }
  };
};

const menuButton = (menuTab) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      menuTab.init();
      document.querySelector('.active').className = 'tab';
      document.querySelector('#menu').className = 'tab active';
    }
  };
};

const contactButton = (contactTab) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      contactTab.init();
      document.querySelector('.active').className = 'tab';
      document.querySelector('#contact').className = 'tab active';
    }
  };
};

export { homeButton, menuButton, contactButton };
