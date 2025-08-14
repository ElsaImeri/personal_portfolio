import React, { useContext, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const ContactCard = React.memo(function ContactCard({ 
  icon, 
  text, 
  action, 
  typeKey, 
  t, 
  primaryColor, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) {
  return React.createElement(
    motion.div,
    {
      style: {
        padding: '2rem',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid #333',
        height: '100%',
        cursor: action ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden'
      },
      whileHover: { 
        borderColor: primaryColor,
        transform: 'translateY(-5px)',
        backgroundColor: action ? 'rgba(108, 99, 255, 0.05)' : undefined
      },
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: action,
      'aria-label': action ? `${t.actionAriaLabel || "Open"} ${t[typeKey] || typeKey}` : t[typeKey] || typeKey,
      role: action ? "button" : "region",
      tabIndex: action ? 0 : -1,
      onKeyPress: function(e) { action && e.key === 'Enter' && action(); }
    },
    React.createElement(
      motion.div,
      {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: primaryColor,
          transformOrigin: 'left center',
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)'
        }
      }
    ),
    React.createElement(
      'div',
      {
        style: {
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          backgroundColor: 'rgba(108, 99, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          border: `1px solid ${primaryColor}`,
          color: primaryColor
        }
      },
      icon
    ),
    React.createElement(
      'h3',
      {
        style: {
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#fff'
        }
      },
      t[typeKey] || typeKey
    ),
    React.createElement(
      'p',
      {
        style: {
          color: '#ccc',
          marginBottom: '1.5rem'
        }
      },
      text
    ),
    action && React.createElement(
      motion.span,
      {
        style: {
          color: primaryColor,
          fontWeight: 500,
          display: 'inline-block'
        },
        animate: {
          x: isHovered ? [0, 5, 0] : 0
        },
        transition: {
          repeat: isHovered ? Infinity : 0,
          duration: 1.5
        }
      },
      typeKey === 'email' ? `${t.sendMessage || "Send message"} →` : `${t.visitProfile || "Visit profile"} →`
    )
  );
});

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  typeKey: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  primaryColor: PropTypes.string.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

function Contact() {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  const [hoveredItem, setHoveredItem] = useState(null);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(function() {
    setTypingKey(function(prevKey) { return prevKey + 1; });
  }, [languageCode]);

  const t = useMemo(function() {
    return {
      ...(translations.en?.contact || {}),
      ...(translations[languageCode]?.contact || {})
    };
  }, [languageCode]);

  const contactItems = useMemo(function() {
    return [
      {
        icon: React.createElement(FaEnvelope, { size: 24 }),
        text: 'elsaimeri478@gmail.com',
        action: function() { window.location.href = 'mailto:elsaimeri478@gmail.com'; },
        typeKey: 'email'
      },
      {
        icon: React.createElement(FaLinkedin, { size: 24 }),
        text: 'in/elsa-imeri',
        action: function() { window.open('https://linkedin.com/in/elsa-imeri-953b7b323', '_blank', 'noopener,noreferrer'); },
        typeKey: 'linkedin'
      },
      {
        icon: React.createElement(FaMapMarkerAlt, { size: 24 }),
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

  return React.createElement(
    'section',
    {
      id: "contact",
      style: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3rem',
        backgroundColor: '#0d0d0d',
        color: '#fff',
        fontFamily: "'Roboto Mono', monospace",
        position: 'relative'
      },
      'aria-label': t.ariaLabel || "Contact section"
    },
    React.createElement(
      'div',
      { className: "container" },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true, margin: '0px 0px -100px 0px' },
          className: "text-center mb-16"
        },
        React.createElement(
          motion.h1,
          {
            style: {
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.2
            }
          },
          t.titleStart || "Get In ",
          React.createElement(
            'span',
            { style: { color: primaryColor } },
            t.titleHighlight || "Touch"
          )
        ),
        React.createElement(
          'div',
          { 
            style: { 
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              marginBottom: '2rem',
              minHeight: '3.5rem'
            }
          },
          React.createElement(
            TypeAnimation,
            {
              key: typingKey,
              sequence: typeAnimationSequence,
              wrapper: "span",
              cursor: true,
              repeat: Infinity,
              style: { color: '#ccc' },
              'aria-label': t.typeAnimationAriaLabel || "Collaboration suggestions"
            }
          )
        ),
        React.createElement(
          motion.div,
          {
            initial: { width: 0 },
            whileInView: { width: '150px' },
            transition: { duration: 0.8 },
            style: {
              height: '3px',
              background: `linear-gradient(to right, ${primaryColor}, #6366f1)`,
              borderRadius: '10px',
              margin: '0 auto'
            }
          }
        )
      ),
      React.createElement(
        'div',
        { className: "row justify-content-center" },
        contactItems.map(function(item, index) {
          return React.createElement(
            motion.div,
            {
              key: index,
              className: "col-md-4 mb-4",
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.1 },
              viewport: { once: true, margin: '0px 0px -50px 0px' }
            },
            React.createElement(
              ContactCard,
              {
                icon: item.icon,
                text: item.text,
                action: item.action,
                typeKey: item.typeKey,
                t: t,
                primaryColor: primaryColor,
                isHovered: hoveredItem === index,
                onMouseEnter: function() { setHoveredItem(index); },
                onMouseLeave: function() { setHoveredItem(null); }
              }
            )
          );
        })
      )
    )
  );
}

export default React.memo(Contact);