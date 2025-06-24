import { motion as C } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Components/AnimatedPhrase.css";

export function AnimatedPhrase() {
  return (
    <AnimatedSection>
      <section className="quote-section">
        <C.blockquote
          className="quote-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          “Sembrar hoy es alimentar el mañana.”  
          <span>— Ministerio de Educación</span>
        </C.blockquote>
      </section>
    </AnimatedSection>
  );
}
