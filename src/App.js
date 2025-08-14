import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;