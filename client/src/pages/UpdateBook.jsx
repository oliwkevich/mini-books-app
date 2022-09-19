import axios from "axios";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const UpdateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const [book, setBook] = React.useState({
    title: "",
    description: "",
    cover: "",
    price: null,
  });

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:7777/book/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder="Enter Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Enter Description"
        onChange={handleChange}
        name="description"
      />
      <input
        type="number"
        placeholder="Enter Price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Enter Cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Update Book
      </button>
    </div>
  );
};
