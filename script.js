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
