import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight,
  FiMail
} from 'react-icons/fi';
import { Link } from 'react-scroll';
import { 
  BsCodeSlash,
  BsFiletypePhp,
  BsFiletypeJs,
  BsFiletypeHtml,
  BsFiletypeCss,
  BsAndroid,
  BsFiletypeSql
} from 'react-icons/bs';
import { 
  SiLaravel,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiKotlin,
  SiVuedotjs
} from 'react-icons/si';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations.Projects';

// Import images
import image1 from '../../assets/images/image.png';
import image2 from '../../assets/images/foto52.png';
import image3 from '../../assets/images/foto40.png';
import image4 from '../../assets/images/foto53.png';
import image5 from '../../assets/images/barnatore3.png';
import image6 from '../../assets/images/foto10.png';
import image7 from '../../assets/images/foto12.png';
import image8 from '../../assets/images/fotohrms1.png';
import image9 from '../../assets/images/foto1.png';
import image10 from '../../assets/images/fotohrms2.png';
import image11 from '../../assets/images/fotohrms3.png';
import image12 from '../../assets/images/fotohrms5.png';
import image13 from '../../assets/images/fotohrms6.png';
import image14 from '../../assets/images/foto30.png';
import image15 from '../../assets/images/foto36.png';
import image16 from '../../assets/images/foto37.png';
import image17 from '../../assets/images/foto31.png';
import image18 from '../../assets/images/vetura1.png';
import image19 from '../../assets/images/vetura2.png';
import image20 from '../../assets/images/vetura3.png';
import image21 from '../../assets/images/carsales1.png';
import image22 from '../../assets/images/Android.png';
import image23 from '../../assets/images/android1.png';
import image26 from '../../assets/images/foto100.png';
import image27 from '../../assets/images/java.png';
import android3 from '../../assets/images/android3.png';

// Custom Java Icon Component
const JavaIcon = () => (
  <motion.svg 
    viewBox="0 0 128 128" 
    className="w-6 h-6"
    whileHover={{ rotate: 10 }}
  >
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.13-1.58 13.13s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.227z"></path>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-2.913 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.229 19.644-4.643 19.644-4.643zM90.499 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.468-.617.468-.617z"></path>
    <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.97-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.54-12.834 32.229-26.667 26.998-39.667z"></path>
  </motion.svg>
);

// C# Icon Component
const CSharpIcon = () => (
  <motion.svg 
    viewBox="0 0 128 128" 
    className="w-6 h-6"
    whileHover={{ rotate: 10 }}
  >
    <path fill="#9B4F96" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
    <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c-.8.5-1.9.7-3.1.7-1.2 0-2.3-.3-3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
    <path fill="#fff" d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
  </motion.svg>
);

const projects = [
  {
    id: 'inventoryManagement',
    title: 'Inventory Management',
    description: `A Windows application for inventory management with features to add, update, sell, and validate products. Developed in 2024 using C# GUI and MySQL database. Supports automatic form color switching based on the user's laptop settings, without requiring any code changes.`,
    tags: ['C#', 'Windows Forms', 'MySQL'],
    github: '#',
    live: '#',
    images: [image1, image2, image3, image4, image5],
    icons: [
      { icon: <CSharpIcon />, name: 'C#', color: '#9B4F96' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate: true
  },
  {
    id: 'ecommerceBookstore',
    title: 'E-Commerce Bookstore',
    description: 'Online bookstore with product catalog, shopping cart, and admin dashboard. Built with PHP, JavaScript, and MySQL.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
    github: '#',
    live: '#',
    images: [image6, image7],
    icons: [
      { icon: <BsFiletypePhp className="w-6 h-6" />, name: 'PHP', color: '#777BB4' },
      { icon: <BsFiletypeJs className="w-6 h-6" />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <BsFiletypeHtml className="w-6 h-6" />, name: 'HTML', color: '#E34F26' },
      { icon: <BsFiletypeCss className="w-6 h-6" />, name: 'CSS', color: '#1572B6' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate: true
  },
  {
    id: 'hrmsSystem',
    title: 'HRMS System',
    description: `Human Resource Management System with employee records, attendance tracking, holiday and leave reports, and many other features. Developed with Laravel Jetstream, Inertia.js, Vue.js, and MySQL.`,
    tags: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
    github: '#',
    live: '#',
    images: [image8, image9, image10, image11, image12, image13],
    icons: [
      { icon: <SiLaravel className="w-6 h-6" />, name: 'Laravel', color: '#FF2D20' },
      { icon: <SiVuedotjs className="w-6 h-6" />, name: 'Vue.js', color: '#4FC08D' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate: true
  },
  {
    id: 'carSalesWebsite',
    title: 'Car Sales Website',
    description: `Modern front-end interface for a car sales platform, built with React.js, React Bootstrap, and various npm packages. Features responsive design and vehicle browsing.`,
    tags: ['React', 'JavaScript', 'CSS', 'Responsive', 'Bootstrap'],
    github: '#',
    live: '#',
    images: [image14, image15, image16, image17, image18, image19, image20, image21],
    icons: [
      { icon: <SiReact className="w-6 h-6" />, name: 'React', color: '#61DAFB' },
      { icon: <BsFiletypeJs className="w-6 h-6" />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <BsFiletypeCss className="w-6 h-6" />, name: 'CSS', color: '#1572B6' }
    ],
    isPrivate: true
  },
  {
    id: 'financeTrackingApp',
    title: 'Simple Finance Tracking App',
    description: `A mobile app developed during studies to understand the basics of mobile development. The project allows users to add expenses and income, track the balance, record the date of each transaction, and filter data by date. Built with Android Studio, Kotlin, and SQLite.`,
    tags: ['Android', 'Kotlin', 'SQLite', 'MPAndroidChart'],
    github: '#',
    live: '#',
    images: [image22, image23, android3],
    icons: [
      { icon: <BsAndroid className="w-6 h-6" />, name: 'Android', color: '#3DDC84' },
      { icon: <SiKotlin className="w-6 h-6" />, name: 'Kotlin', color: '#7F52FF' },
      { icon: <BsFiletypeSql className="w-6 h-6" />, name: 'SQLite', color: '#003B57' }
    ],
    isPrivate: true
  },
  {
    id: 'personalPortfolio',
    title: 'Personal Portfolio',
    description: 'Interactive portfolio website with modern animations and responsive design. Built with React and Framer Motion.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive'],
    github: '#',
    live: '#',
    images: [image26],
    icons: [
      { icon: <SiReact className="w-6 h-6" />, name: 'React', color: '#61DAFB' },
      { icon: <SiTailwindcss className="w-6 h-6" />, name: 'Tailwind', color: '#06B6D4' }
    ],
    isPrivate: true
  },
  {
    id: 'brickBreakerGame',
    title: 'Brick Breaker Game',
    description: 'Simple Java game created to explore new technologies and game development concepts.',
    tags: ['Java', 'Game Development', 'OOP'],
    github: '#',
    live: '#',
    images: [image27],
    icons: [
      { icon: <JavaIcon />, name: 'Java', color: '#0074BD' }
    ],
    isPrivate: true
  }
];

const Projects = () => {
  const { languageCode } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const primaryColor = '#6c63ff';

  // Get translations with fallback
  const t = {
    ...translations.en?.projects,
    ...translations[languageCode]?.projects,
    ...translations.en?.common,
    ...translations[languageCode]?.common
  };

  // Get project translations with fallback
  const getProjectTranslations = (projectId) => {
    return {
      title: translations[languageCode]?.projects?.[projectId]?.title || 
             translations.en?.projects?.[projectId]?.title || 
             projects.find(p => p.id === projectId)?.title,
      description: translations[languageCode]?.projects?.[projectId]?.description || 
                  translations.en?.projects?.[projectId]?.description || 
                  projects.find(p => p.id === projectId)?.description
    };
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      (prev + 1) % selectedProject.images.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const handleLinkClick = (e, link, isPrivate) => {
    e.stopPropagation();
    
    if (link === '#' || isPrivate) {
      setShowAccessDialog(true);
      e.preventDefault();
    }
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section 
      id="projects" 
      className="min-vh-100 bg-dark text-light py-5 position-relative overflow-hidden"
      aria-label={t.ariaLabel}
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white mb-5 display-4 fw-bold"
      >
        {t.title}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-3"
          style={{ 
            height: '4px',
            background: `linear-gradient(to right, ${primaryColor}, #6366f1)`
          }}
        />
      </motion.h2>

      <div className="container">
        <div className="row g-4">
          {displayedProjects.map((project, index) => {
            const projectT = getProjectTranslations(project.id);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-lg-4 col-md-6"
              >
                <motion.div 
                  className="h-100 bg-gray-900 border border-gray-800 rounded-4 overflow-hidden shadow-lg hover-shadow-xl transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => openProjectModal(project)}
                >
                  {/* Project Image */}
                  <div 
                    className="position-relative overflow-hidden" 
                    style={{ 
                      height: '200px',
                      background: `url(${project.images[0]}) center/cover no-repeat`
                    }}
                  >
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-50 hover-bg-opacity-30 transition-all">
                      <BsCodeSlash className="text-white-50" size={40} />
                    </div>
                  </div>
                  
                  <div className="p-4 position-relative">
                    {/* Project Title and Links */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="text-white fw-bold mb-0">{projectT.title}</h3>
                      <div className="d-flex gap-2">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover-text-cyan-400 transition-colors"
                          aria-label={t.githubLink}
                          onClick={(e) => handleLinkClick(e, project.github, project.isPrivate)}
                        >
                          <FiGithub size={20} />
                        </a>
                        {project.live && (
                          <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover-text-purple-400 transition-colors"
                            aria-label={t.liveLink}
                            onClick={(e) => handleLinkClick(e, project.live, project.isPrivate)}
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-gray-300 mb-4">{projectT.description}</p>
                    
                    {/* Technology Icons */}
                    <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
                      {project.icons.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 1 }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -3,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                          }}
                          className="d-flex flex-column align-items-center"
                          title={tech.name}
                          style={{ width: '70px' }}
                        >
                          <motion.div 
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ 
                              backgroundColor: '#2A2A3A',
                              border: `2px solid ${tech.color}`,
                              boxShadow: `0 4px 15px ${tech.color}30`,
                              width: '50px',
                              height: '50px'
                            }}
                            whileHover={{ rotate: 10 }}
                          >
                            {tech.icon}
                          </motion.div>
                          <motion.small 
                            className="text-xs mt-2 text-center"
                            style={{ color: tech.color }}
                          >
                            {tech.name}
                          </motion.small>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Project Tags */}
                    <div className="d-flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ y: -2 }}
                          className="badge bg-gray-800 text-cyan-400 border border-gray-700 rounded-pill px-3 py-2"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View More/Less Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-5"
        >
          <motion.button 
            className="btn btn-lg border-0 text-white rounded-pill px-4 py-3 fw-semibold hover-shadow-lg transition-all"
            style={{ 
              background: primaryColor,
              boxShadow: `0 4px 15px ${primaryColor}80`
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 5px 20px ${primaryColor}`
            }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleShowAllProjects}
            aria-label={showAllProjects ? t.viewLess : t.viewAll}
          >
            {showAllProjects ? t.viewLess : t.viewAll}
          </motion.button>
        </motion.div>
      </div>

      {/* Access Request Dialog */}
      <AnimatePresence>
        {showAccessDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9999,
              backdropFilter: 'blur(5px)'
            }}
          >
            <motion.div 
              className="bg-gray-900 rounded-4 p-4 shadow-xl"
              style={{ 
                maxWidth: '500px',
                width: '90%'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="text-white mb-0">
                  <FiMail className="me-2" />
                  {t.accessRequest}
                </h3>
                <button 
                  onClick={() => setShowAccessDialog(false)}
                  className="btn btn-sm btn-dark"
                  aria-label={t.close || "Close dialog"}
                >
                  <FiX size={20} />
                </button>
              </div>

              <p className="text-gray-300 mb-4">
                {t.privateProjectMessage}
              </p>

              <div className="d-flex justify-content-end">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-primary rounded-pill px-4"
                  style={{ background: primaryColor }}
                  onClick={() => setShowAccessDialog(false)}
                >
                  {t.contactMe}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9999,
              backdropFilter: 'blur(5px)'
            }}
            onClick={closeProjectModal}
          >
            <motion.div 
              className="position-relative bg-gray-900 rounded-4 overflow-hidden shadow-xl"
              style={{ 
                maxWidth: '90%', 
                maxHeight: '90vh',
                width: '900px',
                display: 'flex',
                flexDirection: 'column'
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content */}
              <motion.button
                onClick={closeProjectModal}
                className="position-absolute top-0 end-0 m-3 bg-gray-800 border-0 text-white fs-4 rounded-circle p-2"
                style={{ 
                  zIndex: 1000, 
                  width: '40px', 
                  height: '40px',
                  color: primaryColor
                }}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: 'rgba(108, 99, 255, 0.2)'
                }}
                aria-label={t.close || "Close modal"}
              >
                <FiX />
              </motion.button>

              {/* Image container */}
              <div className="position-relative" style={{ 
                height: '60vh',
                minHeight: '400px',
                overflow: 'hidden',
                backgroundColor: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <motion.div
                  key={currentImageIndex}
                  className="w-100 h-100 d-flex align-items-center justify-content-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={getProjectTranslations(selectedProject.id).title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      padding: '20px'
                    }}
                  />
                </motion.div>

                {selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="position-absolute top-50 start-0 translate-middle-y ms-3 bg-gray-800 bg-opacity-70 border-0 text-white fs-4 rounded-circle p-2"
                      style={{ color: primaryColor }}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: 'rgba(108, 99, 255, 0.2)'
                      }}
                      aria-label={t.prevImage}
                    >
                      <FiChevronLeft />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="position-absolute top-50 end-0 translate-middle-y me-3 bg-gray-800 bg-opacity-70 border-0 text-white fs-4 rounded-circle p-2"
                      style={{ color: primaryColor }}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: 'rgba(108, 99, 255, 0.2)'
                      }}
                      aria-label={t.nextImage}
                    >
                      <FiChevronRight />
                    </motion.button>
                  </>
                )}
              </div>

              <div className="p-4" style={{ flex: '0 0 auto', overflowY: 'auto', maxHeight: '30vh' }}>
                <h3 className="text-white fw-bold mb-3">{getProjectTranslations(selectedProject.id).title}</h3>
                <p className="text-gray-300 mb-4">{getProjectTranslations(selectedProject.id).description}</p>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                    <motion.a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover-text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      aria-label={t.viewCode}
                      onClick={(e) => handleLinkClick(e, selectedProject.github, selectedProject.isPrivate)}
                    >
                      <FiGithub size={24} />
                    </motion.a>
                    {selectedProject.live && (
                      <motion.a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover-text-purple-400 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        aria-label={t.viewLive}
                        onClick={(e) => handleLinkClick(e, selectedProject.live, selectedProject.isPrivate)}
                      >
                        <FiExternalLink size={24} />
                      </motion.a>
                    )}
                  </div>
                  
                  <div className="text-center">
                    {selectedProject.images.map((_, index) => (
                      <motion.span
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                        className="d-inline-block mx-1 rounded-circle cursor-pointer"
                        style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: currentImageIndex === index ? primaryColor : '#6c757d'
                        }}
                        whileHover={{ scale: 1.3 }}
                        aria-label={`${t.image} ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;