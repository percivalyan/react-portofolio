// Route Doom
import { Routes, Route } from 'react-router-dom';

// Components
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

// Pages
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMe';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Criticism from './pages/Criticism';

function App() {
  return (
    <div>
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/criticism" element={<Criticism />} />
      </Routes>
      
      <FooterComponent />
    </div>
  );
}

export default App;
