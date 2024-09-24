# Pokédex Project

### Overview

This is a simple web application that displays a list of Pokémon and their details, including their names, heights, and types. The app highlights Pokémon whose height exceeds a certain threshold with a special message: _"Wow, that's big!"_.

### Features

- Displays the name and height of each Pokémon.
- Adds a special note for Pokémon whose height exceeds a certain threshold.
- Dynamically adds content to the web page using JavaScript.

Once you have opened the project in a browser, you’ll see a list of Pokémon with their names, heights, and the special "Wow, that's big!" note for the taller ones.

- **Pokémon Data**:
  - Each Pokémon has a name, height, and a list of types.
  - Pokémon whose height is greater than 6 are highlighted with a note.

### Pokémon List Example

Here's the Pokémon data currently in the app:

- **Bulbasaur**: Height 7, Types: Grass, Poison — _"Wow, that's big!"_
- **Charmander**: Height 6, Types: Fire
- **Squirtle**: Height 5, Types: Water

### How It Works

1. **Array of Pokémon**:

   - A JavaScript array (`pokemonList`) holds the data for each Pokémon. Each object in the array contains the Pokémon's `name`, `height`, and `types`.

2. **For Loop and Conditional Logic**:
   - A `for` loop iterates over each Pokémon in the array and adds its details to the web page.
   - If a Pokémon's height is above a threshold, a special note is added next to its name.
