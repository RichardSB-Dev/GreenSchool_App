import { useState } from "react";
import { motion as C, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import '../Styles/Components/FAQ.css';

const preguntas = [
  {
    pregunta: "¿Necesito internet para usar esta página?",
    respuesta: "Sí, esta plataforma funciona en línea, pero se puede adaptar para funcionar sin internet en el futuro.",
  },
  {
    pregunta: "¿Este sitio es gratuito?",
    respuesta: "Sí. Fue creado por el MINED como una herramienta educativa sin costo para el público.",
  },
  {
    pregunta: "¿Puedo usar este contenido en clase?",
    respuesta: "¡Claro! Está diseñado para facilitar el aprendizaje tanto en el aula como en casa.",
  },
  {
    pregunta: "¿Qué tipo de temas se enseñan?",
    respuesta: "Principalmente agricultura enfocada en verduras: siembra, riego, temporadas, cuidados, etc.",
  },
  {
    pregunta: "¿Tengo que registrarme para usarlo?",
    respuesta: "No. Puedes acceder a todo el contenido sin crear una cuenta ni dejar tus datos.",
  },
];

export function FAQ() {
  const [activo, setActivo] = useState(null);

  const toggle = (i) => {
    setActivo(activo === i ? null : i);
  };

  return (
    <AnimatedSection>
      <section className="faq-section">
        <h2 className="faq-title">❓ Preguntas Frecuentes</h2>

        <div className="faq-list">
          {preguntas.map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.pregunta}</span>
                <span className="icon">{activo === i ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {activo === i && (
                  <C.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.respuesta}</p>
                  </C.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
