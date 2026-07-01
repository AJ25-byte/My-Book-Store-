document.getElementById('theme-toggle').addEventListener('click', () => {
    alert('Magic Theme Toggled!');
});
// 1. Define your book data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" }
];

// 2. Select the container where books should go
const grid = document.querySelector('.grid-container');

// 3. Function to show books on the page
function displayBooks() {
    grid.innerHTML = ''; // Clear the container first
    
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
        grid.appendChild(bookElement);
    });
}

// Run the function
displayBooks();
// ... existing book code stays at the top ...

// Add this at the very end of your script.js file:

const songs = [
    { title: "Song One", artist: "Artist A" },
    { title: "Song Two", artist: "Artist B" }
];

const musicList = document.getElementById('music-list');

function displayMusic() {
    musicList.innerHTML = '';
    songs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        musicList.appendChild(li);
    });
}

// Run the function
displayMusic();
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    // This toggles the 'magic-theme' class on the body element
    document.body.classList.toggle('magic-theme');
    
    // Optional: Update button text
    if (document.body.classList.contains('magic-theme')) {
        themeToggle.textContent = 'Back to Dark Mode';
    } else {
        themeToggle.textContent = 'Toggle Magic Theme';
    }
});
