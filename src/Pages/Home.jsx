import { 
  EducationalCardsSection,
  About_US, 
  Portada, 
  Gallery, 
  TemasPrincipales, 
  AnimatedPhrase, 
  FAQ, 
  Glossary, 
  Testimonials, 
  InstitutionalInfo,
} from '../Components';
import "../Styles/Home.css"; // Importa los estilos

export default function Home() {
  return (
    <div>
        <Portada />
        <TemasPrincipales />
        <About_US id='About_Us'/>
        <Gallery id='Gallery'/>
        <EducationalCardsSection id='EduCards'/>
        <AnimatedPhrase id='AnimatedPhrases'/>
        <Testimonials id='Testimonials'/>
        <FAQ id='FAQ'/>
        <Glossary id='Glossary'/>
        <InstitutionalInfo id='InstInfo'/>
    </div>
  );
}
