import React, { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaBookOpen, FaGithub, FaGlobe, FaHome, 
  FaBars, FaTimes, FaChevronDown, FaRoute, 
  FaProjectDiagram, FaEnvelope, FaLinkedin, FaFilePdf 
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

// Light color scheme configuration
const colors = {
  primary: '#4f46e5',
  secondary: '#64748b',
  dark: '#ffffff',
  light: '#1e293b',
  accent: '#0ea5e9',
  border: 'rgba(30, 41, 59, 0.1)'
};

// Komponentët e vegjël të memoizuar
const NavIconItem = React.memo(({ icon, text, link, colors, onClick }) => (
  <motion.a
    href={link}
    onClick={(e) => onClick(e, link)}
    className="d-flex align-items-center text-decoration-none"
    style={{
      color: colors.light,
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.95rem',
      fontWeight: 500,
      marginLeft: '2.5rem',
      padding: '0.7rem 1.2rem',
      border: `1px solid ${colors.border}`,
      borderRadius: '10px',
      backgroundColor: 'rgba(30, 41, 59, 0.03)',
      transition: 'all 0.2s ease',
    }}
    whileHover={{ 
      y: -2,
      backgroundColor: 'rgba(79, 70, 229, 0.08)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)'
    }}
    aria-label={text}
  >
    <span style={{ 
      fontSize: '1.1rem', 
      marginRight: '0.6rem', 
      color: colors.primary,
      transition: 'color 0.2s ease'
    }}>
      {icon}
    </span>
    {text}
  </motion.a>
));

const NavTextItem = React.memo(({ text, link, colors, isActive = false, onClick }) => (
  <motion.a
    href={link}
    onClick={(e) => onClick(e, link)}
    className="text-decoration-none"
    style={{
      color: isActive ? colors.light : colors.secondary,
      fontWeight: isActive ? 600 : 500,
      fontSize: '0.95rem',
      fontFamily: "'Inter', sans-serif",
      marginLeft: '2.5rem',
      padding: '0.7rem 1.2rem',
      borderRadius: '10px',
      backgroundColor: isActive ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
      border: isActive ? `1px solid ${colors.primary}` : 'none',
      transition: 'all 0.2s ease'
    }}
    whileHover={{ 
      y: -2,
      backgroundColor: 'rgba(79, 70, 229, 0.05)'
    }}
    aria-label={text}
  >
    {text}
  </motion.a>
));

const MobileNavItem = React.memo(({ icon, text, link, colors, onClick }) => (
  <motion.a
    href={link}
    onClick={(e) => {
      e.preventDefault();
      onClick(e, link);
    }}
    className="text-decoration-none"
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 1.5rem',
      borderRadius: '10px',
      color: colors.light,
      fontFamily: "'Inter', sans-serif",
      fontSize: '1.05rem',
      backgroundColor: 'rgba(30, 41, 59, 0.03)',
      border: `1px solid ${colors.border}`,
      marginBottom: '0.5rem',
      transition: 'all 0.2s ease'
    }}
    aria-label={text}
  >
    <span style={{ 
      marginRight: '1.2rem',
      fontSize: '1.1rem',
      color: colors.primary,
      transition: 'color 0.2s ease'
    }}>
      {icon}
    </span>
    {text}
  </motion.a>
));

const LanguageSelector = React.memo(({ 
  isLanguageOpen, 
  setIsLanguageOpen, 
  selectedLanguage, 
  handleLanguageSelect, 
  colors, 
  languages, 
  isMobile = false 
}) => {
  return (
    <div className="position-relative" style={{ zIndex: 1051 }}>
      <button
        className="language-selector-button"
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '0.85rem' : '0.9rem',
          color: colors.light,
          backgroundColor: 'rgba(30, 41, 59, 0.05)',
          border: `1px solid ${colors.border}`,
          borderRadius: '8px',
          padding: isMobile ? '0.5rem 0.8rem' : '0.6rem 1rem',
          gap: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          minWidth: isMobile ? 'auto' : '110px',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        aria-expanded={isLanguageOpen}
        aria-haspopup="true"
      >
        <FaGlobe style={{ 
          color: colors.primary, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          marginRight: isMobile ? '0' : '0.4rem'
        }} />
        {!isMobile && (
          <span style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '90px'
          }}>
            {selectedLanguage}
          </span>
        )}
        <FaChevronDown style={{ 
          fontSize: '0.7rem', 
          marginLeft: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.2s ease',
          transform: isLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }} />
      </button>

      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            className="language-selector-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: colors.dark,
              border: `1px solid ${colors.border}`,
              borderRadius: '8px',
              padding: '0.5rem 0',
              marginTop: '0.5rem',
              minWidth: '140px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              zIndex: 1052,
              overflow: 'hidden'
            }}
            role="menu"
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => {
                  handleLanguageSelect(lang.name);
                  setIsLanguageOpen(false);
                }}
                style={{
                  padding: '0.7rem 1.2rem',
                  cursor: 'pointer',
                  color: selectedLanguage === lang.name ? colors.primary : colors.light,
                  backgroundColor: selectedLanguage === lang.name ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedLanguage === lang.name ? 'rgba(79, 70, 229, 0.08)' : 'transparent'}
                role="menuitem"
              >
                <span style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%',
                  backgroundColor: selectedLanguage === lang.name ? colors.primary : colors.secondary,
                  transition: 'background-color 0.2s ease'
                }} />
                {lang.name}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const MobileMenuToggle = React.memo(({ isMobileMenuOpen, setIsMobileMenuOpen, colors }) => (
  <motion.button
    className="mobile-menu-toggle"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    style={{
      background: 'transparent',
      border: 'none',
      color: colors.light,
      fontSize: '1.5rem',
      cursor: 'pointer',
      zIndex: 1051,
      padding: '0.3rem',
      borderRadius: '6px',
      transition: 'all 0.2s ease'
    }}
    whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.05)' }}
    whileTap={{ scale: 0.9 }}
    aria-expanded={isMobileMenuOpen}
    aria-label="Toggle menu"
  >
    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
  </motion.button>
));

const MobileMenu = React.memo(({ 
  isMobile, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  handleNavigation, 
  colors, 
  translations, 
  languages, 
  selectedLanguage, 
  handleLanguageSelect 
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <AnimatePresence>
      {isMobile && isMobileMenuOpen && (
        <>
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1040,
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <motion.div
            key="mobile-menu-content"
            className="mobile-menu-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '340px',
              backgroundColor: colors.dark,
              zIndex: 1045,
              padding: '3rem 1.8rem',
              overflowY: 'auto',
              boxShadow: '-8px 0 30px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="mb-6" style={{ marginTop: '40px' }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: colors.light,
                fontSize: '1.5rem',
                marginBottom: '0.3rem'
              }}>
                Elsa Imeri
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: colors.primary,
                fontSize: '0.95rem',
                marginBottom: '0.5rem'
              }}>
                {translations.fullstack}
              </p>
            </div>

            <div className="d-flex flex-column gap-3" style={{ flex: 1 }}>
              <MobileNavItem
                icon={<FaCode />}
                text={translations.skills}
                link="#skills"
                colors={colors}
                onClick={handleNavigation}
              />
              <MobileNavItem
                icon={<FaProjectDiagram />}
                text={translations.projects}
                link="#projects"
                colors={colors}
                onClick={handleNavigation}
              />
              <MobileNavItem
                icon={<FaRoute />}
                text={translations.journey}
                link="#experience"
                colors={colors}
                onClick={handleNavigation}
              />
              <MobileNavItem
                icon={<FaEnvelope />}
                text={translations.contact}
                link="#contact"
                colors={colors}
                onClick={handleNavigation}
              />
              <MobileNavItem
                icon={<FaGithub />}
                text={translations.goals}
                link="#goals"
                colors={colors}
                onClick={handleNavigation}
              />
            </div>

            <div className="mt-auto pt-6">
              <div className="mb-5">
                <LanguageSelector
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  selectedLanguage={selectedLanguage}
                  handleLanguageSelect={(lang) => {
                    handleLanguageSelect(lang);
                    setIsLanguageOpen(false);
                  }}
                  colors={colors}
                  languages={languages}
                  isMobile={false}
                />
              </div>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: colors.secondary,
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {translations.available}
              </p>

              <div className="d-flex gap-4 justify-content-center">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(e, "#contact");
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: colors.light,
                    fontSize: '1.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.05)',
                    border: `1px solid ${colors.border}`,
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Contact section"
                >
                  <SiUpwork />
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(e, "#contact");
                  }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: colors.light,
                    fontSize: '1.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.05)',
                    border: `1px solid ${colors.border}`,
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Fiverr profile"
                >
                  <SiFiverr />
                </motion.a>

                <motion.a
                  href="https://github.com/elsaimeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: colors.light,
                    fontSize: '1.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.05)',
                    border: `1px solid ${colors.border}`,
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/elsa-imeri-953b7b323"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: colors.light,
                    fontSize: '1.4rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.05)',
                    border: `1px solid ${colors.border}`,
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

const ProfessionalWhiteNavbar = () => {
  const { language, languageCode, changeLanguage, languages } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 992);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const isMobile = windowWidth < 992;
  const t = useMemo(() => translations[languageCode]?.navbar || translations.en.navbar, [languageCode]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 992) {
      setIsMobileMenuOpen(false);
      setIsLanguageOpen(false);
    }
  }, []);

  const handleClickOutside = useCallback((e) => {
    const languageButton = document.querySelector('.language-selector-button');
    const languageMenu = document.querySelector('.language-selector-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (isMobileMenuOpen && 
        !document.querySelector('.mobile-menu-container')?.contains(e.target) && 
        !mobileMenuToggle?.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
    
    if (isLanguageOpen && 
        !languageButton?.contains(e.target) && 
        !languageMenu?.contains(e.target)) {
      setIsLanguageOpen(false);
    }
  }, [isMobileMenuOpen, isLanguageOpen]);

  const handleLanguageSelect = useCallback((selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setIsLanguageOpen(false);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, changeLanguage]);

  const handleNavigation = useCallback((e, target) => {
    e.preventDefault();
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Nëse nuk jemi në faqen kryesore, ridrejto në faqen kryesore me hash
    if (location.pathname !== '/') {
      window.location.href = `/#${target}`;
      return;
    }
    
    // Scroll në elementin e duhur
    const element = document.getElementById(target.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Ndrysho URL-në pa rifreskim faqe
      window.history.pushState(null, null, `/#${target.replace('#', '')}`);
    }
  }, [isMobileMenuOpen, location.pathname]);

  useEffect(() => {
    if (!languageCode) {
      changeLanguage('English');
    }
  }, [languageCode, changeLanguage]);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 100);
    const debouncedResize = debounce(handleResize, 100);
    
    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleResize, handleClickOutside]);

  // Kontrollo hash-in e URL kur komponenti ngarkohet
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <nav
        className="position-fixed top-0 w-100"
        style={{
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem',
          backgroundColor: isScrolled || isMobileMenuOpen ? colors.dark : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
          borderBottom: `1px solid ${colors.border}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1050,
          boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <motion.div
            className="d-flex align-items-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '1.4rem',
                color: colors.light,
                gap: '0.5rem',
                letterSpacing: '0.5px'
              }}
              aria-label="Home"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {isScrolled && <FaHome style={{ color: colors.primary }} />}
              Elsa <span style={{ color: colors.primary }}>Imeri</span>
            </Link>
          </motion.div>

          {!isMobile ? (
            <div className="d-flex align-items-center">
              {!isScrolled ? (
                <>
                  <NavIconItem
                    icon={<FaCode />}
                    text={t.skills}
                    link="#skills"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavIconItem
                    icon={<FaProjectDiagram />}
                    text={t.projects}
                    link="#projects"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavIconItem
                    icon={<FaRoute />}
                    text={t.journey}
                    link="#experience"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavIconItem
                    icon={<FaBookOpen />}
                    text={t.articles}
                    link="#resume"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                </>
              ) : (
                <>
                  <NavTextItem
                    text={t.skills}
                    link="#skills"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavTextItem
                    text={t.projects}
                    link="#projects"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavTextItem
                    text={t.journey}
                    link="#experience"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavTextItem
                    text={t.contact}
                    link="#contact"
                    colors={colors}
                    onClick={handleNavigation}
                  />
                  <NavTextItem
                    text={t.goals}
                    link="#goals"
                    colors={colors}
                    isActive={true}
                    onClick={handleNavigation}
                  />
                </>
              )}

              <div className="ms-4">
                <LanguageSelector
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  selectedLanguage={language}
                  handleLanguageSelect={handleLanguageSelect}
                  colors={colors}
                  languages={languages}
                />
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              <div className="me-3">
                <LanguageSelector
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  selectedLanguage={language}
                  handleLanguageSelect={handleLanguageSelect}
                  colors={colors}
                  languages={languages}
                  isMobile={true}
                />
              </div>
              <MobileMenuToggle
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                colors={colors}
              />
            </div>
          )}
        </div>
      </nav>

      <MobileMenu
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavigation={handleNavigation}
        colors={colors}
        translations={t}
        languages={languages}
        selectedLanguage={language}
        handleLanguageSelect={handleLanguageSelect}
      />
    </>
  );
};

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default React.memo(ProfessionalWhiteNavbar);