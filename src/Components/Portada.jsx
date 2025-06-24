import { motion as C } from 'framer-motion';
import '../Styles/Components/Portada.css';

export const Portada = () => {
  return (
    <main className="home">
      <C.div className="d-flex">
        <C.div className="div__img-top">
          <C.img
            src='src/Assets/Perfil.jpg'
            alt="Ilustración de verduras"
            className="home-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        </C.div>

        <C.div className="div__info-top d-flex">
          <C.h1
          className="home-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
            ¡Bienvenido al Portal de Agricultura!
          </C.h1>

          <C.p
            className="home-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Aprende sobre la siembra, el cuidado y las etapas del cultivo de verduras de forma interactiva y divertida.
            Este portal ha sido diseñado para facilitar el aprendizaje de la agricultura a través de recursos visuales, explicaciones sencillas y herramientas digitales atractivas.
            Ideal para estudiantes curiosos, docentes comprometidos y trabajadores del campo que desean mejorar sus prácticas, fomentar la sostenibilidad y cultivar con conciencia.
            Ya sea desde un celular o una computadora, aquí encontrarás todo lo necesario para convertirte en un amante del cultivo responsable.
          </C.p>
        </C.div>

        {/* <Link to="/temas">
          <C.button
            className="home-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Temas
          </C.button>
        </Link> */}
      </C.div>
    </main>
  )
}
