// script.js

// Function to handle search queries
async function search(query) {
    const response = await fetch(`https://example-search-engine.com/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data;
}

// Event listener for search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        const results = await search(query);
        console.log(results);
        // Handle displaying results here
    }
});