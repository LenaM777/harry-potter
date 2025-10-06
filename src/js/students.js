import { createCharacterCard } from './CharacterCard.js';
import { showCharacterModal } from './characterModal.js';

async function loadModal() {
  const res = await fetch('../components/CharacterModal.html');
  const html = await res.text();
  document.body.insertAdjacentHTML('beforeend', html);
}

await loadModal();

const container = document.getElementById('studentsContainer');

async function loadStudents() {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    const characters = await res.json();

    const students = characters.filter(c => c.hogwartsStudent === true);

    renderStudents(students);
  } catch (err) {
    console.error('Error:', err);
  }
}

function renderStudents(students) {
  container.innerHTML = '';

  students.forEach(student => {
    container.innerHTML += createCharacterCard(student);
  });

  document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const data = JSON.parse(btn.getAttribute('data-character'));
      showCharacterModal(data);
    });
  });

}

loadStudents();

