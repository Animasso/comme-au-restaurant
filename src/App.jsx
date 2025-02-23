import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <NavBar />
      {/* <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/add-new-employee" element={<NewEmployee />} />
          <Route path="/update-employee/:id" element={<NewEmployee />} />

        </Routes>
        <Footer /> */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
