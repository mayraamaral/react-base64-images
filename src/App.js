import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Consumindo } from "./Consumindo";
import { Enviando } from "./Enviando";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Consumindo />} />
        <Route path="/enviando" element={<Enviando />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
