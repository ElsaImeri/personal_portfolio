import React, { useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const ResumeCard = React.memo(function ResumeCard({ 
  previewUrl, 
  primaryColor, 
  secondaryColor, 
  t 
}) {
  return React.createElement(
    motion.div,
    {
      style: {
        backgroundColor: 'rgba(108, 99, 255, 0.1)',
        borderRadius: '12px',
        padding: '1.5rem',
        maxWidth: '500px',
        border: `1px solid ${primaryColor}20`,
        cursor: 'pointer'
      },
      whileHover: { y: -5 },
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
          color: primaryColor 
        } 
      }),
      React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          {
            style: {
              color: '#333',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              marginBottom: '0.25rem'
            }
          },
          t.resumeTitle || "Elsa Imeri - Professional Resume"
        ),
        React.createElement(
          'p',
          {
            style: {
              color: secondaryColor,
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              marginBottom: '0'
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
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

const ResumeButton = React.memo(function ResumeButton({ 
  type, 
  url, 
  primaryColor, 
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
        backgroundColor: isPreview ? 'transparent' : primaryColor,
        color: isPreview ? primaryColor : '#fff',
        border: isPreview ? `2px solid ${primaryColor}` : 'none',
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        textDecoration: 'none'
      },
      whileHover: {
        backgroundColor: isPreview ? primaryColor : '#5a52d6',
        color: isPreview ? '#fff' : undefined,
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
  primaryColor: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  download: PropTypes.bool
};

function Resume() {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  const secondaryColor = '#6c757d';

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
        backgroundColor: '#fff',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
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
          background: 'radial-gradient(circle at 80% 30%, rgba(108, 99, 255, 0.05) 0%, transparent 50%)',
          zIndex: 0
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
              color: '#333',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: '2rem'
            }
          },
          t.my || "My",
          " ",
          React.createElement(
            'span',
            { style: { color: primaryColor } },
            t.resume || "Resume"
          )
        ),
        React.createElement(
          'p',
          {
            style: {
              color: secondaryColor,
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 2rem'
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
            primaryColor: primaryColor,
            t: t
          }),
          React.createElement(ResumeButton, {
            type: "download",
            url: downloadUrl,
            primaryColor: primaryColor,
            t: t,
            download: true
          })
        ),
        React.createElement(
          'div',
          { className: "mt-5 d-flex justify-content-center" },
          React.createElement(ResumeCard, {
            previewUrl: previewUrl,
            primaryColor: primaryColor,
            secondaryColor: secondaryColor,
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