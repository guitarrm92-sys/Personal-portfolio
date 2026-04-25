import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Target, Users, Lightbulb, Zap, Layout, Palette, CheckCircle2, Clock, Brain, TrendingUp, Menu, X,
  Home, User, Settings, UserCircle, ShoppingCart, Bell, ChevronLeft, ChevronRight, Plus, Minus, Trash2, Edit2, MapPin, Calendar, Save, Utensils, CreditCard, Search,
  PieChart, Wallet, ArrowUpRight, ArrowDownLeft, BarChart3, ShieldCheck, Send, Key, Share2, HandMetal, HelpingHand, RefreshCcw, LayoutDashboard, SquarePen, Library, Lock, Grid3X3, Headphones, SlidersHorizontal, LogOut, ClipboardList,
  QrCode, Coins, Repeat, LayoutGrid, BookOpen, ToggleRight, Hash
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NivioCaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStructureTab, setActiveStructureTab] = useState("Inicio");

  const structureTabs = [
    { id: "Inicio", name: "Inicio" },
    { id: "Transacciones", name: "Transacciones" },
    { id: "Facturas", name: "Facturas" },
    { id: "Pagos", name: "Pagos" },
    { id: "Tarjetas", name: "Tarjetas" },
    { id: "Historicos", name: "Historicos" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#2B98C4] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B98C4] text-white shadow-md">
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
              <Link to="/" className="text-sm font-medium hover:text-white/80 transition-colors">Sobre mí</Link>
              <Link to="/" className="text-sm font-medium hover:text-white/80 transition-colors">Proyectos</Link>
              <Link to="/" className="text-sm font-medium hover:text-white/80 transition-colors">Contactame</Link>
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
            className="md:hidden bg-[#2B98C4] border-t border-white/10 px-4 pt-2 pb-6 space-y-4"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Sobre mí</Link>
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Proyectos</Link>
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Contactame</Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:h-screen flex items-center overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/nivio-images/fondo-nivio-hero.png" 
            alt="Background" 
            className="w-full h-full object-cover hidden md:block"
            referrerPolicy="no-referrer"
          />
          <img 
            src="/assets/images/nivio-images/fondo-nivio-movil.png" 
            alt="Background Mobile" 
            className="w-full h-full object-cover md:hidden"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg text-[#1E293B] hover:bg-white transition-all font-medium shadow-sm"
            >
              <ArrowLeft size={18} />
              <span>Volver</span>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Phone Mockups */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:static flex justify-start order-1 lg:order-1"
            >
              <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-[500px] lg:max-w-[800px] aspect-square flex items-center justify-start pointer-events-none">
                <svg viewBox="0 0 721 750" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl scale-[1.1] origin-left -translate-x-[60px]">
                  <circle cx="320.198" cy="357.198" r="400.198" fill="#2A9BC2"/>
                  <mask id="mask0_1162_50308" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-74" y="-37" width="787" height="787">
                    <circle cx="319.711" cy="357" r="393" fill="#2A9BC2"/>
                  </mask>
                  <g mask="url(#mask0_1162_50308)">
                    <rect width="1540.2" height="867.063" transform="translate(-478.686 -76.5322)" fill="white"/>
                    <g filter="url(#filter0_d_1162_50308)">
                      <rect x="-171.89" y="155.413" width="213.198" height="474.521" rx="15" transform="rotate(-15 -171.89 155.413)" fill="url(#pattern0_1162_50308)" />
                      <rect x="-175.564" y="153.292" width="219.198" height="480.521" rx="18" transform="rotate(-15 -175.564 153.292)" stroke="black" strokeWidth="6" />
                    </g>
                    <g filter="url(#filter1_d_1162_50308)">
                      <rect x="171.859" y="22.999" width="300.126" height="668" rx="15" fill="url(#pattern1_1162_50308)" />
                      <rect x="168.859" y="19.999" width="306.126" height="674" rx="18" stroke="black" strokeWidth="6" />
                    </g>
                    <g filter="url(#filter2_d_1162_50308)">
                      <rect x="528.122" y="111.391" width="213.198" height="474.521" rx="15" transform="rotate(4.97329 528.122 111.391)" fill="url(#pattern2_1162_50308)" />
                      <rect x="525.393" y="108.142" width="219.198" height="480.521" rx="18" transform="rotate(4.97329 525.393 108.142)" stroke="black" strokeWidth="6" />
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_d_1162_50308" x="-178.523" y="97.5996" width="342.017" height="528.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="6"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1162_50308"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1162_50308" result="shape"/>
                    </filter>
                    <pattern id="pattern0_1162_50308" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_1162_50308" transform="scale(0.00242718 0.00109051)"/>
                    </pattern>
                    <filter id="filter1_d_1162_50308" x="161.859" y="16.999" width="320.127" height="690" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="6"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1162_50308"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1162_50308" result="shape"/>
                    </filter>
                    <pattern id="pattern1_1162_50308" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image1_1162_50308" transform="scale(0.00242718 0.00109051)"/>
                    </pattern>
                    <filter id="filter2_d_1162_50308" x="478.228" y="106.633" width="271.048" height="510.732" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="6"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1162_50308"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1162_50308" result="shape"/>
                    </filter>
                    <pattern id="pattern2_1162_50308" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image2_1162_50308" transform="scale(0.00242718 0.00109051)"/>
                    </pattern>
                    <image id="image0_1162_50308" width="412" height="963" href="/assets/images/1.png"/>
                    <image id="image1_1162_50308" width="412" height="917" href="/assets/images/2.png"/>
                    <image id="image2_1162_50308" width="412" height="917" href="/assets/images/3.png"/>
                  </defs>
                </svg>
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left order-2 lg:order-2"
            >
              <h1 className="text-5xl md:text-8xl font-rubik mb-6 tracking-tight text-[#1E293B] leading-tight md:leading-[100px]">
                Tu dinero,<br />
                <span className="text-[#2B98C4]">sin fricción</span>
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-[#1E293B] opacity-80">
                Todo tu dinero en un solo lugar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2 relative flex justify-start">
              {/* Large Stylized N Pattern in Background */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[450px] md:h-[675px] opacity-100 pointer-events-none -z-10 overflow-visible">
                <svg viewBox="0 0 636 676" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
                  <path d="M360.489 0H405.177C526.995 0 599.656 41.2129 623.159 123.639C631.104 150.783 635.076 181.9 635.076 216.988V675.792H360.489V0ZM0 0H267.139V675.792H0V0Z" fill="#2A9BC2"/>
                </svg>
              </div>

              {/* Context Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-[30px] rounded-[15px] shadow-2xl relative z-20 max-w-lg border border-white/50 backdrop-blur-sm mt-12 lg:mt-0"
              >
                <h2 className="text-4xl md:text-5xl font-rubik text-[#2B98C4] mb-8">Contexto</h2>
                <p className="text-lg md:text-xl text-[#1E293B] font-medium leading-relaxed">
                  NIVIO es una fintech diseñada para centralizar la gestión financiera en una sola experiencia, permitiendo a los usuarios mover, controlar y entender su dinero sin fricción.
                </p>
              </motion.div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring", bounce: 0.2 }}
                className="relative w-full max-w-[260px] md:max-w-[340px] aspect-[9/18.5] bg-[#0F172A] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(30,41,59,0.5)] z-30"
              >
                <div className="w-full h-full overflow-hidden rounded-[2.8rem] bg-white">
                  <img 
                    src="/assets/images/3.png" 
                    alt="Nivio App Context Mockup" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Glossy overlay effect for the phone */}
                <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Section */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Problema Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] rounded-[15px] shadow-xl border border-white/50"
          >
            <h2 className="text-4xl md:text-5xl font-rubik text-[#2B98C4] mb-12">Problema</h2>
            <p className="text-lg text-[#1E293B] font-medium leading-relaxed">
              Actualmente, gestionar el dinero implica interactuar con múltiples plataformas y flujos fragmentados —como realizar transferencias en una app, hacer pagos en otra, controlar gastos en una diferente y gestionar tarjetas por separado—, lo que termina generando fricción constante en las tareas cotidianas, desorganización financiera y una sensación de falta de control sobre el dinero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proceso & Cronograma Section */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Proceso Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] rounded-[15px] shadow-xl border border-white/50"
          >
            <h2 className="text-4xl md:text-5xl font-rubik text-[#2B98C4] mb-8">Proceso</h2>
            <p className="text-lg text-[#1E293B] font-medium mb-12 text-center lg:text-left">El proyecto se estructuró en cuatro fases:</p>
            
            <div className="relative mb-12">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2B98C4] -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {["Exploración", "Definición", "Diseño", "Validación"].map((phase, i) => (
                  <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl py-8 px-4 text-center font-bold text-[#1E293B] shadow-sm flex items-center justify-center min-h-[100px]">
                    {phase}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-[#1E293B] font-medium text-center lg:text-left">
              Este enfoque permitió avanzar desde el entendimiento del problema hasta la construcción de una solución centrada en la acción.
            </p>
          </motion.div>

          {/* Cronograma Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] rounded-[15px] shadow-xl border border-white/50"
          >
            <h2 className="text-4xl md:text-5xl font-rubik text-[#2B98C4] mb-8">Cronograma</h2>
            <p className="text-lg text-[#1E293B] font-medium mb-12">
              El desarrollo de NIVIO se estructuró en un periodo de 4 semanas, organizando el proceso en fases iterativas que permitieron avanzar desde la exploración hasta la materialización de la solución.
            </p>
            
            <div className="relative">
              {/* Connector Line */}
              <div className="absolute top-[60%] left-0 w-full h-1 bg-[#2B98C4] -translate-y-1/2 hidden lg:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  {
                    week: "Semana 1 Exploración",
                    items: ["Análisis del contexto fintech", "Benchmark de productos similares", "Identificación de problemas y oportunidades"]
                  },
                  {
                    week: "Semana 2 Definición",
                    items: ["Construcción del insight", "Definición de objetivos", "Arquitectura de la información"]
                  },
                  {
                    week: "Semana 3 Estructura",
                    items: ["Diseño de flujos de usuario", "Desarrollo de wireframes", "Validación de estructura y navegación"]
                  },
                  {
                    week: "Semana 4 Diseño y validación",
                    items: ["Diseño de interfaz (UI)", "Construcción de prototipo", "Evaluación de flujos clave y usabilidad"]
                  }
                ].map((weekData, i) => (
                  <div key={i} className="flex flex-col h-full border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                    <div className="bg-[#2B98C4] p-[10px] text-white font-bold text-left">
                      {weekData.week}
                    </div>
                    <div className="p-[10px] bg-white flex-grow">
                      <ul className="space-y-4">
                        {weekData.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#1E293B] font-medium">
                            <span className="w-1 h-1 rounded-full bg-black mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exploración Section */}
      <section className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] rounded-[15px] shadow-xl border border-white/50"
          >
            {/* Title with Circle 1 */}
            <div className="flex items-center gap-4 sm:gap-6 mb-12">
              <div className="w-16 h-16 rounded-full bg-[#2B98C4] flex items-center justify-center text-white text-3xl font-bold shrink-0">
                1
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-rubik text-[#2B98C4]">Exploración</h2>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2B98C4] mb-6">Benchmark</h3>
              <p className="text-lg text-[#1E293B] font-medium leading-relaxed max-w-4xl">
                Para entender el panorama actual, se analizaron distintas aplicaciones fintech enfocadas en la gestión del dinero, identificando cómo abordan las operaciones financieras y dónde existen oportunidades para simplificar la experiencia.
              </p>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto mb-12 border border-[#E2E8F0] rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2B98C4] text-white">
                    <th className="p-4 font-bold text-sm lg:text-base border-r border-white/20">Plataforma</th>
                    <th className="p-4 font-bold text-sm lg:text-base border-r border-white/20">Fortaleza</th>
                    <th className="p-4 font-bold text-sm lg:text-base border-r border-white/20">Oportunidades de mejora</th>
                    <th className="p-4 font-bold text-sm lg:text-base border-r border-white/20">Oportunidades de mejora</th>
                    <th className="p-4 font-bold text-sm lg:text-base">Diferenciador clave</th>
                  </tr>
                </thead>
                <tbody className="text-[#1E293B] text-sm lg:text-base">
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="p-4 font-bold border-r border-[#E2E8F0]">Nubank</td>
                    <td className="p-4 border-r border-[#E2E8F0]">App de tarjeta/débito digital con control del gasto, categorización, estados de cuenta en tiempo real, ajuste de límites.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Al estar centrada en tarjeta de crédito/débito, le falta quizá una visión holística de finanzas personales (gastos + ahorro + inversión + metas) y una interfaz ultra-minimalista y emocional.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Interfaz densa pero funcional. Buscador central prominente. Flujo de reserva rápido.</td>
                    <td className="p-4">Cantidad de propiedades y variedad de servicios.</td>
                  </tr>
                  <tr className="border-b border-[#E2E8F0]">
                    <td className="p-4 font-bold border-r border-[#E2E8F0]">MOVII</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Alojamiento único, experiencias locales.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Completos y visuales.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Diseño emocional. Visuales inmersivos. Categorías aspiracionales. Foco en storytelling y anfitriones.</td>
                    <td className="p-4">Enfoque humano y experiencial.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold border-r border-[#E2E8F0]">Bancolombia</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Opiniones y recomendaciones.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Moderados.</td>
                    <td className="p-4 border-r border-[#E2E8F0]">Visual editorial, fuerte en contenido generado por usuarios. Opiniones en primer plano.</td>
                    <td className="p-4">Comunidad activa y contenido confiable.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Findings Tag Summary */}
            <div>
              <p className="text-lg text-[#1E293B] font-bold mb-8">
                A partir del análisis de la información del benchmarking se identificaron las siguientes <span className="text-[#1E293B]">problemas:</span>
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Exceso de información en pantalla",
                  "Flujos largos para acciones simples",
                  "Separación entre análisis y ejecución",
                  "Interfaces poco enfocadas en la acción"
                ].map((tag, i) => (
                  <div 
                    key={i} 
                    className="px-6 py-3 rounded-xl border border-[#2B98C4]/30 text-[#2B98C4] font-medium bg-[#2B98C4]/5"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Oportunidad Section */}
      <section className="py-24 bg-[#1E293B] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-rubik text-white mb-8">Oportunidad</h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                Diseñar una experiencia unificada donde operar y entender el dinero suceda en el mismo lugar.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-1/2 flex justify-center lg:justify-end"
            >
              {/* Stylized Card Mockup */}
              <div className="relative w-full max-w-[500px]">
                <img 
                  src="/assets/images/niviocard.svg" 
                  alt="Nivio Card" 
                  className="w-full h-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Banner Section */}
      <section className="py-20 bg-[#E9EDF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[320px]"
          >
            <img 
              src="/assets/images/nivio-images/logo-nivio-color.svg" 
              alt="Logo Nivio Color" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Definición Section */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] lg:p-[60px] rounded-[15px] shadow-xl border border-white/50"
          >
            {/* Title with Circle 2 */}
            <div className="flex items-center gap-4 sm:gap-6 mb-16">
              <div className="w-16 h-16 rounded-full bg-[#2B98C4] flex items-center justify-center text-white text-3xl font-bold shrink-0">
                2
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-rubik text-[#2B98C4]">Definición</h2>
            </div>

            {/* Insight Subsection */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Insight</h3>
              <p className="text-lg text-[#1E293B] font-medium leading-relaxed mb-10">
                A partir del análisis del problema y del benchmark realizado, se identificó un patrón recurrente en las aplicaciones fintech:<br />
                Los usuarios interactúan constantemente con múltiples funcionalidades, pero la experiencia no está diseñada para facilitar la acción, sino para mostrar información. Esto genera una brecha entre lo que el usuario ve y lo que realmente necesita hacer.
              </p>
              
              <div className="bg-[#485563] p-10 rounded-xl mb-10 text-center">
                <p className="text-2xl md:text-3xl text-white font-bold leading-tight max-w-4xl mx-auto">
                  “Los usuarios no necesitan más herramientas, necesitan una experiencia que les permita actuar sobre su dinero de forma simple y sin fricción.”
                </p>
              </div>
              
              <p className="text-lg text-[#1E293B] font-medium opacity-80">
                Este insight permitió redefinir el enfoque del producto, pasando de una lógica centrada en funcionalidades a una centrada en acciones.
              </p>
            </div>

            {/* Objetivos Subsection */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[#2B98C4] mb-6">Objetivos</h3>
              <p className="text-lg text-[#1E293B] font-medium mb-12">
                Con base en el insight, se establecieron los siguientes objetivos de diseño:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Unificar la gestión financiera",
                    desc: "Centralizar en una sola plataforma las principales operaciones del usuario, evitando la fragmentación entre servicios."
                  },
                  {
                    title: "Reducir la fricción en acciones clave",
                    desc: "Optimizar los flujos de uso para que tareas como enviar dinero, pagar servicios o gestionar tarjetas puedan realizarse en pocos pasos."
                  },
                  {
                    title: "Priorizar la claridad sobre la cantidad de información",
                    desc: "Diseñar interfaces que permitan entender el estado financiero rápidamente, evitando la sobrecarga visual."
                  },
                  {
                    title: "Priorizar la claridad sobre la cantidad de información",
                    desc: "Diseñar interfaces que permitan entender el estado financiero rápidamente, evitando la sobrecarga visual."
                  }
                ].map((obj, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#485563] p-6 rounded-xl flex flex-col min-h-[220px]"
                  >
                    <h4 className="text-white font-bold text-lg mb-4 leading-tight">{obj.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{obj.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arquitectura Subsection */}
            <div>
              <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Arquitectura de la información</h3>
              <p className="text-lg text-[#1E293B] font-medium leading-relaxed mb-12">
                La arquitectura se diseñó basada en acciones frecuentes del usuario, no en categorías financieras tradicionales.<br />
                Esto permite acceder rápidamente a lo que realmente importa.
              </p>
              
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-4 lg:p-12 shadow-sm">
                <img 
                  src="/assets/images/nivio-images/arquitectura-de-la-informacion-nivio.png" 
                  alt="Arquitectura de la Información Nivio" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estructura Section */}
      <section className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] lg:p-[60px] rounded-[15px] shadow-xl border border-white/50"
          >
            {/* Title with Circle 3 */}
            <div className="flex items-center gap-4 sm:gap-6 mb-16">
              <div className="w-16 h-16 rounded-full bg-[#2B98C4] flex items-center justify-center text-white text-3xl font-bold shrink-0">
                3
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-rubik text-[#2B98C4]">Estructura</h2>
            </div>

            {/* Flujo de usuario Subsection */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Flujo de usuario</h3>
              <p className="text-lg text-[#1E293B] font-medium leading-relaxed mb-12">
                La arquitectura se diseñó basada en acciones frecuentes del usuario, no en categorías financieras tradicionales.<br />
                Esto permite acceder rápidamente a lo que realmente importa.
              </p>
              
              {/* Tabs like UI */}
              <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
                <div className="bg-[#E9EDF2] p-2 flex flex-wrap gap-2 w-full justify-center">
                  {structureTabs.map((tab) => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveStructureTab(tab.id)}
                      className={`px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-sm ${activeStructureTab === tab.id ? "bg-[#2B98C4] text-white shadow-md" : "text-[#7B8B9A] hover:bg-white/50"}`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
                
                <div className="p-8 lg:p-12 flex justify-center items-center min-h-[500px] bg-white relative w-full overflow-y-auto">
                   {/* PDF View Mockup */}
                   <div className="w-full max-w-4xl flex flex-col items-center">
                      <div className="w-full aspect-[1/1.414] bg-white border border-gray-200 shadow-2xl rounded-sm p-8 flex flex-col items-center overflow-hidden">
                        {/* Header of "PDF" */}
                        <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                          <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded bg-[#2B98C4]" />
                             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nivio Architecture / {activeStructureTab}</span>
                          </div>
                          <div className="text-[10px] text-gray-300">Pagina 01/01</div>
                        </div>

                        {/* Content based on Active Tab */}
                        <div className="w-full flex-grow flex flex-col items-center justify-center p-4">
                           {(activeStructureTab === "Inicio" || activeStructureTab === "Transacciones" || activeStructureTab === "Facturas" || activeStructureTab === "Pagos" || activeStructureTab === "Tarjetas" || activeStructureTab === "Historicos") ? (
                              <div className="w-full h-full flex flex-col items-center justify-center">
                                <embed 
                                  src={`/assets/images/nivio-images/${activeStructureTab.toLowerCase()}-nivio.pdf`}
                                  type="application/pdf"
                                  className="w-full h-full border-0"
                                />
                                <div className="mt-4 text-xs text-gray-400">
                                  ¿No puedes ver el archivo? 
                                  <a 
                                    href={`/assets/images/nivio-images/${activeStructureTab.toLowerCase()}-nivio.pdf`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="ml-1 text-[#2B98C4] hover:underline font-bold"
                                  >
                                    Clica aquí para abrir el PDF en una pestaña nueva
                                  </a>
                                </div>
                              </div>
                           ) : (
                              <motion.div 
                                key={activeStructureTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center"
                              >
                                 <div className="w-48 h-64 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-300 text-sm font-medium">
                                    [Vista de Flujo: {activeStructureTab}]
                                 </div>
                                 <p className="mt-4 text-xs text-gray-400 italic">Visualización del flujo detallado para la sección {activeStructureTab}</p>
                              </motion.div>
                           )}
                        </div>

                        {/* Footer of "PDF" */}
                        <div className="w-full pt-4 border-t border-gray-100 flex justify-center">
                           <div className="w-24 h-1 bg-gray-100 rounded-full" />
                        </div>
                      </div>
                      
                      {/* PDF Controls Mockup */}
                      <div className="mt-8 flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
                        <button className="p-1 hover:bg-white rounded transition-colors"><Minus size={16}/></button>
                        <span className="text-xs font-bold text-gray-500">100%</span>
                        <button className="p-1 hover:bg-white rounded transition-colors"><Plus size={16}/></button>
                        <div className="w-[1px] h-4 bg-gray-300 mx-2" />
                        <button className="p-1 hover:bg-white rounded transition-colors"><ChevronLeft size={16}/></button>
                        <span className="text-xs font-bold text-gray-500">1 / 1</span>
                        <button className="p-1 hover:bg-white rounded transition-colors rotate-180"><ChevronLeft size={16}/></button>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Mid fi wireframe Subsection */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-[#2B98C4] mb-4">Mid-fi Wireframes</h3>
              <p className="text-lg text-[#1E293B] font-medium leading-relaxed mb-12">
                A partir de la arquitectura y los flujos de usuario, se construyeron wireframes de media fidelidad con el objetivo de validar la organización del contenido y asegurar que las acciones clave fueran claras y accesibles desde las primeras iteraciones.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[...Array(15)].map((_, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="aspect-[9/16] bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm group-hover:shadow-xl transition-all cursor-zoom-in relative">
                       <img 
                         src={`/assets/images/nivio-images/mid-wireframe-nivio/screen_fix_${i+1}.png`}
                         alt={`Mid-fi Screen ${i+1}`}
                         className="w-full h-full object-cover"
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Screen {i+1}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Diseño y Validación Section */}
      <section className="py-24 bg-[#F1F5F9] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-[30px] lg:p-[60px] rounded-[15px] shadow-xl border border-white/50"
          >
            {/* Header Section 4 */}
          <div className="flex items-center gap-4 sm:gap-6 mb-16">
            <div className="w-16 h-16 rounded-full bg-[#2B98C4] flex items-center justify-center text-white text-3xl font-bold font-rubik shrink-0">
              4
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-rubik text-[#2B98C4]">Diseño y validación</h2>
          </div>

          <div className="space-y-20">
            {/* UI Kit Subsection */}
            <div>
              <h3 className="text-2xl font-black text-[#2B98C4] mb-8 uppercase tracking-widest">UI KIT</h3>
              
              {/* Colores */}
              <div className="mb-16">
                <h4 className="text-xl font-bold text-[#1E293B] mb-6">Colores</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { hex: "#2A9BC2", name: "Azul 100", textColor: "text-white" },
                    { hex: "#67E8F9", name: "Cyan", textColor: "text-slate-800" },
                    { hex: "#E8EDF2", name: "Gris 100", textColor: "text-slate-500" },
                    { hex: "#475569", name: "Gris humo 100", textColor: "text-white" },
                    { hex: "#195D74", name: "Verde 100", textColor: "text-white" },
                    { hex: "#F40B0B", name: "Rojo 100", textColor: "text-white" },
                  ].map((color, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col gap-2"
                    >
                      <div 
                        className="h-28 lg:h-36 rounded-xl shadow-sm flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className={`text-[11px] font-bold font-mono opacity-80 ${color.textColor}`}>{color.hex}</span>
                        <span className={`text-[13px] font-bold mt-1 ${color.textColor}`}>{color.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tipografía */}
              <div className="mb-16">
                <h4 className="text-xl font-bold text-[#1E293B] mb-4">Tipografía</h4>
                <p className="text-4xl font-roboto font-bold text-[#1E293B] mb-8">Roboto</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Display Card */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm space-y-6 flex flex-col">
                    <h5 className="text-gray-400 text-sm font-medium border-b border-gray-100 pb-2">Display</h5>
                    <div className="flex-grow space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className="text-6xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-3xl font-roboto font-bold">Large</span>
                          <span className="text-3xl font-roboto font-bold text-gray-400">57</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-5xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-2xl font-roboto font-medium">Medium</span>
                          <span className="text-2xl font-roboto font-medium text-gray-400">45</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-4xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-xl font-roboto font-normal">Small</span>
                          <span className="text-xl font-roboto font-normal text-gray-400">36</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Headline Card */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm space-y-6 flex flex-col">
                    <h5 className="text-gray-400 text-sm font-medium border-b border-gray-100 pb-2">Headline</h5>
                    <div className="flex-grow space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-lg font-roboto font-bold">Large</span>
                          <span className="text-lg font-roboto font-bold text-gray-400">32</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-base font-roboto font-medium">Medium</span>
                          <span className="text-base font-roboto font-medium text-gray-400">28</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-sm font-roboto font-normal">Small</span>
                          <span className="text-sm font-roboto font-normal text-gray-400">24</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title Card */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm space-y-6 flex flex-col">
                    <h5 className="text-gray-400 text-sm font-medium border-b border-gray-100 pb-2">Title</h5>
                    <div className="flex-grow space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-base font-roboto font-bold">Large</span>
                          <span className="text-base font-roboto font-bold text-gray-400">22</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-sm font-roboto font-medium">Medium</span>
                          <span className="text-sm font-roboto font-medium text-gray-400">16</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-roboto font-normal">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-xs font-roboto font-normal">Small</span>
                          <span className="text-xs font-roboto font-normal text-gray-400">14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Body Card */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm space-y-6 flex flex-col">
                    <h5 className="text-gray-400 text-sm font-medium border-b border-gray-100 pb-2">Body</h5>
                    <div className="flex-grow space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-sm font-roboto font-bold">Large</span>
                          <span className="text-sm font-roboto font-bold text-gray-400">16</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-xs font-roboto font-medium">Medium</span>
                          <span className="text-xs font-roboto font-medium text-gray-400">14</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-[10px] font-roboto font-normal">Small</span>
                          <span className="text-[10px] font-roboto font-normal text-gray-400">12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Label Card */}
                  <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm space-y-6 flex flex-col">
                    <h5 className="text-gray-400 text-sm font-medium border-b border-gray-100 pb-2">Label</h5>
                    <div className="flex-grow space-y-6 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-xs font-roboto font-bold">Large</span>
                          <span className="text-xs font-roboto font-bold text-gray-400">14</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-[10px] font-roboto font-medium">Medium</span>
                          <span className="text-[10px] font-roboto font-medium text-gray-400">12</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-roboto">Aa</span>
                        <div className="flex gap-4 items-center flex-1 justify-end">
                          <span className="text-[9px] font-roboto font-normal">Small</span>
                          <span className="text-[9px] font-roboto font-normal text-gray-400">11</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iconos */}
              <div className="mb-20">
                <h4 className="text-xl font-bold text-[#1E293B] mb-8">Iconos</h4>
                <div className="bg-white border border-gray-200 rounded-2xl p-12">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-y-12 gap-x-8">
                    {[
                      <Send className="w-8 h-8 text-[#2B98C4]" />,
                      <Key className="w-8 h-8 text-[#2B98C4]" />,
                      <QrCode className="w-8 h-8 text-[#2B98C4]" />,
                      <Coins className="w-8 h-8 text-[#2B98C4]" />,
                      <HelpingHand className="w-8 h-8 text-[#2B98C4]" />,
                      <ChevronRight className="w-8 h-8 text-[#2B98C4]" />,
                      
                      <Home className="w-8 h-8 text-[#2B98C4]" />,
                      <ClipboardList className="w-8 h-8 text-[#2B98C4]" />,
                      <Repeat className="w-8 h-8 text-[#2B98C4]" />,
                      <LayoutGrid className="w-8 h-8 text-[#2B98C4]" />,
                      <SquarePen className="w-8 h-8 text-[#2B98C4]" />,
                      <BookOpen className="w-8 h-8 text-[#2B98C4]" />,
                      
                      <Lock className="w-8 h-8 text-[#2B98C4]" />,
                      <Hash className="w-8 h-8 text-[#2B98C4]" />,
                      <ToggleRight className="w-8 h-8 text-[#2B98C4]" />,
                      <SlidersHorizontal className="w-8 h-8 text-[#2B98C4]" />,
                      <Bell className="w-8 h-8 text-[#2B98C4]" />,
                      <UserCircle className="w-8 h-8 text-[#2B98C4]" />,
                      
                      <LogOut className="w-8 h-8 text-[#2B98C4]" />
                    ].map((icon, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="flex justify-center items-center transition-all cursor-default"
                      >
                        <div className="p-4 rounded-2xl hover:bg-[#2B98C4]/5 transition-colors">
                          {icon}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hi fi wireframe Subsection */}
              <div className="overflow-hidden py-10 -mx-4 lg:-mx-12">
                <div className="px-4 lg:px-12 mb-10">
                  <h3 className="text-3xl font-bold text-[#2B98C4]">Hi-fi Wireframes</h3>
                  <p className="text-gray-500 mt-2">Exploración detallada de la interfaz final y flujos de usuario.</p>
                </div>

                {/* Marquee Row 1 - Left to Right */}
                <div className="relative flex overflow-hidden mb-8">
                  <motion.div 
                    animate={{ x: [0, -1920] }}
                    transition={{ 
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                      },
                    }}
                    className="flex flex-nowrap gap-6"
                  >
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="flex-none w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2rem] p-2 shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                          <img 
                            src={`/assets/images/nivio-images/hi-fi-wireframe-nivio/${i + 1}.png`}
                            alt={`Wireframe ${i + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for infinite loop */}
                    {[...Array(24)].map((_, i) => (
                      <div key={`dup1-${i}`} className="flex-none w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2rem] p-2 shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                          <img 
                            src={`/assets/images/nivio-images/hi-fi-wireframe-nivio/${i + 1}.png`}
                            alt={`Wireframe ${i + 1} Duplicate`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Marquee Row 2 - Right to Left */}
                <div className="relative flex overflow-hidden">
                  <motion.div 
                    animate={{ x: [-1920, 0] }}
                    transition={{ 
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                      },
                    }}
                    className="flex flex-nowrap gap-6"
                  >
                    {[...Array(24)].map((_, i) => (
                      <div key={i + 24} className="flex-none w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2rem] p-2 shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                          <img 
                            src={`/assets/images/nivio-images/hi-fi-wireframe-nivio/${i + 25}.png`}
                            alt={`Wireframe ${i + 25}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for infinite loop */}
                    {[...Array(24)].map((_, i) => (
                      <div key={`dup2-${i}`} className="flex-none w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2rem] p-2 shadow-lg overflow-hidden">
                        <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                          <img 
                            src={`/assets/images/nivio-images/hi-fi-wireframe-nivio/${i + 25}.png`}
                            alt={`Wireframe ${i + 25} Duplicate`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Prototipo Subsection */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Prototipo</h3>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm relative">
                  <div className="w-full h-[600px] md:h-auto md:aspect-video rounded-xl overflow-hidden border border-gray-100 shadow-xl bg-[#F8FAFC]">
                    <iframe 
                      title="Nivio Figma Prototype"
                      className="w-full h-full"
                      src="https://embed.figma.com/proto/SRHxxQz6mquuIR0L7dNc2f/Nivio-finance?node-id=887-3127&viewport=139%2C981%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=887%3A6219&page-id=45%3A165&embed-host=share" 
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-3 text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">Prototipo Interactivo en Tiempo Real</span>
                  </div>
                </div>
              </div>

              {/* Evaluación Subsection */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Evaluación de flujos clave y usabilidad</h3>
                <p className="text-lg text-[#1E293B] font-medium leading-relaxed mb-12">
                  Con el prototipo interactivo, se evaluaron los principales flujos del producto con el fin de validar la claridad de la experiencia y la facilidad para completar tareas clave.
                </p>
                
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-8">
                    {/* Flujos Evaluados */}
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                      <h4 className="text-xl font-bold text-[#2B98C4] mb-4 uppercase tracking-wider text-sm">Flujos evaluados</h4>
                      <p className="text-xs text-gray-400 mb-6 font-bold uppercase tracking-tight">Se seleccionaron los escenarios más representativos del uso de la plataforma:</p>
                      <ul className="space-y-4">
                        {["envío de dinero", "pago de servicios", "gestión de tarjetas", "consulta de movimientos"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2B98C4]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Criterios */}
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
                      <h4 className="text-xl font-bold text-[#2B98C4] mb-4 uppercase tracking-wider text-sm">Criterios de evaluación</h4>
                      <p className="text-xs text-gray-400 mb-6 font-bold uppercase tracking-tight">La evaluación se centró en identificar posibles fricciones en:</p>
                      <ul className="space-y-4">
                        {["Claridad de las acciones disponibles", "Número de pasos por flujo", "Comprensión de la información", "Facilidad de navegación"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2B98C4]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mockups */}
                  <div className="w-full md:w-1/3 relative h-[1000px] md:h-[500px] flex items-center justify-center mt-12 md:mt-0 overflow-visible">
                    <div className="relative w-full max-w-[280px] md:max-w-full h-full">
                        <motion.div 
                          initial={{ rotate: -10, x: -20 }}
                          whileInView={{ rotate: -12, x: -30 }}
                          viewport={{ once: true }}
                          className="absolute left-0 top-0 w-[220px] md:w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2.5rem] p-2 shadow-2xl z-10"
                        >
                          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                            <img src="/assets/images/nivio-images/hi-fi-wireframe-nivio/2.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ rotate: 10, x: 20 }}
                          whileInView={{ rotate: 12, x: 30 }}
                          viewport={{ once: true }}
                          className="absolute right-0 bottom-0 w-[220px] md:w-[220px] aspect-[9/18.5] bg-[#0F172A] rounded-[2.5rem] p-2 shadow-2xl"
                        >
                          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                            <img src="/assets/images/nivio-images/hi-fi-wireframe-nivio/44.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hallazgos Subsection */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Hallazgos</h3>
                <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {[
                        "Las acciones principales son fácilmente identificables desde el inicio",
                        "La navegación resulta intuitiva y predecible",
                        "Los flujos permiten completar tareas en pocos pasos",
                        "La información es comprensible sin necesidad de exploración adicional"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 text-[#1E293B] font-medium leading-relaxed">
                          <div className="w-2 h-2 rounded-full bg-[#2B98C4] mt-2 flex-shrink-0" />
                          <span className="text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>

              {/* Cierre Subsection */}
              <div>
                <h3 className="text-3xl font-bold text-[#2B98C4] mb-8">Cierre</h3>
                <div className="bg-[#475569] p-10 lg:p-14 rounded-2xl shadow-xl">
                    <div className="max-w-4xl space-y-8 text-white/90 text-lg leading-relaxed">
                      <p className="font-bold text-white text-xl">NIVIO no solo busca optimizar tareas, sino redefinir cómo las personas interactúan con su dinero.</p>
                      <p>El proyecto demuestra que, a través del diseño, es posible transformar procesos complejos en experiencias simples, claras y orientadas a la acción.</p>
                      <p>Este enfoque permitió construir una solución coherente, donde la arquitectura, los flujos y la interfaz trabajan en conjunto para ofrecer una experiencia fluida y centrada en el usuario.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">¿Te interesa este proyecto?</h2>
          <div className="flex justify-center">
            <Link to="/" className="w-48 py-4 bg-[#2B98C4] text-white rounded-xl font-bold hover:bg-[#1E88B4] transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NivioCaseStudy;
