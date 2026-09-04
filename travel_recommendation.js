function searchPlaces() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    // Sample Data (or fetch from travel_recommendation_api.json)
    const data = {
        beaches: [
            { name: "Bora Bora", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "A beautiful tropical beach with turquoise waters." },
            { name: "Copacabana", imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206", description: "Famous beach located in Rio de Janeiro." }
        ],
        temples: [
            { name: "Angkor Wat", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", description: "A famous temple complex in Cambodia." },
            { name: "Taj Mahal", imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523", description: "An iconic white marble mausoleum in Agra." }
        ],
        countries: [
            { name: "Japan", imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", description: "Land of the rising sun with amazing technology and culture." },
            { name: "Australia", imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be", description: "Known for its beaches, wildlife, and Great Barrier Reef." }
        ]
    };

    let results = [];

    if (input.includes('beach')) {
        results = data.beaches;
    } else if (input.includes('temple')) {
        results = data.temples;
    } else if (input.includes('country') || input.includes('japan') || input.includes('australia')) {
        results = data.countries;
    }

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found. Try searching for "beach", "temple", or "country".</p>';
        return;
    }

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="card-body">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

function clearResults() {
    document.getElementById('searchInput').value = '';
    document.getElementById('resultsContainer').innerHTML = '';
}
