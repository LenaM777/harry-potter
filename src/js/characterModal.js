export function showCharacterModal(character) {
  const modalTitle = document.getElementById('modalName'); 
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = character.name;

  let html = '';

  for (const key in character) {
  
    let value = character[key];

    html += `<p>${key}: ${value}</p>`;
  }

  modalBody.innerHTML = html;

  new bootstrap.Modal(document.getElementById('characterModal')).show();
}



