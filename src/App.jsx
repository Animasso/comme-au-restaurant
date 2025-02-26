import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import SectionPlat from "./components/SectionPlat";
import ListDishes from "./components/ListDishes";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plats/:cuisine" element={<ListDishes />} />
      </Routes>
    </Router>
  );
};

export default App;
