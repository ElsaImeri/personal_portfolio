import React, { useCallback, useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
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

function App() {
  const location = useLocation();

  const smoothScroll = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        smoothScroll(id);
      }, 100); 
    }
  }, [location, smoothScroll]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <Navbar />
          <main>
            <div id="home"><Home /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="work-experience"><WorkExperience /></div>
            <div id="resume"><Resume /></div>
            <div id="goals"><Goals /></div>
            <div id="contact"><Contact /></div>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
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