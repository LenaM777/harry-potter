import { createCharacterCard } from './CharacterCard.js';


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


}

loadStudents();

