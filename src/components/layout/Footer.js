import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import ThemeContext from '../../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#ff6ec7',
    text: '#ffffff',
    mutedText: '#a0aec0',
    background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0f0f1a 100%)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
    cardBorder: '1px solid rgba(255,255,255,0.1)',
    inputBackground: 'rgba(0,0,0,0.3)',
    inputBorder: '1px solid rgba(255,255,255,0.1)',
    divider: 'linear-gradient(to right, transparent, rgba(108, 99, 255, 0.3), transparent)'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#ff6ec7',
    text: '#1e293b',
    mutedText: '#64748b',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
    cardBorder: '1px solid rgba(108, 99, 255, 0.2)',
    inputBackground: 'rgba(255,255,255,0.8)',
    inputBorder: '1px solid rgba(108, 99, 255, 0.3)',
    divider: 'linear-gradient(to right, transparent, rgba(108, 99, 255, 0.2), transparent)'
  }
};

function ModernFooter() {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  const t = useMemo(() => {
    return {
      ...(translations.en?.footer || {}),
      ...(translations[languageCode]?.footer || {})
    };
  }, [languageCode]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/ElsaImeri',
      color: '#6e5494'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/elsa-imeri-953b7b323',
      color: '#0077b5'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      url: 'mailto:elsaimeri478@gmail.com',
      color: '#ea4335'
    },
    {
      icon: <SiUpwork />,
      label: 'Upwork',
      url: '#',
      color: '#14a800'
    },
    {
      icon: <SiFiverr />,
      label: 'Fiverr',
      url: '#',
      color: '#1dbf73'
    }
  ];

  const quickLinks = [
    { name: t.home || 'Home', href: '#home' },
    { name: t.skills || 'Skills', href: '#skills' },
    { name: t.projects || 'Projects', href: '#projects' },
    { name: t.experience || 'Experience', href: '#experience' },
    { name: t.contact || 'Contact', href: '#contact' }
  ];

  return (
    <footer 
      className="position-relative"
      style={{
        background: colorScheme.background,
        borderTop: `1px solid ${isDarkMode ? 'rgba(108, 99, 255, 0.1)' : 'rgba(108, 99, 255, 0.2)'}`,
        overflow: 'hidden',
        color: colorScheme.text,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Animated background elements */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${colorScheme.primary}${isDarkMode ? '15' : '08'} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${colorScheme.secondary}${isDarkMode ? '15' : '08'} 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,${isDarkMode ? '0.02' : '0.05'}) 0%, transparent 50%)
          `,
          zIndex: 0
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Main Footer Content */}
        <div className="row py-5 g-5">
          {/* Brand Section */}
          <motion.div 
            className="col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="d-flex align-items-center mb-4">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                  fontSize: '1.5rem',
                  color: 'white'
                }}
              >
                EI
              </div>
              <h3 className="fw-bold mb-0" style={{ 
                fontFamily: "'Inter', sans-serif",
                color: colorScheme.text
              }}>
                Elsa <span style={{ color: colorScheme.primary }}>Imeri</span>
              </h3>
            </div>
            
            <p className="mb-4" style={{ 
              lineHeight: '1.7',
              color: colorScheme.mutedText
            }}>
              {t.description || "Full-stack developer passionate about creating innovative web solutions and exceptional user experiences."}
            </p>
            
            {/* Contact Info */}
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center" style={{ color: colorScheme.mutedText }}>
                <FaEnvelope className="me-3" style={{ color: colorScheme.primary }} />
                <span>elsaimeri478@gmail.com</span>
              </div>
              <div className="d-flex align-items-center" style={{ color: colorScheme.mutedText }}>
                <FaMapMarkerAlt className="me-3" style={{ color: colorScheme.primary }} />
                <span>{t.location || 'Pristina, Kosovo'}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="col-lg-2 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold mb-4" style={{ 
              color: colorScheme.primary, 
              fontFamily: "'Inter', sans-serif" 
            }}>
              {t.explore || 'Explore'}
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <a 
                    href={link.href}
                    className="text-decoration-none"
                    style={{ 
                      transition: 'all 0.3s ease',
                      fontFamily: "'Inter', sans-serif",
                      color: colorScheme.mutedText
                    }}
                    onMouseEnter={(e) => e.target.style.color = colorScheme.primary}
                    onMouseLeave={(e) => e.target.style.color = colorScheme.mutedText}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hire Me Section */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold mb-4" style={{ 
              color: colorScheme.primary, 
              fontFamily: "'Inter', sans-serif" 
            }}>
              {t.hireMe || 'Hire Me'}
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <span style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: colorScheme.mutedText
                }}>
                  {t.freelanceProjects || 'Freelance Projects'}
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <span style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: colorScheme.mutedText
                }}>
                  {t.fullTimeOpportunities || 'Full-time Opportunities'}
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <span style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: colorScheme.mutedText
                }}>
                  {t.contractWork || 'Contract Work'}
                </span>
              </motion.li>
            </ul>
            
            <motion.a
              href="#contact"
              className="btn d-inline-flex align-items-center gap-2 mt-4 border-0 fw-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                borderRadius: '10px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                color: '#fff'
              }}
            >
              <FaPaperPlane />
              {t.contact || 'Contact Me'}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="col-lg-3 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="fw-bold mb-4" style={{ 
              color: colorScheme.primary, 
              fontFamily: "'Inter', sans-serif" 
            }}>
              {t.connect || 'Connect'}
            </h5>
            <div className="d-flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center text-decoration-none"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: colorScheme.cardBackground,
                    border: colorScheme.cardBorder,
                    color: colorScheme.text,
                    fontSize: '1.2rem',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    background: `linear-gradient(145deg, ${social.color}30, ${social.color}10)`,
                    borderColor: social.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            height: '1px',
            background: colorScheme.divider,
            margin: '2rem 0',
            transition: 'background 0.3s ease'
          }}
        />

        {/* Bottom Bar */}
        <div className="row align-items-center py-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="d-flex align-items-center gap-3"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: '0.9rem',
                color: colorScheme.mutedText
              }}
            >
              <span>© {new Date().getFullYear()} Elsa Imeri</span>
              <span className="dot" style={{ color: colorScheme.primary }}>•</span>
              <span>{t.allRightsReserved || 'All rights reserved'}</span>
            </motion.div>
          </div>
          
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="d-flex align-items-center justify-content-md-end gap-4"
              style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: '0.9rem'
              }}
            >
              <motion.a 
                href="#" 
                className="text-decoration-none"
                style={{ color: colorScheme.mutedText }}
                whileHover={{ color: colorScheme.primary }}
                transition={{ duration: 0.3 }}
              >
              </motion.a>
              <motion.a 
                href="#" 
                className="text-decoration-none"
                style={{ color: colorScheme.mutedText }}
                whileHover={{ color: colorScheme.primary }}
                transition={{ duration: 0.3 }}
              >
              </motion.a>
              <motion.a 
                href="#" 
                className="text-decoration-none"
                style={{ color: colorScheme.mutedText }}
                whileHover={{ color: colorScheme.primary }}
                transition={{ duration: 0.3 }}
              >
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(ModernFooter);