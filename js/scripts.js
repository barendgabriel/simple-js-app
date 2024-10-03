let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison'],
      detailsUrl: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'Charmander',
      height: 6,
      types: ['fire'],
      detailsUrl: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'Squirtle',
      height: 5,
      types: ['water'],
      detailsUrl: 'https://pokeapi.co/api/v2/pokemon/7/',
    },
  ];

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function loadList() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((item) => {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch((e) => console.error(e));
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    button.addEventListener('click', () => {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
  };
})();

// Load and display Pokémon
pokemonRepository.loadList().then(() => {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
