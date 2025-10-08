import { createCharacterCard } from './CharacterCard.js';
import { showCharacterModal } from './characterModal.js';

const container = document.getElementById('charactersContainer');
const buttons = document.querySelectorAll('[data-house]');
let characters = [];

async function loadModal() {
    const res = await fetch('../components/CharacterModal.html');
    const html = await res.text();
    document.body.insertAdjacentHTML('beforeend', html);
}

await loadModal(); 

async function loadCharacters() {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        characters = await res.json();

        renderCharacters('Gryffindor'); 
    }  catch (err) {
    console.error('Error:', err);
  }   
}

function renderCharacters(house) {
    container.innerHTML = '';
    const filtered = characters.filter(c => c.house === house);

    filtered.forEach(character => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = createCharacterCard(character); 
        container.appendChild(wrapper.firstElementChild);
      });

    document.querySelectorAll('.show-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = JSON.parse(btn.getAttribute('data-character'));
            showCharacterModal(data);
        });
    });
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove("btn-warning", "text-dark", "fw-bold", "active");
            btn.classList.add("btn-transparent", "text-white");
        });

        btn.classList.remove("btn-transparent", "text-white");
        btn.classList.add("btn-warning", "text-dark", "fw-bold", "active");

        renderCharacters(btn.dataset.house);
    });
});

loadCharacters();
