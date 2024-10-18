Pokédex Project

Overview
The Pokédex is a simple web application that displays a list of Pokémon along with their details, including names, heights, and types. Users can interact with the app to view detailed information about each Pokémon in a modal window.

Features

- Displays Pokémon List: The application presents a comprehensive list of Pokémon names.
- Modal View: Users can click on a Pokémon's name to open a modal that shows the Pokémon's name, height, and an image.

- Responsive Design: The modal is designed to be responsive, ensuring a smooth experience on various screen sizes.

- Loading Indicators: A loading message is displayed while data is being fetched from the Pokémon API, keeping users informed during data processing.

Pokémon Data
Each Pokémon has a name, height, and a list of types. The application pulls the latest Pokémon data from the Pokémon API to maintain an up-to-date list.

Pokémon List Example
Here are some examples of the Pokémon data displayed in the app:

- **Bulbasaur**: Height 7 decimeters (0.7 m), Types: Grass, Poison
- **Charmander**: Height 6 decimeters (0.6 m), Types: Fire
- **Squirtle**: Height 5 decimeters (0.5 m), Types: Water

How It Works

- **Data Loading**: The app utilizes the Fetch API to load Pokémon data from the Pokémon API. A loading message appears while the data is being retrieved.

- **Array of Pokémon**: A JavaScript array (`pokemonList`) holds data for each Pokémon. Each object in the array contains the Pokémon's name, height, and types.

- **Event Listeners**: Each Pokémon button has an event listener that triggers the modal to display the Pokémon’s details upon clicking.

- **Modal Functionality**: The modal shows the Pokémon's name, height (converted to meters), and an image. It can be closed by clicking the close button, clicking outside the modal, or pressing the Escape key.

- **Responsive Design**: The modal has been tested for functionality on smaller screens, ensuring a seamless user experience.

About
This project is an interactive application that showcases Pokémon data using JavaScript, HTML, and CSS. The latest changes include linking to minified CSS and JavaScript files for improved performance.

Resources

- **Pokémon API**: The application utilizes the Pokémon API to fetch the latest Pokémon data.
