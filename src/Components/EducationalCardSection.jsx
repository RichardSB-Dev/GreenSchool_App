import { useState } from "react";
import { motion as C } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Components/EducationalCardSection.css"; // Reemplaza con tus imágenes

const data = [
  { id: 1, nombre: "Huerto en casa", duracion: "5 min", imagen: 'src/Assets/Gallery/6.jpg' },
  { id: 2, nombre: "Riego por goteo", duracion: "7 min", imagen: 'src/Assets/Gallery/2.jpg' },
  { id: 3, nombre: "Tipos de abono", duracion: "4 min", imagen: 'src/Assets/Gallery/1.jpg' },
  { id: 4, nombre: "Temporada de siembra", duracion: "6 min", imagen: 'src/Assets/Gallery/4.jpg' },
  { id: 5, nombre: "Temporada de Cosecha", duracion: "8 min", imagen: 'src/Assets/Gallery/5.jpg' },
];

export function EducationalCardsSection() {
  const [filtro, setFiltro] = useState("todos");

  return (
    <AnimatedSection>
      <section className="edu-section">
        <h2 className="edu-title">Explora los métodos educativos</h2>
        <p className="edu-subtitle">Elige una categoría para ver materiales visuales</p>

        <div className="edu-buttons">
          <button onClick={() => setFiltro("todos")} className={filtro === "todos" ? "active" : ""}>
            Todos
          </button>
          <button onClick={() => setFiltro("siembra")} className={filtro === "siembra" ? "active" : ""}>
            Siembra
          </button>
          <button onClick={() => setFiltro("riego")} className={filtro === "riego" ? "active" : ""}>
            Riego
          </button>
        </div>

        <div className="edu-cards-grid">
          {data.map((item, i) => (
            <C.div
              className="edu-card"
              key={item.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="edu-image" style={{ backgroundImage: `url(${item.imagen})` }}></div>
              <div className="edu-card-body">
                <h3>{item.nombre}</h3>
                <p>{item.duracion}</p>
              </div>
            </C.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
