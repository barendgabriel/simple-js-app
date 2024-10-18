let pokemonRepository = (function () {
  let e = [];
  function t() {
    let e = document.createElement('div');
    e.classList.add('loading-message'),
      (e.innerText = 'Loading...'),
      document.body.appendChild(e);
  }
  function n() {
    let e = document.querySelector('.loading-message');
    e && e.remove();
  }
  function o(t) {
    'object' == typeof t && 'name' in t && 'detailsUrl' in t
      ? e.push(t)
      : console.log('Pokemon is not correct');
  }
  function i() {
    return e;
  }
  function a(e) {
    let o = e.detailsUrl;
    return (
      t(),
      fetch(o)
        .then(function (e) {
          return e.json();
        })
        .then(function (t) {
          n(),
            (e.imageUrl = t.sprites.front_default),
            (e.height = t.height),
            (e.types = t.types.map((e) => e.type.name));
        })
        .catch(function (e) {
          n(), console.error(e);
        })
    );
  }
  return (
    le,
    {
      add: o,
      getAll: i,
      addListItem: function e(t) {
        let n = document.querySelector('.pokemon-list'),
          o = document.createElement('li');
        o.classList.add('list-group-item');
        let i = document.createElement('button');
        (i.innerText = t.name),
          i.classList.add('btn', 'btn-primary'),
          i.setAttribute('data-toggle', 'modal'),
          i.setAttribute('data-target', '#pokemonModal'),
          i.addEventListener('click', function () {
            (function e(t) {
              a(t).then(function () {
                var e;
                let n, o, i, a;
                (e = t),
                  (n = document.getElementById('pokemonModal')),
                  (o = document.getElementById('modal-pokemon-name')),
                  (i = document.getElementById('modal-pokemon-height')),
                  (a = document.getElementById('modal-pokemon-image')),
                  (o.innerText = e.name),
                  (i.innerText = 'Height: ' + e.height / 10 + ' m'),
                  (a.src = e.imageUrl || 'placeholder.png'),
                  $(n).modal('show');
              });
            })(t);
          }),
          o.appendChild(i),
          n.appendChild(o);
      },
      loadList: function e() {
        return (
          t(),
          fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              n(),
                e.results.forEach(function (e) {
                  o({ name: e.name, detailsUrl: e.url });
                });
            })
            .catch(function (e) {
              n(), console.error(e);
            })
        );
      },
      loadDetails: a,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
