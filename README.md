# Pokédex Project

## Overview

This is a simple web application that displays a list of Pokémon and their details, including their names, heights, and types. The app highlights Pokémon whose height exceeds a certain threshold with a special message: "Wow, that's big!".

## Features

- Displays the name and height of each Pokémon.
- Adds a special note for Pokémon whose height exceeds a certain threshold.
- Dynamically adds content to the web page using JavaScript.
- The application loads data from the Pokémon API, ensuring an up-to-date list of Pokémon.

### Pokémon Data:

- Each Pokémon has a name, height, and a list of types.
- Pokémon whose height is greater than 6 are highlighted with a note.

### Pokémon List Example:

Here's the Pokémon data currently in the app:

- Bulbasaur: Height 7, Types: Grass, Poison — "Wow, that's big!"
- Charmander: Height 6, Types: Fire
- Squirtle: Height 5, Types: Water

## How It Works

### Array of Pokémon:

- A JavaScript array (`pokemonList`) holds the data for each Pokémon. Each object in the array contains the Pokémon's name, height, and types.

### Event Listeners:

- Each Pokémon button has an event listener that logs the Pokémon's name when clicked.

### For Loop and Conditional Logic:

- A loop iterates over each Pokémon in the array and adds its details to the web page.
- If a Pokémon's height is above a threshold, a special note is added next to its name.
