import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const CareerGoals = () => {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  const [typingKey, setTypingKey] = useState(0);
  const [currentGoals, setCurrentGoals] = useState([]);

  useEffect(function() {
    setTypingKey(function(prevKey) { return prevKey + 1; });
  }, [languageCode]);

  const t = translations[languageCode]?.careerGoals || translations.en.careerGoals;

  useEffect(function() {
    setCurrentGoals([
      {
        title: t.shortTerm.title,
        icon: React.createElement(FaCode),
        description: t.shortTerm.description,
      },
      {
        title: t.midTerm.title,
        icon: React.createElement(FaProjectDiagram),
        description: t.midTerm.description,
      },
      {
        title: t.longTerm.title,
        icon: React.createElement(FaRocket),
        description: t.longTerm.description,
      },
    ]);
  }, [t]);

  const styles = `
    .career-goals-section-elsa {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem;
      background: radial-gradient(ellipse at top, #1e1b4b, #4338ca, #1e1b4b);
      font-family: 'Inter', sans-serif;
      color: white;
      width: 100%;
      overflow-x: hidden;
    }
    
    .career-goals-container-elsa {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }
    
    .career-goals-badge-elsa {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      margin-bottom: 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      background: linear-gradient(to right, ${primaryColor}, #6366f1);
      color: white;
    }
    
    .career-goals-title-elsa {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: #f8f9fa;
    }
    
    .career-goals-subtitle-elsa {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      margin-bottom: 2rem;
      min-height: 3.5rem;
      color: #a0aec0;
      font-weight: 400;
    }
    
    .career-goals-divider-elsa {
      height: 4px;
      width: 150px;
      background: linear-gradient(to right, ${primaryColor}, #818cf8);
      border-radius: 10px;
      margin: 0 auto 2rem;
    }
    
    .career-goals-grid-elsa {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }
    
    .career-goals-card-elsa {
      padding: 1.5rem;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid rgba(165, 180, 252, 0.3);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      min-height: 280px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }
    
    .career-goals-card-elsa:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 10px 25px -5px ${primaryColor}40;
    }
    
    .career-goals-card-header-elsa {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    
    .career-goals-card-icon-elsa {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      background-color: rgba(108, 99, 255, 0.1);
      border: 1px solid ${primaryColor};
      color: ${primaryColor};
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      transition: all 0.3s ease;
    }
    
    .career-goals-card-icon-elsa:hover {
      transform: rotate(15deg) scale(1.1);
    }
    
    .career-goals-card-title-elsa {
      font-size: 1.4rem;
      font-weight: 600;
      color: #f8f9fa;
      margin: 0;
    }
    
    .career-goals-card-text-elsa {
      color: #a0aec0;
      line-height: 1.6;
      font-size: 1.05rem;
      margin-top: auto;
    }
    
    @media (max-width: 768px) {
      .career-goals-section-elsa {
        padding: 2rem 1rem;
      }
      
      .career-goals-title-elsa {
        font-size: 2rem;
      }
      
      .career-goals-grid-elsa {
        grid-template-columns: 1fr;
      }
    }
  `;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('style', null, styles),
    React.createElement(
      'section',
      {
        id: "goals",
        className: "career-goals-section-elsa"
      },
      React.createElement(
        'div',
        { className: "career-goals-container-elsa" },
        React.createElement(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true, margin: "-100px" },
            className: "text-center mb-5"
          },
          React.createElement(
            motion.span,
            {
              initial: { scale: 0.8 },
              whileInView: { scale: 1 },
              transition: { type: "spring", stiffness: 200 },
              viewport: { once: true },
              className: "career-goals-badge-elsa"
            },
            t.badgeText
          ),
          React.createElement(
            'h2',
            { className: "career-goals-title-elsa" },
            t.title,
            " ",
            React.createElement(
              'span',
              { style: { color: primaryColor } },
              t.titleHighlight
            )
          ),
          React.createElement(
            'div',
            { className: "career-goals-subtitle-elsa" },
            React.createElement(
              TypeAnimation,
              {
                key: typingKey,
                sequence: t.subtitles.flatMap(function(text) { return [text, 2000]; }),
                wrapper: "span",
                cursor: true,
                repeat: Infinity
              }
            )
          ),
          React.createElement(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: '150px' },
              transition: { duration: 0.7, type: "spring" },
              viewport: { once: true },
              className: "career-goals-divider-elsa"
            }
          )
        ),
        React.createElement(
          'div',
          { className: "career-goals-grid-elsa" },
          currentGoals.map(function(goal, index) {
            return React.createElement(
              motion.div,
              {
                key: index,
                initial: { y: 20, opacity: 0 },
                whileInView: { y: 0, opacity: 1 },
                transition: { type: "spring", stiffness: 100, damping: 10 },
                viewport: { once: true, margin: "-100px" },
                className: "career-goals-card-elsa"
              },
              React.createElement(
                'div',
                { className: "career-goals-card-header-elsa" },
                React.createElement(
                  'div',
                  { className: "career-goals-card-icon-elsa" },
                  goal.icon
                ),
                React.createElement(
                  'h3',
                  { className: "career-goals-card-title-elsa" },
                  goal.title
                )
              ),
              React.createElement(
                'p',
                { className: "career-goals-card-text-elsa" },
                goal.description
              )
            );
          })
        )
      )
    )
  );
};

export default React.memo(CareerGoals);