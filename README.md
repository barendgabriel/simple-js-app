Pokédex Project
Overview
This is a simple web application that displays a list of Pokémon and their details, including their names, heights, and types. Users can interact with the app to view detailed information about each Pokémon in a modal window.

Features
Displays Pokémon List: The application shows a list of Pokémon names.
Modal View: When a user clicks on a Pokémon's name, a modal opens, displaying the Pokémon's name, height, and an image.
Responsive Design: The modal is designed to be responsive and works well on various screen sizes.
Loading Indicators: A loading message is displayed while data is being fetched from the Pokémon API, ensuring users know when the app is processing.
Pokémon Data
Each Pokémon has a name, height, and a list of types. The application pulls the latest Pokémon data from the Pokémon API, ensuring an up-to-date list of Pokémon.

Pokémon List Example
Here are some examples of Pokémon data displayed in the app:

Bulbasaur: Height 7 decimeters (0.7 m), Types: Grass, Poison
Charmander: Height 6 decimeters (0.6 m), Types: Fire
Squirtle: Height 5 decimeters (0.5 m), Types: Water
How It Works
Data Loading:

The app uses the Fetch API to load Pokémon data from the Pokémon API. A loading message appears while the data is being fetched.
Array of Pokémon:

A JavaScript array (pokemonList) holds the data for each Pokémon. Each object in the array contains the Pokémon's name, height, and types.
Event Listeners:

Each Pokémon button has an event listener that triggers the modal to display the Pokémon’s details when clicked.
Modal Functionality:

The modal displays the Pokémon's name, height (converted to meters), and an image. The modal can be closed by clicking a close button, clicking outside the modal, or pressing the Escape key.
Responsive Design:

The modal is tested for functionality on smaller screens, ensuring a seamless user experience.
About
This project is a simple yet interactive application showcasing Pokémon data using JavaScript, HTML, and CSS.

Resources
Pokémon API
