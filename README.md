Pokédex Project
Overview
This is a simple web application that displays a list of Pokémon and their details, including names, heights, and types. The app dynamically loads data from the free Pokémon API and displays an up-to-date list of Pokémon. Users can click on each Pokémon to see more detailed information.

Features
Dynamic Pokémon List: The app loads Pokémon data from the Pokémon API, ensuring the list is always up to date.
Detailed Pokémon Information: Displays the name, height, and types of each Pokémon.
Click for Details: Users can click on any Pokémon to load and view additional information, such as an image and detailed stats.
Loading Indicator: A loading message is displayed while data is being fetched from the API.
API Integration: Uses fetch to retrieve data from the Pokémon API.
Responsive Design: The Pokémon list dynamically updates based on the API data.
Pokémon Data
Each Pokémon has a name, height, and a list of types.
Bonus: Pokémon whose height exceeds a certain threshold (e.g., 6) are highlighted with a special message.
How It Works
API Integration: The app fetches data from the Pokémon API at PokéAPI and adds each Pokémon to the app's list dynamically.
Event Listeners: Each Pokémon button has an event listener that, when clicked, loads the full details for the Pokémon, including an image and type information.
Asynchronous Loading: The app uses JavaScript fetch to load Pokémon data asynchronously and display a loading message while waiting for data to be fetched.
Conditional Logic: If a Pokémon's height is above a certain threshold, a special note ("Wow, that's big!") is displayed next to its name.
Pokémon List Example
The following is an example of Pokémon data displayed by the app:

Bulbasaur: Height 7, Types: Grass, Poison — "Wow, that's big!"
Charmander: Height 6, Types: Fire
Squirtle: Height 5, Types: Water
Pikachu: Height 0.3, Types: Electric
Bonus Feature: Loading Indicator
showLoadingMessage(): Displays a loading message while data is being fetched.
hideLoadingMessage(): Hides the loading message once the data is retrieved.
The loading indicator appears whenever the Pokémon list or details are being fetched from the API.
Technologies Used
JavaScript: Handles the dynamic fetching and rendering of Pokémon data.
HTML/CSS: For structuring and styling the webpage.
PokéAPI: Provides the external data source for Pokémon.
How to Use
Open the application in a browser.
The list of Pokémon will automatically load from the Pokémon API.
Click on any Pokémon to load additional details, such as an image and its height.
The console will log the Pokémon details after loading (later you can display this in the UI).
About
This project was created as part of the CareerFoundry course to demonstrate the integration of external APIs in a JavaScript web application.

Resources
PokéAPI: https://pokeapi.co/
