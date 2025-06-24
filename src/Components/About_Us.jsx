import A from './AnimatedSection';
import '../Styles/Components/About_US.css'
import { motion as C} from 'framer-motion';

export const About_US = () => {
  return (
    <A>
      <C.div className="d-flex acerca-de">
        <C.img
            src='src/Assets/Agricultura.jpg'
            alt="Ilustración de verduras"
            className="acerca-de__img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        <C.div>
          <h2 className="section-title">Acerca de Nosotros</h2>
          <p className="about-text">
            Esta es una propuesta de negocio circular con el propósito de innovar en el campo de la educación agrícola.
            Nuestro objetivo es enseñar tanto a niños como a pequeños y grandes agricultores a desenvolverse con confianza
            en el área de la agricultura, promoviendo prácticas sostenibles, el respeto por la tierra y el amor por el cultivo.
            Este portal está diseñado como una herramienta educativa inclusiva, accesible y visualmente amigable para todos.
          </p>
        </C.div>
      </C.div>
    </A>
  )
}
