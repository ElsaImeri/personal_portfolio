import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import ThemeContext from '../../contexts/ThemeContext';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    text: '#ffffff',
    mutedText: '#a8b3cc',
    background: 'linear-gradient(135deg, #0f111a 0%, #1a1a2e 50%, #0f111a 100%)',
    cardBackground: 'rgba(108, 99, 255, 0.1)',
    cardBorder: '1px solid rgba(108, 99, 255, 0.2)',
    buttonBackground: '#6c63ff',
    buttonHover: '#5a52d6',
    buttonText: '#ffffff',
    outlineButtonBorder: '2px solid #6c63ff',
    outlineButtonText: '#6c63ff',
    outlineButtonHoverBackground: '#6c63ff',
    outlineButtonHoverText: '#ffffff'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    text: '#333333',
    mutedText: '#666666',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
    cardBackground: 'rgba(108, 99, 255, 0.08)',
    cardBorder: '1px solid rgba(108, 99, 255, 0.15)',
    buttonBackground: '#6c63ff',
    buttonHover: '#5a52d6',
    buttonText: '#ffffff',
    outlineButtonBorder: '2px solid #6c63ff',
    outlineButtonText: '#6c63ff',
    outlineButtonHoverBackground: '#6c63ff',
    outlineButtonHoverText: '#ffffff'
  }
};

const ResumeCard = React.memo(function ResumeCard({ 
  previewUrl, 
  colorScheme, 
  t 
}) {
  return React.createElement(
    motion.div,
    {
      style: {
        backgroundColor: colorScheme.cardBackground,
        borderRadius: '12px',
        padding: '1.5rem',
        maxWidth: '500px',
        border: colorScheme.cardBorder,
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      },
      whileHover: { 
        y: -5,
        boxShadow: `0 10px 30px ${colorScheme.primary}20`
      },
      onClick: function() { window.open(previewUrl, '_blank'); },
      'aria-label': t.viewResume || "View resume",
      role: "button",
      tabIndex: 0,
      onKeyPress: function(e) { e.key === 'Enter' && window.open(previewUrl, '_blank'); }
    },
    React.createElement(
      'div',
      { className: "d-flex align-items-center gap-3" },
      React.createElement(FaFilePdf, { 
        style: { 
          fontSize: '2.5rem', 
          color: colorScheme.primary 
        } 
      }),
      React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          {
            style: {
              color: colorScheme.text,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '0.25rem',
              transition: 'color 0.3s ease'
            }
          },
          t.resumeTitle || "Elsa Imeri - Professional Resume"
        ),
        React.createElement(
          'p',
          {
            style: {
              color: colorScheme.mutedText,
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              marginBottom: '0',
              transition: 'color 0.3s ease'
            }
          },
          t.resumeSubtitle || "PDF Document",
          " • ",
          t.lastUpdated,
          ": ",
          new Date().toLocaleDateString()
        )
      )
    )
  );
});

ResumeCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  colorScheme: PropTypes.object.isRequired,
  t: PropTypes.object.isRequired
};

const ResumeButton = React.memo(function ResumeButton({ 
  type, 
  url, 
  colorScheme, 
  t,
  download = false
}) {
  const isPreview = type === 'preview';
  const Icon = isPreview ? FaEye : FaDownload;
  
  return React.createElement(
    motion.a,
    {
      href: url,
      target: isPreview ? "_blank" : undefined,
      rel: isPreview ? "noopener noreferrer" : undefined,
      download: download ? "Elsa_Imeri_Resume.pdf" : undefined,
      className: "btn btn-lg d-flex align-items-center gap-2",
      style: {
        backgroundColor: isPreview ? 'transparent' : colorScheme.buttonBackground,
        color: isPreview ? colorScheme.outlineButtonText : colorScheme.buttonText,
        border: isPreview ? colorScheme.outlineButtonBorder : 'none',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.3s ease'
      },
      whileHover: {
        backgroundColor: isPreview ? colorScheme.outlineButtonHoverBackground : colorScheme.buttonHover,
        color: isPreview ? colorScheme.outlineButtonHoverText : colorScheme.buttonText,
        scale: 1.05
      },
      whileTap: { scale: 0.95 },
      'aria-label': isPreview ? t.viewResume : t.downloadResume
    },
    React.createElement(Icon, null),
    " ",
    isPreview ? t.viewResume : t.downloadResume
  );
});

ResumeButton.propTypes = {
  type: PropTypes.oneOf(['preview', 'download']).isRequired,
  url: PropTypes.string.isRequired,
  colorScheme: PropTypes.object.isRequired,
  t: PropTypes.object.isRequired,
  download: PropTypes.bool
};

function Resume() {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  const t = useMemo(function() {
    return {
      ...(translations.en?.resume || {}),
      ...(translations[languageCode]?.resume || {})
    };
  }, [languageCode]);

  const fileId = '1wyKZ1BMIks0Rl0pXESMpo6rnIUjBhIMO';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return React.createElement(
    'section',
    {
      id: "resume",
      style: {
        background: colorScheme.background,
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      },
      'aria-label': t.resumeSection || "Resume section"
    },
    React.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 80% 30%, ${colorScheme.primary}${isDarkMode ? '0.05' : '0.03'} 0%, transparent 50%)`,
          zIndex: 0,
          transition: 'background 0.3s ease'
        }
      }
    ),
    React.createElement(
      'div',
      { className: "container position-relative", style: { zIndex: 1 } },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true, margin: '0px 0px -100px 0px' },
          className: "text-center"
        },
        React.createElement(
          'h2',
          {
            style: {
              color: colorScheme.text,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '2rem',
              transition: 'color 0.3s ease'
            }
          },
          t.my || "My",
          " ",
          React.createElement(
            'span',
            { style: { color: colorScheme.primary } },
            t.resume || "Resume"
          )
        ),
        React.createElement(
          'p',
          {
            style: {
              color: colorScheme.mutedText,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 2rem',
              transition: 'color 0.3s ease'
            }
          },
          t.resumeDescription || "Download or view my resume to see my experience and skills in detail."
        ),
        React.createElement(
          'div',
          { className: "d-flex justify-content-center gap-4 flex-wrap" },
          React.createElement(ResumeButton, {
            type: "preview",
            url: previewUrl,
            colorScheme: colorScheme,
            t: t
          }),
          React.createElement(ResumeButton, {
            type: "download",
            url: downloadUrl,
            colorScheme: colorScheme,
            t: t,
            download: true
          })
        ),
        React.createElement(
          'div',
          { className: "mt-5 d-flex justify-content-center" },
          React.createElement(ResumeCard, {
            previewUrl: previewUrl,
            colorScheme: colorScheme,
            t: t
          })
        )
      )
    )
  );
}

Resume.propTypes = {
  // Add any props if needed
};

export default React.memo(Resume);