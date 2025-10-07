import { createCharacterCard } from './CharacterCard.js';
import { showCharacterModal } from './characterModal.js';

async function loadModal() {
  const res = await fetch('../components/CharacterModal.html');
  const html = await res.text();
  document.body.insertAdjacentHTML('beforeend', html);
}

await loadModal();

const container = document.getElementById('teachersContainer');

async function loadTeachers() {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    const characters = await res.json();

    const teachers = characters.filter(c => c.hogwartsStaff === true);

    renderTeachers(teachers);
  } catch (err) {
    console.error('Error:', err);
  }
}

function renderTeachers(teachers) {
  container.innerHTML = '';

  teachers.forEach(teacher => {
    container.innerHTML += createCharacterCard(teacher);
  });

  document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = JSON.parse(btn.getAttribute('data-character'));
      showCharacterModal(data);
    });
  });
}

loadTeachers();
