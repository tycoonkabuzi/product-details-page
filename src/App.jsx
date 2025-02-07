import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./views/Home";
import Details from "./views/Details";
function App() {
  const products = [
    {
      id: "1",
      name: "Laptop",
      details:
        "A high-performance laptop with 16GB RAM, 512GB SSD, and a 15-inch display.",
    },
    {
      id: "2",
      name: "Smartphone",
      details:
        "A sleek smartphone with a 6.5-inch AMOLED display, 128GB storage, and a 48MP camera.",
    },
    {
      id: "3",
      name: "Tablet",
      details:
        "A lightweight tablet with a 10-inch screen, 64GB storage, and 8MP rear camera.",
    },
  ];
  return (
    <>
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path="details/:id" element={<Details products={products} />} />
      </Routes>
    </>
  );
}

export default App;
