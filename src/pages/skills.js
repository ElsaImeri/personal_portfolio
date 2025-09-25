import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ThemeContext from '../contexts/ThemeContext';

// Ikona
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaGit, FaDatabase, FaLaravel, FaVuejs, FaPhp, FaMicrosoft, FaBootstrap, FaRocket, FaLightbulb, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiVuedotjs } from 'react-icons/si';
import { DiSass } from 'react-icons/di';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#4f46e5',
    secondary: '#7c73d6',
    text: '#e6eef8',
    mutedText: '#a8b3cc',
    background: 'linear-gradient(180deg, #0f1724 0%, #071024 40%, #0b1220 100%)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
    cardBorder: '1px solid rgba(255,255,255,0.06)',
    cardShadow: '0 8px 32px rgba(2,6,23,0.4)',
    ctaBackground: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,115,214,0.05))',
    ctaBorder: '1px solid rgba(79,70,229,0.15)',
    skillBackground: 'rgba(255,255,255,0.02)',
    skillBorder: '1px solid rgba(255,255,255,0.03)',
    progressBackground: 'rgba(255,255,255,0.06)',
    iconBackground: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(124,115,214,0.08))',
    ctaTitleGradient: 'linear-gradient(135deg, #f8fafc, #c7d2fe)',
    ctaTitleText: '#f8fafc'
  },
  light: {
    primary: '#4f46e5',
    secondary: '#7c73d6',
    text: '#1e293b',
    mutedText: '#64748b',
    background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 40%, #e2e8f0 100%)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
    cardBorder: '1px solid rgba(79,70,229,0.1)',
    cardShadow: '0 8px 32px rgba(79,70,229,0.1)',
    ctaBackground: 'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(124,115,214,0.04))',
    ctaBorder: '1px solid rgba(79,70,229,0.2)',
    skillBackground: 'rgba(79,70,229,0.03)',
    skillBorder: '1px solid rgba(79,70,229,0.08)',
    progressBackground: 'rgba(79,70,229,0.1)',
    iconBackground: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,115,214,0.05))',
    ctaTitleGradient: 'linear-gradient(135deg, #1e293b, #4f46e5)',
    ctaTitleText: '#1e293b'
  }
};

// SVG e C#
const CSharpIcon = function({ isDarkMode }) {
  const pathColor = isDarkMode ? '#239120' : '#1e7c1a';
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M18.828 13.757h2.943v1.412h-2.943v-1.412zm-11.2 0h2.944v1.412H7.628v-1.412z" fill={pathColor} />
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25.2c-6.188 0-11.2-5.012-11.2-11.2S9.812 4.8 16 4.8 27.2 9.812 27.2 16 22.188 27.2 16 27.2z" fill={pathColor} />
      <path d="M21.714 20.114c-.686.686-1.6 1.029-2.743 1.029h-1.371v-1.371h1.371c.686 0 1.2-.171 1.543-.514.343-.343.514-.857.514-1.543s-.171-1.2-.514-1.543c-.343-.343-.857-.514-1.543-.514h-1.371v-1.371h1.371c1.143 0 2.057.343 2.743 1.029.686.686 1.029 1.6 1.029 2.743s-.343 2.057-1.029 2.743zm-6.171-2.743c0 .686.171 1.2.514 1.543.343.343.857.514 1.543.514h1.371v1.371h-1.371c-1.143 0-2.057-.343-2.743-1.029-.686-.686-1.029-1.6-1.029-2.743s.343-2.057 1.029-2.743c.686-.686 1.6-1.029 2.743-1.029h1.371v1.371h-1.371c-.686 0-1.2.171-1.543.514-.343.343-.514.857-.514 1.543z" fill={pathColor} />
    </svg>
  );
};

const Skills = () => {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  const t = translations[languageCode]?.skills || translations.en.skills;

  // categories + skills
  const categories = useMemo(() => ([
    {
      id: 'frontend',
      titleKey: 'frontend',
      icon: <FaReact size={24} />,
      skills: [
        { name: 'React', icon: <FaReact size={40} />, level: 90, color: "#61DAFB" },
        { name: 'Vue.js', icon: <FaVuejs size={40} />, level: 85, color: "#4FC08D" },
        { name: 'JavaScript', icon: <SiJavascript size={40} />, level: 95, color: "#F7DF1E" },
        { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 80, color: "#3178C6" },
        { name: 'Next.js', icon: <SiNextdotjs size={40} />, level: 75, color: isDarkMode ? "#000000" : "#ffffff" },
        { name: 'HTML5', icon: <FaHtml5 size={40} />, level: 98, color: "#E34F26" },
        { name: 'CSS3', icon: <FaCss3Alt size={40} />, level: 95, color: "#1572B6" },
        { name: 'Sass', icon: <DiSass size={40} />, level: 85, color: "#CC6699" },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, level: 90, color: "#06B6D4" },
        { name: 'Bootstrap', icon: <FaBootstrap size={40} />, level: 90, color: "#7952B3" },
      ],
    },
    {
      id: 'backend',
      titleKey: 'backend',
      icon: <SiNodedotjs size={24} />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs size={40} />, level: 85, color: "#339933" },
        { name: 'Express.js', icon: <SiExpress size={40} />, level: 80, color: isDarkMode ? "#000000" : "#ffffff" },
        { name: 'Laravel', icon: <FaLaravel size={40} />, level: 80, color: "#FF2D20" },
        { name: 'PHP', icon: <FaPhp size={40} />, level: 75, color: "#777BB4" },
        { name: 'C#', icon: <CSharpIcon isDarkMode={isDarkMode} />, level: 70, color: isDarkMode ? "#239120" : "#1e7c1a" },
        { name: 'Java', icon: <FaJava size={40} />, level: 70, color: "#007396" },
        { name: 'MySQL', icon: <SiMysql size={40} />, level: 85, color: "#4479A1" },
        { name: 'SQL Server', icon: <FaMicrosoft size={40} />, level: 80, color: "#CC2927" },
      ],
    },
    {
      id: 'tools',
      titleKey: 'tools',
      icon: <FaGit size={24} />,
      skills: [
        { name: 'Git', icon: <FaGit size={40} />, level: 90, color: "#F05032" },
        { name: 'RESTful APIs', icon: <FaDatabase size={40} />, level: 85, color: "#009688" },
        { name: 'Responsive Design', icon: <FaHtml5 size={40} />, level: 95, color: "#E34F26" },
        { name: 'UI/UX Design', icon: <FaReact size={40} />, level: 80, color: "#61DAFB" },
      ],
    },
  ]), [isDarkMode]);

  // framer-motion variants
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const cardItem = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
  };

  return (
    <section
      id="skills"
      aria-label={t.ariaLabel || 'Skills section'}
      style={{
        minHeight: '100vh',
        padding: 'clamp(3rem, 5vw, 5.5rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        background: colorScheme.background,
        color: colorScheme.text,
        overflow: 'hidden',
        transition: 'background 0.3s ease, color 0.3s ease'
      }}
    >
      {/* background decorative animated blobs */}
      <motion.div
        aria-hidden
        initial={{ scale: 1 }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: 'min(520px, 80vw)',
          height: 'min(520px, 80vw)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${colorScheme.primary}${isDarkMode ? '14' : '08'}, transparent)`,
          top: -160,
          left: -120,
          zIndex: 0,
          filter: 'blur(40px)',
          pointerEvents: 'none',
          opacity: isDarkMode ? 1 : 0.7
        }}
      />
      <motion.div
        aria-hidden
        initial={{ scale: 1 }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: 'min(360px, 60vw)',
          height: 'min(360px, 60vw)',
          borderRadius: '50%',
          background: `radial-gradient(circle at 70% 70%, ${colorScheme.secondary}${isDarkMode ? '12' : '06'}, transparent)`,
          bottom: -120,
          right: -80,
          zIndex: 0,
          filter: 'blur(36px)',
          pointerEvents: 'none',
          opacity: isDarkMode ? 1 : 0.7
        }}
      />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: 1200,
        margin: '0 auto'
      }}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}
        >
          <h2 style={{ 
            color: colorScheme.primary, 
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
            marginBottom: 12, 
            fontWeight: 700, 
            letterSpacing: '-0.6px',
            transition: 'color 0.3s ease'
          }}>
            {t.techStack}
          </h2>
          <p style={{ 
            color: colorScheme.mutedText, 
            maxWidth: 820, 
            margin: '0 auto', 
            lineHeight: 1.6,
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            padding: '0 1rem',
            transition: 'color 0.3s ease'
          }}>
            {t.description || 'Technologies and tools I use to create amazing digital experiences'}
          </p>

          {/* animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9 }}
            style={{
              margin: '22px auto 0',
              height: 5,
              width: 'min(260px, 70%)',
              borderRadius: 999,
              background: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.secondary}, ${isDarkMode ? '#ff6ec7' : '#f472b6'})`,
              transformOrigin: 'left center',
              transition: 'background 0.3s ease'
            }}
          />
        </motion.div>

        {/* cards grid */}
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            padding: '0 0.5rem'
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardItem}
              whileHover={{ 
                translateY: -8, 
                boxShadow: isDarkMode 
                  ? '0 20px 40px rgba(0,0,0,0.3)' 
                  : '0 20px 40px rgba(79,70,229,0.15)',
                border: isDarkMode 
                  ? '1px solid rgba(255,255,255,0.1)' 
                  : '1px solid rgba(79,70,229,0.2)'
              }}
              style={{
                borderRadius: 16,
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                background: colorScheme.cardBackground,
                border: colorScheme.cardBorder,
                boxShadow: colorScheme.cardShadow,
                backdropFilter: 'blur(10px)',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                transition: 'all 0.3s ease'
              }}
            >
              {/* header row */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 14, 
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.08)' : 'rgba(79,70,229,0.1)'}`, 
                paddingBottom: 16,
                transition: 'border-color 0.3s ease'
              }}>
                <div style={{
                  width: 54,
                  height: 54,
                  borderRadius: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: colorScheme.iconBackground,
                  color: colorScheme.primary,
                  boxShadow: `0 4px 20px ${colorScheme.primary}${isDarkMode ? '20' : '15'}`,
                  transition: 'all 0.3s ease'
                }}>{category.icon}</div>

                <div>
                  <div style={{ 
                    fontSize: 18, 
                    fontWeight: 700, 
                    color: isDarkMode ? '#f0f4ff' : '#1e293b',
                    transition: 'color 0.3s ease'
                  }}>{t[category.titleKey]}</div>
                  <div style={{ 
                    fontSize: 14, 
                    color: colorScheme.mutedText, 
                    marginTop: 2,
                    transition: 'color 0.3s ease'
                  }}>{category.skills.length} {t.itemsLabel || 'skills'}</div>
                </div>
              </div>

              {/* skills grid inside card */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: 16,
                marginTop: 8,
                alignItems: 'start'
              }}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 10,
                      background: colorScheme.skillBackground,
                      borderRadius: 12,
                      padding: 12,
                      border: colorScheme.skillBorder,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {/* icon bubble */}
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isDarkMode 
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.05), transparent)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                      boxShadow: `0 4px 20px ${skill.color}15, inset 0 1px 0 ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'}`,
                      color: skill.color,
                      transition: 'all 0.3s ease'
                    }}>
                      {skill.icon}
                    </div>

                    {/* name */}
                    <div style={{ 
                      fontSize: 13, 
                      fontWeight: 600, 
                      color: isDarkMode ? '#e6f0ff' : '#1e293b',
                      textAlign: 'center',
                      transition: 'color 0.3s ease'
                    }}>{skill.name}</div>

                    {/* progress bar */}
                    <div style={{ width: '100%', marginTop: 8 }}>
                      <div style={{
                        height: 6,
                        background: colorScheme.progressBackground,
                        borderRadius: 999,
                        overflow: 'hidden',
                        transition: 'background 0.3s ease'
                      }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}dd, ${colorScheme.primary})`,
                            borderRadius: 999,
                            boxShadow: `0 0 12px ${skill.color}40`
                          }}
                        />
                      </div>
                      <div style={{ 
                        marginTop: 6, 
                        fontSize: 11, 
                        color: colorScheme.mutedText, 
                        fontWeight: 600, 
                        textAlign: 'center',
                        transition: 'color 0.3s ease'
                      }}>
                        {skill.level}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Professional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: 'clamp(3rem, 6vw, 4rem)',
            position: 'relative',
            isolation: 'isolate'
          }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isDarkMode 
              ? `linear-gradient(135deg, ${colorScheme.primary}08, ${colorScheme.secondary}04)`
              : `linear-gradient(135deg, ${colorScheme.primary}05, ${colorScheme.secondary}03)`,
            borderRadius: 24,
            zIndex: -1,
            overflow: 'hidden'
          }}>
            {/* Animated Grid Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(79,70,229,0.03)'} 1px, transparent 1px),
                                linear-gradient(90deg, ${isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(79,70,229,0.03)'} 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.6
            }} />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colorScheme.primary}20, transparent)`,
                filter: 'blur(15px)'
              }}
            />
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                position: 'absolute',
                bottom: '30%',
                left: '8%',
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colorScheme.secondary}15, transparent)`,
                filter: 'blur(12px)'
              }}
            />
          </div>

          {/* Main CTA Card */}
          <motion.div
            whileHover={{ 
              y: -5,
              boxShadow: isDarkMode 
                ? '0 25px 50px rgba(0,0,0,0.35)'
                : '0 25px 50px rgba(79,70,229,0.2)'
            }}
            style={{
              background: isDarkMode
                ? 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))'
                : 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
              border: isDarkMode 
                ? '1px solid rgba(255,255,255,0.1)'
                : '1px solid rgba(79,70,229,0.15)',
              borderRadius: 24,
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: isDarkMode 
                ? '0 15px 40px rgba(0,0,0,0.25)'
                : '0 15px 40px rgba(79,70,229,0.15)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease'
            }}
          >
            {/* Decorative Corner Accents */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 120,
              height: 120,
              background: `linear-gradient(135deg, ${colorScheme.primary}15, transparent)`,
              borderBottomLeftRadius: '100%',
              filter: 'blur(8px)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 100,
              height: 100,
              background: `linear-gradient(315deg, ${colorScheme.secondary}10, transparent)`,
              borderTopRightRadius: '100%',
              filter: 'blur(6px)'
            }} />

            {/* Icon with Pulse Animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colorScheme.primary}20, ${colorScheme.secondary}15)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: isDarkMode 
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1px solid rgba(79,70,229,0.1)',
                position: 'relative'
              }}
            >
              {/* Pulse Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeOut" 
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '50%',
                  border: `2px solid ${colorScheme.primary}40`,
                }}
              />
              <FaRocket size={40} color={colorScheme.primary} />
            </motion.div>

            {/* Content - FIXED TEXT CONTRAST */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', 
                margin: '0 0 1rem 0', 
                fontWeight: 800,
                color: colorScheme.ctaTitleText,
                lineHeight: 1.2,
                transition: 'color 0.3s ease'
              }}
            >
              {t.ctaTitle || "Ready to Bring Your Vision to Life?"}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ 
                color: colorScheme.mutedText, 
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                lineHeight: 1.6,
                maxWidth: 600,
                margin: '0 auto 2rem',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}
            >
              {t.ctaDescription || "Let's collaborate to create innovative digital solutions that drive results. Your vision combined with my technical expertise will build something extraordinary."}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 15px 35px ${colorScheme.primary}40` 
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem 2.5rem',
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 10px 30px ${colorScheme.primary}30`,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaCode size={18} />
                {t.ctaButton || "Start Your Project"}
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.05,
                  background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(79,70,229,0.1)'
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: 14,
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(79,70,229,0.05)',
                  color: colorScheme.primary,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  border: isDarkMode 
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(79,70,229,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaLightbulb size={18} />
                {t.viewWorkButton || "View My Work"}
              </motion.a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                marginTop: '2rem',
                padding: '1rem',
                background: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(79,70,229,0.02)',
                borderRadius: 12,
                border: isDarkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(79,70,229,0.1)'
              }}
            >
              <p style={{ 
                color: colorScheme.mutedText, 
                fontSize: '0.9rem', 
                margin: 0,
                fontWeight: 500
              }}>
                {t.quickStart || "🚀 Quick Start: Most projects begin with a discovery call within 24 hours"}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;