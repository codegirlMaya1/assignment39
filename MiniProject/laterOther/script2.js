document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-image').src = data.sprites.front_default;
            const abilitiesList = document.getElementById('pokemon-abilities');
            abilitiesList.innerHTML = '';
            data.abilities.forEach(ability => {
                const listItem = document.createElement('li');
                listItem.textContent = ability.ability.name;
                abilitiesList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching Pokémon data:', error);
            document.getElementById('pokemon-name').textContent = 'Pokémon not found';
            document.getElementById('pokemon-image').src = '';
            document.getElementById('pokemon-abilities').innerHTML = '';
        });
});