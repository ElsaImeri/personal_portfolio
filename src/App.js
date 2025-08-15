import React, { useCallback, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/home';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';
import Goals from './pages/goals';
import Skills from './pages/skills';
import WorkExperience from './pages/WorkExperience';
import Navbar from './components/layout/Navbar';
import './App.css';

// Komponenti kryesor i optimizuar
function App() {
  const location = useLocation();

  // Funksioni për scroll të qetë
  const smoothScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Kontrollon hash-in e URL dhe scroll në seksionin e duhur
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        smoothScroll(id);
      }, 100); // Vonesë e vogël për të garantuar renderimin
    }
  }, [location, smoothScroll]);

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <div id="home"><Home /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="resume"><Resume /></div>
          <div id="work-experience"><WorkExperience /></div>
          <div id="goals"><Goals /></div>
          <div id="contact"><Contact /></div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

// Wrapper për HashRouter
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}