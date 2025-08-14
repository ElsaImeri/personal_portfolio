import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const WorkExperience = () => {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  const accentColor = '#06b6d4';

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
      side: 'left',
      icon: <BsCodeSlash className="fs-5" />
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
      side: 'right',
      icon: <MdSchool className="fs-5" />
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
            className="text-purple-400 fw-bold hover-text-cyan-400 transition-colors"
            style={{ textDecoration: 'none' }}
          >
            {t('internshipCertificate') || 'internship certificate'}
            <FaExternalLinkAlt className="ms-2" size={12} />
          </a>
        </React.Fragment>
      ],
      side: 'left',
      icon: <FaBriefcase className="fs-5" />
    },
  ];

  return (
    <section 
      id="experience" 
      className="min-vh-100 py-5 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
      aria-label={t('sectionLabel') || "Work Experience Section"}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white mb-5 display-4 fw-bold"
      >
        {t('sectionTitle') || "My Journey"}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-3"
          style={{ 
            height: '4px',
            background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`
          }}
        />
      </motion.h2>

      {/* Timeline line */}
      <div className="position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-md-block" style={{ 
        width: '2px', 
        background: `linear-gradient(to bottom, ${primaryColor}, ${accentColor})`, 
        zIndex: 0,
        height: 'calc(100% - 180px)',
        top: '180px'
      }} />

      <div className="container position-relative py-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`row mb-5 justify-content-center justify-content-md-${exp.side === 'left' ? 'start' : 'end'} position-relative`}
            style={{ marginTop: index === 0 ? '0' : '4rem' }}
          >
            {/* Timeline dot - Mobile (centered) */}
            <div className="d-md-none position-absolute top-0 start-50 translate-middle-x rounded-circle d-flex align-items-center justify-content-center"
              style={{ 
                width: '44px', 
                height: '44px', 
                zIndex: 2, 
                border: '4px solid #0f172a',
                boxShadow: `0 0 0 4px ${primaryColor}20`,
                background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                marginTop: '-22px'
              }}>
              {exp.icon}
            </div>

            {/* Timeline dot - Desktop */}
            <div className="d-none d-md-block position-absolute top-0 start-50 translate-middle-x rounded-circle d-flex align-items-center justify-content-center"
              style={{ 
                width: '44px', 
                height: '44px', 
                zIndex: 2, 
                border: '4px solid #0f172a',
                boxShadow: `0 0 0 4px ${primaryColor}20`,
                background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
              }}>
              {exp.icon}
            </div>

            <div className="col-12 col-md-6 position-relative mt-4 mt-md-0" style={{ 
              marginTop: index === 0 ? '0' : '2rem',
              paddingTop: '40px'
            }}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-4 p-4 shadow-lg position-relative"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid rgba(108, 99, 255, 0.2)`,
                  borderLeft: `3px solid ${exp.side === 'left' ? accentColor : primaryColor}`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                  <h4 className="fw-bold text-white mb-2 mb-md-0">{exp.title}</h4>
                  <span className="badge border-0 rounded-pill px-3 py-2 mt-2 mt-md-0"
                    style={{ 
                      background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
                      color: 'white'
                    }}>
                    {exp.date}
                  </span>
                </div>
                {exp.company && (
                  <h6 className="text-cyan-400 mb-3 fw-semibold">{exp.company}</h6>
                )}
                <ul className="list-unstyled text-light">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: exp.side === 'left' ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="mb-2 d-flex align-items-start"
                    >
                      <span className="text-purple-400 me-2 mt-1">▹</span>
                      <span className="text-gray-300">
                        {typeof point === 'string' ? point : point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                {/* Corner accent */}
                <div className="position-absolute top-0 end-0 w-25 h-100 overflow-hidden">
                  <div className="w-100 h-100" style={{ 
                    background: `linear-gradient(to left, ${primaryColor}30, transparent)`,
                    opacity: 0.5
                  }}></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default  WorkExperience;