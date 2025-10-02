export function createCharacterCard(character) {
    const cardTemplate = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-character bg-dark text-white rounded-4 border-0 glow h-100">
            <img src="${character.image || '/public/assets/images/emblem.jpg'}" class="card-img" alt="Character">
            <div class="card-img-overlay d-flex align-items-end p-4">
                <div>
                    <h3 class="card-title">${character.name}</h3>
                    <p class="card-text text-warning mb-1"> ${character.house || 'Hogwarts'}</p>
                    <p class="card-text text-warning mb-3"> ${character.dateOfBirth || 'Unknown'}</p>
                    <button class="btn bg-transparent text-white border-0 p-0 d-inline-flex align-items-center gap-2 show-more-btn" data-character='${JSON.stringify(character)}'>
                    More info<span class="arrow">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    return cardTemplate;
}