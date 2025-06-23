import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MiniProject from "./pages/miniProject/MiniProject";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mini-project" element={<MiniProject />} />
    </Routes>
  );
}

export default App;
