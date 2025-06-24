import { NavLink } from "react-router-dom";
import "../Styles/Components/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">🌱 GreenSchool</div>
      <nav className="navbar-links">
        <NavLink to="/" className="nav-item">Inicio</NavLink>
        <NavLink to="/temas" className="nav-item">Temas</NavLink>
        <NavLink to="/quiz" className="nav-item">Quiz</NavLink>
        <NavLink to="/acerca" className="nav-item">Acerca</NavLink>
        <a href="https://www.mined.gob.ni/" className="nav-item" target="_blank" rel="noreferrer">
          MINED
        </a>
      </nav>
    </header>
  );
}
