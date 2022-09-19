import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const navigate = useNavigate();
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
      await axios.post("http://localhost:7777/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new Book</h1>
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
      <button className="formButton" onClick={handleClick}>Add Book</button>
    </div>
  );
};
