const home = (homeTab) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      homeTab();
      document.querySelector('.active').className = 'tab';
      document.querySelector('#home').className = 'tab active';
    }
  };
};

const menu = (menuTab, capitalizeFirstLetter) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      menuTab(capitalizeFirstLetter);
      document.querySelector('.active').className = 'tab';
      document.querySelector('#menu').className = 'tab active';
    }
  };
};

const contact = (contactTab) => {
  return (event) => {
    if (event.target.className !== 'tab active') {
      contactTab();
      document.querySelector('.active').className = 'tab';
      document.querySelector('#contact').className = 'tab active';
    }
  };
};

export { home, menu, contact };
