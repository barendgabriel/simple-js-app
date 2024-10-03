let pokemonRepository = (function () {
  // Private pokemonList inside the IIFE
  let pokemonList = [];

  // Public function to add a Pokémon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Public function to get all Pokémon
  function getAll() {
    return pokemonList;
  }

  // Return the public functions to be accessible outside
  return {
    add: add,
    getAll: getAll,
  };
})();

// Add Pokémon to the repository using the add function
pokemonRepository.add({
  name: 'Bulbasaur',
  height: 7,
  types: ['grass', 'poison'],
});

pokemonRepository.add({
  name: 'Charmander',
  height: 6,
  types: ['fire'],
});

pokemonRepository.add({
  name: 'Squirtle',
  height: 5,
  types: ['water'],
});

// Use forEach() to iterate over the pokemonList and display the details
pokemonRepository.getAll().forEach(function (pokemon) {
  let thresholdHeight = 6;
  let output = `${pokemon.name} (height: ${pokemon.height})`;
  if (pokemon.height > thresholdHeight) {
    output += " - Wow, that's big!";
  }
  document.write(output + '<br>');
});
