import React, { useState, useEffect, useCallback, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaBookOpen, 
  FaGithub, 
  FaGlobe, 
  FaHome, 
  FaBars, 
  FaTimes, 
  FaChevronDown, 
  FaRoute, 
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaFilePdf
} from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

// Light color scheme configuration
const colors = {
  primary: '#4f46e5',       // Indigo
  secondary: '#64748b',     // Slate
  dark: '#ffffff',          // White background
  light: '#1e293b',         // Dark text
  accent: '#0ea5e9',        // Sky blue
  border: 'rgba(30, 41, 59, 0.1)' // Subtle border
};

function ProfessionalWhiteNavbar() {
  const { language, languageCode, changeLanguage, languages } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const isMobile = windowWidth < 992;

  useEffect(function() {
    if (!languageCode) {
      changeLanguage('English');
    }
  }, [languageCode, changeLanguage]);

  const t = translations[languageCode]?.navbar || translations.en.navbar;

  const handleScroll = useCallback(function() {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const handleResize = useCallback(function() {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 992) {
      setIsMobileMenuOpen(false);
      setIsLanguageOpen(false);
    }
  }, []);

  const handleClickOutside = useCallback(function(e) {
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

  useEffect(function() {
    const debouncedScroll = debounce(handleScroll, 100);
    const debouncedResize = debounce(handleResize, 100);
    
    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return function() {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('resize', debouncedResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleResize, handleClickOutside]);

  const handleLanguageSelect = function(selectedLanguage) {
    changeLanguage(selectedLanguage);
    setIsLanguageOpen(false);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = function(e, target) {
    e.preventDefault();
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    if (location.pathname !== '/') {
      window.location.href = `/${target}`;
      return;
    }
    
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'nav',
      {
        className: "position-fixed top-0 w-100",
        style: {
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem',
          backgroundColor: isScrolled || isMobileMenuOpen ? colors.dark : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
          borderBottom: `1px solid ${colors.border}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1050,
          boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none'
        }
      },
      React.createElement(
        'div',
        { className: "container d-flex justify-content-between align-items-center" },
        React.createElement(
          motion.div,
          {
            className: "d-flex align-items-center",
            whileHover: { scale: 1.03 },
            transition: { type: 'spring', stiffness: 400 }
          },
          React.createElement(
            Link,
            {
              to: "/",
              className: "d-flex align-items-center text-decoration-none",
              style: {
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: '1.4rem',
                color: colors.light,
                gap: '0.5rem',
                letterSpacing: '0.5px'
              },
              'aria-label': "Home",
              onClick: function(e) {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            },
            isScrolled && React.createElement(FaHome, { style: { color: colors.primary } }),
            "Elsa ",
            React.createElement(
              'span',
              { style: { color: colors.primary } },
              "Imeri"
            )
          )
        ),
        !isMobile ? React.createElement(
          'div',
          { className: "d-flex align-items-center" },
          !isScrolled ? [
            React.createElement(NavIconItem, {
              icon: React.createElement(FaCode),
              text: t.skills,
              link: "#skills",
              colors: colors,
              onClick: handleNavigation,
              key: "skills"
            }),
            React.createElement(NavIconItem, {
              icon: React.createElement(FaProjectDiagram),
              text: t.projects,
              link: "#projects",
              colors: colors,
              onClick: handleNavigation,
              key: "projects"
            }),
            React.createElement(NavIconItem, {
              icon: React.createElement(FaRoute),
              text: t.journey,
              link: "#experience",
              colors: colors,
              onClick: handleNavigation,
              key: "experience"
            }),
            React.createElement(NavIconItem, {
              icon: React.createElement(FaBookOpen),
              text: t.articles,
              link: "#resume",
              colors: colors,
              onClick: handleNavigation,
              key: "resume"
            })
          ] : [
            React.createElement(NavTextItem, {
              text: t.skills,
              link: "#skills",
              colors: colors,
              onClick: handleNavigation,
              key: "skills"
            }),
            React.createElement(NavTextItem, {
              text: t.projects,
              link: "#projects",
              colors: colors,
              onClick: handleNavigation,
              key: "projects"
            }),
            React.createElement(NavTextItem, {
              text: t.journey,
              link: "#experience",
              colors: colors,
              onClick: handleNavigation,
              key: "experience"
            }),
            React.createElement(NavTextItem, {
              text: t.contact,
              link: "#contact",
              colors: colors,
              onClick: handleNavigation,
              key: "contact"
            }),
            React.createElement(NavTextItem, {
              text: t.goals,
              link: "#goals",
              colors: colors,
              isActive: true,
              onClick: handleNavigation,
              key: "goals"
            })
          ],
          React.createElement(
            'div',
            { className: "ms-4" },
            React.createElement(LanguageSelector, {
              isLanguageOpen: isLanguageOpen,
              setIsLanguageOpen: setIsLanguageOpen,
              selectedLanguage: language,
              handleLanguageSelect: handleLanguageSelect,
              colors: colors,
              languages: languages
            })
          )
        ) : React.createElement(
          'div',
          { className: "d-flex align-items-center" },
          React.createElement(
            'div',
            { className: "me-3" },
            React.createElement(LanguageSelector, {
              isLanguageOpen: isLanguageOpen,
              setIsLanguageOpen: setIsLanguageOpen,
              selectedLanguage: language,
              handleLanguageSelect: handleLanguageSelect,
              colors: colors,
              languages: languages,
              isMobile: true
            })
          ),
          React.createElement(MobileMenuToggle, {
            isMobileMenuOpen: isMobileMenuOpen,
            setIsMobileMenuOpen: setIsMobileMenuOpen,
            colors: colors
          })
        )
      )
    ),
    React.createElement(MobileMenu, {
      isMobile: isMobile,
      isMobileMenuOpen: isMobileMenuOpen,
      setIsMobileMenuOpen: setIsMobileMenuOpen,
      handleNavigation: handleNavigation,
      colors: colors,
      translations: t,
      languages: languages,
      selectedLanguage: language,
      handleLanguageSelect: handleLanguageSelect
    })
  );
}

// Sub-components converted to classic React syntax
function LanguageSelector({ isLanguageOpen, setIsLanguageOpen, selectedLanguage, handleLanguageSelect, colors, languages, isMobile = false }) {
  return React.createElement(
    'div',
    { className: "position-relative", style: { zIndex: 1051 } },
    React.createElement(
      'button',
      {
        className: "language-selector-button",
        onClick: function() { setIsLanguageOpen(!isLanguageOpen); },
        style: {
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
        },
        'aria-expanded': isLanguageOpen,
        'aria-haspopup': "true"
      },
      React.createElement(FaGlobe, { 
        style: { 
          color: colors.primary, 
          fontSize: isMobile ? '0.9rem' : '1rem',
          marginRight: isMobile ? '0' : '0.4rem'
        } 
      }),
      !isMobile && React.createElement(
        'span',
        {
          style: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '90px'
          }
        },
        selectedLanguage
      ),
      React.createElement(FaChevronDown, { 
        style: { 
          fontSize: '0.7rem', 
          marginLeft: isMobile ? '0.3rem' : '0.5rem',
          transition: 'transform 0.2s ease',
          transform: isLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        } 
      })
    ),
    React.createElement(
      AnimatePresence,
      null,
      isLanguageOpen && React.createElement(
        motion.div,
        {
          className: "language-selector-menu",
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.15 },
          style: {
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
          },
          role: "menu"
        },
        languages.map(function(lang) {
          return React.createElement(
            'div',
            {
              key: lang.code,
              onClick: function() {
                handleLanguageSelect(lang.name);
                setIsLanguageOpen(false);
              },
              style: {
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
              },
              onMouseEnter: function(e) { e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.05)'; },
              onMouseLeave: function(e) { e.currentTarget.style.backgroundColor = selectedLanguage === lang.name ? 'rgba(79, 70, 229, 0.08)' : 'transparent'; },
              role: "menuitem"
            },
            React.createElement(
              'span',
              { 
                style: { 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%',
                  backgroundColor: selectedLanguage === lang.name ? colors.primary : colors.secondary,
                  transition: 'background-color 0.2s ease'
                }
              }
            ),
            lang.name
          );
        })
      )
    )
  );
}

function MobileMenuToggle({ isMobileMenuOpen, setIsMobileMenuOpen, colors }) {
  return React.createElement(
    motion.button,
    {
      className: "mobile-menu-toggle",
      onClick: function() { setIsMobileMenuOpen(!isMobileMenuOpen); },
      style: {
        background: 'transparent',
        border: 'none',
        color: colors.light,
        fontSize: '1.5rem',
        cursor: 'pointer',
        zIndex: 1051,
        padding: '0.3rem',
        borderRadius: '6px',
        transition: 'all 0.2s ease'
      },
      whileHover: { backgroundColor: 'rgba(30, 41, 59, 0.05)' },
      whileTap: { scale: 0.9 },
      'aria-expanded': isMobileMenuOpen,
      'aria-label': "Toggle menu"
    },
    isMobileMenuOpen ? React.createElement(FaTimes) : React.createElement(FaBars)
  );
}

function MobileMenu({ 
  isMobile, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  handleNavigation, 
  colors, 
  translations, 
  languages, 
  selectedLanguage, 
  handleLanguageSelect 
}) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return React.createElement(
    AnimatePresence,
    null,
    isMobile && isMobileMenuOpen && [
      React.createElement(
        motion.div,
        {
          key: "mobile-menu-overlay",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1040,
            backdropFilter: 'blur(4px)',
          },
          onClick: function() { setIsMobileMenuOpen(false); }
        }
      ),
      React.createElement(
        motion.div,
        {
          key: "mobile-menu-content",
          className: "mobile-menu-container",
          initial: { x: '100%' },
          animate: { x: 0 },
          exit: { x: '100%' },
          transition: { 
            type: 'spring',
            damping: 25,
            stiffness: 300
          },
          style: {
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
          }
        },
        React.createElement(
          'div',
          { className: "mb-6", style: { marginTop: '40px' } },
          React.createElement(
            'h3',
            {
              style: {
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: colors.light,
                fontSize: '1.5rem',
                marginBottom: '0.3rem'
              }
            },
            "Elsa Imeri"
          ),
          React.createElement(
            'p',
            {
              style: {
                fontFamily: "'Inter', sans-serif",
                color: colors.primary,
                fontSize: '0.95rem',
                marginBottom: '0.5rem'
              }
            },
            translations.fullstack
          )
        ),
        React.createElement(
          'div',
          { className: "d-flex flex-column gap-3", style: { flex: 1 } },
          React.createElement(MobileNavItem, {
            icon: React.createElement(FaCode),
            text: translations.skills,
            link: "#skills",
            colors: colors,
            onClick: handleNavigation
          }),
          React.createElement(MobileNavItem, {
            icon: React.createElement(FaProjectDiagram),
            text: translations.projects,
            link: "#projects",
            colors: colors,
            onClick: handleNavigation
          }),
          React.createElement(MobileNavItem, {
            icon: React.createElement(FaRoute),
            text: translations.journey,
            link: "#experience",
            colors: colors,
            onClick: handleNavigation
          }),
          React.createElement(MobileNavItem, {
            icon: React.createElement(FaEnvelope),
            text: translations.contact,
            link: "#contact",
            colors: colors,
            onClick: handleNavigation
          }),
          React.createElement(MobileNavItem, {
            icon: React.createElement(FaGithub),
            text: translations.goals,
            link: "#goals",
            colors: colors,
            onClick: handleNavigation
          })
        ),
        React.createElement(
          'div',
          { className: "mt-auto pt-6" },
          React.createElement(
            'div',
            { className: "mb-5" },
            React.createElement(LanguageSelector, {
              isLanguageOpen: isLanguageOpen,
              setIsLanguageOpen: setIsLanguageOpen,
              selectedLanguage: selectedLanguage,
              handleLanguageSelect: function(lang) {
                handleLanguageSelect(lang);
                setIsLanguageOpen(false);
              },
              colors: colors,
              languages: languages,
              isMobile: false
            })
          ),
          React.createElement(
            'p',
            {
              style: {
                fontFamily: "'Inter', sans-serif",
                color: colors.secondary,
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }
            },
            translations.available
          ),
          React.createElement(
            'div',
            { className: "d-flex gap-4 justify-content-center" },
            React.createElement(
              motion.a,
              {
                href: "#contact",
                onClick: function(e) {
                  e.preventDefault();
                  handleNavigation(e, "#contact");
                },
                whileHover: { y: -3 },
                whileTap: { scale: 0.95 },
                style: {
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
                },
                'aria-label': "Contact section"
              },
              React.createElement(SiUpwork)
            ),
            React.createElement(
              motion.a,
              {
                href: "#contact",
                onClick: function(e) {
                  e.preventDefault();
                  handleNavigation(e, "#contact");
                },
                whileHover: { y: -3 },
                whileTap: { scale: 0.95 },
                style: {
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
                },
                'aria-label': "Fiverr profile"
              },
              React.createElement(SiFiverr)
            ),
            React.createElement(
              motion.a,
              {
                href: "https://github.com/elsaimeri",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: { y: -3 },
                whileTap: { scale: 0.95 },
                style: {
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
                },
                'aria-label': "GitHub profile"
              },
              React.createElement(FaGithub)
            ),
            React.createElement(
              motion.a,
              {
                href: "https://www.linkedin.com/in/elsa-imeri-953b7b323",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: { y: -3 },
                whileTap: { scale: 0.95 },
                style: {
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
                },
                'aria-label': "LinkedIn profile"
              },
              React.createElement(FaLinkedin)
            )
          )
        )
      )
    ]
  );
}

function NavIconItem({ icon, text, link, colors, onClick }) {
  return React.createElement(
    motion.a,
    {
      href: link,
      onClick: function(e) { onClick(e, link); },
      className: "d-flex align-items-center text-decoration-none",
      style: {
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
      },
      whileHover: { 
        y: -2,
        backgroundColor: 'rgba(79, 70, 229, 0.08)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.03)'
      },
      'aria-label': text
    },
    React.createElement(
      'span',
      { 
        style: { 
          fontSize: '1.1rem', 
          marginRight: '0.6rem', 
          color: colors.primary,
          transition: 'color 0.2s ease'
        }
      },
      icon
    ),
    text
  );
}

function NavTextItem({ text, link, colors, isActive = false, onClick }) {
  return React.createElement(
    motion.a,
    {
      href: link,
      onClick: function(e) { onClick(e, link); },
      className: "text-decoration-none",
      style: {
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
      },
      whileHover: { 
        y: -2,
        backgroundColor: 'rgba(79, 70, 229, 0.05)'
      },
      'aria-label': text
    },
    text
  );
}

function MobileNavItem({ icon, text, link, colors, onClick }) {
  return React.createElement(
    motion.a,
    {
      href: link,
      onClick: function(e) {
        e.preventDefault();
        onClick(e, link);
      },
      className: "text-decoration-none",
      initial: { x: 20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { type: 'spring', stiffness: 300, damping: 15 },
      whileHover: { x: 5 },
      whileTap: { scale: 0.98 },
      style: {
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
      },
      'aria-label': text
    },
    React.createElement(
      'span',
      { 
        style: { 
          marginRight: '1.2rem',
          fontSize: '1.1rem',
          color: colors.primary,
          transition: 'color 0.2s ease'
        }
      },
      icon
    ),
    text
  );
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() { func.apply(context, args); }, wait);
  };
}

export default React.memo(ProfessionalWhiteNavbar);