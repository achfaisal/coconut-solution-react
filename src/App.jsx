import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Route</h1>
          <Link to="/">Home</Link>
          <NavLink to="products">Product</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
