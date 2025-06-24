// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { Acerca } from "../Pages/Acerca";
import { Quiz } from "../Pages/Quiz";
import { Temas } from "../Pages/Temas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acerca" element={<Acerca />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Temas" element={<Temas />} />
    </Routes>
  );
}
