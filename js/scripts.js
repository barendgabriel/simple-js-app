let pokemonRepository = (function () {
  let pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // Fetch the first 150 Pokémon

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
    let pokemonListElement = document.querySelector('.pokemon-list'); // Select the <ul>
    let listItem = document.createElement('li'); // Create a list item
    let button = document.createElement('button'); // Create a button

    button.innerText = pokemon.name; // Set the button text to the Pokémon's name
    button.classList.add('pokemon-button'); // Add a class for styling
    listItem.appendChild(button); // Append the button to the list item
    pokemonListElement.appendChild(listItem); // Append the list item to the <ul>

    // Add event listener to show details when button is clicked
    button.addEventListener('click', function () {
      showDetails(pokemon); // Call showDetails with the current Pokémon
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name); // Log the Pokémon's name to the console
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
    pokemonRepository.addListItem(pokemon); // Add each Pokémon to the list
  });
});
