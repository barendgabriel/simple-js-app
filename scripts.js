let pokemonRepository = (function () {
  let repository = []; // Empty array to hold the Pokemon data
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // URL for the API

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

    button.innerText = pokemon.name; // Set button text to Pokémon's name
    button.classList.add('button-class'); // Add a class for styling

    // Add event listener to the button
    button.addEventListener('click', function () {
      showDetails(pokemon); // Call showDetails when button is clicked
    });

    listpokemon.appendChild(button); // Append button to the list item
    pokemonList.appendChild(listpokemon); // Append list item to the Pokémon list
  }

  // Function to load the initial list of Pokemon from the API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url, // Store the URL for further details
          };
          add(pokemon); // Use the add() function to add to the repository
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to load details of a specific Pokémon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map((typeInfo) => typeInfo.type.name);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Update showDetails() to load more information from the API
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon); // Log the Pokémon details after they are loaded
      // Later, you can replace this with DOM manipulation to show details on the page
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList, // Expose loadList
    loadDetails: loadDetails, // Expose loadDetails
  };
})();

// Call the loadList function to load Pokémon from the API
pokemonRepository.loadList().then(function () {
  // Now the data is loaded, you can loop through and display it
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
