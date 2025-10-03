import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutCompany from './pages/AboutCompany';
import RotisSolution from './pages/RotisSolution';
import PortfolioImpact from './pages/PortfolioImpact';
import TechStack from './pages/TechStack';
import CoreServices from './pages/CoreServices';
import AiExpertise from './pages/AiExpertise';
import AcclaimVisa from './pages/AcclaimVisa';
import Contact from './pages/Contact';
import TrialDemo from './pages/TrialDemo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="solution-rotis" element={<RotisSolution />} />
          <Route path="portfolio-impact" element={<PortfolioImpact />} />
          <Route path="tech-stack" element={<TechStack />} />
          <Route path="core-services" element={<CoreServices />} />
          <Route path="ai-expertise" element={<AiExpertise />} />
          <Route path="acclaim-visa" element={<AcclaimVisa />} />
          <Route path="contact" element={<Contact />} />
          <Route path="trial-demo" element={<TrialDemo />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;