import { motion as C } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Components/Testimonials.css";

const testimonios = [
  {
    nombre: "Ana Rodríguez",
    rol: "Estudiante de secundaria",
    mensaje: "Gracias a esta página aprendí a sembrar rábanos en el patio de mi casa. ¡Ahora tengo mi huerto!",
  },
  {
    nombre: "José López",
    rol: "Docente rural en Chontales",
    mensaje: "La plataforma es muy útil para enseñar agricultura. Mis estudiantes aprenden de forma visual y sencilla.",
  },
  {
    nombre: "Marta Gutiérrez",
    rol: "Productora comunitaria",
    mensaje: "Las animaciones explican todo con claridad. Me ayudaron a mejorar el riego en mi parcela.",
  },
];

export function Testimonials() {
  return (
    <AnimatedSection>
      <section className="testimonials-section">
        <h2 className="testimonials-title">💬 Lo que dicen nuestros usuarios</h2>
        <div className="testimonials-grid">
          {testimonios.map((testi, i) => (
            <C.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mensaje">“{testi.mensaje}”</p>
              <p className="autor">— {testi.nombre}, <span>{testi.rol}</span></p>
            </C.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
