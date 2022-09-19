import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:7777/books");
        setBooks(res.data);
      } catch (error) {
        console.log("ERRRRROR:::::::::", error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:7777/book/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map((item) => (
          <div className="book" key={item.id}>
            <img src={item.cover} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${item.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};
