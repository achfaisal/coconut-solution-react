import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/Solution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:productName" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="solution" element={<Solution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
