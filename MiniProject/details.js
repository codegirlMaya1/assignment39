JavaScript

async function searchPokemon() {
    const input = document.getElementById('pokemon-input').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (response.ok) {
        const pokemon = await response.json();
        displayPokemon(pokemon);
    } else {
        document.getElementById('pokemon-details').innerHTML = '<p>Pokémon not found</p>';
    }
}

function displayPokemon(pokemon) {
    const details = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p><strong>Types:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p><strong>Stats:</strong></p>
        <ul>
            ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
        </ul>
    `;
    document.getElementById('pokemon-details').innerHTML = details;
}