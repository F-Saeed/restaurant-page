(() => {
  'use strict';
  var e = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  !(function (e) {
    ({
      init: function () {
        this.createElements(), this.append(), this.render();
      },
      createElements: function () {
        (this.body = document.querySelector('body')),
          (this.header = document.createElement('header')),
          (this.nav = document.createElement('nav')),
          (this.signature = document.createElement('h1')),
          (this.signature.innerText = 'Teekha'),
          (this.tabs = document.createElement('div')),
          (this.tabs.id = 'tabs'),
          (this.main = document.createElement('main')),
          (this.content = document.createElement('div')),
          (this.tabArray = ['home', 'menu', 'contact']),
          (this.content.className = 'content'),
          (this.content.id = 'home'),
          (this.content.innerHTML =
            'Welcome to an authentic Indian experience!'),
          (this.footer = document.createElement('footer')),
          (this.footer.innerText = 'Perfecto © 2021 | All RIghts Reserved.');
      },
      append: function () {
        var t = this;
        this.tabArray.forEach(function (n) {
          var i = document.createElement('a');
          (i.className = 'home' === n ? 'tab active' : 'tab'),
            (i.id = n),
            (i.innerText = e(n)),
            t.tabs.appendChild(i);
        }),
          this.nav.appendChild(this.signature),
          this.nav.appendChild(this.tabs),
          this.header.appendChild(this.nav),
          this.main.appendChild(this.content);
      },
      render: function () {
        this.body.appendChild(this.header),
          this.body.appendChild(this.main),
          this.body.appendChild(this.footer);
      },
    }.init());
  })(e),
    document.querySelector('#home').addEventListener(
      'click',
      (function (e) {
        return function (t) {
          'tab active' !== t.target.className &&
            (e(),
            (document.querySelector('.active').className = 'tab'),
            (document.querySelector('#home').className = 'tab active'));
        };
      })(function () {
        ({
          init: function () {
            this.cacheDOM(), this.render();
          },
          cacheDOM: function () {
            (this.content = document.querySelector('.content')),
              (this.content.id = 'home');
          },
          render: function () {
            this.content.innerHTML =
              'Welcome to an authentic Indian experience!';
          },
        }.init());
      })
    ),
    document.querySelector('#menu').addEventListener(
      'click',
      (function (e, t) {
        return function (n) {
          'tab active' !== n.target.className &&
            (e(t),
            (document.querySelector('.active').className = 'tab'),
            (document.querySelector('#menu').className = 'tab active'));
        };
      })(function (e) {
        ({
          init: function () {
            this.cacheDOM(), this.appendAndRender();
          },
          cacheDOM: function () {
            (this.content = document.querySelector('.content')),
              (this.content.id = 'menu'),
              (this.content.innerHTML = ''),
              (this.mainHeading = document.createElement('h1')),
              (this.mainHeading.innerText = 'Menu'),
              (this.itemArray = ['biryani', 'curry', 'paneer']);
          },
          appendAndRender: function () {
            var t = this;
            this.content.appendChild(this.mainHeading),
              this.itemArray.forEach(function (n) {
                var i = document.createElement('div'),
                  c = document.createElement('img'),
                  a = document.createElement('h2'),
                  r = document.createElement('p'),
                  o = document.createElement('hr');
                (c.src = './assets/images/'.concat(n, '.jpg')),
                  (i.className = 'item'),
                  (a.innerText =
                    'paneer' === n
                      ? 'Palak Paneer'
                      : 'curry' === n
                      ? 'Chicken Curry'
                      : e(n)),
                  (r.innerText =
                    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit placeat facere earum'),
                  i.appendChild(c),
                  i.appendChild(a),
                  i.appendChild(r),
                  i.appendChild(o),
                  t.content.appendChild(i);
              });
          },
        }.init());
      }, e)
    ),
    document.querySelector('#contact').addEventListener(
      'click',
      (function (e) {
        return function (t) {
          'tab active' !== t.target.className &&
            (e(),
            (document.querySelector('.active').className = 'tab'),
            (document.querySelector('#contact').className = 'tab active'));
        };
      })(function () {
        ({
          init: function () {
            this.cacheDOM(), this.appendAndRender();
          },
          cacheDOM: function () {
            (this.content = document.querySelector('.content')),
              (this.content.innerHTML = ''),
              (this.content.id = 'contact'),
              (this.heading = document.createElement('h1')),
              (this.heading.innerHTML = 'Contact Us'),
              (this.contactArray = [
                'Telephone: +98-766-5554321',
                'Cellphone: +98-434-5554321',
                'Email: fst@teekha.com',
              ]);
          },
          appendAndRender: function () {
            var e = this;
            this.content.appendChild(this.heading),
              this.contactArray.forEach(function (t) {
                var n = document.createElement('p');
                (n.innerHTML = t), e.content.appendChild(n);
              });
          },
        }.init());
      })
    );
})();
