import React, { useState, useContext, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight,
  FiMail,
  FiFilter,
  FiCode
} from 'react-icons/fi';
import { Link } from 'react-scroll';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations.Projects';
import ThemeContext from '../../contexts/ThemeContext';

// Import images (i njëjti si më parë)
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

// Bootstrap icons
import { 
  BsCodeSlash, 
  BsFiletypePhp, 
  BsFiletypeJs, 
  BsFiletypeHtml, 
  BsAndroid, 
  BsFiletypeSql, 
  BsLaptop, 
  BsPhone,
  BsMicrosoft
} from 'react-icons/bs';
import { 
  SiLaravel, 
  SiReact, 
  SiMysql, 
  SiTailwindcss, 
  SiKotlin, 
  SiVuedotjs,
} from 'react-icons/si';

// Color schemes for light and dark modes
const colorSchemes = {
  dark: {
    primary: '#6c63ff',
    secondary: '#8a85ff',
    text: '#ffffff',
    mutedText: '#a8b3cc',
    background: '#000000',
    cardBackground: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    cardBorder: '1px solid rgba(108, 99, 255, 0.2)',
    buttonBackground: '#6c63ff',
    buttonHover: '#5a52d6',
    buttonText: '#ffffff',
    outlineButtonBorder: '2px solid #6c63ff',
    outlineButtonText: '#6c63ff',
    outlineButtonHoverBackground: '#6c63ff',
    outlineButtonHoverText: '#ffffff',
    filterBackground: '#1a1a1a',
    modalBackground: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    badgeBackground: '#2d2d2d',
    badgeText: '#e2e8f0',
    badgeBorder: '#4a5568',
    overlayBackground: 'rgba(0,0,0,0.95)',
    technologyIconBackground: '#2d2d2d'
  },
  light: {
    primary: '#6c63ff',
    secondary: '#8b5cf6',
    text: '#333333',
    mutedText: '#666666',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
    cardBackground: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    cardBorder: '1px solid rgba(108, 99, 255, 0.15)',
    buttonBackground: '#6c63ff',
    buttonHover: '#5a52d6',
    buttonText: '#ffffff',
    outlineButtonBorder: '2px solid #6c63ff',
    outlineButtonText: '#6c63ff',
    outlineButtonHoverBackground: '#6c63ff',
    outlineButtonHoverText: '#ffffff',
    filterBackground: '#f8f9fa',
    modalBackground: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    badgeBackground: '#f8f9fa',
    badgeText: '#495057',
    badgeBorder: '#dee2e6',
    overlayBackground: 'rgba(255,255,255,0.95)',
    technologyIconBackground: '#ffffff'
  }
};

const projects = [
  {
    id: 'inventoryManagement',
    title: 'Inventory Management',
    description: `A Windows application for inventory management with features to add, update, sell, and validate products. Developed in 2024 using C# GUI and MySQL database. Supports automatic form color switching based on the user's laptop settings.`,
    tags: ['C#', 'Windows Forms', 'MySQL'],
    github: '#',
    live: '#',
    images: [image1, image2, image3, image4, image5],
    technologies: ['C#', 'Windows Forms', 'MySQL'],
    icons: [
      { icon: <BsMicrosoft className="w-6 h-6" />, name: 'Windows Forms', color: '#0078D4' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate: true,
    type: 'desktop'
  },
  {
    id: 'ecommerceBookstore',
    title: 'E-Commerce Bookstore',
    description: 'Online bookstore with product catalog, shopping cart, and admin dashboard. Built with PHP, JavaScript, and MySQL.',
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
    github: '#',
    live: '#',
    images: [image6, image7],
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    icons: [
      { icon: <BsFiletypePhp className="w-6 h-6" />, name: 'PHP', color: '#777BB4' },
      { icon: <BsFiletypeJs className="w-6 h-6" />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <BsFiletypeHtml className="w-6 h-6" />, name: 'HTML/CSS', color: '#E34F26' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate: true,
    type: 'web'
  },
  {
    id: 'hrmsSystem',
    title: 'HRMS System',
    description: `Human Resource Management System with employee records, attendance tracking, holiday and leave reports, and many other features. Developed with Laravel Jetstream, Inertia.js, Vue.js, and MySQL.`,
    tags: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
    github: 'https://github.com/ElsaImeri/hrms',
    live: '#',
    images: [image8, image9, image10, image11, image12, image13],
    technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL'],
    icons: [
      { icon: <SiLaravel className="w-6 h-6" />, name: 'Laravel', color: '#FF2D20' },
      { icon: <SiVuedotjs className="w-6 h-6" />, name: 'Vue.js', color: '#4FC08D' },
      { icon: <SiMysql className="w-6 h-6" />, name: 'MySQL', color: '#4479A1' }
    ],
    isPrivate:false,
    type: 'web'
  },
  {
    id: 'carSalesWebsite',
    title: 'Car Sales Website',
    description: `Modern front-end interface for a car sales platform, built with React.js, React Bootstrap, and various npm packages. Features responsive design and vehicle browsing.`,
    tags: ['React', 'JavaScript', 'CSS', 'Responsive', 'Bootstrap'],
    github: '#',
    live: '#',
    images: [image14, image15, image16, image17, image18, image19, image20, image21],
    technologies: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
    icons: [
      { icon: <SiReact className="w-6 h-6" />, name: 'React', color: '#61DAFB' },
      { icon: <BsFiletypeJs className="w-6 h-6" />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiTailwindcss className="w-6 h-6" />, name: 'CSS', color: '#06B6D4' }
    ],
    isPrivate: true,
    type: 'web'
  },
  {
    id: 'financeTrackingApp',
    title: 'Simple Finance Tracking App',
    description: `A mobile app developed during studies to understand the basics of mobile development. The project allows users to add expenses and income, track the balance, record the date of each transaction, and filter data by date. Built with Android Studio, Kotlin, and SQLite.`,
    tags: ['Android', 'Kotlin', 'SQLite', 'MPAndroidChart'],
    github: '#',
    live: '#',
    images: [image22, image23, android3],
    technologies: ['Android', 'Kotlin', 'SQLite'],
    icons: [
      { icon: <BsAndroid className="w-6 h-6" />, name: 'Android', color: '#3DDC84' },
      { icon: <SiKotlin className="w-6 h-6" />, name: 'Kotlin', color: '#7F52FF' },
      { icon: <BsFiletypeSql className="w-6 h-6" />, name: 'SQLite', color: '#003B57' }
    ],
    isPrivate: true,
    type: 'mobile'
  },
  {
    id: 'personalPortfolio',
    title: 'Personal Portfolio',
    description: 'Interactive portfolio website with modern animations and responsive design. Built with React and Framer Motion.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive'],
    github: '#',
    live: '#',
    images: [image26],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    icons: [
      { icon: <SiReact className="w-6 h-6" />, name: 'React', color: '#61DAFB' },
      { icon: <SiTailwindcss className="w-6 h-6" />, name: 'Tailwind CSS', color: '#06B6D4' }
    ],
    isPrivate: true,
    type: 'web'
  },
  {
    id: 'brickBreakerGame',
    title: 'Brick Breaker Game',
    description: 'Simple Java game created to explore new technologies and game development concepts.',
    tags: ['Java', 'Game Development', 'OOP'],
    github: 'https://github.com/ElsaImeri/BrickBreaker',
    live: '#',
    images: [image27],
    technologies: ['Java'],
    icons: [
    ],
    isPrivate: false,
    type: 'desktop'
  }
];

// Enhanced technology categories with improved mapping
const technologyCategories = [
  { id: 'all', name: 'All', icon: <BsCodeSlash />, color: '#6c63ff' },
  { id: 'csharp', name: 'C#', icon: <BsMicrosoft />, color: '#9B4F96' },
  { id: 'php', name: 'PHP', icon: <BsFiletypePhp />, color: '#777BB4' },
  { id: 'laravel', name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
  { id: 'react', name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { id: 'vue', name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
  { id: 'android', name: 'Android', icon: <BsAndroid />, color: '#3DDC84' },
  { id: 'javascript', name: 'JavaScript', icon: <BsFiletypeJs />, color: '#F7DF1E' },
  { id: 'java', name: 'Java', icon: <BsCodeSlash />, color: '#ED8B00' },
  { id: 'mysql', name: 'MySQL', icon: <SiMysql />, color: '#4479A1' }
];

const projectTypeCategories = [
  { id: 'all', name: 'All Types', icon: <BsCodeSlash />, color: '#6c63ff' },
  { id: 'web', name: 'Web Apps', icon: <BsLaptop />, color: '#10B981' },
  { id: 'mobile', name: 'Mobile Apps', icon: <BsPhone />, color: '#8B5CF6' },
  { id: 'desktop', name: 'Desktop Apps', icon: <BsLaptop />, color: '#F59E0B' }
];

const Projects = () => {
  const { languageCode } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const [activeTechFilter, setActiveTechFilter] = useState('all');
  const [activeTypeFilter, setActiveTypeFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Use memo for color scheme
  const colorScheme = useMemo(() => 
    isDarkMode ? colorSchemes.dark : colorSchemes.light, 
    [isDarkMode]
  );

  // Enhanced translations function with fallbacks for all texts
  const getTranslations = () => {
    const projectTranslations = translations[languageCode]?.projects || translations.en?.projects;
    const commonTranslations = translations[languageCode]?.common || translations.en?.common;
    
    return {
      // Project section texts
      title: projectTranslations?.title || "My Projects",
      ariaLabel: projectTranslations?.ariaLabel || "Projects Section",
      filterByTech: projectTranslations?.filterByTech || "Filter Projects",
      byTechnology: projectTranslations?.byTechnology || "By Technology",
      byProjectType: projectTranslations?.byProjectType || "By Project Type",
      activeFilters: projectTranslations?.activeFilters || "Active filters",
      clearAll: projectTranslations?.clearAll || "Clear All",
      showFilters: projectTranslations?.showFilters || "Show Filters",
      hideFilters: projectTranslations?.hideFilters || "Hide Filters",
      
      // Project states
      noProjectsFound: projectTranslations?.noProjectsFound || "No projects found",
      adjustFilters: projectTranslations?.adjustFilters || "Try adjusting your filters to see more projects",
      showAllProjects: projectTranslations?.showAllProjects || "Show All Projects",
      viewLessProjects: projectTranslations?.viewLessProjects || "View Less Projects",
      viewAllProjects: projectTranslations?.viewAllProjects || `View All {count} Projects`,
      
      // Modal texts
      requestAccess: projectTranslations?.requestAccess || "Request Access",
      privateProject: projectTranslations?.privateProject || "This project is private. Contact me to request access and learn more about this work.",
      maybeLater: projectTranslations?.maybeLater || "Maybe Later",
      contactNow: projectTranslations?.contactNow || "Contact Now",
      technologyStack: projectTranslations?.technologyStack || "Technology Stack",
      viewDetails: projectTranslations?.viewDetails || "View Details",
      close: projectTranslations?.close || "Close",
      nextImage: projectTranslations?.nextImage || "Next Image",
      prevImage: projectTranslations?.prevImage || "Previous Image",
      
      // Common texts
      code: commonTranslations?.code || "Code",
      live: commonTranslations?.live || "Live",
      all: commonTranslations?.all || "All",
      web: commonTranslations?.web || "Web",
      mobile: commonTranslations?.mobile || "Mobile",
      desktop: commonTranslations?.desktop || "Desktop",
      private: commonTranslations?.private || "Private",
      public: commonTranslations?.public || "Public"
    };
  };

  const t = getTranslations();

  // Enhanced project translations with better fallbacks
  const getProjectTranslations = (projectId) => {
    const projectData = projects.find(p => p.id === projectId);
    const projectTranslations = translations[languageCode]?.projects?.[projectId] || translations.en?.projects?.[projectId];
    
    return {
      title: projectTranslations?.title || projectData?.title,
      description: projectTranslations?.description || projectData?.description,
      tags: projectTranslations?.tags || projectData?.tags
    };
  };

  // CORRECTED filter logic - Fixed Java/JavaScript issue
  useEffect(() => {
    let filtered = projects;

    // Apply technology filter
    if (activeTechFilter !== 'all') {
      filtered = filtered.filter(project => {
        const techMap = {
          'csharp': ['C#'],
          'php': ['PHP'],
          'laravel': ['Laravel'],
          'react': ['React'],
          'vue': ['Vue.js'],
          'android': ['Android'],
          'java': ['Java'],
          'javascript': ['JavaScript'],
          'mysql': ['MySQL']
        };

        const targetTechs = techMap[activeTechFilter] || [];
        return targetTechs.some(tech => 
          project.technologies.some(projectTech => 
            projectTech.toLowerCase().includes(tech.toLowerCase())
          )
        );
      });
    }

    // Apply type filter
    if (activeTypeFilter !== 'all') {
      filtered = filtered.filter(project => project.type === activeTypeFilter);
    }

    setFilteredProjects(filtered);
  }, [activeTechFilter, activeTypeFilter]);

  // Function to handle external links opening in new tab
  const handleExternalLink = (e, url, isPrivate = false) => {
    e.stopPropagation();
    
    if (url === '#' || isPrivate) {
      setShowAccessDialog(true);
      e.preventDefault();
      return;
    }
    
    // Open valid external links in new tab
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
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
    
    if (showAllProjects) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  // Enhanced Modern Filter Button Component with translations
  const FilterButton = ({ category, isActive, onClick, type = 'tech' }) => {
    // Get translated category name
    const getTranslatedName = () => {
      if (category.id === 'all') return t.all;
      if (category.id === 'web') return t.web;
      if (category.id === 'mobile') return t.mobile;
      if (category.id === 'desktop') return t.desktop;
      return category.name;
    };

    return (
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`btn rounded-pill d-flex align-items-center px-4 py-3 border-0 position-relative overflow-hidden ${
          isActive ? 'fw-bold' : 'fw-medium'
        }`}
        onClick={onClick}
        style={{
          background: isActive 
            ? `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
            : 'transparent',
          color: isActive ? 'white' : colorScheme.text,
          border: `2px solid ${category.color}`,
          boxShadow: isActive 
            ? `0 8px 25px ${category.color}60, 0 4px 6px rgba(0,0,0,0.1)` 
            : `0 4px 15px ${category.color}20`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(10px)',
          fontWeight: isActive ? 600 : 500
        }}
      >
        <span 
          className="me-3" 
          style={{ 
            fontSize: '1.3rem', 
            filter: isActive ? 'brightness(0) invert(1)' : 'none',
            color: isActive ? 'white' : category.color 
          }}
        >
          {category.icon}
        </span>
        <span style={{ fontSize: '1rem', color: isActive ? 'white' : colorScheme.text }}>
          {getTranslatedName()}
        </span>
        
        {isActive && (
          <motion.div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)`,
              zIndex: 1
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <section 
      id="projects" 
      className="min-vh-100 py-5 position-relative overflow-hidden"
      style={{ 
        background: colorScheme.background,
        transition: 'all 0.3s ease'
      }}
      aria-label={t.ariaLabel}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${colorScheme.primary}20 0%, transparent 70%)`,
            top: '10%',
            left: '10%',
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${colorScheme.secondary}15 0%, transparent 70%)`,
            bottom: '20%',
            right: '15%',
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-5 display-4 fw-bold position-relative"
        style={{ 
          color: colorScheme.text,
          transition: 'color 0.3s ease'
        }}
      >
        {t.title}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-3"
          style={{ 
            height: '4px',
            background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.secondary})`,
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        />
      </motion.h2>

      {/* Enhanced Modern Filter Section */}
      <motion.div 
        className="container mb-5 position-relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Improved Filter Header with Glass Morphism */}
        <motion.div 
          className="glass-card rounded-4 p-4 mb-5"
          style={{
            background: isDarkMode 
              ? 'rgba(26, 26, 26, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colorScheme.primary}20`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.1)`
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <motion.h3 
              className="mb-0 d-flex align-items-center fs-2 fw-bold"
              style={{ 
                color: colorScheme.text,
                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <FiFilter className="me-3" /> 
              {t.filterByTech}
            </motion.h3>
            <motion.button 
              className="btn d-md-none rounded-pill px-4 py-2 fw-bold"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                color: 'white',
                border: 'none',
                boxShadow: `0 4px 15px ${colorScheme.primary}40`
              }}
            >
              {isFilterOpen ? t.hideFilters : t.showFilters}
              <FiFilter className="ms-2" />
            </motion.button>
          </div>
          
          <div className={`row g-4 ${isFilterOpen ? 'd-block' : 'd-none d-md-block'}`}>
            {/* Technology Filters */}
            <div className="col-12">
              <motion.h4 
                className="mb-4 d-flex align-items-center fs-4 fw-semibold"
                style={{ 
                  color: colorScheme.text,
                }}
              >
                <BsCodeSlash className="me-3" style={{ color: colorScheme.primary }} />
                {t.byTechnology}
              </motion.h4>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {technologyCategories.map((category) => (
                  <FilterButton
                    key={category.id}
                    category={category}
                    isActive={activeTechFilter === category.id}
                    onClick={() => setActiveTechFilter(category.id)}
                  />
                ))}
              </div>
            </div>
            
            {/* Project Type Filters */}
            <div className="col-12">
              <motion.h4 
                className="mb-4 d-flex align-items-center fs-4 fw-semibold"
                style={{ 
                  color: colorScheme.text,
                }}
              >
                <BsLaptop className="me-3" style={{ color: colorScheme.primary }} />
                {t.byProjectType}
              </motion.h4>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                {projectTypeCategories.map((category) => (
                  <FilterButton
                    key={category.id}
                    category={category}
                    isActive={activeTypeFilter === category.id}
                    onClick={() => setActiveTypeFilter(category.id)}
                    type="type"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(activeTechFilter !== 'all' || activeTypeFilter !== 'all') && (
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
                <span className="me-2" style={{ color: colorScheme.text }}>
                  {t.activeFilters}:
                </span>
                {activeTechFilter !== 'all' && (
                  <motion.span 
                    className="badge fs-6 px-3 py-2 d-flex align-items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ 
                      background: `linear-gradient(135deg, ${technologyCategories.find(t => t.id === activeTechFilter)?.color}, ${technologyCategories.find(t => t.id === activeTechFilter)?.color}dd)`,
                      color: 'white',
                      boxShadow: `0 4px 15px ${technologyCategories.find(t => t.id === activeTechFilter)?.color}40`
                    }}
                  >
                    {technologyCategories.find(t => t.id === activeTechFilter)?.icon}
                    <span className="ms-2">{technologyCategories.find(t => t.id === activeTechFilter)?.name}</span>
                  </motion.span>
                )}
                {activeTypeFilter !== 'all' && (
                  <motion.span 
                    className="badge fs-6 px-3 py-2 d-flex align-items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{ 
                      background: `linear-gradient(135deg, ${projectTypeCategories.find(t => t.id === activeTypeFilter)?.color}, ${projectTypeCategories.find(t => t.id === activeTypeFilter)?.color}dd)`,
                      color: 'white',
                      boxShadow: `0 4px 15px ${projectTypeCategories.find(t => t.id === activeTypeFilter)?.color}40`
                    }}
                  >
                    {projectTypeCategories.find(t => t.id === activeTypeFilter)?.icon}
                    <span className="ms-2">{projectTypeCategories.find(t => t.id === activeTypeFilter)?.name}</span>
                  </motion.span>
                )}
                <motion.button
                  className="btn btn-sm ms-2 d-flex align-items-center"
                  onClick={() => {
                    setActiveTechFilter('all');
                    setActiveTypeFilter('all');
                  }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    border: `1px solid ${colorScheme.text}40`,
                    color: colorScheme.text,
                    backgroundColor: 'transparent',
                  }}
                >
                  <FiX className="me-1" />
                  {t.clearAll}
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div className="container position-relative">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div 
              className="row g-4"
              key={`${activeTechFilter}-${activeTypeFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayedProjects.map((project, index) => {
                const projectT = getProjectTranslations(project.id);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="col-lg-4 col-md-6"
                  >
                    <motion.div 
                      className="h-100 border-0 rounded-4 overflow-hidden shadow-lg cursor-pointer position-relative glass-card"
                      style={{ 
                        background: isDarkMode 
                          ? 'rgba(26, 26, 26, 0.6)' 
                          : 'rgba(255, 255, 255, 0.6)',
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${colorScheme.primary}15`,
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        y: -8,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      onClick={() => openProjectModal(project)}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      {/* Project Image with Enhanced Hover */}
                      <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                        <motion.img
                          src={project.images[0]}
                          alt={projectT.title}
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                        
                        {/* Enhanced Hover Overlay with Description */}
                        <motion.div 
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{ 
                            background: `linear-gradient(135deg, ${colorScheme.primary}40, ${colorScheme.secondary}40)`,
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <motion.div 
                            className="text-center w-100"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-3 mb-3"
                              style={{ 
                                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})` 
                              }}>
                              <FiCode size={24} color="white" />
                            </div>
                            
                            {/* Project Description on Hover */}
                            <motion.div 
                              className="mt-2 p-3 rounded-3 glass-card"
                              style={{
                                background: isDarkMode 
                                  ? 'rgba(26, 26, 26, 0.8)' 
                                  : 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                maxHeight: '120px',
                                overflow: 'hidden'
                              }}
                            >
                              <p className="small mb-0 text-start" style={{ 
                                color: colorScheme.text,
                                lineHeight: '1.4',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                              }}>
                                {projectT.description}
                              </p>
                            </motion.div>
                            
                            <motion.div 
                              className="mt-3"
                              initial={{ scale: 0 }}
                              whileHover={{ scale: 1 }}
                            >
                              <span className="badge fs-6 px-3 py-2 fw-bold" style={{ 
                                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                                color: 'white',
                              }}>
                                {t.viewDetails}
                              </span>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                        
                        {/* Project Type Badge */}
                        <div className="position-absolute top-0 end-0 m-3">
                          <motion.span 
                            className="badge px-3 py-2 fw-bold glass-card"
                            whileHover={{ scale: 1.1 }}
                            style={{ 
                              background: `linear-gradient(135deg, ${projectTypeCategories.find(t => t.id === project.type)?.color}, ${projectTypeCategories.find(t => t.id === project.type)?.color}dd)`,
                              color: 'white',
                              backdropFilter: 'blur(10px)',
                              border: `1px solid rgba(255,255,255,0.2)`
                            }}
                          >
                            {project.type.toUpperCase()}
                          </motion.span>
                        </div>

                        {/* Private/Public Badge */}
                        <div className="position-absolute top-0 start-0 m-3">
                          <motion.span 
                            className="badge px-3 py-2 fw-bold glass-card"
                            whileHover={{ scale: 1.1 }}
                            style={{ 
                              background: project.isPrivate 
                                ? `linear-gradient(135deg, #ef4444, #dc2626)` 
                                : `linear-gradient(135deg, #10b981, #059669)`,
                              color: 'white',
                              backdropFilter: 'blur(10px)',
                              border: `1px solid rgba(255,255,255,0.2)`
                            }}
                          >
                            {project.isPrivate ? t.private : t.public}
                          </motion.span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        {/* Project Title and Links */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h3 className="fw-bold mb-0 fs-5" style={{ 
                            color: colorScheme.text,
                          }}>
                            {projectT.title}
                          </h3>
                          <div className="d-flex gap-2">
                            <motion.button 
                              className="btn btn-sm rounded-circle p-2"
                              style={{ 
                                backgroundColor: `${colorScheme.primary}15`,
                                color: colorScheme.primary,
                                border: `1px solid ${colorScheme.primary}30`
                              }}
                              whileHover={{ scale: 1.3, backgroundColor: colorScheme.primary, color: 'white' }}
                              onClick={(e) => handleExternalLink(e, project.github, project.isPrivate)}
                              title={t.code}
                            >
                              <FiGithub size={16} />
                            </motion.button>
                            {project.live && (
                              <motion.button 
                                className="btn btn-sm rounded-circle p-2"
                                style={{ 
                                  backgroundColor: `${colorScheme.primary}15`,
                                  color: colorScheme.primary,
                                  border: `1px solid ${colorScheme.primary}30`
                                }}
                                whileHover={{ scale: 1.3, backgroundColor: colorScheme.primary, color: 'white' }}
                                onClick={(e) => handleExternalLink(e, project.live, project.isPrivate)}
                                title={t.live}
                              >
                                <FiExternalLink size={16} />
                              </motion.button>
                            )}
                          </div>
                        </div>
                        
                        {/* Enhanced Technology Icons */}
                        <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
                          {project.icons.map((tech, i) => (
                            <motion.div
                              key={i}
                              className="d-flex flex-column align-items-center position-relative"
                              whileHover={{ 
                                scale: 1.2,
                                y: -5,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                              }}
                              title={tech.name}
                            >
                              <motion.div 
                                className="rounded-circle d-flex align-items-center justify-content-center p-3 glass-card"
                                style={{ 
                                  background: isDarkMode 
                                    ? 'rgba(45, 45, 45, 0.8)' 
                                    : 'rgba(255, 255, 255, 0.8)',
                                  backdropFilter: 'blur(10px)',
                                  border: `2px solid ${tech.color}40`,
                                  boxShadow: `0 8px 25px ${tech.color}20`,
                                  transition: 'all 0.3s ease'
                                }}
                                whileHover={{ 
                                  rotate: 360,
                                  boxShadow: `0 12px 35px ${tech.color}40`,
                                  border: `2px solid ${tech.color}`
                                }}
                                transition={{ duration: 0.5 }}
                              >
                                <span style={{ color: tech.color }}>
                                  {tech.icon}
                                </span>
                              </motion.div>
                              <motion.span 
                                className="mt-1 small fw-medium text-center"
                                style={{ color: colorScheme.text }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                              >
                                {tech.name}
                              </motion.span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Project Tags */}
                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                          {(projectT.tags || project.tags).slice(0, 3).map((tag, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ y: -2, scale: 1.05 }}
                              className="badge rounded-pill px-3 py-2 fw-medium glass-card"
                              style={{ 
                                background: isDarkMode 
                                  ? 'rgba(45, 45, 45, 0.6)' 
                                  : 'rgba(248, 249, 250, 0.6)',
                                backdropFilter: 'blur(10px)',
                                color: colorScheme.text,
                                border: `1px solid ${colorScheme.primary}20`,
                                transition: 'all 0.3s ease'
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                          {(projectT.tags || project.tags).length > 3 && (
                            <motion.span 
                              className="badge rounded-pill px-3 py-2 fw-bold"
                              whileHover={{ scale: 1.1 }}
                              style={{ 
                                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                                color: 'white',
                                boxShadow: `0 4px 15px ${colorScheme.primary}40`
                              }}
                            >
                              +{(projectT.tags || project.tags).length - 3}
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="glass-card rounded-4 p-5 mx-auto" style={{ maxWidth: '500px' }}>
                <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center p-4 mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})` 
                  }}>
                  <FiFilter size={32} color="white" />
                </div>
                <h4 className="mb-3 fw-bold" style={{ 
                  color: colorScheme.text,
                }}>
                  {t.noProjectsFound}
                </h4>
                <p className="mb-4 fs-5" style={{ 
                  color: colorScheme.mutedText,
                }}>
                  {t.adjustFilters}
                </p>
                <motion.button 
                  className="btn rounded-pill px-4 py-2 fw-bold"
                  onClick={() => {
                    setActiveTechFilter('all');
                    setActiveTypeFilter('all');
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    color: 'white',
                    border: 'none',
                    boxShadow: `0 6px 20px ${colorScheme.primary}40`
                  }}
                >
                  {t.showAllProjects}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced View More/Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div className="text-center mt-5">
            <motion.button 
              className="btn btn-lg border-0 rounded-pill px-5 py-3 fw-bold position-relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                boxShadow: `0 8px 30px ${colorScheme.primary}50`,
                color: 'white',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 12px 40px ${colorScheme.primary}70`,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleShowAllProjects}
            >
              <span className="position-relative z-2 d-flex align-items-center justify-content-center">
                {showAllProjects ? (
                  <>
                    <FiChevronLeft className="me-2" />
                    {t.viewLessProjects}
                  </>
                ) : (
                  <>
                    {t.viewAllProjects.replace('{count}', filteredProjects.length)}
                    <FiChevronRight className="ms-2" />
                  </>
                )}
              </span>
              
              {/* Animated gradient overlay */}
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ 
                  background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Access Request Dialog */}
      <AnimatePresence>
        {showAccessDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{ zIndex: 9999 }}
          >
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ 
                backgroundColor: colorScheme.overlayBackground,
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setShowAccessDialog(false)}
            />
            
            <motion.div 
              className="rounded-4 p-5 position-relative glass-card"
              style={{ 
                maxWidth: '500px',
                width: '90%',
                background: isDarkMode 
                  ? 'rgba(26, 26, 26, 0.8)' 
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(30px)',
                border: `2px solid ${colorScheme.primary}30`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
                transition: 'all 0.3s ease'
              }}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    boxShadow: `0 8px 25px ${colorScheme.primary}40`
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <FiMail size={32} color="white" />
                </motion.div>
                <h3 className="fw-bold mb-3" style={{ 
                  color: colorScheme.text,
                }}>
                  {t.requestAccess}
                </h3>
              </div>

              <p className="text-center mb-4 fs-5" style={{ 
                color: colorScheme.text,
              }}>
                {t.privateProject}
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <motion.button
                  onClick={() => setShowAccessDialog(false)}
                  className="btn rounded-pill px-4 py-2 fw-bold glass-card"
                  style={{ 
                    border: `2px solid ${colorScheme.primary}50`,
                    color: colorScheme.text,
                    background: 'transparent',
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: `${colorScheme.primary}15` }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.maybeLater}
                </motion.button>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn rounded-pill px-4 py-2 fw-bold text-decoration-none"
                  style={{ 
                    background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                    color: 'white', 
                    border: 'none',
                    boxShadow: `0 6px 20px ${colorScheme.primary}40`
                  }}
                  onClick={() => setShowAccessDialog(false)}
                >
                  {t.contactNow}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed-top w-100 h-100 d-flex align-items-center justify-content-center p-3"
            style={{ zIndex: 9998 }}
          >
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ 
                backgroundColor: colorScheme.overlayBackground,
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease'
              }}
              onClick={closeProjectModal}
            />
            
            <motion.div 
              className="position-relative rounded-4 overflow-hidden d-flex flex-column glass-card"
              style={{ 
                maxWidth: '95%', 
                maxHeight: '95vh',
                width: '1000px',
                background: isDarkMode 
                  ? 'rgba(26, 26, 26, 0.9)' 
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(30px)',
                border: `2px solid ${colorScheme.primary}30`,
                boxShadow: `0 25px 50px rgba(0,0,0,0.3)`,
                transition: 'all 0.3s ease'
              }}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeProjectModal}
                className="position-absolute top-0 end-0 m-4 border-0 rounded-circle p-2 z-3 glass-card"
                style={{ 
                  width: '50px', 
                  height: '50px',
                  background: isDarkMode 
                    ? 'rgba(45, 45, 45, 0.8)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  color: colorScheme.primary,
                  border: `2px solid ${colorScheme.primary}30`,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: colorScheme.primary,
                  color: 'white'
                }}
                title={t.close}
              >
                <FiX size={24} />
              </motion.button>

              {/* Image Gallery */}
              <div className="position-relative" style={{ 
                height: '50vh',
                minHeight: '400px',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <motion.div
                  key={currentImageIndex}
                  className="w-100 h-100 d-flex align-items-center justify-content-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={getProjectTranslations(selectedProject.id).title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '10px'
                    }}
                  />
                </motion.div>

                {selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
                      className="position-absolute top-50 start-0 translate-middle-y ms-4 border-0 rounded-circle p-3 glass-card"
                      style={{ 
                        background: isDarkMode 
                          ? 'rgba(45, 45, 45, 0.8)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        color: colorScheme.primary,
                        border: `2px solid ${colorScheme.primary}30`,
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: colorScheme.primary,
                        color: 'white'
                      }}
                      title={t.prevImage}
                    >
                      <FiChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="position-absolute top-50 end-0 translate-middle-y me-4 border-0 rounded-circle p-3 glass-card"
                      style={{ 
                        background: isDarkMode 
                          ? 'rgba(45, 45, 45, 0.8)' 
                          : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                        color: colorScheme.primary,
                        border: `2px solid ${colorScheme.primary}30`,
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: colorScheme.primary,
                        color: 'white'
                      }}
                      title={t.nextImage}
                    >
                      <FiChevronRight size={24} />
                    </motion.button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                      className="border-0 rounded-circle"
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: currentImageIndex === index ? colorScheme.primary : '#6c757d',
                        cursor: 'pointer',
                      }}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.8 }}
                      title={`Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5" style={{ maxHeight: '40vh', overflowY: 'auto' }}>
                <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap gap-3">
                  <div>
                    <h2 className="fw-bold mb-2" style={{ 
                      background: `linear-gradient(135deg, ${colorScheme.primary}, ${colorScheme.secondary})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {getProjectTranslations(selectedProject.id).title}
                    </h2>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {(getProjectTranslations(selectedProject.id).tags || selectedProject.tags).map((tag, i) => (
                        <motion.span 
                          key={i} 
                          className="badge px-3 py-2 glass-card"
                          whileHover={{ scale: 1.05 }}
                          style={{ 
                            background: isDarkMode 
                              ? 'rgba(45, 45, 45, 0.6)' 
                              : 'rgba(248, 249, 250, 0.6)',
                            backdropFilter: 'blur(10px)',
                            color: colorScheme.text,
                            border: `1px solid ${colorScheme.primary}20`
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-flex gap-3">
                    <motion.button 
                      className="btn rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-decoration-none glass-card"
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{ 
                        background: isDarkMode 
                          ? 'rgba(45, 45, 45, 0.6)' 
                          : 'rgba(248, 249, 250, 0.6)',
                        backdropFilter: 'blur(10px)',
                        color: colorScheme.text,
                        border: `1px solid ${colorScheme.primary}20`
                      }}
                      onClick={(e) => handleExternalLink(e, selectedProject.github, selectedProject.isPrivate)}
                    >
                      <FiGithub size={18} />
                      <span>{t.code}</span>
                    </motion.button>
                    {selectedProject.live && (
                      <motion.button 
                        className="btn rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-decoration-none glass-card"
                        whileHover={{ scale: 1.05, y: -2 }}
                        style={{ 
                          background: isDarkMode 
                            ? 'rgba(45, 45, 45, 0.6)' 
                            : 'rgba(248, 249, 250, 0.6)',
                          backdropFilter: 'blur(10px)',
                          color: colorScheme.text,
                          border: `1px solid ${colorScheme.primary}20`
                        }}
                        onClick={(e) => handleExternalLink(e, selectedProject.live, selectedProject.isPrivate)}
                      >
                        <FiExternalLink size={18} />
                        <span>{t.live}</span>
                      </motion.button>
                    )}
                  </div>
                </div>
                
                <p className="fs-5 lh-base mb-4" style={{ 
                  lineHeight: '1.6',
                  color: colorScheme.text,
                }}>
                  {getProjectTranslations(selectedProject.id).description}
                </p>
                
                {/* Technology Stack */}
                <div className="mt-4">
                  <h5 className="mb-3 fw-bold" style={{ 
                    color: colorScheme.primary,
                  }}>
                    {t.technologyStack}
                  </h5>
                  <div className="d-flex flex-wrap gap-4">
                    {selectedProject.icons.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="d-flex align-items-center gap-3 glass-card rounded-pill px-3 py-2"
                        whileHover={{ scale: 1.05, y: -2 }}
                        style={{ 
                          background: isDarkMode 
                            ? 'rgba(45, 45, 45, 0.6)' 
                            : 'rgba(248, 249, 250, 0.6)',
                          backdropFilter: 'blur(10px)',
                          border: `1px solid ${tech.color}30`
                        }}
                      >
                        <div style={{ 
                          color: tech.color, 
                          fontSize: '1.5rem',
                        }}>
                          {tech.icon}
                        </div>
                        <span style={{ 
                          color: colorScheme.text,
                          fontWeight: 500,
                        }}>
                          {tech.name}
                        </span>
                      </motion.div>
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