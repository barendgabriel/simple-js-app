/* General Body Styling */
body {
  background: linear-gradient(135deg, #ffcc33, #ff66ff);
  font-family: 'Arial', sans-serif; /* Using a safe fallback for font in case Press Start 2P isn't loaded */
  padding: 20px;
  margin: 0;
  box-sizing: border-box; /* Ensures padding/margin are handled more predictably */
}

/* Pokémon List Styling */
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 equal columns */
  gap: 20px; /* Adds space between each card */
  padding: 20px;
  list-style: none; /* Remove any default list styling */
  margin: 0; /* Reset margin */
}

/* Pokémon Item/Card Styling */
.pokemon-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */
  padding: 20px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  text-align: center; /* Ensure content inside the card is centered */
}

/* Hover Effect for Pokémon Card */
.pokemon-item:hover {
  transform: scale(1.05); /* Slightly enlarge on hover */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add a bigger shadow on hover */
}

/* Button Styling */
button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block; /* Ensures button acts as a block element */
}

/* Alternating Button Colors */
button:nth-child(odd) {
  background-color: #f67280; /* Pink color for odd buttons */
  color: white;
}

button:nth-child(even) {
  background-color: #355c7d; /* Blue color for even buttons */
  color: white;
}

/* Button Hover Effects */
button:hover {
  transform: translateY(-5px); /* Slightly lifts the button */
  background-color: #333; /* Darker background on hover */
  color: white; /* White text color on hover */
}

/* Ensures proper box-sizing across elements */
*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Ensuring the use of fallback fonts for more robust rendering */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); /* Including the custom font if you want to use it */
body {
  font-family: 'Press Start 2P', cursive, 'Arial', sans-serif; /* Uses the custom font with a fallback */
}
