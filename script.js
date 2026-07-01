// 1. Fetch data from the JSON file and display it
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Display Books
        const grid = document.querySelector('.grid-container');
        // Clear any existing content first
        grid.innerHTML = ''; 
        data.books.forEach(book => {
            const div = document.createElement('div');
            div.className = 'book-card';
            div.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
            grid.appendChild(div);
        });

        // Display Music
        const musicList = document.getElementById('music-list');
        // Clear any existing content first
        musicList.innerHTML = '';
        data.songs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
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

