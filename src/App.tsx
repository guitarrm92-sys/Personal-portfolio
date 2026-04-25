import { motion, useScroll, useTransform } from "motion/react";
import { Mail, Linkedin, ExternalLink, ChevronRight, Menu, X, Copyright, ArrowLeft } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import NomaCaseStudy from "./components/NomaCaseStudy";
import NivioCaseStudy from "./components/NivioCaseStudy";

const ASSET_BASE = import.meta.env.BASE_URL;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4F6F5D] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="font-bold text-lg tracking-tight">Giovanny Gómez</span>
            <span className="hidden sm:inline text-white/70 text-sm">Diseñador UX/UI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-white/80 transition-colors">Sobre mí</a>
            <a href="#projects" className="text-sm font-medium hover:text-white/80 transition-colors">Proyectos</a>
            <a href="#contact" className="text-sm font-medium hover:text-white/80 transition-colors">Contactame</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#4F6F5D] border-t border-white/10 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Sobre mí</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Proyectos</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Contactame</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={targetRef} className="relative pt-20 pb-0 overflow-hidden min-h-[850px] flex items-stretch">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 954"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect width="1440" height="953.762" fill="#F5F1EA"/>
          <rect opacity="0.12" x="100" y="166.482" width="1240.03" height="572.582" rx="15" fill="#8FAF9B"/>
          <rect opacity="0.7" x="701" y="402.271" width="400.029" height="395.321" rx="15" fill="white"/>
          <rect opacity="0.72" x="68.8721" y="469.135" width="400.029" height="395.321" rx="15" fill="white"/>
          <rect opacity="0.72" x="54.3574" y="90.4004" width="190.581" height="152.166" rx="15" fill="white"/>
          <rect opacity="0.7" x="804.323" y="0.482422" width="635.677" height="459.076" rx="10" fill="white"/>
          <rect x="181.134" y="264.503" width="649.686" height="259.23" rx="15" fill="white"/>
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:items-end w-full pt-10 lg:pt-0">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 pb-12 lg:pb-24 pt-0 md:pt-10 z-30"
          >
            <div className="mb-6 lg:mb-10">
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-normal leading-[1.15] mb-0 text-brand-dark font-display tracking-tight">
                Diseño productos digitales que reducen fricción y mejoran resultados de negocio.
              </h1>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#8BA892] p-[25px] md:p-[30px] rounded-2xl text-white mb-0 lg:mb-10 max-w-xl shadow-xl relative z-40"
            >
              <p className="text-sm md:text-xl leading-relaxed font-medium">
                UX/UI Designer con experiencia en fintech y plataformas empresariales. Optimizo procesos complejos para hacerlos simples, eficientes y medibles.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end items-end min-h-[400px] lg:min-h-full -mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[380px] md:max-w-[450px] lg:max-w-[600px] lg:absolute lg:bottom-0 lg:right-0 z-20">
              <img 
                src={`${ASSET_BASE}assets/images/photo-herocomplete.png`} 
                alt="Giovanny Gómez" 
                className="w-full h-auto block object-contain relative z-20 scale-125 lg:scale-150 origin-bottom lg:origin-bottom-right translate-y-[2px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Navigation Bar */}
        <div className="w-full flex justify-center h-auto z-50 pointer-events-none pb-12">
          <div className="p-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-[24px] flex flex-col md:flex-row gap-4 items-center w-full max-w-lg lg:max-w-none lg:w-fit shadow-2xl pointer-events-auto">
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#4F6F5D] text-white flex-1 md:w-[180px] h-[50px] rounded-xl font-bold hover:bg-[#3D5648] transition-all shadow-lg text-sm md:text-base"
              >
                Proyectos
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#5E7A67] text-white flex-1 md:w-[180px] h-[50px] rounded-xl font-bold hover:bg-[#4E6656] transition-all shadow-lg text-sm md:text-base px-2"
              >
                Trabajemos juntos
              </button>
            </div>
            <a 
              href="https://www.linkedin.com/in/giovanny-gomez-ui-ux/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 text-gray-500 w-full md:w-[180px] h-[50px] rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Noma",
      type: "App de alimentación saludable",
      description: "Diseñé una app que elimina el esfuerzo de comer bien, transformando la nutrición en un hábito simple y sostenible.",
      image: `${ASSET_BASE}assets/images/wireframes-noma/noma-portrait-ver2.png`,
      color: "bg-[#2D4A3E]",
      link: "/projects/noma"
    },
    {
      title: "Nivio",
      type: "App de finanzas personales",
      description: "Nivio Finance es una aplicación móvil diseñada para ayudarte a tomar el control de tus finanzas personales de forma simple, visual y transparente.",
      image: `${ASSET_BASE}assets/images/nivio-portrait.png`,
      color: "bg-[#4A90E2]",
      link: "/projects/nivio"
    },
    /*
    {
      title: "Lets travel",
      type: "App de planificación de viajes",
      description: "Plataforma integral para descubrir destinos, organizar itinerarios y gestionar reservas de forma colaborativa.",
      image: `${ASSET_BASE}assets/images/lets-travel-portrait.png`,
      color: "bg-[#E67E22]"
    },
    {
      title: "WG interiors",
      type: "Diseño de interiores y arquitectura",
      description: "Portafolio digital para un estudio de diseño de interiores, enfocado en mostrar proyectos residenciales y comerciales con una estética minimalista.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      color: "bg-[#8E8E8E]"
    }
    */
  ];

  return (
    <section 
      id="projects" 
      className="py-20 text-white relative overflow-hidden"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1445 1409" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g clipPath="url(#clip0_137_316)">
            <rect width="1445" height="1408.92" fill="#272727"/>
            <g opacity="0.15" filter="url(#filter0_f_137_316)">
              <circle cx="12.3616" cy="425.362" r="287.362" fill="#4F6F5D"/>
            </g>
            <g opacity="0.15" filter="url(#filter1_f_137_316)">
              <circle cx="1457.03" cy="317.689" r="287.362" fill="#4F6F5D"/>
            </g>
            <g opacity="0.3" filter="url(#filter2_f_137_316)">
              <circle cx="1457.03" cy="1396.7" r="287.362" fill="#4F6F5D"/>
            </g>
            <g opacity="0.3" filter="url(#filter3_f_137_316)">
              <circle cx="100" cy="1289.92" r="287.362" fill="#4F6F5D"/>
            </g>
            <g opacity="0.15" filter="url(#filter4_f_137_316)">
              <circle cx="708.746" cy="920.443" r="157.921" fill="#F5F1EA"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_137_316" x="-455" y="-42" width="934.723" height="934.723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_316"/>
            </filter>
            <filter id="filter1_f_137_316" x="989.667" y="-149.673" width="934.723" height="934.724" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_316"/>
            </filter>
            <filter id="filter2_f_137_316" x="989.667" y="929.339" width="934.723" height="934.724" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_316"/>
            </filter>
            <filter id="filter3_f_137_316" x="-367.361" y="822.555" width="934.723" height="934.723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_316"/>
            </filter>
            <filter id="filter4_f_137_316" x="370.825" y="582.522" width="675.842" height="675.842" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_316"/>
            </filter>
            <clipPath id="clip0_137_316">
              <rect width="1445" height="1408.92" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-12">Mis proyectos destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => project.link && navigate(project.link)}
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                {project.link && (
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    Ver Case Study <ChevronRight size={16} />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">
                {project.title} <span className="font-normal text-gray-400 ml-2">{project.type}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="pt-[60px] pb-24 bg-[#F5F1EA]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div>
          <h2 className="text-4xl font-bold mb-0 text-[#4F6F5D] font-display">Acerca de</h2>
          <div className="h-[0.5px] bg-[#4F6F5D] w-full mt-[30px] mb-8" />
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Soy diseñador UX/UI con formación en diseño industrial. Me enfoco en entender cómo piensan las personas para transformar sistemas complejos en experiencias simples.
            </p>
            <p>
              He trabajado en fintech y plataformas empresariales, donde cada decisión de diseño impacta directamente en resultados de negocio.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Estrategia & UX",
      skills: ["UX Research", "Arquitectura de información", "Definición de user flows", "Optimización de journeys", "Análisis de fricción en procesos", "Design Thinking"]
    },
    {
      title: "Diseño & UI",
      skills: ["Diseño de interfaces (UI)", "Sistemas de diseño", "Wireframing", "Prototipado en Figma", "Diseño centrado en el usuario"]
    },
    {
      title: "IA aplicada al diseño",
      skills: ["Uso de IA para ideación y exploración de soluciones", "Generación de copy UX (microcopy, CTAs, flujos conversacionales)", "Análisis de experiencia de usuario con apoyo de IA", "Iteración rápida de interfaces y conceptos", "Optimización de procesos de diseño con herramientas de IA"]
    },
    {
      title: "Ejecución & validación",
      skills: ["Testing de usabilidad", "Iteración basada en feedback", "Trabajo colaborativo con desarrollo", "Metodologías ágiles"]
    }
  ];

  return (
    <section className="py-20 bg-[#F5F1EA]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-0 text-[#4F6F5D] font-display">Habilidades</h2>
        <div className="h-[0.5px] bg-[#4F6F5D] w-full mt-[30px] mb-12" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
            >
              <div className="h-[48px] flex items-center justify-center px-4">
                <h3 className="font-bold text-[#4F6F5D] text-center text-sm md:text-base">{group.title}</h3>
              </div>
              <div className="h-[0.3px] bg-[#4F6F5D] w-full" />
              <div className="p-[15px] md:p-[30px]">
                <ul className="space-y-3">
                  {group.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="flex gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="h-[48px] flex items-center justify-center">
              <h3 className="font-bold text-[#4F6F5D] text-center">Herramientas</h3>
            </div>
            <div className="h-[0.3px] bg-[#4F6F5D] w-full" />
            <div className="p-[15px] md:p-[30px]">
              <div className="flex flex-col gap-4">
                {["Figma", "Adobe Illustrator", "Photoshop", "Premiere"].map((tool) => (
                  <span key={tool} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-0.5 shrink-0" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="h-[48px] flex items-center justify-center">
              <h3 className="font-bold text-[#4F6F5D] text-center">Idiomas</h3>
            </div>
            <div className="h-[0.3px] bg-[#4F6F5D] w-full" />
            <div className="p-[15px] md:p-[30px]">
              <div className="flex flex-col gap-4">
                {["Español - Nativo", "Ingles - Intermedio B1+"].map((lang) => (
                  <span key={lang} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-0.5 shrink-0" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "AECSA",
      role: "Diseñador estratégico y UI",
      period: "2023 - 2026",
      description: "Lideré el diseño de productos digitales de punta a punta, creando flujos y wireframes, optimizando journeys y colaborando con equipos ágiles. Apliqué Design Thinking e integré IA para agilizar procesos y mejorar soluciones centradas en el usuario."
    },
    {
      company: "Glint",
      role: "Diseñador UX UI",
      period: "2022",
      description: "Diseñé interfaces y experiencias para productos digitales, mejorando la usabilidad y claridad de los flujos. Construí arquitectura de información, desarrollé wireframes y prototipos para validación temprana, y apliqué Design Thinking en el desarrollo de soluciones centradas en el usuario."
    },
    {
      company: "Latelier Bogotá SAS",
      role: "Diseñador",
      period: "2019 - 2021",
      description: "Mejoré la experiencia de usuario en productos internos optimizando procesos y tiempos de respuesta, y rediseñé user journeys para aumentar la eficiencia en la gestión de la información."
    }
  ];

  return (
    <section className="py-20 bg-[#F5F1EA]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-0 text-[#4F6F5D] font-display">Experiencia laboral</h2>
        <div className="h-[0.5px] bg-[#4F6F5D] w-full mt-[30px] mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-[15px] md:p-[30px] rounded-xl border border-gray-100 relative shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">{exp.company}</h3>
                  <p className="text-sm text-gray-500">{exp.role}</p>
                </div>
                <span className="text-[12px] font-normal bg-white p-[5px] rounded-[12px] border-[0.3px] border-[#4F6F5D] text-[#4F6F5D]">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Education = () => {
  return (
    <section className="py-20 bg-[#F5F1EA]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-0 text-[#4F6F5D] font-display">Formación y certificaciones</h2>
        <div className="h-[0.5px] bg-[#4F6F5D] w-full mt-[30px] mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[15px] md:p-[30px] rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-[#4F6F5D] font-bold mb-6">Título univesitario</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-xl">Diseño Industrial</h4>
                <p className="text-gray-600">Universidad Nacional de Colombia</p>
                <span className="text-[12px] font-normal bg-white p-[5px] rounded-[12px] border-[0.3px] border-[#4F6F5D] text-[#4F6F5D] inline-block mt-2">2015 - 2020</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[15px] md:p-[30px] rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-[#4F6F5D] font-bold mb-6">Certificaciones</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg">Diseño de interfaces (UI)</h4>
                <p className="text-gray-600">Platzi</p>
                <span className="text-[12px] font-normal bg-white p-[5px] rounded-[12px] border-[0.3px] border-[#4F6F5D] text-[#4F6F5D] inline-block mt-1">2022</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">Diseño de experiencia de usuario (UX)</h4>
                <p className="text-gray-600">Platzi</p>
                <span className="text-[12px] font-normal bg-white p-[5px] rounded-[12px] border-[0.3px] border-[#4F6F5D] text-[#4F6F5D] inline-block mt-1">2022</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="text-white relative overflow-hidden pt-[60px] min-h-[420px]"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g clipPath="url(#clip0_137_359)">
            <rect width="1440" height="420" fill="#272727"/>
            <g opacity="0.3" filter="url(#filter0_f_137_359)">
              <circle cx="339.008" cy="279.841" r="90.8411" fill="#8FAF9B"/>
            </g>
            <g opacity="0.37" filter="url(#filter1_f_137_359)">
              <circle cx="480.026" cy="157.173" r="97.1726" fill="#4F6F5D"/>
            </g>
            <g opacity="0.3" filter="url(#filter2_f_137_359)">
              <circle cx="1341" cy="54" r="125" fill="#8FAF9B"/>
            </g>
            <g opacity="0.3" filter="url(#filter3_f_137_359)">
              <circle cx="1042" cy="431.469" r="125" fill="#8FAF9B"/>
            </g>
            <g opacity="0.3" filter="url(#filter4_f_137_359)">
              <circle cx="709" cy="59.2021" r="75" fill="#8FAF9B"/>
            </g>
            <g opacity="0.3" filter="url(#filter5_f_137_359)">
              <circle cx="90.521" cy="50.3989" r="157.521" fill="#8FAF9B"/>
            </g>
          </g>
          <rect x="0.25" y="0.25" width="1439.5" height="419.5" stroke="#D4A373" strokeWidth="0.5"/>
          <defs>
            <filter id="filter0_f_137_359" x="98.167" y="39" width="481.682" height="481.682" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <filter id="filter1_f_137_359" x="84.6535" y="-238.2" width="790.745" height="790.746" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="149.1" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <filter id="filter2_f_137_359" x="917.8" y="-369.2" width="846.4" height="846.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="149.1" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <filter id="filter3_f_137_359" x="737" y="126.469" width="610" height="610" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <filter id="filter4_f_137_359" x="484" y="-165.798" width="450" height="450" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <filter id="filter5_f_137_359" x="-247" y="-287.122" width="675.042" height="675.042" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_137_359"/>
            </filter>
            <clipPath id="clip0_137_359">
              <rect width="1440" height="420" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="px-[15px] md:px-[100px] text-center w-full relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
        <p className="text-base md:text-xl text-white mb-[60px]">Estoy disponible para colaborar en nuevos proyectos.</p>
        
        <div className="px-[15px] md:px-[60px] py-0 flex flex-col md:flex-row gap-[60px] items-center w-full mb-12">
          <a 
            href="mailto:guitarrm92@gmail.com" 
            className="bg-[#4A5D4E] px-4 py-3 md:px-10 md:py-5 rounded-2xl flex items-center gap-4 hover:bg-[#3D4D40] transition-all w-full md:flex-1 justify-center shadow-lg"
          >
            <Mail size={24} className="text-white" />
            <span className="font-bold text-lg">guitarrm92@gmail.com</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/giovanny-gomez-ui-ux/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-4 py-3 md:px-10 md:py-5 rounded-2xl flex items-center gap-4 hover:bg-gray-100 transition-all w-full md:flex-1 justify-center shadow-lg"
          >
            <Linkedin size={24} className="text-[#0077B5]" />
            <span className="font-bold text-lg">Ver perfil en LinkedIn</span>
          </a>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-white flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="flex items-center gap-2 text-[16px]">
            <Copyright size={18} />
            <span>2026 Giovanny Gómez</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Education />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/noma" element={<NomaCaseStudy />} />
            <Route path="/projects/nivio" element={<NivioCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
