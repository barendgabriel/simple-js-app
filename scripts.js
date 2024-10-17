let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function showLoadingMessage() {
    let loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading-message');
    loadingDiv.innerText = 'Loading...';
    document.body.appendChild(loadingDiv);
  }

  function hideLoadingMessage() {
    let loadingDiv = document.querySelector('.loading-message');
    if (loadingDiv) {
      loadingDiv.remove();
    }
  }

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('Pokemon is not correct');
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-primary', 'pokemon-button');
    listpokemon.classList.add('list-group-item');

    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    showLoadingMessage();
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map((typeInfo) => typeInfo.type.name);
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      openModal(pokemon);
    });
  }

  function openModal(pokemon) {
    let modalName = document.getElementById('modal-pokemon-name');
    let modalHeight = document.getElementById('modal-pokemon-height');
    let modalImage = document.getElementById('modal-pokemon-image');

    modalName.innerText = pokemon.name;
    modalHeight.innerText = 'Height: ' + pokemon.height / 10 + ' m';
    modalImage.src = pokemon.imageUrl;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
