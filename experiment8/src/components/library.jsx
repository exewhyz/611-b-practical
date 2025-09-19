import { useState } from "react";

const booksData = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

function Library() {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setTitle("");
    setAuthor("");
  };

  const handleDelete = (bookId) => {
    const updated = books.filter((b) => {
      return b.id !== bookId;
    });
    setBooks(updated);
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.title
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase()) ||
      book.author.trim().toLowerCase().includes(searchText.trim().toLowerCase())
    );
  });

  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <input
          type="text"
          placeholder="Search by title or author"
          required
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Book author"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
          <button>Add Book</button>
        </form>
      </div>
      <ul className="books">
        {filteredBooks.map((book) => {
          return (
            <li key={book.id}>
              {book.title} by {book.author}
              <button onClick={() => handleDelete(book.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Library;
