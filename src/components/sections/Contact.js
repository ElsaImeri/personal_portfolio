import React, { useContext, useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaTimes, FaCheck } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import ThemeContext from '../../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#ff6ec7',
    text: '#ffffff',
    mutedText: '#a8b3cc',
    background: 'linear-gradient(135deg, #0d0d0d, #1a1a2e, #0f0f1a)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
    cardBorder: '1px solid rgba(255,255,255,0.1)',
    cardShadow: '0 4px 12px rgba(0,0,0,0.3)',
    formBackground: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
    formBorder: '1px solid rgba(255,255,255,0.1)',
    inputBackground: 'rgba(0,0,0,0.3)',
    inputBorder: '1px solid rgba(108, 99, 255, 0.2)',
    inputText: '#ffffff',
    dialogBackground: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
    dialogBorder: '1px solid rgba(108, 99, 255, 0.3)'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#ff6ec7',
    text: '#1e293b',
    mutedText: '#64748b',
    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #f1f5f9)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
    cardBorder: '1px solid rgba(108, 99, 255, 0.2)',
    cardShadow: '0 4px 12px rgba(108, 99, 255, 0.1)',
    formBackground: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
    formBorder: '1px solid rgba(108, 99, 255, 0.2)',
    inputBackground: 'rgba(255,255,255,0.8)',
    inputBorder: '1px solid rgba(108, 99, 255, 0.3)',
    inputText: '#1e293b',
    dialogBackground: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
    dialogBorder: '1px solid rgba(108, 99, 255, 0.4)'
  }
};

// Komponenti i Dialogut të Konfirmimit
const ConfirmationDialog = React.memo(function ConfirmationDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  formData, 
  t, 
  colorScheme 
}) {
  // Kontrollo scroll-in kur dialogu hapet/mbyllset
  useEffect(() => {
    if (isOpen) {
      // Ndalo scroll-in dhe izolo dialogun
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Rikthe scroll-in dhe pozicionin
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      // Cleanup - rikthe gjithçka
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Funksioni për handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Funksioni për handle klik jashtë dialogut
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            // Shtojmë izolim për të parandaluar ndërveprimin me elementët e tjerë
            isolation: 'isolate'
          }}
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="rounded-4 p-4 position-relative"
            style={{
              width: '100%',
              maxWidth: '500px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: colorScheme.dialogBackground,
              border: colorScheme.dialogBorder,
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              color: colorScheme.text,
              // Shtojmë izolim edhe për dialogun
              isolation: 'isolate'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Butoni i mbylljes */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="btn btn-lg position-absolute"
              style={{
                top: '15px',
                right: '15px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: colorScheme.text,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}
              aria-label={t.closeDialog || "Close dialog"}
            >
              <FaTimes />
            </motion.button>

            {/* Ikona e konfirmimit */}
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="d-inline-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                  color: 'white',
                  fontSize: '2rem'
                }}
              >
                <FaPaperPlane />
              </motion.div>
            </div>

            {/* Titulli */}
            <h3 className="text-center fw-bold mb-3" style={{ color: colorScheme.primary }}>
              {t.confirmSend || "Ready to send?"}
            </h3>

            {/* Përmbajtja e email-it */}
            <div className="mb-4 p-3 rounded-3" style={{ 
              background: colorScheme.inputBackground,
              border: colorScheme.inputBorder
            }}>
              <div className="mb-2">
                <strong style={{ color: colorScheme.primary }}>{t.nameLabel || "Name"}:</strong> {formData.name}
              </div>
              <div className="mb-2">
                <strong style={{ color: colorScheme.primary }}>{t.emailLabel || "Email"}:</strong> {formData.email}
              </div>
              <div className="mb-2">
                <strong style={{ color: colorScheme.primary }}>{t.subjectLabel || "Subject"}:</strong> {formData.subject}
              </div>
              <div>
                <strong style={{ color: colorScheme.primary }}>{t.messageLabel || "Message"}:</strong>
                <div className="mt-1 p-2 rounded-2" style={{ 
                  background: 'rgba(0,0,0,0.05)',
                  maxHeight: '120px',
                  overflowY: 'auto',
                  fontSize: '0.9rem'
                }}>
                  {formData.message}
                </div>
              </div>
            </div>

            {/* Butonat e veprimit */}
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="btn px-4 py-2 fw-semibold"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: `1px solid ${colorScheme.mutedText}`,
                  color: colorScheme.text,
                  borderRadius: '10px',
                  minWidth: '120px'
                }}
              >
                {t.cancel || "Cancel"}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onConfirm}
                className="btn px-4 py-2 fw-semibold"
                style={{
                  background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                  border: 'none',
                  color: 'white',
                  borderRadius: '10px',
                  minWidth: '120px'
                }}
              >
                <FaPaperPlane className="me-2" />
                {t.sendEmail || "Send Email"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

ConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  t: PropTypes.object.isRequired,
  colorScheme: PropTypes.object.isRequired
};

const ContactCard = React.memo(function ContactCard({ 
  icon, 
  text, 
  action, 
  typeKey, 
  t, 
  colorScheme, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) {
  return (
    <motion.div
      className="h-100 p-4 rounded-4 text-center"
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 200 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={action}
      aria-label={
        action 
          ? `${t.actionAriaLabel || "Open"} ${t[typeKey] || typeKey}` 
          : t[typeKey] || typeKey
      }
      role={action ? "button" : "region"}
      tabIndex={action ? 0 : -1}
      onKeyDown={(e) => action && e.key === "Enter" && action()}
      style={{ 
        cursor: action ? "pointer" : "default",
        background: colorScheme.cardBackground,
        border: `1px solid ${isHovered ? colorScheme.primary : colorScheme.cardBorder.split(' ')[2]}`,
        backdropFilter: "blur(12px)",
        boxShadow: isHovered 
          ? `0 10px 25px ${colorScheme.primary}55, 0 0 40px ${colorScheme.primary}22` 
          : colorScheme.cardShadow,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transition: "all 0.3s ease-in-out",
        color: colorScheme.text
      }}
    >
      {/* Ikona e madhe */}
      <div 
        className="d-flex align-items-center justify-content-center mx-auto mb-4"
        style={{ 
          width: '90px', 
          height: '90px',
          fontSize: '32px',
          borderRadius: '50%',
          background: isHovered
            ? `conic-gradient(from 180deg, ${colorScheme.primary}, ${colorScheme.secondary}, ${colorScheme.primary})`
            : `radial-gradient(circle, ${colorScheme.primary}33, transparent)`,
          color: "#fff",
          boxShadow: isHovered ? `0 0 20px ${colorScheme.primary}` : "none",
          transition: "all 0.4s ease-in-out"
        }}
      >
        {icon}
      </div>

      {/* Titulli */}
      <h4 className="fw-bold mb-3" style={{ 
        letterSpacing: "1px",
        color: colorScheme.text 
      }}>
        {t[typeKey] || typeKey}
      </h4>

      {/* Teksti */}
      <p className="mb-3" style={{ color: colorScheme.mutedText }}>{text}</p>

      {/* CTA */}
      {action && (
        <motion.div
          className="fw-semibold"
          style={{ color: colorScheme.primary }}
          animate={{ x: isHovered ? [0, 8, 0] : 0 }}
          transition={{ repeat: isHovered ? Infinity : 0, duration: 1.5 }}
        >
          {typeKey === 'email'
            ? `${t.sendMessage || "Send message"} →`
            : `${t.visitProfile || "Visit profile"} →`}
        </motion.div>
      )}
    </motion.div>
  );
});

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  typeKey: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  colorScheme: PropTypes.object.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

const ContactForm = React.memo(function ContactForm({ t, colorScheme }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleSendEmail = () => {
    // Krijo email link duke përdorur form data
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Emri: ${formData.name}\nEmail: ${formData.email}\n\nMesazhi:\n${formData.message}`
    );
    
    // Hap klientin e email-it të përdoruesit
    window.location.href = `mailto:elsaimeri478@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Reset formën dhe mbyll dialogun
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowDialog(false);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="col-12 col-lg-8 mx-auto mt-5"
      >
        <div 
          className="p-4 p-lg-5 rounded-4"
          style={{
            background: colorScheme.formBackground,
            border: colorScheme.formBorder,
            backdropFilter: "blur(12px)",
            boxShadow: colorScheme.cardShadow,
            color: colorScheme.text
          }}
        >
          <h3 className="fw-bold mb-4 text-center" style={{ color: colorScheme.primary }}>
            {t.contactFormTitle || "Send Me a Message"}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label" style={{ color: colorScheme.mutedText }}>
                    {t.nameLabel || "Your Name"} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{ 
                      borderRadius: '10px',
                      border: colorScheme.inputBorder,
                      padding: '12px',
                      background: colorScheme.inputBackground,
                      color: colorScheme.inputText
                    }}
                    placeholder={t.namePlaceholder || "Enter your name"}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label" style={{ color: colorScheme.mutedText }}>
                    {t.emailLabel || "Email Address"} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{ 
                      borderRadius: '10px',
                      border: colorScheme.inputBorder,
                      padding: '12px',
                      background: colorScheme.inputBackground,
                      color: colorScheme.inputText
                    }}
                    placeholder={t.emailPlaceholder || "your.email@example.com"}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="subject" className="form-label" style={{ color: colorScheme.mutedText }}>
                    {t.subjectLabel || "Subject"} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-control"
                    style={{ 
                      borderRadius: '10px',
                      border: colorScheme.inputBorder,
                      padding: '12px',
                      background: colorScheme.inputBackground,
                      color: colorScheme.inputText
                    }}
                    placeholder={t.subjectPlaceholder || "What's this about?"}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="message" className="form-label" style={{ color: colorScheme.mutedText }}>
                    {t.messageLabel || "Your Message"} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-control"
                    style={{ 
                      borderRadius: '10px',
                      border: colorScheme.inputBorder,
                      padding: '12px',
                      resize: 'vertical',
                      background: colorScheme.inputBackground,
                      color: colorScheme.inputText
                    }}
                    placeholder={t.messagePlaceholder || "Tell me about your project..."}
                  />
                </div>
              </div>

              <div className="col-12 text-center">
                <motion.button
                  type="submit"
                  className="btn border-0 fw-semibold px-5 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: `linear-gradient(45deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    minWidth: '200px',
                    color: '#fff'
                  }}
                >
                  <FaPaperPlane className="me-2" />
                  {t.sendButton || "Send Message"}
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Dialogu i Konfirmimit */}
      <ConfirmationDialog
        isOpen={showDialog}
        onClose={handleCloseDialog}
        onConfirm={handleSendEmail}
        formData={formData}
        t={t}
        colorScheme={colorScheme}
      />
    </>
  );
});

ContactForm.propTypes = {
  t: PropTypes.object.isRequired,
  colorScheme: PropTypes.object.isRequired
};

function Contact() {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  const [hoveredItem, setHoveredItem] = useState(null);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(function() {
    setTypingKey(prevKey => prevKey + 1);
  }, [languageCode]);

  const t = useMemo(function() {
    const defaultTranslations = translations.en || {};
    const currentTranslations = translations[languageCode] || {};
    
    return {
      ...defaultTranslations.contact,
      ...currentTranslations.contact,
      ...defaultTranslations.common,
      ...currentTranslations.common
    };
  }, [languageCode]);

  const contactItems = useMemo(function() {
    return [
      {
        icon: <FaEnvelope />,
        text: 'elsaimeri478@gmail.com',
        action: () => { window.location.href = 'mailto:elsaimeri478@gmail.com'; },
        typeKey: 'email'
      },
      {
        icon: <FaLinkedin />,
        text: 'linkedin.com/in/elsa-imeri',
        action: () => { window.open('https://linkedin.com/in/elsa-imeri-953b7b323', '_blank', 'noopener,noreferrer'); },
        typeKey: 'linkedin'
      },
      {
        icon: <FaMapMarkerAlt />,
        text: t.locationText || 'Pristina, Kosovo',
        action: null,
        typeKey: 'location'
      }
    ];
  }, [t.locationText]);

  const typeAnimationSequence = useMemo(function() {
    return [
      t.letsCollaborate || "Let's collaborate",
      2000,
      t.letsBuild || "Let's build something",
      2000,
      t.letsConnect || "Let's connect",
      2000
    ];
  }, [t.letsCollaborate, t.letsBuild, t.letsConnect]);

  return (
    <section 
      id="contact" 
      className="py-5"
      aria-label={t.ariaLabel || "Contact section"}
      style={{
        position: "relative",
        background: colorScheme.background,
        overflow: "hidden",
        color: colorScheme.text,
        transition: 'background 0.3s ease, color 0.3s ease',
        // Shtojmë izolim për të parandaluar ndërveprimin e dialogut me footer
        isolation: 'isolate'
      }}
    >
      {/* Shapes dekorative */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colorScheme.primary}${isDarkMode ? '55' : '33'}, transparent)`,
          top: "-150px",
          left: "-100px",
          zIndex: 0,
          opacity: isDarkMode ? 1 : 0.7
        }}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colorScheme.secondary}${isDarkMode ? '55' : '33'}, transparent)`,
          bottom: "-100px",
          right: "-80px",
          zIndex: 0,
          opacity: isDarkMode ? 1 : 0.7
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold mb-3" style={{ 
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: colorScheme.text
          }}>
            {t.titleStart || "Get In "}
            <span style={{ color: colorScheme.primary }}>{t.titleHighlight || "Touch"}</span>
          </h1>

          <div className="fs-5 mb-4" style={{ 
            minHeight: '2.5rem',
            color: colorScheme.mutedText
          }}>
            <TypeAnimation
              key={typingKey}
              sequence={typeAnimationSequence}
              wrapper="span"
              cursor
              repeat={Infinity}
              aria-label={t.typeAnimationAriaLabel || "Collaboration suggestions"}
            />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-4"
            style={{ 
              height: '4px', 
              width: '220px', 
              background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`, 
              borderRadius: '10px',
              transformOrigin: "left center"
            }}
          />
        </motion.div>

        {/* Cards */}
        <div className="row g-4">
          {contactItems.map((item, index) => (
            <motion.div 
              className="col-md-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ContactCard
                icon={item.icon}
                text={item.text}
                action={item.action}
                typeKey={item.typeKey}
                t={t}
                colorScheme={colorScheme}
                isHovered={hoveredItem === index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              />
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm t={t} colorScheme={colorScheme} />
      </div>
    </section>
  );
}

export default React.memo(Contact);