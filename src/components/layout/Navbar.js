import React, { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaProjectDiagram, FaRoute, FaEnvelope, 
  FaBars, FaTimes, FaChevronDown, FaGlobe,
  FaHome, FaGithub, FaLinkedin, FaSun, FaMoon,
  FaUser, FaBriefcase, FaHistory, FaPaperPlane,
  FaFileAlt, FaBullseye
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import ThemeContext from '../../contexts/ThemeContext';

// Color schemes for light and dark modes - UPDATED
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    accent: '#ff6b6b',
    text: '#f5f5f5',
    textSecondary: '#a0a0a0',
    background: 'rgba(15, 17, 26, 0.98)',
    backgroundSolid: '#0f111a',
    border: 'rgba(108, 99, 255, 0.25)',
    menuBackground: 'rgba(15, 17, 26, 0.99)',
    icon: '#6c63ff',
    overlay: 'rgba(0, 0, 0, 0.7)',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBackground: 'rgba(255, 255, 255, 0.05)'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    accent: '#ff6b6b',
    text: '#2d3748',
    textSecondary: '#718096',
    background: 'rgba(255, 255, 255, 0.98)',
    backgroundSolid: '#ffffff',
    border: 'rgba(108, 99, 255, 0.3)',
    menuBackground: 'rgba(255, 255, 255, 0.99)',
    icon: '#6c63ff',
    overlay: 'rgba(0, 0, 0, 0.3)',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cardBackground: 'rgba(0, 0, 0, 0.03)'
  }
};

// Komponentët e vegjël të memoizuar - UPDATED DESIGN
const NavIconItem = React.memo(({ icon, text, link, onClick, isActive, colorScheme }) => (
  <motion.a
    href={link}
    onClick={(e) => onClick(e, link)}
    className="d-flex align-items-center text-decoration-none position-relative"
    style={{
      color: isActive ? colorScheme.primary : colorScheme.text,
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.92rem',
      fontWeight: isActive ? 600 : 500,
      margin: '0 0.8rem',
      padding: '0.6rem 1.2rem',
      borderRadius: '12px',
      backgroundColor: isActive ? `${colorScheme.primary}15` : 'transparent',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid transparent',
    }}
    whileHover={{ 
      y: -2,
      backgroundColor: `${colorScheme.primary}10`,
      borderColor: `${colorScheme.primary}30`,
      boxShadow: `0 4px 15px ${colorScheme.primary}08`
    }}
    whileTap={{ scale: 0.98 }}
    aria-label={text}
  >
    <span style={{ 
      fontSize: '1rem', 
      marginRight: '0.5rem', 
      color: isActive ? colorScheme.primary : colorScheme.textSecondary,
      transition: 'color 0.3s ease'
    }}>
      {icon}
    </span>
    {text}
    {isActive && (
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '2px',
          backgroundColor: colorScheme.primary,
          borderRadius: '2px'
        }}
        layoutId="activeIndicator"
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    )}
  </motion.a>
));

const ThemeToggle = React.memo(({ isDarkMode, toggleTheme, isMobile = false }) => (
  <motion.button
    className="theme-toggle-button"
    onClick={toggleTheme}
    style={{
      background: 'rgba(255, 255, 255, 0.1)',
      border: `1px solid ${isDarkMode ? colorSchemes.dark.border : colorSchemes.light.border}`,
      color: isDarkMode ? colorSchemes.dark.text : colorSchemes.light.text,
      fontSize: isMobile ? '0.9rem' : '1rem',
      cursor: 'pointer',
      padding: isMobile ? '0.5rem' : '0.6rem',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobile ? '40px' : '44px',
      height: isMobile ? '40px' : '44px'
    }}
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
    whileTap={{ scale: 0.95 }}
    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {isDarkMode ? <FaSun /> : <FaMoon />}
  </motion.button>
));

const LanguageSelector = React.memo(({ 
  isLanguageOpen, 
  setIsLanguageOpen, 
  selectedLanguage, 
  handleLanguageSelect, 
  isMobile = false,
  colorScheme
}) => {
  const { languages } = useContext(LanguageContext);
  
  return (
    <div className="position-relative" style={{ zIndex: 1051 }}>
      <motion.button
        className="language-selector-button"
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '0.85rem' : '0.9rem',
          color: colorScheme.text,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: `1px solid ${colorScheme.border}`,
          borderRadius: '12px',
          padding: isMobile ? '0.5rem 0.8rem' : '0.7rem 1rem',
          gap: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          minWidth: isMobile ? 'auto' : '120px',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={isLanguageOpen}
        aria-haspopup="true"
      >
        <FaGlobe style={{ 
          color: colorScheme.primary, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          marginRight: isMobile ? '0' : '0.4rem'
        }} />
        {!isMobile && (
          <span style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '80px'
          }}>
            {selectedLanguage}
          </span>
        )}
        <motion.span
          animate={{ rotate: isLanguageOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown style={{ fontSize: '0.7rem' }} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            className="language-selector-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: colorScheme.menuBackground,
              border: `1px solid ${colorScheme.border}`,
              borderRadius: '12px',
              padding: '0.5rem 0',
              marginTop: '0.5rem',
              minWidth: '140px',
              boxShadow: `0 20px 40px rgba(0, 0, 0, 0.15)`,
              zIndex: 1052,
              overflow: 'hidden',
              backdropFilter: 'blur(20px)'
            }}
            role="menu"
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.code}
                onClick={() => {
                  handleLanguageSelect(lang.name);
                  setIsLanguageOpen(false);
                }}
                whileHover={{ backgroundColor: `${colorScheme.primary}10` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.8rem 1.2rem',
                  cursor: 'pointer',
                  color: selectedLanguage === lang.name ? colorScheme.primary : colorScheme.text,
                  backgroundColor: selectedLanguage === lang.name ? `${colorScheme.primary}15` : 'transparent',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem'
                }}
                role="menuitem"
              >
                <span style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%',
                  backgroundColor: selectedLanguage === lang.name ? colorScheme.primary : colorScheme.textSecondary,
                  transition: 'all 0.2s ease'
                }} />
                {lang.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

const MobileMenuToggle = React.memo(({ isMobileMenuOpen, setIsMobileMenuOpen, colorScheme }) => (
  <motion.button
    className="mobile-menu-toggle"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    style={{
      background: 'rgba(255, 255, 255, 0.1)',
      border: `1px solid ${colorScheme.border}`,
      color: colorScheme.text,
      fontSize: '1.1rem',
      cursor: 'pointer',
      zIndex: 1051,
      padding: '0.7rem',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px'
    }}
    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
    whileTap={{ scale: 0.95 }}
    aria-expanded={isMobileMenuOpen}
    aria-label="Toggle menu"
  >
    <AnimatePresence mode="wait">
      <motion.span
        key={isMobileMenuOpen ? 'close' : 'menu'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </motion.span>
    </AnimatePresence>
  </motion.button>
));

const MobileNavItem = React.memo(({ icon, text, link, onClick, isActive, colorScheme, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
  >
    <motion.a
      href={link}
      onClick={(e) => {
        e.preventDefault();
        onClick(e, link);
      }}
      className="text-decoration-none d-block"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 1.2rem',
        borderRadius: '14px',
        color: isActive ? colorScheme.primary : colorScheme.text,
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: isActive ? `${colorScheme.primary}15` : colorScheme.cardBackground,
        border: isActive ? `2px solid ${colorScheme.primary}` : `1px solid ${colorScheme.border}`,
        marginBottom: '0.5rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label={text}
    >
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        backgroundColor: isActive ? colorScheme.primary : 'transparent',
        transition: 'background-color 0.3s ease'
      }} />
      
      <span style={{ 
        marginRight: '1rem',
        fontSize: '1.2rem',
        color: isActive ? colorScheme.primary : colorScheme.textSecondary,
        transition: 'color 0.3s ease',
        minWidth: '24px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </span>
      
      <span style={{ flex: 1 }}>{text}</span>
      
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: colorScheme.primary,
            marginLeft: '0.5rem'
          }}
        />
      )}
    </motion.a>
  </motion.div>
));

const MobileMenu = React.memo(({ 
  isMobile, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  handleNavigation, 
  translations, 
  selectedLanguage, 
  handleLanguageSelect,
  activeSection,
  isDarkMode,
  toggleTheme,
  colorScheme
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navItems = [
    { icon: <FaUser />, text: translations.skills, link: '#skills', id: 'skills' },
    { icon: <FaBriefcase />, text: translations.projects, link: '#projects', id: 'projects' },
    { icon: <FaHistory />, text: translations.journey, link: '#experience', id: 'experience' },
    { icon: <FaFileAlt />, text: translations.resume, link: '#resume', id: 'resume' },
    { icon: <FaBullseye />, text: translations.goals, link: '#goals', id: 'goals' },
    { icon: <FaPaperPlane />, text: translations.contact, link: '#contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: <SiUpwork />, label: "Upwork" },
    { icon: <SiFiverr />, label: "Fiverr" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/elsaimeri" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/elsa-imeri-953b7b323" }
  ];

  return (
    <AnimatePresence>
      {isMobile && isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colorScheme.overlay,
              zIndex: 1040,
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Content - Now slides down from top */}
          <motion.div
            key="mobile-menu-content"
            className="mobile-menu-container"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ 
              type: 'spring',
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '100vh',
              backgroundColor: colorScheme.menuBackground,
              zIndex: 1045,
              padding: '5rem 1.5rem 2rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              borderBottom: `1px solid ${colorScheme.border}`,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Header Section */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="d-inline-block"
              >
                <h2 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  color: colorScheme.text,
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem',
                  background: colorScheme.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Elsa Imeri
                </h2>
              </motion.div>
              
              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: colorScheme.primary,
                fontSize: '1rem',
                fontWeight: 500,
                marginBottom: '2rem'
              }}>
                {translations.fullstack}
              </p>

              {/* Controls */}
              <motion.div 
                className="d-flex justify-content-center gap-3 mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <LanguageSelector
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  selectedLanguage={selectedLanguage}
                  handleLanguageSelect={(lang) => {
                    handleLanguageSelect(lang);
                    setIsLanguageOpen(false);
                  }}
                  isMobile={true}
                  colorScheme={colorScheme}
                />
                <ThemeToggle 
                  isDarkMode={isDarkMode} 
                  toggleTheme={toggleTheme} 
                  isMobile={true}
                />
              </motion.div>
            </motion.div>

            {/* Navigation Items */}
            <motion.div 
              className="flex-grow-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={item.id}
                  icon={item.icon}
                  text={item.text}
                  link={item.link}
                  onClick={handleNavigation}
                  isActive={activeSection === item.id}
                  colorScheme={colorScheme}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Footer Section */}
            <motion.div 
              className="mt-auto pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                color: colorScheme.textSecondary,
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                textAlign: 'center',
                fontWeight: 500
              }}>
                {translations.available}
              </p>

              {/* Social Links */}
              <motion.div 
                className="d-flex justify-content-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href || "#contact"}
                    onClick={!item.href ? (e) => {
                      e.preventDefault();
                      handleNavigation(e, "#contact");
                    } : undefined}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    style={{
                      color: colorScheme.text,
                      fontSize: '1.3rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      backgroundColor: colorScheme.cardBackground,
                      border: `1px solid ${colorScheme.border}`,
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      textDecoration: 'none'
                    }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>

              {/* Close Hint */}
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  color: colorScheme.textSecondary,
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}>
                  Tap anywhere outside to close
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

const ModernNavbar = () => {
  const { language, languageCode, changeLanguage } = useContext(LanguageContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 992);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const isMobile = windowWidth < 992;
  const t = useMemo(() => translations[languageCode]?.navbar || translations.en.navbar, [languageCode]);
  const colorScheme = useMemo(() => isDarkMode ? colorSchemes.dark : colorSchemes.light, [isDarkMode]);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
    
    // Determine which section is currently in view
    const sections = ['home', 'skills', 'projects', 'experience', 'resume', 'goals', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 992) {
      setIsMobileMenuOpen(false);
      setIsLanguageOpen(false);
    }
  }, []);

  // Click outside handler
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

  // Language selection handler
  const handleLanguageSelect = useCallback((selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setIsLanguageOpen(false);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, changeLanguage]);

  // Navigation handler
  const handleNavigation = useCallback((e, target) => {
    e.preventDefault();
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Set active section based on target
    const section = target.replace('#', '');
    setActiveSection(section);
    
    // Nëse nuk jemi në faqen kryesore, ridrejto në faqen kryesore me hash
    if (location.pathname !== '/') {
      window.location.href = `/${target}`;
      return;
    }
    
    // Scroll në elementin e duhur
    const element = document.getElementById(target.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Ndrysho URL-në pa rifreskim faqe
      window.history.pushState(null, null, target);
    }
  }, [isMobileMenuOpen, location.pathname]);

  // Initialize language if not set
  useEffect(() => {
    if (!languageCode) {
      changeLanguage('English');
    }
  }, [languageCode, changeLanguage]);

  // Event listeners setup
  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 100);
    const debouncedResize = debounce(handleResize, 100);
    
    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleResize, handleClickOutside]);

  // Handle URL hash on component mount
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      setActiveSection(section);
      
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <motion.nav
        className="position-fixed top-0 w-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          padding: isMobile ? '1rem 1.2rem' : '1.2rem 2rem',
          backgroundColor: isDarkMode 
            ? (isScrolled ? colorScheme.background : colorScheme.backgroundSolid)
            : (isScrolled ? colorScheme.background : 'transparent'),
          backdropFilter: isScrolled ? 'blur(20px)' : (isDarkMode ? 'none' : 'none'),
          borderBottom: isScrolled ? `1px solid ${colorScheme.border}` : (isDarkMode ? `1px solid ${colorScheme.border}20` : 'none'),
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1050,
          boxShadow: isScrolled 
            ? `0 4px 30px ${colorScheme.primary}05` 
            : (isDarkMode ? `0 2px 10px rgba(0, 0, 0, 0.1)` : 'none')
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <motion.div
            className="d-flex align-items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '1.4rem',
                color: colorScheme.text,
                gap: '0.4rem',
                letterSpacing: '0.5px'
              }}
              aria-label="Home"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  setActiveSection('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <FaHome style={{ color: colorScheme.primary, fontSize: '1.2rem' }} />
              </motion.span>
              Elsa <span style={{ color: colorScheme.primary }}>Imeri</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-4">
                <NavIconItem
                  icon={<FaUser />}
                  text={t.skills}
                  link="#skills"
                  onClick={handleNavigation}
                  isActive={activeSection === 'skills'}
                  colorScheme={colorScheme}
                />
                <NavIconItem
                  icon={<FaBriefcase />}
                  text={t.projects}
                  link="#projects"
                  onClick={handleNavigation}
                  isActive={activeSection === 'projects'}
                  colorScheme={colorScheme}
                />
                <NavIconItem
                  icon={<FaHistory />}
                  text={t.journey}
                  link="#experience"
                  onClick={handleNavigation}
                  isActive={activeSection === 'experience'}
                  colorScheme={colorScheme}
                />
                <NavIconItem
                  icon={<FaFileAlt />}
                  text={t.resume}
                  link="#resume"
                  onClick={handleNavigation}
                  isActive={activeSection === 'resume'}
                  colorScheme={colorScheme}
                />
                <NavIconItem
                  icon={<FaBullseye />}
                  text={t.goals}
                  link="#goals"
                  onClick={handleNavigation}
                  isActive={activeSection === 'goals'}
                  colorScheme={colorScheme}
                />
                <NavIconItem
                  icon={<FaPaperPlane />}
                  text={t.contact}
                  link="#contact"
                  onClick={handleNavigation}
                  isActive={activeSection === 'contact'}
                  colorScheme={colorScheme}
                />
              </div>

              <div className="d-flex align-items-center gap-2">
                <ThemeToggle 
                  isDarkMode={isDarkMode} 
                  toggleTheme={toggleTheme} 
                  isMobile={false}
                />
                <LanguageSelector
                  isLanguageOpen={isLanguageOpen}
                  setIsLanguageOpen={setIsLanguageOpen}
                  selectedLanguage={language}
                  handleLanguageSelect={handleLanguageSelect}
                  colorScheme={colorScheme}
                />
              </div>
            </div>
          ) : (
            /* Mobile Controls */
            <div className="d-flex align-items-center gap-2">
              <ThemeToggle 
                isDarkMode={isDarkMode} 
                toggleTheme={toggleTheme} 
                isMobile={true}
              />
              <MobileMenuToggle
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                colorScheme={colorScheme}
              />
            </div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavigation={handleNavigation}
        translations={t}
        selectedLanguage={language}
        handleLanguageSelect={handleLanguageSelect}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        colorScheme={colorScheme}
      />
    </>
  );
};

// Optimized debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };     
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default React.memo(ModernNavbar);