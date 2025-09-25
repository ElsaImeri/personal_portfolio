import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaRocket, FaStar, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ThemeContext from '../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#7c3aed',
    secondary: '#2563eb',
    accent: '#059669',
    text: '#f1f5f9',
    mutedText: '#cbd5e1',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    cardBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
    cardBorder: '1px solid rgba(255, 255, 255, 0.1)',
    cardShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)',
    ctaBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
    ctaBorder: '1px solid rgba(124, 58, 237, 0.2)',
    patternColor: 'rgba(124, 58, 237, 0.05)',
    titleText: '#f1f5f9',
    titleHighlight: '#7c3aed',
    ctaTitleText: '#f1f5f9'
  },
  light: {
    primary: '#7c3aed',
    secondary: '#2563eb',
    accent: '#059669',
    text: '#1e293b',
    mutedText: '#475569',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
    cardBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    cardBorder: '1px solid rgba(255, 255, 255, 0.8)',
    cardShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
    ctaBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    ctaBorder: '1px solid rgba(124, 58, 237, 0.15)',
    patternColor: 'rgba(124, 58, 237, 0.05)',
    titleText: '#1e293b',
    titleHighlight: '#7c3aed',
    ctaTitleText: '#1e293b'
  }
};

const CareerGoals = () => {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = isDarkMode ? colorSchemes.dark : colorSchemes.light;
  
  // Get translations with fallback
  const t = (key) => {
    const langTranslations = translations[languageCode]?.careerGoals || {};
    const defaultTranslations = translations.en?.careerGoals || {};
    return langTranslations[key] || defaultTranslations[key] || key;
  };

  // Përdorim useMemo për të optimizuar llogaritjet
  const currentGoals = useMemo(() => [
    {
      title: t('shortTerm.title'),
      icon: <FaCode />,
      description: t('shortTerm.description'),
      gradient: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
      delay: 0.1
    },
    {
      title: t('midTerm.title'),
      icon: <FaProjectDiagram />,
      description: t('midTerm.description'),
      gradient: `linear-gradient(135deg, ${colorScheme.secondary}, ${colorScheme.accent})`,
      delay: 0.2
    },
    {
      title: t('longTerm.title'),
      icon: <FaRocket />,
      description: t('longTerm.description'),
      gradient: `linear-gradient(135deg, ${colorScheme.accent}, ${colorScheme.primary})`,
      delay: 0.3
    },
  ], [t, colorScheme]);

  // Stats data with translations
  const statsBadges = [
    { 
      icon: "🚀", 
      label: t('innovationDriven') || "Innovation Driven", 
      value: "100%" 
    },
    { 
      icon: "💡", 
      label: t('problemSolving') || "Problem Solving", 
      value: "95%" 
    },
    { 
      icon: "⚡", 
      label: t('fastDelivery') || "Fast Delivery", 
      value: "90%" 
    }
  ];

  // FloatingElements komponent i thjeshtësuar
  const FloatingElements = () => (
    <>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colorScheme.primary}${isDarkMode ? '15' : '08'} 0%, transparent 70%)`,
        filter: 'blur(20px)',
        opacity: isDarkMode ? 0.4 : 0.3
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${colorScheme.accent}${isDarkMode ? '10' : '06'} 0%, transparent 70%)`,
        filter: 'blur(25px)',
        opacity: isDarkMode ? 0.3 : 0.2
      }} />
    </>
  );

  return (
    <section 
      id="goals"
      style={{
        minHeight: '100vh',
        padding: 'clamp(4rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        background: colorScheme.background,
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: 'all 0.3s ease'
      }}
    >
      <FloatingElements />
      
      {/* Animated background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(${colorScheme.patternColor} 1px, transparent 1px),
          linear-gradient(90deg, ${colorScheme.patternColor} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: '-50px' }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: `${colorScheme.primary}08`,
              padding: '10px 24px',
              borderRadius: '50px',
              border: `1px solid ${colorScheme.primary}15`,
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <FaStar color={colorScheme.primary} size={16} />
            <span style={{ 
              color: colorScheme.primary, 
              fontWeight: '600',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              letterSpacing: '1px',
              transition: 'color 0.3s ease'
            }}>
              {t('badgeText') || 'CAREER VISION'}
            </span>
          </motion.div>

          <h2 style={{ 
            color: colorScheme.titleText,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            transition: 'color 0.3s ease'
          }}>
            {t('title') || "My Career"}{' '}
            <span style={{ 
              color: colorScheme.titleHighlight,
              display: 'inline-block',
              transition: 'color 0.3s ease'
            }}>
              {t('titleHighlight') || "Goals"}
            </span>
          </h2>

          <div style={{ 
            color: colorScheme.mutedText,
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            minHeight: '3.5rem',
            marginBottom: '2rem',
            fontWeight: '300',
            transition: 'color 0.3s ease'
          }}>
            <TypeAnimation
              key={languageCode}
              sequence={t('subtitles')?.flatMap(text => [text, 2000]) || []}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            style={{
              height: '4px',
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.accent})`,
              borderRadius: '10px',
              margin: '0 auto',
              transition: 'background 0.3s ease'
            }}
          />
        </motion.div>

        {/* Goals Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          alignItems: 'start'
        }}>
          {currentGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: goal.delay, ease: "easeOut" }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                background: colorScheme.cardBackground,
                backdropFilter: 'blur(20px)',
                border: colorScheme.cardBorder,
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: colorScheme.cardShadow,
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Gradient accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: goal.gradient
              }} />

              {/* Icon container */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: goal.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: '#ffffff',
                fontSize: '32px',
                boxShadow: `0 8px 24px ${colorScheme.primary}30`
              }}>
                {goal.icon}
              </div>

              {/* Content */}
              <h3 style={{
                color: colorScheme.text,
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '700',
                marginBottom: '1rem',
                lineHeight: '1.3',
                transition: 'color 0.3s ease'
              }}>
                {goal.title}
              </h3>

              <p style={{
                color: colorScheme.mutedText,
                lineHeight: '1.7',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                marginBottom: 'auto',
                transition: 'color 0.3s ease'
              }}>
                {goal.description}
              </p>

              {/* Progress indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '1.5rem',
                color: colorScheme.accent,
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}>
                <span>{t('inProgress') || "In Progress"}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight size={12} />
                </motion.div>
              </div>

              {/* Hover overlay */}
              <motion.div
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: goal.gradient,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '24px',
                  zIndex: -1
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            marginTop: 'clamp(4rem, 8vw, 6rem)',
            isolation: 'isolate'
          }}
        >
          {/* Fixed Angled Border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, 
              ${colorScheme.primary} 0%, 
              ${colorScheme.accent} 25%, 
              ${colorScheme.secondary} 50%, 
              ${colorScheme.primary} 75%, 
              ${colorScheme.accent} 100%)`,
            borderRadius: '32px',
            padding: '3px',
            zIndex: -1,
            transform: 'skewX(-5deg)',
            opacity: 0.8
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: colorScheme.ctaBackground,
              borderRadius: '30px',
              backdropFilter: 'blur(40px)',
              border: `1px solid ${colorScheme.primary}20`
            }} />
          </div>

          {/* Geometric Pattern Background */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            background: `
              linear-gradient(45deg, ${colorScheme.primary}03 25%, transparent 25%),
              linear-gradient(-45deg, ${colorScheme.accent}02 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, ${colorScheme.secondary}02 75%),
              linear-gradient(-45deg, transparent 75%, ${colorScheme.primary}01 75%)
            `,
            backgroundSize: '60px 60px',
            borderRadius: '28px',
            opacity: 0.6,
            transform: 'skewX(-3deg)'
          }} />

          <div style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(3rem, 6vw, 4rem)',
            textAlign: 'center',
            transform: 'skewX(5deg)'
          }}>
            
            {/* Main Content Container */}
            <motion.div
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                background: colorScheme.cardBackground,
                backdropFilter: 'blur(30px)',
                border: colorScheme.cardBorder,
                borderRadius: '24px',
                padding: 'clamp(2.5rem, 5vw, 3.5rem)',
                boxShadow: `
                  0 25px 50px ${isDarkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'},
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                position: 'relative',
                overflow: 'hidden'
              }}>
                
                {/* Animated Gradient Overlay */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(45deg, 
                      ${colorScheme.primary}05, 
                      ${colorScheme.accent}03, 
                      ${colorScheme.secondary}05, 
                      ${colorScheme.primary}03)`,
                    backgroundSize: '200% 200%',
                    opacity: 0.5,
                    zIndex: -1
                  }}
                />

                {/* Floating Elements */}
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    style={{
                      position: 'absolute',
                      width: '8px',
                      height: '8px',
                      background: colorScheme.primary,
                      borderRadius: '50%',
                      top: `${15 + i * 25}%`,
                      left: `${5 + i * 30}%`,
                      filter: 'blur(1px)',
                      opacity: 0.6
                    }}
                  />
                ))}

                {/* Main Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colorScheme.primary}20, ${colorScheme.accent}20)`,
                    marginBottom: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    border: `2px solid ${colorScheme.primary}30`
                  }}
                >
                  {/* Shine Effect */}
                  <motion.div
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '50%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      transform: 'skewX(-20deg)'
                    }}
                  />
                  
                  <FaRocket 
                    size={40} 
                    color={colorScheme.primary}
                    style={{ position: 'relative', zIndex: 2 }}
                  />
                </motion.div>

                {/* Main Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    color: colorScheme.ctaTitleText,
                    lineHeight: '1.2',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {t('ctaTitle') || "Ready to Architect the Future"}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  style={{
                    color: colorScheme.mutedText,
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    maxWidth: '600px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.7',
                    fontWeight: '400',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {t('ctaDescription') || "With a vision for innovation and expertise in cutting-edge technologies, I'm prepared to lead transformative projects that shape tomorrow's digital landscape."}
                </motion.p>

                {/* Button Group */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Primary Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                      color: '#ffffff',
                      padding: '16px 40px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 12px 30px ${colorScheme.primary}40`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Button Shine Effect */}
                    <motion.div
                      whileHover={{ x: 200 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        transform: 'skewX(-20deg)'
                      }}
                    />
                    
                    {t('ctaButton') || "Initiate Partnership"}
                    <FaArrowRight size={16} />
                  </motion.a>

                  {/* Secondary Button */}
                  <motion.a
                    href="#projects"
                    whileHover={{ 
                      background: `${colorScheme.primary}10`,
                      borderColor: colorScheme.primary
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: colorScheme.primary,
                      padding: '15px 30px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      border: `2px solid ${colorScheme.primary}30`,
                      background: 'transparent',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {t('explorePortfolio') || "Explore Portfolio"}
                    <FaProjectDiagram size={16} />
                  </motion.a>
                </motion.div>

                {/* Stats Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginTop: '3rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {statsBadges.map((badge, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 20px',
                        background: colorScheme.cardBackground,
                        borderRadius: '15px',
                        border: colorScheme.cardBorder,
                        backdropFilter: 'blur(10px)',
                        minWidth: '140px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{badge.icon}</span>
                      <div style={{ textAlign: 'left' }}>
                        <div style={{
                          color: colorScheme.text,
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          transition: 'color 0.3s ease'
                        }}>
                          {badge.value}
                        </div>
                        <div style={{
                          color: colorScheme.mutedText,
                          fontSize: '0.8rem',
                          transition: 'color 0.3s ease'
                        }}>
                          {badge.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerGoals;