// Fetch data from the JSON file and display it
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Display Books
        const grid = document.querySelector('.grid-container');
        grid.innerHTML = ''; 
        data.books.forEach(book => {
            const div = document.createElement('div');
            div.className = 'book-card';
            div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
            
            // Add interaction: Highlight on click
            div.addEventListener('click', () => {
                document.querySelectorAll('.book-card').forEach(b => b.style.borderColor = 'rgba(212, 175, 55, 0.2)');
                div.style.borderColor = '#d4af37'; // Highlight color
            });
            grid.appendChild(div);
        });

        // Display Music
        const musicList = document.getElementById('music-list');
        musicList.innerHTML = '';
        data.songs.forEach(song => {
            const li = document.createElement('li');
            li.className = 'track-item'; // Added a class for styling
            li.textContent = `${song.title} - ${song.artist}`;
            
            // Add interaction: Highlight on click
            li.addEventListener('click', () => {
                document.querySelectorAll('.track-item').forEach(t => t.style.color = '#d4af37');
                li.style.color = '#ffffff'; // Selected color
            });
            musicList.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading data:', error));


// 2. Theme Toggle & Persistence Logic
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme on page load
if (localStorage.getItem('theme') === 'magic') {
    document.body.classList.add('magic-theme');
    themeToggle.textContent = 'Back to Dark Mode';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('magic-theme');
    
    // Save the user's choice
    if (document.body.classList.contains('magic-theme')) {
        localStorage.setItem('theme', 'magic');
        themeToggle.textContent = 'Back to Dark Mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Toggle Magic Theme';
    }
});
// Navigation Switching Logic
const booksSection = document.getElementById('books-section');
const musicSection = document.getElementById('music-section');
const navBooks = document.getElementById('nav-books');
const navMusic = document.getElementById('nav-music');

navBooks.addEventListener('click', () => {
    booksSection.classList.add('active');
    musicSection.classList.remove('active');
});

navMusic.addEventListener('click', () => {
    musicSection.classList.add('active');
    booksSection.classList.remove('active');
});

