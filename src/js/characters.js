import { createCharacterCard } from './CharacterCard.js';

const container = document.getElementById('charactersContainer');
const buttons = document.querySelectorAll('[data-house]');
let characters = [];


async function loadCharacters() {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        characters = await res.json();

        renderCharacters(characters); 
    }  catch (err) {
    console.error('Error:', err);
  }   
}

function renderCharacters(house) {
    container.innerHTML = '';
    const filtered = characters.filter(c => c.house === house);

    filtered.forEach(character => {
        container.innerHTML += createCharacterCard(character);
      });
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => renderCharacters(btn.dataset.house));
});


loadCharacters();
