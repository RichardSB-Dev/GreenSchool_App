// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// Agregaremos más páginas luego: Temas, Quiz, etc.

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Otras rutas irán aquí */}
    </Routes>
  );
}
