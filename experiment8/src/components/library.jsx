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

  return (
    <div>
      <h1>Library Management</h1>
      <div className="library-header">
        <input type="text" placeholder="Search by title or author" required />
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
        {books.map((book) => {
          return (
            <li>
              {book.title} by {book.author}
              <button>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Library;
