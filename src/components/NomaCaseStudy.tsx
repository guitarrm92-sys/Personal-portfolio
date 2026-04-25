import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Target, Users, Lightbulb, Zap, Layout, Palette, CheckCircle2, Clock, Brain, TrendingUp, Menu, X,
  Home, User, Settings, UserCircle, ShoppingCart, Bell, ChevronLeft, Plus, Minus, Trash2, Edit2, MapPin, Calendar, Save, Utensils, CreditCard, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NomaCaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#2F4A3E] font-sans selection:bg-[#2F4A3E] selection:text-white">
      {/* Navigation */}
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
            className="md:hidden bg-[#4F6F5D] border-t border-white/10 px-4 pt-2 pb-6 space-y-4"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Sobre mí</Link>
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Proyectos</Link>
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Contactame</Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/wireframes-noma/noma-portrait-ver3.png" 
            alt="Noma Background Desktop" 
            className="hidden md:block w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <img 
            src="/assets/images/noma-portrait-movil.png" 
            alt="Noma Background Mobile" 
            className="block md:hidden w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-white/20 rounded-lg text-[#2F4A3E] hover:bg-white/60 transition-all font-medium shadow-sm"
            >
              <ArrowLeft size={18} />
              <span>Volver</span>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0 -mt-[200px] md:-mt-[150px]"
          >
          <div className="w-full max-w-[280px] md:max-w-[420px] mb-6 mx-auto md:mx-0">
            <svg viewBox="0 0 307 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M42.4139 53.7662H31.0616L10.6127 18.8588V53.7662H0V0.739563H11.3523L31.8012 35.6839V0.739563H42.4139V53.7662Z" fill="#2F4A3E"/>
              <path d="M139.734 27.4748C139.734 29.9893 139.401 32.4175 138.735 34.7594C138.094 37.0767 137.182 39.2585 135.999 41.3046C134.816 43.326 133.386 45.175 131.709 46.8513C130.033 48.5276 128.184 49.9698 126.163 51.1777C124.141 52.361 121.959 53.2732 119.618 53.9141C117.276 54.5797 114.847 54.9125 112.333 54.9125C109.818 54.9125 107.39 54.5797 105.048 53.9141C102.731 53.2732 100.549 52.361 98.503 51.1777C96.4816 49.9698 94.6326 48.5276 92.9563 46.8513C91.28 45.175 89.8378 43.326 88.6299 41.3046C87.4466 39.2585 86.5221 37.0767 85.8565 34.7594C85.2155 32.4175 84.8951 29.9893 84.8951 27.4748C84.8951 24.9602 85.2155 22.532 85.8565 20.1901C86.5221 17.8481 87.4466 15.6664 88.6299 13.6449C89.8378 11.6235 91.28 9.77455 92.9563 8.09821C94.6326 6.42187 96.4816 4.99205 98.503 3.80875C100.549 2.62545 102.731 1.71332 105.048 1.07237C107.39 0.406759 109.818 0.0739563 112.333 0.0739563C114.847 0.0739563 117.276 0.406759 119.618 1.07237C121.959 1.71332 124.141 2.62545 126.163 3.80875C128.184 4.99205 130.033 6.42187 131.709 8.09821C133.386 9.77455 134.816 11.6235 135.999 13.6449C137.182 15.6664 138.094 17.8481 138.735 20.1901C139.401 22.532 139.734 24.9602 139.734 27.4748ZM129.195 27.4748C129.195 25.1575 128.751 22.9757 127.864 20.9296C126.976 18.8588 125.768 17.0716 124.24 15.5678C122.736 14.0394 120.949 12.8314 118.878 11.9439C116.832 11.0565 114.65 10.6127 112.333 10.6127C109.991 10.6127 107.797 11.0565 105.751 11.9439C103.705 12.8314 101.917 14.0394 100.389 15.5678C98.8605 17.0716 97.6525 18.8588 96.765 20.9296C95.8776 22.9757 95.4338 25.1575 95.4338 27.4748C95.4338 29.7921 95.8776 31.9738 96.765 34.0199C97.6525 36.0414 98.8605 37.8163 100.389 39.3447C101.917 40.8732 103.705 42.0811 105.751 42.9686C107.797 43.8561 109.991 44.2998 112.333 44.2998C114.65 44.2998 116.832 43.8561 118.878 42.9686C120.949 42.0811 122.736 40.8732 124.24 39.3447C125.768 37.8163 126.976 36.0414 127.864 34.0199C128.751 31.9738 129.195 29.7921 129.195 27.4748Z" fill="#2F4A3E"/>
              <path d="M224.736 53.7662H214.161V15.9006C214.161 15.161 214.013 14.4708 213.717 13.8298C213.446 13.1889 213.064 12.6342 212.57 12.1658C212.102 11.6728 211.547 11.2907 210.906 11.0195C210.266 10.7483 209.575 10.6127 208.836 10.6127C208.096 10.6127 207.406 10.7483 206.765 11.0195C206.124 11.2907 205.557 11.6728 205.064 12.1658C204.596 12.6342 204.226 13.1889 203.955 13.8298C203.683 14.4708 203.548 15.161 203.548 15.9006V53.7662H192.935V15.9006C192.935 15.161 192.8 14.4708 192.528 13.8298C192.257 13.1889 191.875 12.6342 191.382 12.1658C190.914 11.6728 190.359 11.2907 189.718 11.0195C189.077 10.7483 188.387 10.6127 187.647 10.6127C186.908 10.6127 186.217 10.7483 185.576 11.0195C184.935 11.2907 184.368 11.6728 183.875 12.1658C183.407 12.6342 183.037 13.1889 182.766 13.8298C182.495 14.4708 182.359 15.161 182.359 15.9006V53.7662H171.747V15.9006C171.747 13.7066 172.153 11.6481 172.967 9.72525C173.805 7.77773 174.939 6.08907 176.369 4.65925C177.823 3.20477 179.512 2.07078 181.435 1.25726C183.382 0.419086 185.453 0 187.647 0C189.619 0 191.518 0.357455 193.342 1.07237C195.166 1.76262 196.805 2.77336 198.26 4.10457C199.714 2.77336 201.341 1.76262 203.141 1.07237C204.965 0.357455 206.864 0 208.836 0C211.03 0 213.088 0.419086 215.011 1.25726C216.959 2.07078 218.647 3.20477 220.077 4.65925C221.532 6.08907 222.666 7.77773 223.479 9.72525C224.317 11.6481 224.736 13.7066 224.736 15.9006V53.7662Z" fill="#2F4A3E"/>
              <path d="M296.269 32.5777V21.965C296.269 20.5105 295.985 19.1423 295.418 17.8604C294.876 16.5539 294.124 15.4199 293.163 14.4585C292.201 13.497 291.067 12.7451 289.761 12.2028C288.479 11.6358 287.111 11.3523 285.656 11.3523C284.202 11.3523 282.821 11.6358 281.515 12.2028C280.233 12.7451 279.111 13.497 278.15 14.4585C277.188 15.4199 276.424 16.5539 275.857 17.8604C275.315 19.1423 275.043 20.5105 275.043 21.965V32.5777H296.269ZM306.882 53.7662H296.269V43.1535H275.043V53.7662H264.468V21.965C264.468 19.0314 265.022 16.2827 266.132 13.7189C267.241 11.1304 268.745 8.87475 270.643 6.95189C272.566 5.02903 274.809 3.51292 277.373 2.40358C279.961 1.29423 282.722 0.739563 285.656 0.739563C288.59 0.739563 291.338 1.29423 293.902 2.40358C296.491 3.51292 298.746 5.02903 300.669 6.95189C302.592 8.87475 304.108 11.1304 305.218 13.7189C306.327 16.2827 306.882 19.0314 306.882 21.965V53.7662Z" fill="#2F4A3E"/>
            </svg>
          </div>
          <h1 className="text-xl md:text-3xl font-bold text-[#2F4A3E] mb-6 tracking-tight">Comer bien, sin pensar de más</h1>
          <p className="text-base md:text-lg text-[#2F4A3E] leading-relaxed max-w-sm font-medium">
            Una app que elimina el esfuerzo de comer bien, transformando la nutrición en un hábito simple y sostenible.
          </p>
        </motion.div>
      </div>
      </section>

      {/* 01 El Problema */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-[#F4F1EC]/50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4A3E]">El problema</h2>
            </div>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#2F4A3E] opacity-90">
              <p>
                Cada vez más personas quieren comer saludable, pero mantener ese hábito en el día a día puede ser difícil. Las largas jornadas de trabajo, la falta de tiempo para cocinar y la decisión constante de qué comer generan fricción en la rutina diaria.
              </p>
              <p>
                Al mismo tiempo, han surgido servicios de meal prep y planes de alimentación que buscan resolver este problema. Sin embargo, muchas de estas soluciones presentan experiencias digitales complejas, poca claridad en los menús o procesos de compra poco intuitivos.
              </p>
              <p>
                Este proyecto surge como una exploración de diseño para crear una experiencia digital que simplifique la forma en que las personas organizan su alimentación semanal.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 02 El Proyecto */}
      <section className="py-24 bg-[#2F4F3E] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4F3E]">2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">El proyecto</h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed opacity-90 mb-16">
              <p>
                <strong>Noma</strong> es una aplicación conceptual diseñada para ayudar a las personas a mantener una alimentación saludable sin complicaciones. La plataforma permite explorar menús, elegir planes de comida y organizar la semana de forma rápida y sencilla.
              </p>
              <p>
                El objetivo del proyecto fue diseñar una experiencia centrada en reducir la fricción mental asociada a decidir qué comer, ofreciendo una interfaz clara, amigable y orientada a la rutina del usuario.
              </p>
              <p>
                A través de un proceso de investigación, benchmarking y diseño de interfaz, se desarrolló una solución que busca hacer que comer bien sea una decisión fácil dentro de la vida cotidiana.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mi Rol Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-[15px] md:p-8 text-[#2F4A3E]"
              >
                <h3 className="text-2xl font-bold mb-8">Mi rol</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['UX/UI design', 'Product design', 'Interaction design', 'Branding', 'Wireframes', 'Prototipado'].map((role, i) => (
                    <motion.div 
                      key={role}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.05) }}
                      className="py-2 bg-white rounded-xl text-sm font-medium border border-[#2F4A3E]/20 shadow-sm flex items-center justify-center text-center px-2"
                    >
                      {role}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Herramientas Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-[15px] md:p-8 text-[#2F4A3E]"
              >
                <h3 className="text-2xl font-bold mb-8">Herramientas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Figma', 'Illustrator', 'Google stich'].map((tool, i) => (
                    <motion.div 
                      key={tool}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.05) }}
                      className="py-2 bg-white rounded-xl text-sm font-medium border border-[#2F4A3E]/20 shadow-sm flex items-center justify-center text-center px-2"
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 03 Benchmark */}
      <section className="py-12 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-10">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-[#F4F1EC]/50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4A3E]">Benchmark</h2>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-[#2F4A3E] opacity-90 mb-12">
              Con el objetivo de entender el panorama actual de las aplicaciones de hábitos saludables, se llevó a cabo un análisis comparativo de las siguientes plataformas, identificando patrones, oportunidades y áreas de mejora en la experiencia de usuario.
            </p>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="overflow-x-auto -mx-4 sm:mx-0"
            >
              <div className="min-w-[1200px] p-4 sm:p-0">
                <div className="rounded-xl overflow-hidden border border-[#2F4A3E]/20 shadow-sm">
                  <table className="w-full border-collapse text-sm text-black">
                  <thead>
                    <tr className="bg-[#2F4A3E] text-white">
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Producto</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Storytelling</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Beneficios</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Menus</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Usabilidad</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Buenas practicas</th>
                      <th className="p-4 text-left font-bold border border-[#2F4A3E]">Oportunidades de mejora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Manzana Verde */}
                    <tr className="bg-[#F4F1EC]/30">
                      <td className="p-4 border border-[#2F4A3E]/10 align-middle text-center">
                        <span className="font-bold text-lg text-[#4CAF50]">Manzana verde</span>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top">
                        <p className="font-bold mb-2">Lo basa en 4 pasos:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Calcula las calorias</li>
                          <li>Elige el plan</li>
                          <li>Selecciona los platos</li>
                          <li>Recibe la comida en tu puerta</li>
                        </ul>
                        <p className="mt-2">Mas enfocado hacia lo funcional</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Menú variado</li>
                          <li>Sin cocinar</li>
                          <li>Flexibilidad en la entrega</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <p>Carta amplia con rotación semanal para diferentes momentos del día.</p>
                        <p>Cada selección distingue los macros en cada alimento y descripción de ingredientes.</p>
                        <p>Personalizable en ciertas preparaciones.</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Flujo general claro</li>
                          <li>Depende de app/registro para completar compra, el registro no es muy claro y presenta fricción en el registro</li>
                          <li>Dificultad en el proceso de registro</li>
                          <li>La interacción de ciertos elementos no es la adecuada</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Describe los macros de cada alimento</li>
                          <li>Tienen un indicador para monitorear el consumo de calorias</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>La experiencia en web es deficiente</li>
                          <li>Debo registrarme e ingresar en la app para entender como funciona</li>
                          <li>Las card de descripción de comida pude distinguirse mejor</li>
                        </ul>
                      </td>
                    </tr>

                    {/* Foody */}
                    <tr className="bg-white">
                      <td className="p-4 border border-[#2F4A3E]/10 align-middle text-center">
                        <span className="font-bold text-lg text-[#673AB7]">Foody</span>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <p>Comer saludable, Comer bien sin complicarse.</p>
                        <p>Mensaje práctico: comida real, sin conservantes, lista en minutos.</p>
                        <p className="font-bold">Elige, recibe, disfruta y recibe</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Mensajes orientados a la rutina y conveniencia</li>
                          <li>Beneficios funcionales (ingredientes naturales, sin conservantes, rápido)</li>
                          <li>Un propósito aspiracional de bienestar</li>
                          <li>Incentivos (cashback, membresias) que empujan a la acción</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top">
                        <p>Ahorro de tiempo, ingredientes naturales, constancia semanal.</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <p>Menú semanal definido y fácil de entender; poca personalización.</p>
                        <p>Tienes mas opciones congelados o listos para comer.</p>
                        <p>Hay disponibles preparaciones completas y tambien se puede pedir elementos especificos precocidos, del cual se puede prepara en poco tiempo.</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Proceso entendible sin explicación previa; buena jerarquía de información</li>
                          <li>La interfaz es mas intuitiva, se vale de tags para destacar la información importante</li>
                          <li>La experiencia en web es intuitiva, presentandolo como un ecommerce donde la información está disponible sin necesidad de registrarse</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Manejo de planes de suscripción tasados según el pedido de platos</li>
                          <li>La interfaz es sencilla intuitiva, el manejo de los colores presenta un contraste adecuado</li>
                          <li>La jerarquía de la información es clara</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>El registro es facil, pero la seguridad del sitio no es la mejor</li>
                          <li>Algunos elementos en responsive se desbordan del contenedor</li>
                          <li>Hay algunos enlaces rotos</li>
                          <li>El comportamiento de algunos elementos cuando se selecciona no es tan intuitiva</li>
                        </ul>
                      </td>
                    </tr>

                    {/* Mingū */}
                    <tr className="bg-[#F4F1EC]/30">
                      <td className="p-4 border border-[#2F4A3E]/10 align-middle text-center">
                        <span className="font-bold text-lg text-[#2196F3]">Mingū</span>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <p>Mensaje claro: come bien sin cocinar. Muy humano.</p>
                        <p>Se conecta con el problema real de su audiencia.</p>
                        <p>Promueve estilo de vida, no solo producto.</p>
                        <p>Lenguaje emocional que invita a la acción.</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <p className="font-bold">Beneficios más emocionales</p>
                        <p>se vale de argumentos más emocionales para conectar con el usuario que se quiere cuidar pero no quiere un plan de alimentación tan rigido.</p>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Menú atractivo, pero poco estructurado por objetivo nutricional</li>
                          <li>Los platos tienen más opciones de personalización</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Navegación intuitiva y rápida</li>
                          <li>El responsive no está bien desarrollado</li>
                          <li>Interfaz minimalista</li>
                          <li>El elemento del menú desplegable se siente básico y poco desarrollo en la propuesta</li>
                          <li>La app falla constantemente lo cual no permite una experiencia fluida</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Entregas eficientes</li>
                          <li>Platos altamente personalizables</li>
                        </ul>
                      </td>
                      <td className="p-4 border border-[#2F4A3E]/10 align-top space-y-2">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Beneficios nutricionales poco profundos</li>
                          <li>Menús poco estructurados por objetivo</li>
                          <li>Ideal como "puerta de entrada", pero no tanto para planes largos</li>
                          <li>En las card de los platos preparados hay un elementos referente al empaque del alimento que hace mucho ruido en la imagen y no le aporta</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 04 El Usuario */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-[#F4F1EC]/50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">4</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4A3E]">El usuario</h2>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-[#2F4A3E] opacity-90 mb-12">
              Para entender a quién estaba diseñando, creé una persona que representa a usuarios que buscan comer mejor sin complicarse. Este perfil ayudó a revelar sus frustraciones, motivaciones y hábitos, guiando el diseño hacia una experiencia más intuitiva y cercana.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Diana Fernandez Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#2F4F3E] rounded-xl p-[15px] md:p-8 text-white"
              >
                <div className="flex flex-col sm:flex-row gap-8 mb-12">
                  <div className="w-full sm:w-1/2 aspect-square rounded-2xl overflow-hidden border-4 border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
                      alt="Diana Fernandez" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="sm:w-1/2 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold mb-6 leading-tight">Diana Fernandez</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        Edad 30 años
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        Directora de operaciones financieras
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        Bogotá, Colombia
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6">Bio</h4>
                  <p className="text-sm leading-relaxed opacity-80">
                    Diana tiene 30 años, es soltera y cuenta con un ingreso medio-alto. Trabaja de forma remota o híbrida, con una agenda exigente y una rutina diaria bien estructurada. Valora su salud y bienestar, por lo que busca opciones de alimentación práctica y de calidad, sin sacrificar tiempo ni recurrir a ofertas poco saludables. Es una persona activa, integra el ejercicio físico de manera constante en su día a día y prioriza soluciones que se adapten a su ritmo de vida.
                  </p>
                </div>
              </motion.div>

              {/* Personalidad Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F4F1EC] rounded-xl p-[15px] md:p-8 text-[#2F4A3E]"
              >
                <h3 className="text-4xl font-bold mb-12">Personalidad</h3>
                
                <div className="space-y-8">
                  {[
                    { left: "Introvertido", right: "Extrovertido", value: 75 },
                    { left: "Analítico", right: "Creativo", value: 50 },
                    { left: "Ocupado", right: "Tiempo libre", value: 15 },
                    { left: "Desordenado", right: "Organizado", value: 85 },
                    { left: "Independiente", right: "Trabajo en equipo", value: 90 },
                    { left: "Pasivo", right: "Activo", value: 80 },
                    { left: "Seguro", right: "Arriesgado", value: 50 }
                  ].map((trait, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>{trait.left}</span>
                        <span>{trait.right}</span>
                      </div>
                      <div className="relative h-0.5 bg-[#2F4A3E]/20 w-full">
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-8 h-4 bg-black rounded-full"
                          style={{ left: `calc(${trait.value}% - 16px)` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Additional User Persona Details */}
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {/* Intereses */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F4F1EC] rounded-xl p-3 md:p-4 text-[#2F4A3E]"
              >
                <h3 className="text-lg font-bold mb-2">Intereses</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#F8B4A6] rounded-xl p-1.5 text-[9px] leading-tight">
                    <p className="font-bold mb-0.5 text-[10px]">Alimentación fácil y saludable</p>
                    <ul className="list-disc list-inside space-y-0">
                      <li>Productos naturales</li>
                      <li>No ultraprocesados</li>
                      <li>No cocinar</li>
                      <li>Gran variedad</li>
                    </ul>
                  </div>
                  <div className="bg-[#F8B4A6] rounded-xl p-1.5 text-[9px] leading-tight">
                    <p className="font-bold mb-0.5 text-[10px]">Productividad</p>
                    <ul className="list-disc list-inside space-y-0">
                      <li>Habitos saludables</li>
                      <li>Gestión del tiempo</li>
                    </ul>
                  </div>
                  <div className="bg-[#F8B4A6] rounded-xl p-1.5 text-[9px] leading-tight">
                    <p className="font-bold mb-0.5 text-[10px]">Bienestar</p>
                    <ul className="list-disc list-inside space-y-0">
                      <li>Ejercicio funcional</li>
                    </ul>
                  </div>
                  <div className="bg-[#F8B4A6] rounded-xl p-1.5 text-[9px] leading-tight">
                    <p className="font-bold mb-0.5 text-[10px]">Tecnología</p>
                    <ul className="list-disc list-inside space-y-0">
                      <li>Suscripciones</li>
                      <li>Automatización de tareas</li>
                      <li>Agenda digital</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Influencias */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#F4F1EC] rounded-xl p-3 md:p-4 text-[#2F4A3E]"
              >
                <h3 className="text-lg font-bold mb-2">Influencias</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Ecomerce', 'Suscripciones', 'Moda', 'Fitness', 'Nutrición', 'Opiniones y reseñas'].map(tag => (
                    <div key={tag} className="bg-[#98E4B1] rounded-lg p-1.5 text-[9px] font-medium flex items-center justify-center text-center">
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Objetivos */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#F4F1EC] rounded-xl p-3 md:p-4 text-[#2F4A3E]"
              >
                <h3 className="text-lg font-bold mb-2">Objetivos</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#8ED8F8] rounded-xl p-1.5 text-[9px] flex items-center">
                    <p className="font-medium">Comer saludable en su rutina diaria</p>
                  </div>
                  <div className="bg-[#8ED8F8] rounded-xl p-1.5 text-[9px] space-y-0">
                    <p className="font-medium">Mantener en buenas condiciones su condición física</p>
                    <p className="font-medium">Sentirse a gusto con sigo misma</p>
                  </div>
                  <div className="bg-[#8ED8F8] rounded-xl p-1.5 text-[9px] flex items-center">
                    <p className="font-medium">No tener que preocuparse por lo que come</p>
                  </div>
                  <div className="bg-[#8ED8F8] rounded-xl p-1.5 text-[9px] flex items-center">
                    <p className="font-medium">No cocinar diariamente</p>
                  </div>
                </div>
              </motion.div>

              {/* Necesidades y expectativas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#F4F1EC] rounded-xl p-[15px] md:p-6 text-[#2F4A3E]"
              >
                <h3 className="text-2xl font-bold mb-4">Necesidades y expectativas</h3>
                <div className="grid grid-cols-2 gap-4 text-xs leading-tight">
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>La comida debe ser saludable</p>
                  </div>
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>Debe ser facil de pedir y decidir que comida quiero</p>
                  </div>
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>El servicio de entrega debe ser confiable y flexible</p>
                  </div>
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>La información sobra la comida debe ser completa, facil de entender y leer</p>
                  </div>
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>El proceso de pago deber ser facil y claro de entender</p>
                  </div>
                  <div className="bg-[#F8C486] rounded-xl p-4">
                    <p>La información de las entregas debe ser clara</p>
                  </div>
                </div>
              </motion.div>

              {/* Motivaciones */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#F4F1EC] rounded-xl p-[15px] md:p-8 text-[#2F4A3E]"
              >
                <h3 className="text-2xl font-bold mb-8">Motivaciones</h3>
                <div className="grid grid-cols-2 gap-4 text-xs leading-tight">
                  <div className="bg-[#D8B6FF] rounded-xl p-4 h-20 flex items-center">
                    <p>Mantener una imagen de persona organizada y consciente.</p>
                  </div>
                  <div className="bg-[#D8B6FF] rounded-xl p-4 h-20 flex items-center">
                    <p>Biesnestar sin sacrificio.</p>
                  </div>
                  <div className="bg-[#D8B6FF] rounded-xl p-4 h-20 flex items-center">
                    <p>Poder organizar su rutina diara de manera fácil y eficiente.</p>
                  </div>
                  <div className="bg-[#D8B6FF] rounded-xl p-4 h-20 flex items-center">
                    <p>Comer sin preocupaciones.</p>
                  </div>
                </div>
              </motion.div>

              {/* Dolores */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-[#F4F1EC] rounded-xl p-[15px] md:p-8 text-[#2F4A3E]"
              >
                <h3 className="text-2xl font-bold mb-8">Dolores</h3>
                <div className="grid grid-cols-2 gap-4 text-xs leading-tight">
                  <div className="bg-[#F8D876] rounded-xl p-4 h-20 flex items-center">
                    <p>No tiene tiempo para esta cocinando o decidiendo que cocinar</p>
                  </div>
                  <div className="bg-[#F8D876] rounded-xl p-4 h-20 flex items-center">
                    <p>Desea comer alimentos balaneceados nutricionalmente</p>
                  </div>
                  <div className="bg-[#F8D876] rounded-xl p-4 h-20 flex items-center">
                    <p>Desea que sea algo sostenible y confiable</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 05 Oportunidad de diseño */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-[#F4F1EC]/50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">5</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4A3E]">Oportunidad de diseño</h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#2F4A3E] opacity-90">
              <p className="font-bold">La oportunidad no está en dar más información, sino en simplificar la toma de decisiones.</p>
              <p>
                Para personas con tiempo limitado, el reto no es saber qué comer, sino hacerlo de forma rápida, eficiente y sin fricción. NOMA busca diseñar una experiencia donde comer bien requiera menos esfuerzo que hacerlo mal, facilitando decisiones sostenibles y confiables en el día a día.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 06 Propuesta de Valor */}
      <section className="py-24 bg-[#2F4A3E] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">6</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Propuesta de valor</h2>
            </div>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed opacity-90">
              <p>NOMA transforma la nutrición en una experiencia simple, rápida y sin fricción.</p>
              <p>
                En lugar de exigir disciplina o conocimiento técnico, guía al usuario con decisiones claras en el momento adecuado, permitiéndole mantener hábitos saludables de forma fácil y sostenible. Además, facilita la planificación de su menú diario y presenta la información necesaria de manera clara para elegir cada comida con confianza.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 07 Flujo de Usuario */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-[#F4F1EC]/50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">7</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F4A3E]">Flujo de usuario</h2>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-[#2F4A3E] opacity-90 mb-12">
              La experiencia fue diseñada para reducir al mínimo el esfuerzo del usuario, permitiéndole configurar su dieta, seleccionar su plan, realizar el pago y definir la fecha de envío en un flujo rápido, claro y sin fricción.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#2F4A3E]/10 bg-[#F4F1EC]/30 p-8 md:p-12"
            >
              <div className="w-full rounded-xl overflow-hidden bg-white border border-[#2F4A3E]/5 flex items-center justify-center">
                <img 
                  src="/assets/images/user-flow-noma.png" 
                  alt="Diagrama de flujo de usuario NOMA" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 08 Decisiones de diseño */}
      <section className="py-24 bg-[#2F4A3E] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">8</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Decisiones de diseño</h2>
            </div>
            
            <div className="space-y-12 max-w-5xl">
              {[
                {
                  title: "Reducción de fricción",
                  desc: "Eliminé la necesidad de ingresar información manual compleja, priorizando interacciones rápidas y selección simplificada para facilitar el uso diario."
                },
                {
                  title: "Simplificar la información",
                  desc: "Reemplacé datos nutricionales complejos por representaciones visuales claras, permitiendo al usuario comprender su progreso de forma inmediata. Para ello, jerarquicé la información y enfoqué la atención en los elementos más relevantes."
                },
                {
                  title: "Habitos sostenibles",
                  desc: "Me enfoqué en diseñar una experiencia que facilite la toma de decisiones, permitiendo al usuario configurar su dieta semanal de forma simple, ágil y efectiva."
                },
                {
                  title: "Flujo de usuario",
                  desc: "Diseñé un flujo paso a paso simple e intuitivo que guía al usuario en la selección de opciones alineadas con sus requerimientos nutricionales, facilitando la toma de decisiones y reduciendo la fricción durante el proceso."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="mt-2 w-3 h-3 bg-white rotate-45 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-base md:text-lg opacity-80 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 09 UI */}
      <section className="pt-24 pb-0 bg-[#F4F1EC]/30 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full p-[15px] md:p-0">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-14 h-14 rounded-full border border-[#2F4A3E]/20 bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">9</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#2F4A3E]">UI</h2>
            </div>

            <div className="space-y-16">
              {/* Mid fi wireframe */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#2F4A3E] mb-6">Mid fi wireframe</h3>
                <p className="text-base md:text-lg text-[#2F4A3E] opacity-80 mb-12 max-w-4xl">
                  Eliminé la necesidad de ingresar información manual compleja, priorizando interacciones rápidas y selección simplificada para facilitar el uso diario.
                </p>
                
                <div className="bg-white rounded-xl p-[15px] md:p-16 shadow-sm border border-[#2F4A3E]/5">
                  <div className="w-full rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="/assets/images/midfi-wireframe-noma.png" 
                      alt="Mid-fi wireframes NOMA" 
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* UI kit */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#2F4A3E] mb-12">UI kit</h3>
                
                <div className="space-y-12">
                  {/* Colores */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-[15px] md:p-8 border border-[#2F4A3E]/10 shadow-sm"
                  >
                    <h4 className="text-lg font-bold text-[#2F4A3E] mb-8">Colores</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                      {[
                        { hex: '#2F4A3E', label: '#2F4F3E' },
                        { hex: '#F4F1EC', label: '#F4F1EC' },
                        { hex: '#8FAEA1', label: '#8FAEA1' },
                        { hex: '#D4A373', label: 'D4A373' },
                        { hex: '#43A047', label: '#43A047' },
                        { hex: '#C96A5B', label: '#C96A5B' }
                      ].map((color, i) => (
                        <motion.div 
                          key={color.hex} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="space-y-3"
                        >
                          <div className="aspect-square rounded-xl shadow-inner border border-black/5" style={{ backgroundColor: color.hex }}></div>
                          <p className="text-[10px] font-bold text-center opacity-70">{color.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Iconos */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-bold text-[#2F4A3E]">Iconos</h4>
                    <div className="bg-white rounded-xl p-[15px] md:p-6 border-2 border-dashed border-purple-200 flex flex-wrap items-center justify-center gap-6 text-[#2F4A3E]">
                      <Home size={20} />
                      <User size={20} />
                      <Settings size={20} />
                      <UserCircle size={20} />
                      <Home size={20} className="opacity-50" />
                      <ShoppingCart size={20} />
                      <Bell size={20} />
                      <ChevronLeft size={20} />
                      <Plus size={20} />
                      <Minus size={20} />
                      <Trash2 size={20} />
                      <Edit2 size={20} />
                      <MapPin size={20} />
                      <Calendar size={20} />
                      <Save size={20} />
                      <X size={20} />
                      <div className="w-px h-6 bg-gray-200 mx-2"></div>
                      <Utensils size={20} />
                      <Clock size={20} />
                      <TrendingUp size={20} />
                      <CreditCard size={20} />
                    </div>
                  </motion.div>

                  {/* Botones & Textbox */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-[15px] md:p-8 border border-[#2F4A3E]/10 shadow-sm"
                  >
                    <div className="grid md:grid-cols-3 gap-12">
                      {/* Botones Column */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2F4A3E]">Botones</h4>
                        <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-4">
                          <button className="w-full py-3 bg-[#2F4A3E] text-white rounded-lg font-medium text-sm">Text</button>
                          <button className="w-full py-3 bg-[#8FAEA1]/40 text-[#2F4A3E]/60 rounded-lg font-medium text-sm">Text</button>
                          <button className="w-full py-3 bg-[#2F4A3E]/80 text-white rounded-lg font-medium text-sm">Text</button>
                          <button className="w-full py-3 bg-white border border-gray-200 rounded-lg font-medium text-sm flex items-center justify-center gap-2">
                            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" className="w-4 h-4" alt="Google" />
                            Google
                          </button>
                        </div>
                        <div className="pt-8">
                          <h4 className="text-lg font-bold text-[#2F4A3E] mb-4">Top menu</h4>
                          <div className="bg-[#2F4A3E] text-white p-3 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={16} />
                              <span className="text-[10px]">Hola, Diana</span>
                            </div>
                            <Bell size={16} />
                          </div>
                        </div>
                      </div>

                      {/* Textbox Column */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2F4A3E]">Textbox</h4>
                        <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-6">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold opacity-60">Label</label>
                            <div className="relative">
                              <input type="text" placeholder="Text" className="w-full p-2 border border-gray-200 rounded text-xs pr-8" />
                              <Search size={14} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-40" />
                            </div>
                            <p className="text-[8px] opacity-40">Support text</p>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold opacity-60">Label</label>
                            <input type="text" className="w-full p-2 border border-gray-200 rounded text-xs" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold opacity-60">Label</label>
                            <input type="text" value="Text" className="w-full p-2 border border-gray-200 rounded text-xs" readOnly />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold opacity-60 text-red-500">Label</label>
                            <input type="text" value="Text" className="w-full p-2 border border-red-200 rounded text-xs bg-red-50/30" readOnly />
                            <p className="text-[8px] text-red-400">Support text</p>
                          </div>
                        </div>
                      </div>

                      {/* Small Botones Column */}
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2F4A3E]">Botones</h4>
                        <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl flex flex-col items-center gap-8">
                          <div className="text-center space-y-1">
                            <Home size={20} className="mx-auto text-[#2F4A3E]" />
                            <p className="text-[8px] font-bold opacity-60">Text</p>
                          </div>
                          <div className="text-center space-y-1 opacity-30">
                            <Home size={20} className="mx-auto text-[#2F4A3E]" />
                            <p className="text-[8px] font-bold">Text</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom menu */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-[15px] md:p-8 border border-[#2F4A3E]/10 shadow-sm"
                  >
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2F4A3E]">Bottom menu</h4>
                        <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-4">
                          {[1, 2, 3, 4].map((row) => (
                            <div key={row} className="flex justify-around border border-gray-100 p-2 rounded bg-white">
                              {['Inicio', 'Mi menu', 'Pedidos', 'Perfil'].map((item, i) => (
                                <div key={i} className={`text-center space-y-1 ${row === 1 && i === 0 ? 'text-[#2F4A3E]' : row === 2 && i === 1 ? 'text-[#2F4A3E]' : row === 3 && i === 2 ? 'text-[#2F4A3E]' : row === 4 && i === 3 ? 'text-[#2F4A3E]' : 'opacity-30'}`}>
                                  {i === 0 && <Home size={14} className="mx-auto" />}
                                  {i === 1 && <Utensils size={14} className="mx-auto" />}
                                  {i === 2 && <ShoppingCart size={14} className="mx-auto" />}
                                  {i === 3 && <UserCircle size={14} className="mx-auto" />}
                                  <p className="text-[8px] font-bold">{item}</p>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#2F4A3E]">Bottom menu</h4>
                        <div className="flex gap-8">
                          <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-4">
                            <div className="w-12 h-10 border border-gray-200 rounded flex flex-col items-center justify-center">
                              <span className="text-[8px] opacity-40">Text</span>
                              <span className="text-xs font-bold">00</span>
                            </div>
                            <div className="w-12 h-10 bg-[#8FAEA1] text-white rounded flex flex-col items-center justify-center">
                              <span className="text-[8px]">Text</span>
                              <span className="text-xs font-bold">00</span>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div className="p-4 border-2 border-dashed border-purple-200 rounded-xl">
                              <div className="bg-[#D4A373] text-white px-3 py-1 rounded-full text-[10px] flex items-center gap-2">
                                tag <X size={10} />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="w-6 h-6 bg-[#2F4A3E] text-white rounded-full flex items-center justify-center">
                                <Plus size={14} />
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="w-6 h-6 bg-[#2F4A3E] text-white rounded-full flex items-center justify-center">
                                  <Minus size={14} />
                                </div>
                                <span className="text-xs font-bold">0</span>
                                <div className="w-6 h-6 bg-[#2F4A3E] text-white rounded-full flex items-center justify-center">
                                  <Plus size={14} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Componentes */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-[15px] md:p-8 border border-[#2F4A3E]/10 shadow-sm"
                  >
                    <h4 className="text-lg font-bold text-[#2F4A3E] mb-8">Componentes</h4>
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6 overflow-hidden">
                        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
                          {[
                            { title: 'Ensalada de atún con aguacate', img: '/assets/images/food1.png' },
                            { title: 'Bowl saludable de pollo estilo fajita', img: '/assets/images/food2.png' },
                            { title: 'Ensalada de pollo fajita', img: '/assets/images/food3.png' },
                            { title: 'Tazon de yogurt con frutos y miel', img: '/assets/images/food4.png' }
                          ].map((item, i) => (
                            <div key={i} className="w-[100px] md:w-[120px] flex-shrink-0 space-y-2">
                              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-xl overflow-hidden bg-gray-100 border border-[#2F4A3E]/5">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              </div>
                              <p className="text-[8px] font-bold text-center leading-tight h-4 flex items-center justify-center">{item.title}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-[#2F4A3E]"></div>
                          <div className="w-1 h-1 rounded-full bg-[#2F4A3E]/20"></div>
                          <div className="w-1 h-1 rounded-full bg-[#2F4A3E]/20"></div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center space-y-4 overflow-hidden">
                        <p className="text-sm font-bold text-[#2F4A3E]">Selecciona el día</p>
                        <p className="text-[10px] font-bold opacity-60">Diciembre</p>
                        <div className="flex gap-1 md:gap-2">
                          {[23, 24, 25, 26, 27].map((day, i) => (
                            <div key={day} className={`w-8 h-10 md:w-10 md:h-12 rounded flex flex-col items-center justify-center ${i === 0 ? 'bg-[#8FAEA1] text-white' : 'bg-[#8FAEA1]/40 text-[#2F4A3E]/60'}`}>
                              <span className="text-[8px]">Lun</span>
                              <span className="text-xs font-bold">{day}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Cards */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-[15px] md:p-8 border border-[#2F4A3E]/10 shadow-sm"
                  >
                    <h4 className="text-lg font-bold text-[#2F4A3E] mb-8">Cards</h4>
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Address/Date Selection Cards */}
                      <div className="p-3 md:p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-8">
                        {/* Version 1 */}
                        <div className="bg-[#F4F7F6] p-[15px] rounded-xl space-y-4 border border-[#2F4A3E]/5 overflow-hidden">
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold opacity-60">Direccion</p>
                            <div className="flex items-center justify-between bg-white p-2 rounded border border-gray-100 gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <MapPin size={14} className="text-[#2F4A3E] flex-shrink-0" />
                                <span className="text-[10px] truncate">Calle 5 #70 20 int 8 apt 402</span>
                              </div>
                              <div className="w-6 h-6 bg-[#2F4A3E] text-white rounded flex items-center justify-center flex-shrink-0">
                                <Edit2 size={12} />
                              </div>
                            </div>
                          </div>
                          <div className="text-center space-y-2">
                            <p className="text-sm font-bold">Selecciona la fecha</p>
                            <p className="text-[10px] opacity-60">Diciembre</p>
                            <div className="flex justify-between gap-1">
                              {[23, 24, 25, 26, 27].map((day) => (
                                <div key={day} className="flex-1 bg-white border border-gray-200 rounded p-1 text-center">
                                  <p className="text-[8px] opacity-60">Lun</p>
                                  <p className="text-[10px] font-bold">{day}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-center opacity-60">Selecciona un horario</p>
                            <div className="flex gap-2">
                              <div className="flex-1 bg-white p-2 rounded text-center border border-gray-100">
                                <p className="text-[10px] font-bold">Mañana <span className="font-normal opacity-60">8am -12m</span></p>
                              </div>
                              <div className="flex-1 bg-white p-2 rounded text-center border border-gray-100">
                                <p className="text-[10px] font-bold">Tarde <span className="font-normal opacity-60">2pm - 6pm</span></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Version 2 (Active state) */}
                        <div className="bg-[#F4F7F6] p-[15px] rounded-xl space-y-4 border border-[#2F4A3E]/5 overflow-hidden">
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold opacity-60">Direccion</p>
                            <div className="flex items-center justify-between bg-white p-2 rounded border border-gray-100 gap-2">
                              <div className="flex items-center gap-2 min-w-0">
                                <MapPin size={14} className="text-[#2F4A3E] flex-shrink-0" />
                                <span className="text-[10px] truncate">Calle 5 #70 20 int 8 apt 402</span>
                              </div>
                              <div className="w-6 h-6 bg-[#2F4A3E] text-white rounded flex items-center justify-center flex-shrink-0">
                                <Edit2 size={12} />
                              </div>
                            </div>
                          </div>
                          <div className="text-center space-y-2">
                            <p className="text-sm font-bold">Selecciona la fecha</p>
                            <p className="text-[10px] opacity-60">Diciembre</p>
                            <div className="flex justify-between gap-1">
                              {[23, 24, 25, 26, 27].map((day, i) => (
                                <div key={day} className={`flex-1 border rounded p-1 text-center ${i === 0 ? 'bg-[#8FAEA1] border-[#8FAEA1] text-white' : 'bg-white border-gray-200'}`}>
                                  <p className="text-[8px] opacity-60">Lun</p>
                                  <p className="text-[10px] font-bold">{day}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold text-center opacity-60">Selecciona un horario</p>
                            <div className="flex gap-2">
                              <div className="flex-1 bg-[#8FAEA1] p-2 rounded text-center text-white">
                                <p className="text-[10px] font-bold">Mañana <span className="font-normal opacity-80">8am -12m</span></p>
                              </div>
                              <div className="flex-1 bg-white p-2 rounded text-center border border-gray-100">
                                <p className="text-[10px] font-bold">Tarde <span className="font-normal opacity-60">2pm - 6pm</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Cards */}
                      <div className="p-3 md:p-6 border-2 border-dashed border-purple-200 rounded-xl space-y-8 flex flex-col justify-center">
                        {/* Product Card 1 */}
                        <div className="bg-[#F4F7F6] p-[15px] rounded-xl border border-[#2F4A3E]/5 space-y-3 shadow-sm overflow-hidden">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-[150px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 border border-[#2F4A3E]/5">
                              <img src="/assets/images/food1.png" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-1 space-y-2 py-1">
                              <h5 className="text-xs font-bold leading-tight text-[#2F4A3E]">Bowl de atún sellado con vegetales</h5>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[#2F4A3E]">
                                <span className="text-[14px] font-bold">0 <span className="font-normal opacity-60">Cal</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-60">Prot</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-60">Grasa</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-60">Carb</span></span>
                              </div>
                              <div className="bg-[#D4A373] w-[80px] h-[22px] rounded-[15px] flex items-center justify-center">
                                <span className="text-[14px] font-bold text-[#2F4A3E]">tag</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center pt-1">
                            <button className="w-[130px] py-2.5 bg-[#2F4A3E] text-white rounded-lg text-[12px] font-bold shadow-md hover:bg-[#243b31] transition-colors">Comprar</button>
                          </div>
                        </div>

                        {/* Product Card 2 (With quantity and price) */}
                        <div className="bg-[#8FAEA1] p-[15px] rounded-xl border border-[#2F4A3E]/5 space-y-3 shadow-md overflow-hidden">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-[150px] h-[110px] rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                              <img src="/assets/images/food1.png" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex-1 space-y-2 py-1">
                              <h5 className="text-xs font-bold leading-tight text-white">Bowl de atún sellado con vegetales</h5>
                              <div className="flex flex-wrap gap-x-3 gap-y-1 text-white">
                                <span className="text-[14px] font-bold">0 <span className="font-normal opacity-80">Cal</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-80">Prot</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-80">Grasa</span></span>
                                <span className="text-[14px] font-bold">0g <span className="font-normal opacity-80">Carb</span></span>
                              </div>
                              <div className="bg-[#D4A373] w-[80px] h-[22px] rounded-[15px] flex items-center justify-center">
                                <span className="text-[14px] font-bold text-[#2F4A3E]">tag</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between bg-white p-2 rounded-lg">
                            <div className="flex items-center gap-6">
                              <div className="w-8 h-8 bg-[#2F4A3E] text-white rounded-full flex items-center justify-center cursor-pointer">
                                <Minus size={16} />
                              </div>
                              <span className="text-sm font-bold text-[#2F4A3E]">0</span>
                              <div className="w-8 h-8 bg-[#2F4A3E] text-white rounded-full flex items-center justify-center cursor-pointer">
                                <Plus size={16} />
                              </div>
                            </div>
                            <span className="text-sm font-bold text-[#2F4A3E]">$20 000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hi-fidelity Wireframe Section */}
      <section className="pb-24 bg-[#F4F1EC]/30 overflow-hidden w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-full flex flex-col items-center pt-32 pb-24 overflow-hidden"
        >
          {/* Background SVG */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1568 936" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <rect y="166.521" width="1568" height="769" rx="12" fill="#8FAEA1"/>
              <rect x="2.16016" width="1444.81" height="89.606" rx="12" fill="#F4F1EC"/>
              <g opacity="0.15" style={{ mixBlendMode: 'screen' }}>
                <rect x="41.9131" y="455.322" width="1467.11" height="187.053" rx="12" fill="#F4F1EC"/>
              </g>
              <g opacity="0.15" style={{ mixBlendMode: 'screen' }}>
                <rect x="148.312" y="336.074" width="1271.38" height="425.547" rx="12" fill="#F4F1EC"/>
              </g>
              <g opacity="0.15" style={{ mixBlendMode: 'screen' }}>
                <rect x="244.732" y="300.008" width="1078.54" height="497.681" rx="12" fill="#F4F1EC"/>
              </g>
              <g opacity="0.15" style={{ mixBlendMode: 'screen' }}>
                <rect x="407.248" y="257.518" width="763.018" height="582.659" rx="12" fill="#F4F1EC"/>
              </g>
            </svg>
          </div>

          {/* Title Pill - Aligned with site content (max-w-7xl) */}
          <div className="absolute top-[17.8%] inset-x-0 z-30 -translate-y-1/2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-[#2F4A3E] text-white px-8 py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl shadow-xl border border-white/10 inline-block"
              >
                <h2 className="text-xl md:text-3xl font-bold tracking-tight whitespace-nowrap">Hi fidelity wireframe</h2>
              </motion.div>
            </div>
          </div>

          {/* Content Wrapper (Centered) */}
          <div className="relative z-10 w-full overflow-hidden py-12 md:py-0 mt-[150px]">
            {/* Desktop Display (Staggered) */}
            <div className="hidden md:flex items-center justify-center -space-x-16">
              {[
                { id: 1, label: 'Splash', rotate: -14, y: 80, scale: 0.39, z: 10, img: '/assets/images/wireframes-noma/noma1.png' },
                { id: 2, label: 'Login', rotate: -10, y: 50, scale: 0.45, z: 20, img: '/assets/images/wireframes-noma/noma2.png' },
                { id: 3, label: 'Home', rotate: -6, y: 25, scale: 0.50, z: 30, img: '/assets/images/wireframes-noma/noma3.png' },
                { id: 4, label: 'Menu', rotate: -2, y: 10, scale: 0.56, z: 40, img: '/assets/images/wireframes-noma/noma-4.png' },
                { id: 5, label: 'Product', rotate: 2, y: 10, scale: 0.56, z: 40, img: '/assets/images/wireframes-noma/noma5.png' },
                { id: 6, label: 'Cart', rotate: 6, y: 25, scale: 0.50, z: 30, img: '/assets/images/wireframes-noma/noma6.png' },
                { id: 7, label: 'Checkout', rotate: 10, y: 50, scale: 0.45, z: 20, img: '/assets/images/wireframes-noma/noma7.png' },
                { id: 8, label: 'Success', rotate: 14, y: 80, scale: 0.39, z: 10, img: '/assets/images/wireframes-noma/noma8.png' },
              ].map((screen, index) => (
                <motion.div
                  key={screen.id}
                  initial={{ opacity: 0, y: 100, rotate: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: screen.y,
                    rotate: screen.rotate,
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  style={{ zIndex: screen.z, scale: screen.scale }}
                  className="flex-shrink-0 w-[240px] relative"
                >
                  <img 
                    src={screen.img} 
                    alt={screen.label} 
                    className="w-full h-auto rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Display (Vertical/Loop Carousel) */}
            <div className="md:hidden flex overflow-hidden">
              <motion.div
                className="flex gap-6 animate-marquee flex-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[
                  { id: 1, label: 'Splash', img: '/assets/images/wireframes-noma/noma1.png' },
                  { id: 2, label: 'Login', img: '/assets/images/wireframes-noma/noma2.png' },
                  { id: 3, label: 'Home', img: '/assets/images/wireframes-noma/noma3.png' },
                  { id: 4, label: 'Menu', img: '/assets/images/wireframes-noma/noma-4.png' },
                  { id: 5, label: 'Product', img: '/assets/images/wireframes-noma/noma5.png' },
                  { id: 6, label: 'Cart', img: '/assets/images/wireframes-noma/noma6.png' },
                  { id: 7, label: 'Checkout', img: '/assets/images/wireframes-noma/noma7.png' },
                  { id: 8, label: 'Success', img: '/assets/images/wireframes-noma/noma8.png' },
                  // Duplicated for loop
                  { id: 9, label: 'Splash', img: '/assets/images/wireframes-noma/noma1.png' },
                  { id: 10, label: 'Login', img: '/assets/images/wireframes-noma/noma2.png' },
                  { id: 11, label: 'Home', img: '/assets/images/wireframes-noma/noma3.png' },
                  { id: 12, label: 'Menu', img: '/assets/images/wireframes-noma/noma-4.png' },
                  { id: 13, label: 'Product', img: '/assets/images/wireframes-noma/noma5.png' },
                  { id: 14, label: 'Cart', img: '/assets/images/wireframes-noma/noma6.png' },
                  { id: 15, label: 'Checkout', img: '/assets/images/wireframes-noma/noma7.png' },
                  { id: 16, label: 'Success', img: '/assets/images/wireframes-noma/noma8.png' },
                ].map((screen, i) => (
                  <div key={i} className="flex-shrink-0 w-[224px]">
                    <img 
                      src={screen.img} 
                      alt={screen.label} 
                      className="w-full h-auto rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-black/5"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-[#2F4A3E] font-bold text-center mt-4 opacity-60 uppercase tracking-widest text-[10px]">{screen.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 10 Features clave */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-full border-2 border-[#2F4A3E] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-[#2F4A3E]">10</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2F4A3E]">Features clave</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left: Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="relative w-[280px] md:w-[320px]">
                  <img 
                    src="/assets/images/wireframes-noma/noma5-1.png" 
                    alt="Features Mockup" 
                    className="w-full h-auto rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[4px] border-[#D4A373]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Right: Features List */}
              <div className="space-y-12">
                {[
                  {
                    title: "Registro rápido de comidas",
                    description: "Eliminé la necesidad de ingresar información manual compleja, priorizando interacciones rápidas y selección simplificada para facilitar el uso diario."
                  },
                  {
                    title: "Feedback nutricional inmediato",
                    description: "Reemplacé datos nutricionales complejos por representaciones visuales claras, permitiendo al usuario comprender su progreso de forma inmediata. Para ello, jerarquicé la información y enfoqué la atención en los elementos más relevantes."
                  },
                  {
                    title: "Seguimiento de progreso",
                    description: "Me enfoqué en diseñar una experiencia que facilite la toma de decisiones, permitiendo al usuario configurar su dieta semanal de forma simple, ágil y efectiva."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2F4A3E]">{feature.title}</h3>
                    <p className="text-lg text-[#2F4A3E]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11 Impacto esperado */}
      <section className="py-24 bg-[#2F4A3E] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#2F4A3E]">11</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Impacto esperado</h2>
          </div>

          <ul className="space-y-6 md:space-y-8 ml-4 md:ml-24">
            {[
              "Reducción significativa en la carga cognitiva del usuario",
              "Incremento en la velocidad de toma de decisiones",
              "Mayor retención gracias a una experiencia más simple y sostenible",
              "Incremento en la conversión del flujo de selección a compra"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 text-lg md:text-2xl opacity-90"
              >
                <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 12 Prototipo interactivo */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 rounded-full border-2 border-[#2F4A3E] flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-[#2F4A3E]">12</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2F4A3E]">Prototipo interactivo</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[900px] md:h-auto md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50"
          >
            <iframe 
              className="w-full h-full"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fia3EsbqX0NcooOhlmUlluU%2FNoma%3Fnode-id%3D33-5666%26p%3Df%26viewport%3D769%252C-7%252C0.1%26t%3DxrQ5EXa4JvFapQdw-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D33%253A5666%26page-id%3D24%253A13687" 
              allowFullScreen
            />
          </motion.div>
          
          <div className="mt-8 text-center">
            <p className="text-[#2F4A3E]/60 italic">
              Interactúa con el prototipo directamente desde aquí para explorar el flujo completo de la aplicación.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#2F4A3E] text-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">¿Quieres ver más?</h2>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2F4A3E] rounded-xl font-bold hover:bg-opacity-90 transition-all">
            Volver al inicio
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default NomaCaseStudy;
