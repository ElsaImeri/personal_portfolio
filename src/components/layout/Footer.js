import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRegCopyright } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { Link } from 'react-router-dom';

function ModernFooter() {
  const { languageCode } = useContext(LanguageContext);
  const t = translations[languageCode]?.footer || translations.en.footer;
  const primaryColor = '#6c63ff';
  const secondaryColor = '#a0aec0';

  return React.createElement(
    'footer',
    {
      style: {
        backgroundColor: '#0d0d0d',
        borderTop: '1px solid rgba(108, 99, 255, 0.1)',
        padding: '5rem 0 2rem',
        position: 'relative',
        overflow: 'hidden'
      }
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
          background: 'radial-gradient(circle at 20% 50%, rgba(108, 99, 255, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }
      }
    ),
    React.createElement(
      'div',
      { className: "container position-relative", style: { zIndex: 1 } },
      React.createElement(
        'div',
        { className: "row g-4" },
        React.createElement(
          'div',
          { className: "col-lg-4" },
          React.createElement(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 }
            },
            React.createElement(
              'h3',
              {
                style: {
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem'
                }
              },
              "Elsa ",
              React.createElement(
                'span',
                { style: { color: primaryColor } },
                "Imeri"
              )
            ),
            React.createElement(
              'p',
              {
                style: {
                  color: secondaryColor,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  maxWidth: '300px'
                }
              },
              t.description
            )
          )
        ),
        React.createElement(
          'div',
          { className: "col-lg-8" },
          React.createElement(
            'div',
            { className: "row g-4" },
            React.createElement(
              'div',
              { className: "col-md-4" },
              React.createElement(FooterSection, {
                title: t.explore,
                items: [
                  { text: t.home, link: '#home' },
                  { text: t.skills, link: '#skills' },
                  { text: t.projects, link: '#projects' },
                  { text: t.experience, link: '#experience' },
                  { text: t.contact, link: '#contact' }
                ],
                primaryColor: primaryColor,
                delay: 0.1
              })
            ),
            React.createElement(
              'div',
              { className: "col-md-4" },
              React.createElement(FooterSection, {
                title: t.connect,
                items: [
                  { text: 'GitHub', link: 'https://github.com/ElsaImeri', icon: React.createElement(FaGithub) },
                  { 
                    text: 'LinkedIn', 
                    link: 'https://linkedin.com/in/elsa-imeri-953b7b323', 
                    icon: React.createElement(FaLinkedin),
                    action: function() { window.open('https://linkedin.com/in/elsa-imeri-953b7b323', '_blank', 'noopener,noreferrer'); }
                  },
                  { text: 'Email', link: 'mailto:elsaimeri478@gmail.com', icon: React.createElement(FaEnvelope) }
                ],
                primaryColor: primaryColor,
                delay: 0.2,
                isSocial: true
              })
            ),
            React.createElement(
              'div',
              { className: "col-md-4" },
              React.createElement(FooterSection, {
                title: t.hireMe,
                items: [
                  { text: 'Upwork', link: '#contact' },
                  { text: 'Fiverr', link: '#contact' },
                  { text: t.freelanceProjects, link: '#contact' },
                  { text: t.fullTimeOpportunities, link: '#contact' }
                ],
                primaryColor: primaryColor,
                delay: 0.3
              })
            )
          )
        )
      ),
      React.createElement(
        motion.div,
        {
          style: {
            height: '1px',
            background: `linear-gradient(to right, transparent, ${primaryColor}30, transparent)`,
            margin: '4rem 0',
            width: '100%'
          },
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          transition: { duration: 0.8 }
        }
      ),
      React.createElement(
        'div',
        { className: "row align-items-center" },
        React.createElement(
          'div',
          { className: "col-md-6 mb-3 mb-md-0" },
          React.createElement(
            motion.div,
            {
              className: "d-flex align-items-center gap-2",
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.4 },
              style: {
                color: secondaryColor,
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem'
              }
            },
            React.createElement(FaRegCopyright, { style: { fontSize: '0.8rem' } }),
            React.createElement(
              'span',
              null,
              new Date().getFullYear(),
              " Elsa Imeri. ",
              t.allRightsReserved
            )
          )
        ),
        React.createElement(
          'div',
          { className: "col-md-6" },
          React.createElement(
            motion.div,
            {
              className: "d-flex align-items-center justify-content-md-end gap-4",
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.5 },
              style: {
                color: secondaryColor,
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem'
              }
            },
            React.createElement('span', null, "Privacy Policy"),
            React.createElement('span', null, "Terms of Service")
          )
        )
      )
    )
  );
}

function FooterSection({ title, items, primaryColor, delay = 0, isSocial = false }) {
  return React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay }
    },
    React.createElement(
      'h5',
      {
        style: {
          color: '#fff',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          marginBottom: '1.5rem',
          fontSize: '1.1rem',
          position: 'relative',
          display: 'inline-block'
        }
      },
      title,
      React.createElement(
        motion.span,
        {
          style: {
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            height: '2px',
            width: '40px',
            backgroundColor: primaryColor,
            borderRadius: '2px'
          },
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          transition: { duration: 0.6, delay: delay + 0.2 }
        }
      )
    ),
    React.createElement(
      'ul',
      { 
        style: { 
          listStyle: 'none', 
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }
      },
      items.map(function(item, index) {
        return React.createElement(
          motion.li,
          {
            key: index,
            initial: { opacity: 0, x: -10 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.3, delay: delay + (index * 0.05) }
          },
          React.createElement(
            motion.a,
            {
              href: item.link,
              target: item.link.startsWith('http') ? '_blank' : '_self',
              rel: "noopener noreferrer",
              style: {
                color: '#a0aec0',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                transition: 'all 0.3s ease'
              },
              whileHover: { 
                color: primaryColor,
                x: 5
              },
              onClick: function(e) {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
              }
            },
            isSocial && item.icon && React.createElement(
              'span',
              { 
                style: { 
                  fontSize: '1.1rem', 
                  width: '1.5rem',
                  color: primaryColor 
                }
              },
              item.icon
            ),
            item.text
          )
        );
      })
    )
  );
}

export default React.memo(ModernFooter);