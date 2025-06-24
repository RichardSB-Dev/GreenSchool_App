import AnimatedSection from "./AnimatedSection";
import "../Styles/Components/InstitutionalInfo.css";

export function InstitutionalInfo() {
  return (
    <AnimatedSection>
      <section className="institutional-section">
        <div className="institutional-container">
          {/* Logo del MINED (opcional) */}
          {/* <img src={minedLogo} alt="Logo del MINED" className="institutional-logo" /> */}

          <h2>🏛️ Apoyo institucional</h2>
          <p>
            Esta plataforma educativa es parte del compromiso del <strong>Ministerio de Educación de Nicaragua </strong>
            por fortalecer la enseñanza de la agricultura desde edades tempranas.
          </p>

          <div className="institutional-buttons">
            <a href="https://www.mined.gob.ni/" target="_blank" rel="noopener noreferrer" className="mined-button">
              Visitar sitio oficial del MINED
            </a>
            <a href="mailto:info@mined.gob.ni" className="contact-button">
              Escribir al Ministerio
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
