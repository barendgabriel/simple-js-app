let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

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

pokemonRepository.getAll().forEach(function (pokemon) {
  let thresholdHeight = 6;
  let output = `${pokemon.name} (height: ${pokemon.height})`;
  if (pokemon.height > thresholdHeight) {
    output += " - Wow, that's big!";
  }
  document.write(output + '<br>');
});
