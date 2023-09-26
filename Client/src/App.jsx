import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
