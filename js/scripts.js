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

  // Fetch Pokémon from the API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon); // Add the Pokémon to the pokemonList
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  // Create list item
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);

    // Add event listener to show details
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
    // You can also log other details if needed, e.g.:
    // console.log(pokemon.height);
    // console.log(pokemon.types);
    // Later, you'll add code here to show details (e.g., height, types) in a modal.
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
  };
})();

// Load and display Pokémon
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
