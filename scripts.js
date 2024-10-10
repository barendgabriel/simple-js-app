let pokemonRepository = (function () {
  let repository = []; // Empty array to hold the Pokemon data
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // URL for the API

  function showLoadingMessage() {
    let loadingDiv = document.createElement('div');
    loadingDiv.classList.add('loading-message');
    loadingDiv.innerText = 'Loading...'; // Text for loading message
    document.body.appendChild(loadingDiv); // Append it to the body or a specific element
  }

  function hideLoadingMessage() {
    let loadingDiv = document.querySelector('.loading-message');
    if (loadingDiv) {
      loadingDiv.remove(); // Remove the loading message from the DOM
    }
  }

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('Pokemon is not correct');
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
    button.classList.add('pokemon-button'); // Add a class for styling

    // Add event listener to the button
    button.addEventListener('click', function () {
      showDetails(pokemon); // Call showDetails when button is clicked
    });

    listpokemon.appendChild(button); // Append button to the list item
    pokemonList.appendChild(listpokemon); // Append list item to the Pokémon list
  }

  // Function to load the initial list of Pokemon from the API
  function loadList() {
    showLoadingMessage(); // Show loading message when fetching starts
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage(); // Hide loading message once the data is fetched
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url, // Store the URL for further details
          };
          add(pokemon); // Use the add() function to add to the repository
        });
      })
      .catch(function (e) {
        hideLoadingMessage(); // Hide loading message if there’s an error
        console.error(e);
      });
  }

  // Function to load details of a specific Pokémon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    showLoadingMessage(); // Show loading message when fetching starts
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage(); // Hide loading message once details are fetched
        // Now we add the details to the item
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map((typeInfo) => typeInfo.type.name);
      })
      .catch(function (e) {
        hideLoadingMessage(); // Hide loading message if there’s an error
        console.error(e);
      });
  }

  // Update showDetails() to load more information from the API and show modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      // Open the modal with Pokémon details
      openModal(pokemon);
    });
  }

  // Function to open modal
  function openModal(pokemon) {
    let modal = document.getElementById('pokemonModal');
    let modalName = document.getElementById('modal-pokemon-name');
    let modalHeight = document.getElementById('modal-pokemon-height');
    let modalImage = document.getElementById('modal-pokemon-image');

    modalName.innerText = pokemon.name;
    modalHeight.innerText = 'Height: ' + pokemon.height / 10 + ' m'; // Convert height to meters
    modalImage.src = pokemon.imageUrl;

    modal.style.display = 'block'; // Show the modal

    // Close the modal when the close button is clicked
    document.querySelector('.close-button').onclick = function () {
      closeModal();
    };

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target === modal) {
        closeModal();
      }
    };

    // Close the modal using the keyboard (Esc key)
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }

  // Function to close modal
  function closeModal() {
    let modal = document.getElementById('pokemonModal');
    modal.style.display = 'none'; // Hide the modal
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList, // Expose loadList
    loadDetails: loadDetails, // Expose loadDetails
  };
})();

// Call the loadList function to load Pokémon from the API
pokemonRepository.loadList().then(function () {
  // Now the data is loaded, you can loop through and display it
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
