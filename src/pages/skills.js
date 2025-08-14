import { useContext } from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJava, FaGit, FaDatabase,
  FaLaravel, FaVuejs, FaPhp, FaMicrosoft, FaBootstrap
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPrisma,
  SiVuedotjs
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

// Custom VS Code icon as SVG
const VSCodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#007ACC" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
  </svg>
);

// Custom C# icon as SVG
const CSharpIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#239120" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.5 17.5h-9v-11h9v11z"/>
    <path d="M16.5 6.5h-9v11h9v-11z" fill="#fff"/>
    <path d="M12 8.5l1.5 1.5-1.5 1.5-1.5-1.5 1.5-1.5z"/>
    <path d="M14.5 8.5l1.5 1.5-1.5 1.5-1.5-1.5 1.5-1.5z"/>
    <path d="M9.5 8.5l1.5 1.5-1.5 1.5-1.5-1.5 1.5-1.5z"/>
  </svg>
);

// Wave divider component
const WaveDivider = () => (
  <svg 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none" 
    style={{
      width: '100%',
      height: '80px',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
    }}
  >
    <path 
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
      opacity=".25" 
      fill="#6c63ff"
    ></path>
    <path 
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
      opacity=".5" 
      fill="#6c63ff"
    ></path>
    <path 
      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
      fill="#6c63ff"
    ></path>
  </svg>
);

const categories = [
  {
    id: 'frontend',
    skills: [
      { name: 'ReactJS', icon: <FaReact size={40} />, color: "#61DAFB" },
      { name: 'Vue.js', icon: <SiVuedotjs size={40} />, color: "#4FC08D" },
      { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: "#000000" },
      { name: 'JavaScript', icon: <SiJavascript size={40} />, color: "#F7DF1E" },
      { name: 'TypeScript', icon: <SiTypescript size={40} />, color: "#3178C6" },
      { name: 'HTML5', icon: <FaHtml5 size={40} />, color: "#E34F26" },
      { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: "#1572B6" },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: "#06B6D4" },
      { name: 'Bootstrap', icon: <FaBootstrap size={40} />, color: "#7952B3" },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs size={40} />, color: "#339933" },
      { name: 'Express.js', icon: <SiExpress size={40} />, color: "#000000" },
      { name: 'Laravel', icon: <FaLaravel size={40} />, color: "#FF2D20" },
      { name: 'PHP', icon: <FaPhp size={40} />, color: "#777BB4" },
      { name: 'C#', icon: <CSharpIcon />, color: "#239120" },
      { name: 'Java', icon: <FaJava size={40} />, color: "#007396" },
      { name: 'MySQL', icon: <SiMysql size={40} />, color: "#4479A1" },
      { name: 'SQL Server', icon: <FaMicrosoft size={40} />, color: "#CC2927" },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', icon: <FaGit size={40} />, color: "#F05032" },
      { name: 'VS Code', icon: <VSCodeIcon />, color: "#007ACC" },
      { name: 'RESTful APIs', icon: <FaDatabase size={40} />, color: "#009688" },
      { name: 'Responsive Design', icon: <FaHtml5 size={40} />, color: "#E34F26" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const hoverEffect = {
  scale: 1.05,
  y: -5,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const Skills = () => {
  const { languageCode } = useContext(LanguageContext);
  const primaryColor = '#6c63ff';
  
  // Get translations for current language
  const t = translations[languageCode]?.skills || translations.en.skills;

  // Map categories with translated titles
  const translatedCategories = [
    { ...categories[0], title: t.frontend },
    { ...categories[1], title: t.backend },
    { ...categories[2], title: t.tools }
  ];

  return (
    <section
      id="skills"
      style={{
        background: '#ffffff',
        color: '#333',
        padding: '6rem 2rem',
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Wave divider at top */}
      <WaveDivider />
      
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ 
            textAlign: 'center', 
            fontSize: '2.8rem', 
            marginBottom: '4rem', 
            color: primaryColor,
            fontWeight: '700',
            letterSpacing: '1px',
            position: 'relative',
          }}
        >
          {t.techStack}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '8px',
              background: `radial-gradient(ellipse at center, ${primaryColor} 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          {translatedCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ y: -8 }}
              style={{
                flex: '1 1 350px',
                maxWidth: '420px',
                backgroundColor: '#f9f9f9',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                border: '1px solid #eaeaea',
                boxShadow: '0 15px 30px rgba(108, 99, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative shape in corner */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${primaryColor}20 0%, transparent 70%)`,
                zIndex: 0,
              }} />
              
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  textAlign: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '2.5rem',
                  fontWeight: '600',
                  color: primaryColor,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {category.title}
              </motion.h3>
              
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                  gap: '2rem',
                  justifyItems: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={hoverEffect}
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.8rem',
                      cursor: 'default',
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '20px',
                        padding: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${skill.color}`,
                        boxShadow: `0 8px 20px ${skill.color}20`,
                        color: skill.color,
                        transformStyle: 'preserve-3d',
                        position: 'relative',
                      }}
                    >
                      {skill.icon}
                      {/* Subtle reflection effect */}
                      <div style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.5)',
                        filter: 'blur(3px)',
                      }} />
                    </motion.div>
                    <motion.span 
                      whileHover={{ color: skill.color }}
                      style={{ 
                        fontSize: '0.95rem', 
                        color: '#555',
                        fontWeight: '500',
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;