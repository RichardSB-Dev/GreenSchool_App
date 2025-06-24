import AnimatedSection from "./AnimatedSection";
import "../Styles/Components/Glosary.css";

const terminos = [
  {
    termino: "Cultivo",
    definicion: "Práctica de sembrar y cuidar plantas para obtener alimentos.",
    icono: "🌱",
  },
  {
    termino: "Germinación",
    definicion: "Proceso en que una semilla comienza a crecer y formar una planta.",
    icono: "🌿",
  },
  {
    termino: "Riego",
    definicion: "Acción de dar agua a las plantas para que crezcan sanas.",
    icono: "💧",
  },
  {
    termino: "Compost",
    definicion: "Abono natural hecho con restos de frutas, hojas y tierra.",
    icono: "♻️",
  },
  {
    termino: "Cosecha",
    definicion: "Momento en que se recogen las verduras o frutas ya maduras.",
    icono: "🧺",
  },
];

export function Glossary() {
  return (
    <AnimatedSection>
      <section className="glossary-section">
        <h2 className="glossary-title">📘 Glosario agrícola</h2>
        <p className="glossary-subtitle">Conoce los términos más usados en este sitio</p>

        <div className="glossary-grid">
          {terminos.map((item, i) => (
            <div key={i} className="glossary-card">
              <div className="glossary-icon">{item.icono}</div>
              <h3>{item.termino}</h3>
              <p>{item.definicion}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
