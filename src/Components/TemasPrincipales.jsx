import '../Styles/Components/TemasPrincipales.css';
import A from './AnimatedSection';

export const TemasPrincipales = () => {
  return (
    <A className='d-flex justify-content-center'>
      <section className="home-topic-buttons">
        <h2 className="section-title">Temas principales</h2>
        <div className="topic-grid">
          <a href="#" className="topic-card">
            <span className="emoji">⛏️</span>
            <span className="label">Terreno</span>
          </a>
          <a href="#" className="topic-card">
            <span className="emoji">🥕</span>
            <span className="label">Verduras</span>
          </a>
          <a href="#" className="topic-card">
            <span className="emoji">🌱</span>
            <span className="label">Siembra</span>
          </a>
          <a href="#" className="topic-card">
            <span className="emoji">💧</span>
            <span className="label">Riego</span>
          </a>
          <a href="#" className="topic-card">
            <span className="emoji">❤️‍🩹</span>
            <span className="label">Cuidados</span>
          </a>
          <a href="#" className="topic-card">
            <span className="emoji">☀️</span>
            <span className="label">Temporadas</span>
          </a>
        </div>
      </section>
    </A>
  )
}
