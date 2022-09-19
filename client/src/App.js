import { Route, Routes } from "react-router-dom";
import { AddBook } from "./pages/AddBook";
import { Books } from "./pages/Books";
import { UpdateBook } from "./pages/UpdateBook";
import './style.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
