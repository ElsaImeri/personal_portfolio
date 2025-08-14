import React, { useState, useContext, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../assets/images/fotob.png';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Home = ({ hideScrollIndicator }) => {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  const accentColor = '#8a85ff';
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
      color: '#333',
      animation: {
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        boxShadow: ['0 0 0 rgba(51,51,51,0)', '0 5px 15px rgba(51,51,51,0.3)', '0 0 0 rgba(51,51,51,0)']
      }
    },
    { 
      icon: <FaLinkedin size={24} />, 
      url: 'https://www.linkedin.com/in/elsa-imeri-953b7b323',
      label: 'LinkedIn',
      color: '#0077b5',
      animation: {
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        boxShadow: ['0 0 0 rgba(0,119,181,0)', '0 5px 15px rgba(0,119,181,0.3)', '0 0 0 rgba(0,119,181,0)']
      }
    },
    {
      icon: <FaEnvelope size={24} />,
      url: '#',
      label: 'Email',
      color: '#d44638',
      animation: {
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
        boxShadow: ['0 0 0 rgba(212,70,56,0)', '0 5px 15px rgba(212,70,56,0.3)', '0 0 0 rgba(212,70,56,0)']
      },
      onClick: (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(t.emailSubject || 'Contact from Portfolio');
        const body = encodeURIComponent(t.emailBody || 'Hello Elsa,\n\nI would like to get in touch with you regarding...');
        window.location.href = `mailto:elsaimeri478@gmail.com?subject=${subject}&body=${body}`;
      }
    }
  ];

  const techBadges = [
    { name: 'Node.js', color: '#68a063', position: { top: '5%', right: '5%' } },
    { name: 'Laravel', color: '#ff2d20', position: { bottom: '10%', left: '5%' } },
    { name: 'Vue.js', color: '#41b883', position: { top: '20%', left: '-5%' } },
    { name: 'React', color: '#61dafb', position: { bottom: '20%', right: '-5%' } },
    { name: 'PHP', color: '#777bb3', position: { top: '10%', left: '10%' } },
    { name: 'JavaScript', color: '#f7df1e', textColor: '#000', position: { bottom: '15%', right: '10%' } },
    { name: 'HTML5', color: '#e34f26', position: { top: '30%', left: '15%' } },
    { name: 'CSS3', color: '#1572b6', position: { bottom: '30%', right: '15%' } },
    { name: 'Bootstrap', color: '#7952b3', position: { top: '40%', left: '-8%' } },
    { name: 'Next.js', color: '#000000', position: { bottom: '40%', right: '-8%' } },
    { name: 'MySQL', color: '#4479a1', position: { top: '50%', left: '20%' } },
    { name: 'SQL Server', color: '#cc2927', position: { bottom: '50%', right: '20%' } },
    { name: 'Git', color: '#f05032', position: { top: '60%', left: '-10%' } },
    { name: 'UI/UX', color: '#5c6bc0', position: { bottom: '60%', right: '-10%' } },
    { name: 'Responsive', color: '#3d9970', position: { top: '70%', left: '25%' } },
    { name: 'Redux', color: '#764abc', position: { bottom: '70%', right: '25%' } },
    { name: 'REST API', color: '#00b4d8', position: { top: '80%', left: '-15%' } },
    { name: 'GraphQL', color: '#e535ab', position: { bottom: '80%', right: '-15%' } }
  ];

  return (
    <section 
      id="home"
      className="position-relative overflow-hidden"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        backgroundColor: '#ffffff',
        color: '#2d3748',
        padding: '2rem 1.5rem',
        isolation: 'isolate',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            linear-gradient(45deg, transparent 65%, ${accentColor}20 65.1%, ${accentColor}20 70%, transparent 70.1%) 0 0,
            linear-gradient(-45deg, transparent 65%, ${primaryColor}15 65.1%, ${primaryColor}15 70%, transparent 70.1%) 0 0,
            radial-gradient(circle at 20% 30%, ${primaryColor}15 0%, transparent 30%) 0 0,
            radial-gradient(circle at 80% 70%, ${accentColor}15 0%, transparent 30%) 0 0
          `,
          backgroundSize: '200px 200px',
          zIndex: 0,
          opacity: 0.7
        }}
      />
      
      {/* Floating shapes */}
      <motion.div 
        className="position-absolute rounded-circle"
        style={{
          top: '20%',
          left: '10%',
          width: '150px',
          height: '150px',
          background: `radial-gradient(circle, ${primaryColor}10 0%, transparent 70%)`,
          zIndex: 0
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="position-absolute"
        style={{
          bottom: '15%',
          right: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(45deg, ${accentColor}15 0%, transparent 100%)`,
          zIndex: 0
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container h-100 position-relative" style={{ flex: 1 }}>
        <div className="row align-items-center h-100 g-4">
          {/* Text content */}
          <motion.div 
            className="col-md-6 order-2 order-md-1 py-4 py-lg-0 position-relative d-flex flex-column justify-content-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ zIndex: 1 }}
          >
            <motion.h1 
              className="fw-bold mb-4 position-relative"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.2,
                color: '#1a202c'
              }}
            >
              {t.greeting} <span style={{ color: primaryColor }}>Elsa Imeri</span>
              <span className="position-absolute bottom-0 start-0 w-25 h-1"
                style={{ backgroundColor: primaryColor }}
              />
            </motion.h1>

            <div className="mb-4" style={{ minHeight: '3rem' }}>
              <TypeAnimation
                key={typingKey}
                sequence={t.roles.flatMap(role => [role, 2000])}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                  color: primaryColor,
                  fontWeight: 500
                }}
              />
            </div>

            <motion.p 
              className="mb-4 mb-lg-5 position-relative"
              style={{
                fontSize: '1.1rem',
                color: '#4a5568',
                lineHeight: 1.7,
                maxWidth: '100%',
                paddingLeft: '1rem',
                borderLeft: `2px solid ${primaryColor}`
              }}
            >
              {t.description}
            </motion.p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-5">
              <motion.a
                href="#contact"
                className="position-relative overflow-hidden text-decoration-none"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  color: '#fff',
                  zIndex: 1
                }}
                whileHover={{
                  transform: 'translateY(-3px)',
                  boxShadow: `0 10px 20px ${primaryColor}40`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="position-relative z-10">{t.contact}</span>
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: `linear-gradient(45deg, ${primaryColor}, ${accentColor})`,
                    zIndex: -1,
                    borderRadius: '50px'
                  }}
                  whileHover={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#projects"
                className="position-relative overflow-hidden text-decoration-none"
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 600,
                  border: `2px solid ${primaryColor}`,
                  color: primaryColor,
                  zIndex: 1
                }}
                whileHover={{
                  transform: 'translateY(-3px)',
                  color: '#fff',
                  boxShadow: `0 10px 20px ${primaryColor}40`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="position-relative z-10">{t.projects}</span>
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background: primaryColor,
                    zIndex: -1,
                    borderRadius: '50px',
                    width: '0%'
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Social links with improved animations */}
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url !== '#' ? '_blank' : undefined}
                  rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                  className="d-flex align-items-center justify-content-center text-decoration-none rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    border: `1px solid ${social.color}`,
                    color: social.color,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }}
                  whileHover={{ 
                    backgroundColor: social.color,
                    color: '#fff',
                    scale: 1.1,
                    boxShadow: `0 0 20px ${social.color}80`
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    ...social.animation,
                    transition: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  onClick={social.onClick}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Image with tech badges */}
          <motion.div 
            className="col-md-6 order-1 order-md-2 mb-4 mb-lg-0 d-flex justify-content-center align-items-center position-relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              zIndex: 1,
              height: '100%',
              minHeight: '400px'
            }}
          >
            <div className="position-relative" style={{ 
              width: '100%',
              height: '100%',
              maxWidth: '500px',
              maxHeight: '500px'
            }}>
              {/* Floating image */}
              <motion.div
                className="position-relative h-100"
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: `15px 15px 30px ${primaryColor}20`,
                  transform: 'rotate(2deg)',
                  border: `1px solid ${primaryColor}20`,
                  background: 'linear-gradient(45deg, #f5f7fa, #e4e8f0)'
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [2, -1, 2],
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Elsa Imeri" 
                  className="w-100 h-100 object-cover position-relative"
                  style={{
                    filter: 'grayscale(10%) contrast(110%) brightness(1.05)',
                    transition: 'all 0.6s ease',
                    mixBlendMode: 'multiply',
                    opacity: 0.9
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) contrast(100%) brightness(1.1)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(10%) contrast(110%) brightness(1.05)';
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  loading="lazy"
                />
                <div className="position-absolute top-0 left-0 w-100 h-100"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}10, transparent 70%)`,
                    mixBlendMode: 'overlay',
                    pointerEvents: 'none'
                  }}
                />
              </motion.div>
              
              {/* Tech badges with improved animations */}
              {techBadges.map((tech, index) => (
                <motion.div
                  key={index}
                  className="position-absolute px-3 py-1 rounded-pill d-flex align-items-center"
                  style={{
                    ...tech.position,
                    background: tech.color,
                    color: tech.textColor || 'white',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    zIndex: 2,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    height: '30px'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    y: [0, (index % 2 === 0 ? -10 : 10), 0],
                    x: [0, (index % 3 === 0 ? -5 : 5), 0],
                    rotate: [0, (index % 4 === 0 ? 5 : -5), 0]
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: `0 8px 25px ${tech.color}80`,
                    zIndex: 3
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollButton && !hideScrollIndicator && (
        <motion.div
          className="position-fixed start-50 translate-middle-x text-center d-flex flex-column align-items-center"
          style={{
            bottom: '2rem',
            color: primaryColor,
            cursor: 'pointer',
            zIndex: 10
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          onClick={() => {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 1.3 : 1,
              color: isHovered ? accentColor : primaryColor
            }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowDown size={24} />
          </motion.div>
          <motion.span
            className="d-block mt-1 fw-medium"
            style={{ fontSize: '0.9rem' }}
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
            }}
          >
            {t.scroll}
          </motion.span>
        </motion.div>
      )}
    </section>
  );
};

export default Home;