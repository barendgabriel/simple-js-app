let pokemonList = [];
pokemonList.push({
  name: 'Bulbasaur',
  height: 7,
  types: ['grass', 'poison'],
});

pokemonList.push({
  name: 'Charmander',
  height: 6,
  types: ['fire'],
});

pokemonList.push({
  name: 'Squirtle',
  height: 5,
  types: ['water'],
});
console.log(pokemonList);
for (let i = 0; i < pokemonList.length; i++) {
  // Get the current Pokémon
  let pokemon = pokemonList[i];

  // Define the threshold height
  let thresholdHeight = 6;

  // Start with the basic output
  let output = `${pokemon.name} (height: ${pokemon.height})`;

  // Check if the Pokémon's height is greater than the threshold
  if (pokemon.height > thresholdHeight) {
    output += " - Wow, that's big!";
  }

  // Write the output to the DOM
  document.write(output + '<br>');
}

// Optional: Log the pokemonList to the console to check its contents
console.log(pokemonList);
