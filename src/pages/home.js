import React, { useState, useContext, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ThemeContext from '../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    text: '#f5f5f5',
    background: '#0f111a',
    backgroundGradient: 'rgba(15, 17, 26, 0.9)',
    mutedText: '#d1d1d1',
    cardBackground: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(108, 99, 255, 0.2)'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    text: '#333333',
    background: '#ffffff',
    backgroundGradient: 'rgba(255, 255, 255, 0.95)',
    mutedText: '#666666',
    cardBackground: 'rgba(108, 99, 255, 0.05)',
    border: 'rgba(108, 99, 255, 0.3)'
  }
};

const Home = ({ hideScrollIndicator }) => {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  const [isHovered, setIsHovered] = useState(false);
  const [typingKey, setTypingKey] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    setTypingKey(prevKey => prevKey + 1);

    const handleScroll = () => {
      if (window.location.hash !== '#home') {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, [languageCode]);

  const t = useMemo(() => ({
    ...translations.en.home,
    ...(translations[languageCode]?.home || {})
  }), [languageCode]);

  const socialLinks = [
    { 
      icon: <FaGithub size={24} />, 
      url: 'https://github.com/ElsaImeri',
      label: 'GitHub',
      color: isDarkMode ? '#fff' : '#333',
      animation: { scale: [1, 1.05, 1] }
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://www.linkedin.com/in/elsa-imeri-953b7b323',
      label: 'LinkedIn',
      color: '#0077b5',
      animation: { scale: [1, 1.05, 1] }
    },
    {
      icon: <FaEnvelope size={24} />,
      url: '#',
      label: 'Email',
      color: isDarkMode ? '#d44638' : '#c23b2e',
      animation: { scale: [1, 1.05, 1] },
      onClick: (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(t.emailSubject || 'Contact from Portfolio');
        const body = encodeURIComponent(t.emailBody || 'Hello Elsa,\n\nI would like to get in touch with you regarding...');
        window.location.href = `mailto:elsaimeri478@gmail.com?subject=${subject}&body=${body}`;
      }
    }
  ];

  const techBadges = [
    { name: 'Node.js', color: '#68a063', textColor: '#fff' },
    { name: 'Laravel', color: '#ff2d20', textColor: '#fff' },
    { name: 'Vue.js', color: '#41b883', textColor: '#fff' },
    { name: 'React', color: '#61dafb', textColor: isDarkMode ? '#fff' : '#000' },
    { name: 'PHP', color: '#777bb3', textColor: '#fff' },
    { name: 'JavaScript', color: '#f7df1e', textColor: '#000' },
    { name: 'HTML5', color: '#e34f26', textColor: '#fff' },
    { name: 'CSS3', color: '#1572b6', textColor: '#fff' },
    { name: 'Bootstrap', color: '#7952b3', textColor: '#fff' },
    { name: 'Next.js', color: isDarkMode ? '#fff' : '#000', textColor: isDarkMode ? '#000' : '#fff' },
    { name: 'MySQL', color: '#4479a1', textColor: '#fff' },
    { name: 'SQL Server', color: '#cc2927', textColor: '#fff' },
    { name: 'Git', color: '#f05032', textColor: '#fff' },
    { name: 'UI/UX', color: '#5c6bc0', textColor: '#fff' },
    { name: 'Responsive', color: '#3d9970', textColor: '#fff' },
    { name: 'Redux', color: '#764abc', textColor: '#fff' },
    { name: 'REST API', color: '#00b4d8', textColor: '#fff' },
    { name: 'GraphQL', color: '#e535ab', textColor: '#fff' }
  ];

  // Positions for tech badges
  const badgePositions = [
    { top: '10%', left: '15%' },
    { top: '20%', right: '20%' },
    { bottom: '15%', left: '10%' },
    { bottom: '25%', right: '15%' },
    { top: '5%', left: '50%', transform: 'translateX(-50%)' },
    { bottom: '5%', right: '50%', transform: 'translateX(50%)' },
    { top: '30%', left: '30%' },
    { bottom: '30%', right: '30%' },
    { top: '15%', right: '5%' },
    { bottom: '20%', left: '5%' },
    { top: '40%', left: '20%' },
    { bottom: '40%', right: '20%' }
  ];

  return (
    <section 
      id="home"
      className="position-relative overflow-hidden d-flex align-items-center"
      style={{
        minHeight: '100vh',
        backgroundColor: colorScheme.background,
        color: colorScheme.text,
        padding: '2rem 1.5rem',
        isolation: 'isolate',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100" style={{
        background: `radial-gradient(circle at 20% 30%, ${colorScheme.primary}15 0%, transparent 50%),
                     radial-gradient(circle at 80% 70%, ${colorScheme.secondary}15 0%, transparent 50%)`,
        zIndex: 0,
        opacity: isDarkMode ? 0.5 : 0.3,
        transition: 'opacity 0.3s ease'
      }} />

      {/* Geometric pattern background */}
      <div className="position-absolute top-0 left-0 w-100 h-100" style={{
        backgroundImage: `
          linear-gradient(30deg, ${colorScheme.primary}10 12%, transparent 12.5%, transparent 87%, ${colorScheme.primary}10 87.5%, ${colorScheme.primary}10),
          linear-gradient(150deg, ${colorScheme.primary}10 12%, transparent 12.5%, transparent 87%, ${colorScheme.primary}10 87.5%, ${colorScheme.primary}10),
          linear-gradient(30deg, ${colorScheme.primary}10 12%, transparent 12.5%, transparent 87%, ${colorScheme.primary}10 87.5%, ${colorScheme.primary}10),
          linear-gradient(150deg, ${colorScheme.primary}10 12%, transparent 12.5%, transparent 87%, ${colorScheme.primary}10 87.5%, ${colorScheme.primary}10),
          linear-gradient(60deg, ${colorScheme.secondary}08 25%, transparent 25.5%, transparent 75%, ${colorScheme.secondary}08 75%, ${colorScheme.secondary}08),
          linear-gradient(60deg, ${colorScheme.secondary}08 25%, transparent 25.5%, transparent 75%, ${colorScheme.secondary}08 75%, ${colorScheme.secondary}08)
        `,
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        zIndex: 0,
        opacity: isDarkMode ? 0.3 : 0.1,
        transition: 'opacity 0.3s ease'
      }} />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center text-center">
          <motion.div 
            className="col-12 col-lg-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Greeting text */}
            <motion.div 
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                color: colorScheme.mutedText,
                fontWeight: 400,
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}>
                {t.greeting}
              </span>
            </motion.div>

            {/* Name with larger size and modern styling */}
            <motion.h1 
              className="fw-bold mb-3"
              style={{
                fontSize: 'clamp(3rem, 10vw, 5.5rem)',
                lineHeight: 1.1,
                color: colorScheme.text,
                textShadow: isDarkMode ? `0 0 20px ${colorScheme.primary}40` : 'none',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '-0.02em',
                transition: 'color 0.3s ease, text-shadow 0.3s ease'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Elsa <span style={{ color: colorScheme.primary }}>Imeri</span>
            </motion.h1>

            {/* Type animation */}
            <div className="mb-4" style={{ minHeight: '3rem' }}>
              <TypeAnimation
                key={typingKey}
                sequence={t.roles.flatMap(role => [role, 2000])}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ 
                  fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
                  color: colorScheme.primary,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  transition: 'color 0.3s ease'
                }}
              />
            </div>

            {/* Description */}
            <motion.p 
              className="mb-4 mb-lg-5 mx-auto"
              style={{
                fontSize: '1.1rem',
                color: colorScheme.mutedText,
                lineHeight: 1.7,
                maxWidth: '700px',
                fontWeight: 300,
                transition: 'color 0.3s ease'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t.description}
            </motion.p>

            {/* Buttons - centered */}
            <motion.div 
              className="d-flex flex-wrap gap-3 mb-4 mb-lg-5 justify-content-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="position-relative overflow-hidden text-decoration-none"
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '0.5px'
                }}
                whileHover={{ 
                  transform: 'translateY(-3px)', 
                  boxShadow: `0 10px 25px ${colorScheme.primary}60` 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t.contact}</span>
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    zIndex: -1,
                    borderRadius: '50px'
                  }}
                />
              </motion.a>

              <motion.a
                href="#projects"
                className="position-relative overflow-hidden text-decoration-none"
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  border: `2px solid ${colorScheme.primary}`,
                  color: colorScheme.primary,
                  background: 'transparent',
                  letterSpacing: '0.5px'
                }}
                whileHover={{ 
                  transform: 'translateY(-3px)', 
                  color: '#fff', 
                  boxShadow: `0 10px 25px ${colorScheme.primary}40` 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t.projects}</span>
                <motion.div
                  className="position-absolute top-0 start-0 w-0 h-100"
                  style={{ background: colorScheme.primary, zIndex: -1, borderRadius: '50px' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social links - centered */}
            <motion.div 
              className="d-flex gap-3 justify-content-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url !== '#' ? '_blank' : undefined}
                  rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                  className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
                  style={{
                    width: '55px',
                    height: '55px',
                    border: `1px solid ${social.color}`,
                    color: social.color,
                    backgroundColor: colorScheme.cardBackground,
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    backgroundColor: social.color,
                    color: isDarkMode ? '#fff' : '#fff',
                    scale: 1.1,
                    boxShadow: `0 0 25px ${social.color}60`
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={social.animation}
                  onClick={social.onClick}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Technology visualization - floating tech elements */}
        <motion.div 
          className="row justify-content-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="col-12 d-flex justify-content-center">
            <div className="position-relative" style={{ width: '100%', maxWidth: '600px', height: '200px' }}>
              {/* Floating tech elements */}
              {techBadges.slice(0, 12).map((tech, index) => (
                <motion.div
                  key={index}
                  className="position-absolute px-3 py-2 rounded-pill d-flex align-items-center"
                  style={{
                    ...badgePositions[index],
                    background: tech.color,
                    color: tech.textColor,
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    zIndex: 2,
                    boxShadow: isDarkMode 
                      ? '0 5px 15px rgba(0,0,0,0.3)' 
                      : '0 5px 15px rgba(0,0,0,0.1)',
                    height: '34px',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.3s ease'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    y: {
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: `0 8px 25px ${tech.color}80`, 
                    zIndex: 4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}

              {/* Connecting lines */}
              <svg width="100%" height="100%" className="position-absolute" style={{zIndex: 1, pointerEvents: 'none'}}>
                {techBadges.slice(0, 6).map((_, i) => (
                  <line 
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={i % 2 === 0 ? '30%' : '70%'}
                    y2={i < 2 ? '30%' : '70%'}
                    stroke={colorScheme.primary}
                    strokeWidth="1"
                    strokeOpacity={isDarkMode ? "0.2" : "0.1"}
                    strokeDasharray="4,4"
                  />
                ))}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showScrollButton && !hideScrollIndicator && (
        <motion.div
          className="position-fixed start-50 translate-middle-x text-center d-flex flex-column align-items-center"
          style={{ 
            bottom: '2rem', 
            color: colorScheme.primary, 
            cursor: 'pointer', 
            zIndex: 10 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => { document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' }); }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.3 : 1, 
              color: isHovered ? colorScheme.secondary : colorScheme.primary 
            }} 
            transition={{ duration: 0.3 }}
          >
            <FaArrowDown size={24} />
          </motion.div>
          <motion.span 
            className="d-block mt-1 fw-medium" 
            style={{ 
              fontSize: '0.9rem',
              color: colorScheme.mutedText
            }} 
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {t.scroll}
          </motion.span>
        </motion.div>
      )}
    </section>
  );
};

export default Home;