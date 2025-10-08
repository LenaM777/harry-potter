export function showCharacterModal(character) {
  const modalTitle = document.getElementById('modalName'); 
  const modalBody = document.getElementById('modalBody');

  modalTitle.textContent = character.name;

  const details = [];

  for (const key in character) {
    if (key === 'image' || key === 'id' || key === 'alternate_actors') continue; 
    let value = character[key];

    if (!value) continue;

    if (typeof value === 'object' && !Array.isArray(value)) {
      const parts = [];
      for (const subKey in value) {
        if (value[subKey]) {
          const formattedSubKey =
            subKey.charAt(0).toUpperCase() + subKey.slice(1).toLowerCase();
          const formattedValue =
            `${String(value[subKey]).charAt(0).toUpperCase()}${String(value[subKey]).slice(1)}`;
          parts.push(`${formattedSubKey}: ${formattedValue}`);
        }
      }
      value = `<span class="text-warning">${parts.join(', ')}</span>`;
    }

    else if (Array.isArray(value)) {
      value = value.length > 0
        ? `<span class="text-warning">${value.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(', ')}</span>`
        : '<span class="text-warning">Unknown</span>';
    }

    else {
      value = `<span class="text-warning">${String(value).charAt(0).toUpperCase()}${String(value).slice(1)}</span>`;
    }

    let formattedKey = key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
    formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);

    details.push(`<p>${formattedKey}: ${value}</p>`);
  }

  modalBody.innerHTML = details.join('');

  new bootstrap.Modal(document.getElementById('characterModal')).show();
}







