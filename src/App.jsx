import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";
import SectionPlat from "./components/SectionPlat";
import ListDishes from "./components/ListDishes";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Router englobe maintenant tout */}
      <NavBar />
      <Hero />
      <SectionPlat />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/plats/:cuisine" element={<ListDishes />} />
      </Routes>
    </Router>
  );
};

export default App;
