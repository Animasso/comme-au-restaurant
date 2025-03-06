import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ListDishes from "./pages/ListDishes";
import Home from "./pages/Home";
import { CartProvider } from "./components/Context/CartContext";
const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plats/:cuisine" element={<ListDishes />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
