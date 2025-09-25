import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt, FaRocket, FaGraduationCap, FaHandshake, FaCode } from 'react-icons/fa';
import { BsCodeSlash, BsFillStarFill, BsArrowRight } from 'react-icons/bs';
import { MdSchool, MdWorkspacePremium, MdTrendingUp } from 'react-icons/md';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ThemeContext from '../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#8b5cf6',
    accent: '#06d6a0',
    secondary: '#a5b4fc',
    text: '#ffffff',
    mutedText: '#94a3b8',
    background: 'linear-gradient(135deg, #0a0f1a 0%, #131827 50%, #0a0f1a 100%)',
    cardBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
    cardBorder: '1px solid rgba(255, 255, 255, 0.08)',
    cardShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    ctaBackground: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 214, 160, 0.05))',
    ctaBorder: '1px solid rgba(139, 92, 246, 0.2)',
    patternColor: 'rgba(139, 92, 246, 0.03)',
    badgeBackground: 'rgba(139, 92, 246, 0.15)',
    badgeBorder: '1px solid rgba(139, 92, 246, 0.3)',
    titleText: '#ffffff',
    subtitleText: '#a5b4fc',
    ctaTitleText: '#ffffff'
  },
  light: {
    primary: '#8b5cf6',
    accent: '#06d6a0',
    secondary: '#6366f1',
    text: '#1e293b',
    mutedText: '#64748b',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
    cardBackground: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
    cardBorder: '1px solid rgba(255, 255, 255, 0.8)',
    cardShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    ctaBackground: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 214, 160, 0.04))',
    ctaBorder: '1px solid rgba(139, 92, 246, 0.2)',
    patternColor: 'rgba(139, 92, 246, 0.02)',
    badgeBackground: 'rgba(139, 92, 246, 0.1)',
    badgeBorder: '1px solid rgba(139, 92, 246, 0.2)',
    titleText: '#1e293b',
    subtitleText: '#6366f1',
    ctaTitleText: '#1e293b'
  }
};

const WorkExperience = () => {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = isDarkMode ? colorSchemes.dark : colorSchemes.light;
  const gradient = `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.accent})`;

  // Get translations with fallback
  const t = (key) => {
    const langTranslations = translations[languageCode]?.experience || {};
    const defaultTranslations = translations.en?.experience || {};
    return langTranslations[key] || defaultTranslations[key] || key;
  };

  const experiences = [
    {
      title: t('journeyStartTitle') || 'Beginning of Programming Journey',
      date: t('journeyStartDate') || 'October 2022',
      points: [
        t('journeyStartPoint1') || 'Started learning programming in October 2022 during my studies at AAB College, majoring in Software Engineering'
      ],
      icon: <BsCodeSlash />,
      gradient: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
      badge: t('startBadge') || 'Start',
      animationDelay: 0.1
    },
    {
      title: t('educationTitle') || 'CSE Student',
      company: t('educationCompany') || 'AAB College',
      date: t('educationDate') || '2022 - 2025',
      points: [
        t('educationPoint1') || 'Graduated (GPA: 9.7/10)',
        t('educationPoint2') || 'Specialized in web development and software engineering',
        t('educationPoint3') || 'Completed coursework in algorithms, databases, and web technologies',
      ],
      icon: <FaGraduationCap />,
      gradient: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
      badge: t('educationBadge') || 'Education',
      animationDelay: 0.3
    },
    {
      title: t('internshipTitle') || 'Intern Developer',
      company: t('internshipCompany') || 'Danube Solutions',
      date: t('internshipDate') || 'Jan 2024 - Jul 2024',
      points: [
        t('internshipPoint1') || 'Completed intensive internship program',
        t('internshipPoint2') || 'Worked on real-world projects under senior developer supervision',
        t('internshipPoint3') || 'Gained experience with professional development workflows',
        t('internshipPoint4') || 'Learned industry best practices for software development',
        <React.Fragment key="certificate">
          {t('internshipPoint5') || 'View my '}
          <a 
            href="https://drive.google.com/file/d/1IjgC8URloltD7dCGHlf6mBLWUJSAH5hq/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: colorScheme.accent, 
              fontWeight: '600', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {t('internshipCertificate') || 'internship certificate'}
            <FaExternalLinkAlt size={12} />
          </a>
        </React.Fragment>
      ],
      icon: <MdWorkspacePremium />,
      gradient: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
      badge: t('professionalBadge') || 'Professional',
      animationDelay: 0.5
    },
  ];

  // Stats data with translations
  const stats = [
    { 
      icon: FaCode, 
      value: '2+', 
      label: t('yearsExperience') || 'Years Experience' 
    },
    { 
      icon: MdTrendingUp, 
      value: '7+', 
      label: t('projectsCompleted') || 'Projects Completed' 
    },
    { 
      icon: FaGraduationCap, 
      value: '9.7/10', 
      label: t('academicExcellence') || 'Academic Excellence' 
    }
  ];

  // Floating background elements
  const FloatingOrbs = () => (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colorScheme.primary}${isDarkMode ? '0.15' : '0.08'} 0%, transparent 70%)`,
          filter: 'blur(15px)',
          opacity: isDarkMode ? 1 : 0.7
        }}
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colorScheme.accent}${isDarkMode ? '0.1' : '0.05'} 0%, transparent 70%)`,
          filter: 'blur(20px)',
          opacity: isDarkMode ? 1 : 0.7
        }}
      />
    </>
  );

  return (
    <section 
      id="experience" 
      style={{
        minHeight: '100vh',
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        background: colorScheme.background,
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: 'all 0.3s ease'
      }}
      aria-label={t('sectionLabel') || "Work Experience Section"}
    >
      <FloatingOrbs />
      
      {/* Animated background grid */}
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
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
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
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: colorScheme.badgeBackground,
            padding: '8px 20px',
            borderRadius: '50px',
            border: colorScheme.badgeBorder,
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <BsFillStarFill color={colorScheme.primary} size={16} />
            <span style={{ 
              color: colorScheme.primary, 
              fontWeight: '600',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              letterSpacing: '1px',
              transition: 'color 0.3s ease'
            }}>
              {t('sectionSubtitle') || 'MY JOURNEY'}
            </span>
          </div>
          
          <h2 style={{ 
            color: colorScheme.titleText,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            lineHeight: '1.2',
            transition: 'color 0.3s ease'
          }}>
            {t('sectionTitle') || "Career Timeline"}
          </h2>
          
          <p style={{ 
            color: colorScheme.mutedText,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            transition: 'color 0.3s ease'
          }}>
            {t('sectionDescription') || "From learning to code to professional development experience"}
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div style={{ position: 'relative' }}>
          {/* Main timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '0',
            bottom: '0',
            width: '3px',
            background: gradient,
            borderRadius: '10px',
            display: 'none'
          }} className="d-none d-lg-block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: exp.animationDelay }}
              viewport={{ once: true, margin: '-50px' }}
              style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: 'clamp(2rem, 4vw, 4rem)',
                position: 'relative'
              }}
            >
              {/* Timeline dot for desktop */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: gradient,
                border: `4px solid ${isDarkMode ? '#0a0f1a' : '#f8fafc'}`,
                boxShadow: `0 0 0 4px ${colorScheme.primary}20, 0 8px 32px ${colorScheme.primary}40`,
                zIndex: 3,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.3s ease'
              }} className="d-none d-lg-flex">
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ffffff'
                }} />
              </div>

              {/* Content Card */}
              <div style={{
                width: '100%',
                maxWidth: '500px',
                background: colorScheme.cardBackground,
                backdropFilter: 'blur(20px)',
                border: colorScheme.cardBorder,
                borderRadius: '24px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: colorScheme.cardShadow,
                transition: 'all 0.3s ease'
              }}>
                {/* Gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: exp.gradient
                }} />

                {/* Icon badge */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '30px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: exp.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '24px',
                  boxShadow: `0 12px 32px ${colorScheme.primary}40`
                }}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      background: colorScheme.badgeBackground,
                      color: colorScheme.primary,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      border: colorScheme.badgeBorder,
                      transition: 'all 0.3s ease'
                    }}>
                      {exp.badge}
                    </span>
                    <span style={{
                      color: colorScheme.accent,
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'color 0.3s ease'
                    }}>
                      {exp.date}
                    </span>
                  </div>

                  <h3 style={{
                    color: colorScheme.text,
                    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                    fontWeight: '700',
                    marginBottom: '8px',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease'
                  }}>
                    {exp.title}
                  </h3>

                  {exp.company && (
                    <p style={{
                      color: colorScheme.mutedText,
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '1.5rem',
                      transition: 'color 0.3s ease'
                    }}>
                      {exp.company}
                    </p>
                  )}
                </div>

                {/* Points list */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: '12px',
                        color: isDarkMode ? '#e2e8f0' : '#475569',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      <div style={{
                        minWidth: '20px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: exp.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                        fontSize: '10px',
                        color: '#ffffff'
                      }}>
                        ✓
                      </div>
                      <span style={{ 
                        lineHeight: '1.6',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        transition: 'color 0.3s ease'
                      }}>
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect overlay */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: exp.gradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '24px',
                    zIndex: -1
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Professional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginTop: 'clamp(4rem, 8vw, 6rem)'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${colorScheme.primary}05, ${colorScheme.accent}03)`,
            borderRadius: '32px',
            border: colorScheme.ctaBorder,
            backdropFilter: 'blur(40px)'
          }} />
          
          {/* Animated floating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: `conic-gradient(from 0deg, ${colorScheme.primary}20, ${colorScheme.accent}20, ${colorScheme.primary}20)`,
              borderRadius: '50%',
              opacity: 0.6
            }}
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '150px',
              height: '150px',
              background: `conic-gradient(from 180deg, ${colorScheme.accent}15, ${colorScheme.primary}15, ${colorScheme.accent}15)`,
              borderRadius: '50%',
              opacity: 0.4
            }}
          />

          <div style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(3rem, 6vw, 4rem)',
            textAlign: 'center'
          }}>
            {/* Icon Grid Background */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              opacity: 0.03,
              backgroundImage: `radial-gradient(${colorScheme.primary} 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />

            {/* Main Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: gradient,
                marginBottom: '2rem',
                boxShadow: `0 15px 40px ${colorScheme.primary}40`,
                position: 'relative'
              }}
            >
              <FaHandshake size={32} color="#ffffff" />
              
              {/* Pulsing effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  border: `2px solid ${colorScheme.primary}`,
                  opacity: 0
                }}
              />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              style={{
                color: colorScheme.ctaTitleText,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
                transition: 'color 0.3s ease'
              }}
            >
              {t('ctaTitle') || "Ready to Build the Future Together"}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              style={{
                color: colorScheme.mutedText,
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.7',
                fontWeight: '500',
                transition: 'color 0.3s ease'
              }}
            >
              {t('ctaDescription') || "With a solid foundation in modern technologies and a passion for innovative solutions, I'm prepared to contribute to your next groundbreaking project. Let's create something extraordinary."}
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '3rem',
                flexWrap: 'wrap'
              }}
            >
              {stats.map((stat, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: colorScheme.cardBackground,
                  borderRadius: '20px',
                  border: colorScheme.cardBorder,
                  minWidth: '140px',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <stat.icon size={24} color={colorScheme.primary} style={{ marginBottom: '0.5rem' }} />
                  <div style={{
                    color: colorScheme.text,
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                    transition: 'color 0.3s ease'
                  }}>{stat.value}</div>
                  <div style={{
                    color: colorScheme.mutedText,
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 20px 40px ${colorScheme.primary}40`,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: gradient,
                  color: '#ffffff',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 12px 30px ${colorScheme.primary}30`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Button shine effect */}
                <motion.div
                  whileHover={{ x: 200 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: 'skewX(-20deg)'
                  }}
                />
                
                {t('ctaButton') || "Start Collaboration"}
                <BsArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
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
                {t('viewMyWork') || "View My Work"}
                <FaCode size={16} />
              </motion.a>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              style={{
                marginTop: '2rem',
                color: colorScheme.mutedText,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                opacity: 0.8,
                transition: 'color 0.3s ease'
              }}
            >
              <BsFillStarFill size={12} color={colorScheme.accent} />
              {t('trustedByProfessionals') || "Trusted by industry professionals"}
              <BsFillStarFill size={12} color={colorScheme.accent} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;