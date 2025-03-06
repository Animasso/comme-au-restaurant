import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ListDishes from "./pages/ListDishes";
import Home from "./pages/Home";
import { useState } from "react";
import { CartProvider } from "./components/Context/CartContext";
import CartModal from "./components/CartModal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <NavBar setModalOpen={setModalOpen} />
        <CartModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plats/:cuisine" element={<ListDishes />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
