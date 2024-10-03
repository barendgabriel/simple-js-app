let pokemonRepository = (function () {
  let repository = [
    { name: 'Bulbasaur', height: '0.7', types: ['grass', 'poison'] },
    { name: 'Charmander', height: '0.6', types: ['fire'] },
    { name: 'Squirtle', height: '0.5', types: ['water'] },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'types' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('pokemon is not correct');
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

  function showDetails(pokemon) {
    console.log(pokemon.name); // Log the Pokémon's name to the console
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

// Adding a new Pokémon
pokemonRepository.add({ name: 'Pikachu', height: 0.3, types: ['electric'] });

// Check the Pokémon list in the console
console.log(pokemonRepository.getAll());

// Loop through each Pokémon and display it on the HTML page
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon); // Call addListItem for each Pokémon
});
