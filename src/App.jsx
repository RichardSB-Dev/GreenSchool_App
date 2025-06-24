// src/App.jsx
import { BrowserRouter } from "react-router-dom"; 
import AppRoutes from "./Router/router.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from './Components/Footer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
