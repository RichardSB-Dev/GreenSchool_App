import { motion as C, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "../Styles/Components/Gallery.css";

export function Gallery() {
  const images = [
    { src: "src/Assets/Gallery/1.jpg", alt: "Cultivo de lechuga" },
    { src: "src/Assets/Gallery/2.jpg", alt: "Agricultor caminando" },
    { src: "src/Assets/Gallery/3.jpg", alt: "Brote en tierra" },
    { src: "src/Assets/Gallery/4.jpg", alt: "Campo de maíz" },
    { src: "src/Assets/Gallery/5.jpg", alt: "Trabajo en equipo agrícola" },
    { src: "src/Assets/Gallery/6.jpg", alt: "Niños sembrando" },
    { src: "src/Assets/Gallery/7.jpg", alt: "Recolección de hortalizas" },
    { src: "src/Assets/Gallery/8.jpg", alt: "Tierra fértil" },
    { src: "src/Assets/Gallery/9.jpg", alt: "Plantas crecidas" },
    { src: "src/Assets/Gallery/10.jpg", alt: "Plantas crecidas" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <C.section
      className="gallery-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <h2 className="section-title">Galería de muestras</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <C.div
            key={i}
            className={`grid-item item-${i + 1}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <C.img
              src={img.src}
              alt={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            />
          </C.div>
        ))}
      </div>
    </C.section>
  );
}
