import "../Styles/Components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Ministerio de Educación, Nicaragua.
        </p>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#glosario">Glosario</a>
          <a href="https://www.mined.gob.ni/" target="_blank" rel="noopener noreferrer">
            Sitio oficial del MINED
          </a>
        </div>
        <p className="footer-slogan">Hecho con ❤️ para el aprendizaje agrícola de nuestro país.</p>
      </div>
    </footer>
  );
}
