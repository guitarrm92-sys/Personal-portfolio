import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, Target, Users, Lightbulb, Zap, Layout, Palette, CheckCircle2, Clock, Brain, 
  TrendingUp, Menu, X, Plus, Trash2, MapPin, Calendar, CreditCard, Search, ChevronRight, ChevronLeft,
  Play, Pause, Maximize2, Minimize2,
  Share2, Compass, Heart, MessageSquare, Star, Plane, Hotel, Navigation, Flame, UserPlus,
  Moon, User, Settings, LayoutGrid, Copy, BedDouble, Luggage, Puzzle
} from "lucide-react";
import { Link } from "react-router-dom";

interface Activity {
  id: string;
  time: string;
  title: string;
  category: "transport" | "accommodation" | "food" | "activity";
  cost: number;
  location: string;
  likes: number;
  likedByMe?: boolean;
}

const WireframeScreenMockup = ({ num }: { num: number }) => {
  switch (num) {
    case 1:
      return (
        <div className="w-full h-full bg-gradient-to-br from-[#1E2022] to-[#121314] text-white flex flex-col justify-between p-5 relative overflow-hidden select-none text-left">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,126,34,0.15),transparent_60%)] pointer-events-none" />
          <div className="h-4" />
          
          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-5">
            <div className="relative w-16 h-16 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-full flex items-center justify-center animate-pulse">
              <Plane className="w-8 h-8 text-[#FF6B35] transform -rotate-12" />
              <div className="absolute inset-0 rounded-full border border-dashed border-[#FF6B35]/30 animate-spin [animation-duration:15s]" />
            </div>
            
            <div className="space-y-1.5">
              <h4 className="text-xl sm:text-2xl font-black tracking-tight font-display text-white">
                Lets Travel
              </h4>
              <p className="text-[10px] text-neutral-400 font-medium max-w-[170px] mx-auto leading-normal">
                Tu planificador de viajes inteligente y offline para aventuras grupales
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-9 bg-[#FF6B35] text-white rounded-xl text-[10px] font-black flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
              Comenzar Aventura ➔
            </div>
            <div className="text-center text-[8px] text-neutral-500 font-mono tracking-widest leading-none">
              v2.1.0 • SOPORTE OFFLINE
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="w-full h-full bg-neutral-50 text-neutral-800 flex flex-col p-3.5 space-y-3.5 select-none text-left">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                  <Plane className="w-3 h-3 text-[#FF6B35]" />
                </div>
                <span className="text-[10px] font-bold font-display text-neutral-800">Lets Travel</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center">
                <span className="text-[9px] font-bold">U</span>
              </div>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-xl p-2 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-3 h-3 text-neutral-400" />
                <div className="flex flex-col">
                  <span className="text-[7px] text-neutral-400 uppercase font-black">Destino</span>
                  <span className="text-[10px] font-bold text-neutral-700">Lagos, Portugal</span>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-white border border-neutral-200 rounded-xl p-2 flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center text-xs">🏨</div>
              <span className="text-[9px] font-bold text-neutral-700">Hospedajes</span>
            </div>
            <div className="bg-white border border-[#FF6B35]/30 bg-orange-50/5 rounded-xl p-2 flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 rounded-full bg-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35]">
                <Plane className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] font-bold text-[#FF6B35]">Vuelos</span>
            </div>
          </div>

          <div className="flex-grow space-y-1.5 overflow-hidden">
            <span className="text-[8px] font-extrabold text-neutral-400 uppercase tracking-wider block">Destinos Populares</span>
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs">
              <div className="h-16 bg-neutral-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=200" 
                  alt="Lagos Portugal" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <span className="absolute top-1.5 right-1.5 bg-white/90 text-[7px] font-black px-1.5 py-0.5 rounded-full text-neutral-800">★ 4.9</span>
              </div>
              <div className="p-2">
                <h6 className="text-[10px] font-black text-neutral-800 leading-tight">Lagos, Portugal</h6>
                <p className="text-[8px] text-[#FF6B35] font-semibold mt-0.5">$ 2.960.900 CLP /paquete</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="w-full h-full bg-neutral-100 text-neutral-800 flex flex-col p-4 space-y-3.5 select-none text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-neutral-800 uppercase tracking-wider">Filtros de Vuelo</span>
            <span className="text-[9px] text-[#FF6B35] font-black cursor-pointer">Limpiar</span>
          </div>

          <div className="space-y-1.5">
            <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block">Escalas</span>
            <div className="space-y-1">
              <div className="bg-white border border-neutral-200 rounded-xl p-2.5 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-neutral-700">Vuelo Directo</span>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#FF6B35] bg-[#FF6B35] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-2.5 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-neutral-700">1 Escala máx.</span>
                <div className="w-3.5 h-3.5 rounded-full border-2 border-neutral-300" />
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider block">Presupuesto Máximo</span>
            <div className="bg-white border border-neutral-200 rounded-xl p-3 space-y-2">
              <div className="flex justify-between text-[10px] font-bold text-neutral-700">
                <span>$200k</span>
                <span className="text-[#FF6B35]">$890k c/u</span>
              </div>
              <div className="h-1 bg-neutral-200 rounded-full relative">
                <div className="absolute left-[15%] right-[25%] h-full bg-[#FF6B35] rounded-full" />
                <div className="absolute left-[15%] -top-1 w-3 h-3 bg-white border-2 border-[#FF6B35] rounded-full shadow-xs" />
                <div className="absolute right-[25%] -top-1 w-3 h-3 bg-white border-2 border-[#FF6B35] rounded-full shadow-xs" />
              </div>
            </div>
          </div>

          <div className="flex-grow" />

          <div className="h-9 bg-[#FF6B35] rounded-lg text-[10px] font-black text-white flex items-center justify-center shadow">
            Ver 15 Resultados
          </div>
        </div>
      );

    case 4:
      return (
        <div className="w-full h-full bg-white text-neutral-800 flex flex-col p-3 space-y-2 select-none text-left">
          <div className="relative h-24 bg-neutral-100 rounded-xl overflow-hidden shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=200" 
              alt="Dona Ana Beach Room" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute top-2 left-2 bg-black/40 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
              Algarve Suite
            </div>
            <div className="absolute top-2 right-2 bg-white/95 p-1 rounded-full text-red-500 shadow-xs">
              <Heart className="w-3 h-3 fill-current" />
            </div>
          </div>

          <div className="space-y-1 px-0.5 flex-grow">
            <div className="flex justify-between items-center">
              <h5 className="text-[11px] font-extrabold text-neutral-800">Dona Ana Beach Flat</h5>
              <div className="flex items-center gap-0.5 text-[#FF6B35] text-[9px]">
                <span>⭐</span>
                <span className="font-extrabold">4.8</span>
              </div>
            </div>
            <p className="text-[9px] text-neutral-400 line-clamp-2 leading-none">
              Habitación minimalista frente al mar con balcón integrado y Wi-Fi offline.
            </p>

            <div className="flex flex-wrap gap-1 py-1">
              {['☕ Desayuno', '📶 Wi-Fi', '🏊 Alberca'].map((am, i) => (
                <span key={i} className="text-[7px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded font-bold">
                  {am}
                </span>
              ))}
            </div>

            <div className="bg-neutral-50 border border-neutral-150 rounded-lg p-1.5 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-[#FF6B35]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-3 h-3 text-[#FF6B35]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-neutral-700 leading-none">UBICACION CLAVE</span>
                <span className="text-[7px] text-neutral-400">A 200m de la playa principal</span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-1.5 flex items-center justify-between">
            <div>
              <span className="text-[7px] text-neutral-400 uppercase tracking-wider block">Por Noche</span>
              <span className="text-[10px] font-black text-[#FF6B35]">$125.000</span>
            </div>
            <div className="bg-[#FF6B35] text-white px-2.5 py-1 rounded text-[9px] font-black cursor-pointer">
              Siguiente ➔
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="w-full h-full bg-neutral-50 text-neutral-800 flex flex-col p-3 space-y-2.5 select-none text-left">
          <div className="text-center space-y-0.5">
            <span className="text-[7px] text-[#FF6B35] font-black uppercase tracking-widest block">Paso 1 de 3 • Ida</span>
            <h6 className="text-[10px] font-bold text-neutral-700">Selecciona Vuelo de Ida</h6>
          </div>

          <div className="space-y-1.5 overflow-hidden flex-grow">
            <div className="bg-white border-2 border-[#FF6B35] rounded-xl p-2 shadow-xs relative text-left">
              <div className="absolute top-1.5 right-1.5 bg-[#FF6B35] text-white text-[6px] font-extrabold px-1 py-0.5 rounded uppercase">
                Filtro Óptimo
              </div>
              <span className="text-[8px] text-[#FF6B35] font-black block">LATAM AIRLINES</span>
              <p className="text-[10px] font-extrabold text-neutral-800 mt-1">14:25 ➔ 06:15 <span className="text-[8px] text-neutral-400 font-normal">+1d</span></p>
              <p className="text-[7px] text-neutral-400">Directo • Duración: 11h 50m</p>
              <div className="border-t border-neutral-100 mt-1.5 pt-1 flex justify-between items-center">
                <span className="text-[7px] text-neutral-400">Excelente conexión</span>
                <span className="text-[9px] font-black text-neutral-800">$640.900 CLP</span>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-2 text-left opacity-75">
              <span className="text-[8px] text-neutral-500 font-extrabold block">SKY AIRLINES</span>
              <p className="text-[10px] font-extrabold text-neutral-800 mt-1">22:00 ➔ 16:30 <span className="text-[8px] text-neutral-400 font-normal">+1d</span></p>
              <p className="text-[7px] text-neutral-400">1 Escala en GRU • 14h 30m</p>
            </div>
          </div>

          <div className="h-8 bg-[#FF6B35] rounded-lg text-[9px] font-black text-white flex items-center justify-center cursor-pointer">
            Vuelo Ida Confirmado
          </div>
        </div>
      );

    case 6:
      return (
        <div className="w-full h-full bg-neutral-50 text-neutral-800 flex flex-col p-3 space-y-2.5 select-none text-left">
          <div className="text-center space-y-0.5">
            <span className="text-[7px] text-sky-500 font-black uppercase tracking-widest block">Paso 2 de 3 • Retorno</span>
            <h6 className="text-[10px] font-bold text-neutral-700">Selecciona Regreso</h6>
          </div>

          <div className="space-y-1.5 overflow-hidden flex-grow">
            <div className="bg-white border border-neutral-200 rounded-xl p-2 text-left opacity-75">
              <span className="text-[8px] text-neutral-500 font-extrabold block">LATAM AIRLINES</span>
              <p className="text-[10px] font-extrabold text-neutral-800 mt-1">11:15 ➔ 23:50</p>
              <p className="text-[7px] text-neutral-400">Directo • Duración: 12h 35m</p>
            </div>

            <div className="bg-white border-2 border-sky-500 rounded-xl p-2 shadow-xs relative text-left bg-sky-50/5">
              <div className="absolute top-1.5 right-1.5 bg-sky-500 text-white text-[6px] font-extrabold px-1 py-0.5 rounded uppercase">
                Mejor Tarifa
              </div>
              <span className="text-[8px] text-sky-600 font-black block">IBERIA FLIGHTS</span>
              <p className="text-[10px] font-extrabold text-neutral-800 mt-1">18:40 ➔ 07:10 <span className="text-[8px] text-neutral-400 font-normal">+1d</span></p>
              <p className="text-[7px] text-neutral-400">Directo • Equipaje Incluido</p>
              <div className="border-t border-neutral-100 mt-1.5 pt-1 flex justify-between items-center">
                <span className="text-[7px] text-sky-600 font-semibold">Flexible</span>
                <span className="text-[9px] font-black text-neutral-800">$612.000 CLP</span>
              </div>
            </div>
          </div>

          <div className="h-8 bg-sky-500 rounded-lg text-[9px] font-black text-white flex items-center justify-center cursor-pointer">
            Vuelo Vuelta Confirmado
          </div>
        </div>
      );

    case 7:
      return (
        <div className="w-full h-full bg-white text-neutral-800 flex flex-col p-3.5 space-y-3.5 select-none text-left">
          <div className="space-y-1">
            <h6 className="text-[10px] font-black text-neutral-800 uppercase tracking-wider">Ajustar Equipajes</h6>
            <p className="text-[8px] text-neutral-400 leading-tight">Configura transparente antes de tu pago grupal.</p>
          </div>

          <div className="space-y-2 flex-grow">
            <div className="bg-neutral-50 rounded-xl p-2.5 border border-neutral-200/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🎒</span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-neutral-700 leading-none">Mochila Básica</span>
                  <span className="text-[7px] text-neutral-400 mt-0.5">Gratis • Bajo el Asiento</span>
                </div>
              </div>
              <span className="text-[7px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-black">INCLUIDO</span>
            </div>

            <div className="bg-neutral-50 rounded-xl p-2.5 border border-[#FF6B35]/30 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">🧳</span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-neutral-700 leading-none">Maleta Cabina</span>
                  <span className="text-[7px] text-[#FF6B35] font-semibold mt-0.5">10kg • +$25.000</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="w-5 h-5 rounded bg-neutral-200 flex items-center justify-center font-bold text-[10px]">-</button>
                <span className="text-[10px] font-bold w-3 text-center">1</span>
                <button className="w-5 h-5 rounded bg-[#FF6B35] text-white flex items-center justify-center font-bold text-[10px]">+</button>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-2.5 border border-neutral-250 flex items-center justify-between opacity-75">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">📦</span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-neutral-700 leading-none">Locker Bodega</span>
                  <span className="text-[7px] text-neutral-400 mt-0.5">Hasta 23kg • +$45.000</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="w-5 h-5 rounded bg-neutral-200 flex items-center justify-center font-bold text-[10px]">-</button>
                <span className="text-[10px] font-bold w-3 text-center">0</span>
                <button className="w-5 h-5 rounded bg-neutral-300 flex items-center justify-center font-bold text-[10px]">+</button>
              </div>
            </div>
          </div>

          <div className="h-8 bg-[#FF6B35] rounded-lg text-[9px] font-black text-white flex items-center justify-center shadow cursor-pointer">
            Confirmar Equipajes
          </div>
        </div>
      );

    case 8:
      return (
        <div className="w-full h-full bg-neutral-50 text-neutral-800 flex flex-col p-3.5 space-y-3 select-none text-left">
          <div>
            <span className="text-[7px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-black uppercase inline-block mb-1">CÁLCULO AUTOMÁTICO</span>
            <h6 className="text-[11px] font-black text-neutral-800 font-display">Resumen Paquete Consolidado</h6>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-2.5 space-y-2 text-left flex-grow">
            <div className="flex justify-between items-center text-[9px]">
              <span className="font-bold text-neutral-600">🏨 Hostal + Desayuno (10n)</span>
              <span className="font-mono text-neutral-500">$1.250.000</span>
            </div>
            <div className="flex justify-between items-center text-[9px]">
              <span className="font-bold text-neutral-600">✈️ Vuelos Directos I/V</span>
              <span className="font-mono text-neutral-500">$1.252.900</span>
            </div>
            <div className="flex justify-between items-center text-[9px]">
              <span className="font-bold text-neutral-600">🧳 Maleta de Cabina</span>
              <span className="font-mono text-neutral-500">$50.000</span>
            </div>
            
            <div className="border-t border-dashed border-neutral-200 my-1.5 pt-1.5 flex justify-between items-center text-[9px] text-green-600 font-extrabold">
              <span>🏷️ Promoción Paquete 15%</span>
              <span className="font-mono">-$392.000</span>
            </div>

            <div className="border-t border-neutral-200 mt-2 pt-2 flex justify-between items-center">
              <span className="text-[9px] font-black uppercase text-neutral-400">Total</span>
              <span className="text-xs font-black text-[#FF6B35]">$ 2.960.900 CLP</span>
            </div>
          </div>

          <div className="h-8 bg-[#FF6B35] rounded-lg text-[9px] font-black text-white flex items-center justify-center shadow">
            Confirmar Paquete ➔
          </div>
        </div>
      );

    case 9:
      return (
        <div className="w-full h-full bg-white text-neutral-800 flex flex-col p-3.5 space-y-2.5 select-none text-left">
          <div>
            <h6 className="text-[10px] font-extrabold text-neutral-800 uppercase tracking-widest">Pasajero Titular</h6>
            <div className="w-6 h-0.5 bg-[#FF6B35] mt-1 rounded" />
          </div>

          <div className="space-y-2 text-left flex-grow">
            <div className="space-y-0.5">
              <label className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider block">Nombre Completo</label>
              <input type="text" value="Daniela Silva" disabled className="w-full px-2.5 py-1 border border-neutral-250 rounded-lg text-[10px] bg-neutral-50 text-neutral-700 outline-none" />
            </div>

            <div className="space-y-0.5">
              <label className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider block">N° Pasaporte o RUT</label>
              <input type="text" value="F43729582" disabled className="w-full px-2.5 py-1 border border-neutral-250 rounded-lg text-[10px] bg-neutral-50 text-neutral-700 outline-none" />
            </div>

            <div className="space-y-0.5">
              <label className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider block">Email de Notificación</label>
              <input type="text" value="daniela.travel@gmail.com" disabled className="w-full px-2.5 py-1 border border-neutral-250 rounded-lg text-[10px] bg-neutral-50 text-neutral-700 outline-none" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 text-green-700 bg-green-50 px-2 py-1 rounded-lg">
            <span className="text-[9px]">🔒</span>
            <span className="text-[7px] font-black uppercase">Seguridad SSL Activa</span>
          </div>

          <div className="h-8 bg-[#FF6B35] rounded-lg text-[9px] font-black text-white flex items-center justify-center cursor-pointer">
            Iniciar Pago Seguro
          </div>
        </div>
      );

    case 10:
      return (
        <div className="w-full h-full bg-[#1A1A1A] text-white flex flex-col justify-between p-4 select-none text-left relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,204,113,0.12),transparent_70%)] pointer-events-none" />
          <div className="h-2" />

          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-3.5">
            <div className="w-12 h-12 rounded-full bg-green-500/15 border-2 border-green-500 flex items-center justify-center text-green-500 text-lg font-bold animate-bounce">
              ✓
            </div>
            
            <div className="space-y-0.5">
              <h5 className="text-[12px] font-black tracking-tight text-white uppercase">¡Boleto Emitido!</h5>
              <p className="text-[8px] text-zinc-500 font-mono">ID: LT-9284-OK-OFFLINE</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 w-full space-y-1 text-left">
              <div className="flex justify-between text-[7px] text-zinc-500 uppercase font-black">
                <span>Renta / Ruta</span>
                <span>Pasajero</span>
              </div>
              <div className="flex justify-between text-[9px] font-bold text-white">
                <span>Santiago ➔ Lisboa</span>
                <span>D. Silva</span>
              </div>
              <div className="border-t border-white/5 pt-1 mt-1 flex justify-between text-[7px] text-zinc-600">
                <span>FECHA: 12 JUL 2026</span>
                <span>COBRADO: OFFLINE</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="h-8 bg-green-500 hover:bg-green-600 text-white rounded-xl text-[9px] font-black flex items-center justify-center cursor-pointer">
              📥 Descargar boleto (PDF)
            </div>
            <div className="text-center text-[7px] text-zinc-500 uppercase font-black tracking-wider leading-none">
              Guardado en Almacenamiento Local
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const WireframeCarousel = () => {
  const [zoomedNum, setZoomedNum] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Setup 1 to 10 image indices
  const indices = Array.from({ length: 10 }, (_, i) => i + 1);
  
  // Quadruple images to ensure infinite seamless marquee
  const loopedIndices = [...indices, ...indices, ...indices, ...indices];

  // Handle escape key to dismiss zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedNum(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full bg-neutral-50/50 border border-neutral-200/50 rounded-[28px] p-6 sm:p-8 overflow-hidden relative select-none">
      {/* Dynamic Keyframes for seamless Marquee scrolling right-to-left */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .marquee-track {
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Track container */}
      <div className="w-full overflow-hidden relative py-2">
        {/* Subtle gradients on left and right for seamless transition */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-50/80 to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-50/80 to-transparent z-15 pointer-events-none" />

        <div className="marquee-track flex gap-6 w-max">
          {loopedIndices.map((num, idx) => {
            const src = `/Lets-travel/Mid-fi-wireframe-lets-travel/${num}.png`;
            const hasError = imageErrors[src];

            return (
              <div 
                key={idx}
                onClick={() => setZoomedNum(num)}
                className="w-[185px] sm:w-[230px] aspect-[9/19] rounded-[24px] overflow-hidden bg-white border border-neutral-200/70 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-lg hover:border-[#FF6B35]/40 relative group shrink-0 p-3 cursor-zoom-in flex items-center justify-center"
              >
                {!hasError ? (
                  <img 
                    src={src} 
                    alt={`Wireframe ${num}`} 
                    className="w-full h-full object-contain"
                    onError={() => setImageErrors(prev => ({ ...prev, [src]: true }))}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <WireframeScreenMockup num={num} />
                )}
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#FF6B35] text-white p-3 rounded-full shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Zoom modal */}
      <AnimatePresence>
        {zoomedNum !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedNum(null)}
            className="fixed inset-0 bg-neutral-950/90 z-[999] flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Guide to close */}
            <div className="absolute top-6 left-6 text-white/50 text-xs font-mono select-none pointer-events-none">
              Haz clic afuera para salir • ESC
            </div>

            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-[310px] sm:w-[340px] h-[610px] sm:h-[660px] bg-white rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col justify-center items-center cursor-default overflow-hidden border-[4px] border-neutral-350"
            >
              {/* Close Button option */}
              <button 
                onClick={() => setZoomedNum(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors p-2 rounded-full z-10"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-50 flex items-center justify-center">
                {!imageErrors[`/Lets-travel/Mid-fi-wireframe-lets-travel/${zoomedNum}.png`] ? (
                  <img 
                    src={`/Lets-travel/Mid-fi-wireframe-lets-travel/${zoomedNum}.png`} 
                    alt={`Wireframe ${zoomedNum}`} 
                    className="w-full h-full object-contain"
                    onError={() => {
                      if (zoomedNum !== null) {
                        setImageErrors(prev => ({ ...prev, [`/Lets-travel/Mid-fi-wireframe-lets-travel/${zoomedNum}.png`]: true }));
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <WireframeScreenMockup num={zoomedNum} />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LetsTravelCaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- Carousel State & Lightbox ---
  const [selectedCarouselIdx, setSelectedCarouselIdx] = useState<number | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const carouselImages = [
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/Movil inicio.png",
      title: "Pantalla de Carga / Splash",
      desc: "Logotipo minimalista adaptado con isotipo de brújula y avión para el inicio de la app."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 109.png",
      title: "Menú Principal y Buscador",
      desc: "Categorías agrupadas de alojamiento, vuelos y actividades para fácil acceso táctil."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 110.png",
      title: "Formulario de Búsqueda Desplegado",
      desc: "Buscador optimizado simplificando geolocalización, rango de fechas y cantidad de pasajeros."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 111.png",
      title: "Búsqueda Local y Autocompletado",
      desc: "Resultados sugeridos y listados interactivos adaptables a consultas rápidas."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 114.png",
      title: "Resultados Multi-Estructura en Tarjetas",
      desc: "Visualización de alojamientos destacados con valoración, fotos y precios locales."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 115.png",
      title: "Detalle de Destino Seleccionado",
      desc: "Vista enriquecida con información de contacto, fotos dinámicas y botones de acción rápida."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 116.png",
      title: "Configuración de Fecha y Calendario",
      desc: "Selector intuitivo integrado de rango de noches, ideal para planificaciones colaborativas."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 117.png",
      title: "Selección de Pasajeros y Filtros",
      desc: "Parámetros sencillos para definir acompañantes y ajustar cuotas presupuestarias."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 118.png",
      title: "Desglose Analítico de Costos",
      desc: "Vista pormenorizada de importes estimados, tasas de grupo y optimización offline."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 120.png",
      title: "Pantalla de Confirmación de Reserva",
      desc: "Resumen claro del viaje grupal con detalles consolidados de alojamiento."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 122.png",
      title: "Muro Colaborativo de Viaje",
      desc: "Espacio central donde los integrantes comparten propuestas, opiniones y fotos offline."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 123.png",
      title: "Mis Viajes Planeados",
      desc: "Historial y agenda ordenada de itinerarios activos y pasados listos sin internet."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 125.png",
      title: "Configuración del Perfil",
      desc: "Preferencias de guardado, pasaporte digital y datos sincronizados locales."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 126.png",
      title: "Filtros de Búsqueda Avanzados",
      desc: "Segmentación rápida por rango de precio, valoración mínima e instalaciones."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 127.png",
      title: "Comentarios y Reseñas de la Comunidad",
      desc: "Feedback auténtico de viajeros para decidir sobre la conveniencia del destino."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 128.png",
      title: "Geolocalización: Mapa Descargable",
      desc: "Guía espacial interactiva integrada optimizada para guiar al usuario sin datos móviles."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 130.png",
      title: "Votaciones de Alternativas",
      desc: "Mecanismo ágil para desempatar ideas de hospedaje mediante votos en tiempo real/offline."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 131.png",
      title: "Propuestas de Itinerarios Diarios",
      desc: "Cronograma de actividades ordenadas por hora del día consensuadas en grupo."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 134.png",
      title: "Detalles y Costos del Locker Compartido",
      desc: "Gestión de almacenamiento inteligente de equipaje durante las escalas."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 137.png",
      title: "Notificaciones y Alertas de Vuelo",
      desc: "Avisos urgentes del itinerario, puertas de embarque y cambios en el estado del grupo."
    },
    {
      url: "/Lets-travel/Hi-fi-wireframe-lets-travel/iPhone 8 - 138.png",
      title: "Sincronización Total en la Nube",
      desc: "Panel de control para unificar estados de bases locales al recuperar conexión."
    }
  ];

  const handleCarouselScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };
  
  // Navigation scrolling & top scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Interactive Prototype State ---
  const [activeDay, setActiveDay] = useState(1);
  const [budget, setBudget] = useState(1200);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // New activity form
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<"transport" | "accommodation" | "food" | "activity">("activity");
  const [newTime, setNewTime] = useState("10:00");
  const [newCost, setNewCost] = useState(30);
  const [newLocation, setNewLocation] = useState("");

  // Default mock itinerary per day
  const [itinerary, setItinerary] = useState<Record<number, Activity[]>>({
    1: [
      { id: "1", time: "09:00", title: "Vuelo de Llegada - Madrid", category: "transport", cost: 120, location: "Aeropuerto Barajas", likes: 2 },
      { id: "2", time: "11:30", title: "Check-in Hotel Dear", category: "accommodation", cost: 95, location: "Gran Vía, 80", likes: 3, likedByMe: true },
      { id: "3", time: "13:30", title: "Almuerzo en Mercado de San Miguel", category: "food", cost: 25, location: "Plaza de San Miguel", likes: 4 },
      { id: "4", time: "16:00", title: "Tour guiado - Palacio Real", category: "activity", cost: 18, location: "Calle de Bailén", likes: 5, likedByMe: true },
    ],
    2: [
      { id: "5", time: "10:00", title: "Visita al Museo del Prado", category: "activity", cost: 15, location: "Paseo del Prado", likes: 4 },
      { id: "6", time: "13:00", title: "Tapas en Barrio de La Latina", category: "food", cost: 20, location: "Cava Baja", likes: 5 },
      { id: "7", time: "16:30", title: "Paseo en bote por el Parque del Retiro", category: "activity", cost: 8, location: "Parque de El Retiro", likes: 3 },
    ],
    3: [
      { id: "8", time: "09:30", title: "Excursión de un día a Toledo", category: "transport", cost: 35, location: "Estación de Atocha", likes: 4 },
      { id: "9", time: "13:00", title: "Comida Tradicional Toledana", category: "food", cost: 30, location: "Plaza Zocodover", likes: 2 },
      { id: "10", time: "15:30", title: "Visita guiada - Alcázar y Catedral", category: "activity", cost: 22, location: "Casco Histórico Toledo", likes: 6, likedByMe: true },
    ]
  });

  // Comments simulator state
  const [comments, setComments] = useState([
    { user: "Sofía", avatar: "S", text: "¿Podemos agregar el Museo Reina Sofía el día 2 por la tarde?", time: "Hace 5 min" },
    { user: "Mateo", avatar: "M", text: "¡Me encanta el plan para Toledo! Las vistas del Alcázar son increíbles.", time: "Hace 12 min" },
    { user: "Sofía", avatar: "S", text: "Asegurémonos de reservar la comida grupal pronto.", time: "Hace 1 h" }
  ]);
  const [newCommentText, setNewCommentText] = useState("");
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeComponentPreview, setActiveComponentPreview] = useState<string | null>(null);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    setComments([
      { user: "Tú (Giovanny)", avatar: "G", text: newCommentText, time: "Ahora" },
      ...comments
    ]);
    setNewCommentText("");
  };

  const handleLike = (id: string) => {
    setItinerary(prev => {
      const updated = { ...prev };
      const currentDayList = updated[activeDay];
      const index = currentDayList.findIndex(act => act.id === id);
      if (index !== -1) {
        const act = currentDayList[index];
        const isLiked = act.likedByMe;
        currentDayList[index] = {
          ...act,
          likedByMe: !isLiked,
          likes: isLiked ? act.likes - 1 : act.likes + 1
        };
      }
      return updated;
    });
  };

  const handleDeleteActivity = (id: string) => {
    setItinerary(prev => {
      const updated = { ...prev };
      updated[activeDay] = updated[activeDay].filter(act => act.id !== id);
      return updated;
    });
  };

  const handleCreateActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newAct: Activity = {
      id: Date.now().toString(),
      time: newTime,
      title: newTitle,
      category: newCategory,
      cost: Number(newCost) || 0,
      location: newLocation || "Ubicación sugerida",
      likes: 1,
      likedByMe: true
    };

    setItinerary(prev => ({
      ...prev,
      [activeDay]: [...prev[activeDay], newAct].sort((a, b) => a.time.localeCompare(b.time))
    }));

    // Reset Form & Close
    setNewTitle("");
    setNewLocation("");
    setNewCost(15);
    setShowAddModal(false);
  };

  // Calculations
  const activeDayActivities = itinerary[activeDay] || [];
  const totalCost: number = (Object.values(itinerary) as Activity[][])
    .flat()
    .reduce((sum: number, act: Activity) => sum + act.cost, 0);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "transport": return <Plane size={16} className="text-blue-500" />;
      case "accommodation": return <Hotel size={16} className="text-[#FF6B35]" />;
      case "food": return <Star size={16} className="text-green-500" />;
      default: return <Compass size={16} className="text-purple-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "transport": return "bg-blue-50 text-blue-700 border-blue-100";
      case "accommodation": return "bg-orange-50 text-[#FF6B35] border-orange-100";
      case "food": return "bg-green-50 text-green-700 border-green-100";
      default: return "bg-purple-50 text-purple-700 border-purple-100";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#1E2229] font-sans selection:bg-[#FF6B35] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FF6B35] text-white shadow-md">
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
              <Link to="/#about" className="text-sm font-medium hover:text-white/80 transition-colors">Sobre mí</Link>
              <Link to="/#projects" className="text-sm font-medium hover:text-white/80 transition-colors">Proyectos</Link>
              <Link to="/#contact" className="text-sm font-medium hover:text-white/80 transition-colors">Contactame</Link>
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
            className="md:hidden bg-[#FF6B35] border-t border-white/10 px-4 pt-2 pb-6 space-y-4"
          >
            <Link to="/#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Sobre mí</Link>
            <Link to="/#projects" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Proyectos</Link>
            <Link to="/#contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-white">Contactame</Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1c1d1f] via-[#22252a] to-[#0f1011] pt-32 pb-20 lg:pt-16 lg:pb-0">
        {/* Subtle decorative background glow grids */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B35]/15 to-transparent rounded-full blur-[80px] opacity-40" />
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/Lets-travel/Fondo-portada-lets-travel-desktop.png')" }} 
          />
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-black/80 transition-all font-medium shadow-lg"
            >
              <ArrowLeft size={18} />
              <span>Volver a Portafolio</span>
            </Link>
          </div>
        </div>

        <div className="w-full pl-4 sm:pl-6 lg:pl-12 xl:pl-[calc((100vw-1280px)/2+32px)] pr-4 sm:pr-6 lg:pr-12 xl:pr-8 z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Headline & Metadata */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              <div className="py-2 w-full">
                <div className="flex flex-col items-center lg:items-start space-y-3 select-none">
                  <div className="flex items-center gap-3 transform scale-[3] lg:scale-[6] origin-center lg:origin-left justify-center lg:justify-start w-full">
                    <img src="/Lets-travel/Lets-travel-logo.svg" alt="Lets Travel" className="h-16 md:h-24 w-auto" />
                  </div>
                </div>
              </div>
              
            </motion.div>
 
            {/* Right: Screen portrait image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex lg:col-span-7 justify-center lg:justify-end w-full overflow-visible"
            >
              <img 
                src="/Lets-travel/Screen-portrait-lets-travel.png" 
                alt="Screen portrait Lets Travel" 
                className="w-full max-w-[340px] md:max-w-[380px] h-auto object-contain transform scale-[2] origin-right rounded-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Context Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* CONTEXTO Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6B35] tracking-wide mb-6 uppercase font-display">
            Contexto
          </h2>
          
          {/* Context Paragraph */}
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-16 max-w-7xl font-normal">
            Lets travel es una aplicación móvil diseñada para ayudar a viajeros a descubrir destinos, comparar opciones de transporte y alojamiento, y planificar viajes ajustados a su presupuesto.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: DURACIÓN DEL PROYECTO */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
                Duración del proyecto
              </h3>
              
              <div className="border border-neutral-300 rounded-[20px] overflow-hidden bg-white shadow-sm">
                {/* Table Header */}
                <div className="bg-[#FF6B35] text-white py-3.5 px-6 grid grid-cols-12 gap-4 font-bold text-sm tracking-wide">
                  <span className="col-span-3">Semana</span>
                  <span className="col-span-9">Actividad</span>
                </div>
                
                {/* Table Rows */}
                {[
                  { week: "1", activity: "Investigación y benchmark" },
                  { week: "2", activity: "Entrevistas" },
                  { week: "3", activity: "Síntesis e insights" },
                  { week: "4", activity: "User flows y arquitectura" },
                  { week: "5", activity: "Wireframes" },
                  { week: "6", activity: "Diseño visual" },
                  { week: "7", activity: "Prototipo" },
                  { week: "8", activity: "Testing e iteraciones" }
                ].map((row, idx) => (
                  <div 
                    key={idx} 
                    className="grid grid-cols-12 gap-4 py-3.5 px-6 items-center text-sm border-t border-neutral-200 text-neutral-800 hover:bg-neutral-50/60 transition-colors"
                  >
                    <span className="col-span-3 font-bold text-neutral-900 font-mono text-base">
                      {row.week}
                    </span>
                    <span className="col-span-9 font-medium text-neutral-800">
                      {row.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Mi rol & Herramientas */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Mi rol */}
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] tracking-normal mb-4 font-display">
                  Mi <span className="font-bold">rol</span>
                </h3>
                
                <div className="border border-neutral-300 rounded-[20px] p-8 bg-white shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Diseño de estrategia</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Investigación</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Prototipado</span>
                      </div>
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Flujo de usuario</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Bocetado</span>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Arquitectura de información</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Wireframes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Herramientas */}
              <div>
                <h3 className="text-xl font-semibold text-[#FF6B35] tracking-normal mb-4 font-display">
                  Herramientas
                </h3>
                
                <div className="border border-neutral-300 rounded-[20px] p-8 bg-white shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
                    {/* Column 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Figma</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Chat GPT</span>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Google docs</span>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-neutral-800 font-medium">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF6B35] shrink-0 mr-3" />
                        <span>Figjam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Target & Problem Section with Overlapping Mockup */}
      <section className="relative w-full overflow-hidden bg-[#353A47]">
        
        {/* Upper Subsection: PROBLEMA */}
        <div className="py-16 md:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-left space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
                  PROBLEMA
                </h2>
                <p className="text-neutral-200 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  Viajar suele implicar investigar múltiples plataformas para encontrar vuelos, hospedaje y actividades dentro de un presupuesto específico.
                  <br />
                  Los usuarios manifestaban dificultades para:
                </p>
                <ul className="space-y-4 text-neutral-200 text-base md:text-lg pl-1">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>Comparar costos de diferentes destinos.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>Identificar opciones realmente económicas.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>Estimar el costo total del viaje.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                    <span>Tomar decisiones rápidas.</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block lg:col-span-5" />
            </div>
          </div>
        </div>

        {/* Lower Subsection: Objetivos del proyecto */}
        <div className="py-16 md:py-24 bg-white text-neutral-900 relative">
          
          {/* Subtle World Map Watermark on Light Background */}
          <div className="absolute bottom-4 left-4 w-72 md:w-[450px] h-44 md:h-[280px] pointer-events-none opacity-[0.06] select-none z-0">
            <svg viewBox="0 0 1000 500" fill="currentColor" className="text-neutral-900 w-full h-full">
              <path d="M 150 150 c 30 -20, 80 -20, 110 0 c 20 20, 40 40, 70 20 c 30 -20, 50 -50, 90 -30 c 40 20, 60 70, 100 80 c 40 10, 80 -10, 110 -30 c 30 -20, 60 -10, 80 10 c 20 20, 50 10, 70 -10 c 25 -25, 60 -5, 80 15" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M 80 280 c 20 -10, 50 -10, 70 0 c 30 15, 40 40, 70 30 c 30 -10, 50 -40, 80 -35 c 30 5, 50 25, 70 15 c 20 -10, 40 -35, 60 -30 c 20 5, 30 25, 50 20 c 30 -10, 45 -40, 75 -40 c 30 0, 50 30, 80 20 c 30 -10, 40 -30, 60 -25 c 20 5, 40 25, 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M 220 380 c 30 -10, 60 -10, 90 0 c 30 10, 45 35, 75 25 c 30 -10, 40 -40, 70 -35 c 30 5, 45 25, 75 15 c 30 -10, 50 -35, 80 -30" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-left space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
                  Objetivos del proyecto
                </h2>
                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                  Diseñar una experiencia que permitiera a los usuarios:
                </p>
                <ul className="space-y-4 text-neutral-800 text-base md:text-lg pl-1">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>Descubrir destinos según su presupuesto.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>Comparar opciones fácilmente.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>Reducir el tiempo de planificación.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>Completar una reserva con menos esfuerzo.</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block lg:col-span-5" />
            </div>
          </div>
        </div>

        {/* Overlapping Tilted Phone Mockup */}
        <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-12 xl:right-24 z-20 w-fit mx-auto lg:w-[35%] xl:w-[32%] py-8 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -12 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-full max-w-[390px] mx-auto filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
          >
            {/* Live Interactive HiFi Smartphone UI wrapper */}
            <div className="w-full aspect-[9/19] bg-[#121314] rounded-[44px] p-2 border-[5px] border-neutral-800 flex flex-col overflow-hidden relative text-left">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-8 h-1 bg-neutral-800 rounded-full mb-0.5" />
              </div>

              <div className="w-full h-full rounded-[34px] overflow-hidden bg-neutral-50 relative flex flex-col">
                <img 
                  src="/Lets-travel/Lets travel.png"
                  alt="Let's Travel Home Screen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Research & Benchmark Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-neutral-100">
        
        {/* Subtle World Map Watermark on Light Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] pointer-events-none opacity-[0.04] select-none z-0">
          <svg viewBox="0 0 1000 500" fill="currentColor" className="text-neutral-900 w-full h-full">
            <path d="M 150 150 c 30 -20, 80 -20, 110 0 c 20 20, 40 40, 70 20 c 30 -20, 50 -50, 90 -30 c 40 20, 60 70, 100 80 c 40 10, 80 -10, 110 -30 c 30 -20, 60 -10, 80 10 c 20 20, 50 10, 70 -10 c 25 -25, 60 -5, 80 15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 80 280 c 20 -10, 50 -10, 70 0 c 30 15, 40 40, 70 30 c 30 -10, 50 -40, 80 -35 c 30 5, 50 25, 70 15 c 20 -10, 40 -35, 60 -30 c 20 5, 30 25, 50 20 c 30 -10, 45 -40, 75 -40 c 30 0, 50 30, 80 20 c 30 -10, 40 -30, 60 -25 c 20 5, 40 25, 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 220 380 c 30 -10, 60 -10, 90 0 c 30 10, 45 35, 75 25 c 30 -10, 40 -40, 70 -35 c 30 5, 45 25, 75 15 c 30 -10, 50 -35, 80 -30" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6B35] tracking-wide mb-2 uppercase font-display">
            RESEARCH
          </h2>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#FF6B35] tracking-wide mb-6 uppercase font-display">
            BENCHMARK
          </h3>

          {/* Benchmark Intro Paragraph */}
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-12 max-w-5xl font-normal">
            Se realizó un benchmark comparando las principales plataformas de viajes para comprender cómo ayudan a los usuarios a encontrar opciones económicas y detectar oportunidades para mejorar la experiencia de planificación de viajes basada en presupuesto.
          </p>

          {/* Two-Column Cards: Aplicaciones & Criterios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Aplicaciones analizadas Card */}
            <div className="border border-neutral-300 rounded-[20px] p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-6 font-display uppercase tracking-wide">
                Aplicaciones analizadas
              </h4>
              <ul className="space-y-4 text-neutral-800 text-base font-medium">
                {[
                  "Booking.com",
                  "Airbnb",
                  "Trivago",
                  "Skyscanner",
                  "Hopper",
                  "Kayak"
                ].map((app, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Criterios de evaluación Card */}
            <div className="border border-neutral-300 rounded-[20px] p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-4 font-display uppercase tracking-wide">
                Criterios de evaluación
              </h4>
              <p className="text-neutral-600 text-sm mb-6 font-medium">
                Se analizaron los siguientes aspectos:
              </p>
              <ul className="space-y-4 text-neutral-800 text-base font-medium">
                {[
                  "Descubrimiento de destinos.",
                  "Búsqueda basada en presupuesto.",
                  "Transparencia de precios.",
                  "Comparación de opciones.",
                  "Facilidad de uso.",
                  "Inspiración para viajar.",
                  "Personalización."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Comparativa Section */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-[#FF6B35] font-display uppercase tracking-wider">
              Comparativa
            </h4>

            {/* Premium Table Container */}
            <div className="border border-neutral-300 rounded-[20px] overflow-hidden bg-white shadow-sm overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Table Header */}
                <div className="bg-[#FF6B35] text-white py-4 px-6 grid grid-cols-12 gap-4 font-bold text-sm tracking-wide uppercase">
                  <span className="col-span-3">Aplicación</span>
                  <span className="col-span-4">Fortalezas</span>
                  <span className="col-span-5">Debilidades</span>
                </div>

                {/* Table Rows */}
                {[
                  {
                    app: "Booking",
                    strengths: "Amplia oferta de hoteles y filtros avanzados",
                    weaknesses: "Exceso de información que puede generar fatiga de decisión"
                  },
                  {
                    app: "Airbnb",
                    strengths: "Experiencia visual atractiva y alojamientos únicos",
                    weaknesses: "Menor enfoque en costos totales del viaje"
                  },
                  {
                    app: "Trivago",
                    strengths: "Comparación rápida de hoteles",
                    weaknesses: "Limitado a hospedaje"
                  },
                  {
                    app: "Skyscanner",
                    strengths: "Excelente búsqueda flexible y comparación de vuelos",
                    weaknesses: "Experiencia fragmentada al pasar a proveedores externos"
                  },
                  {
                    app: "Hopper",
                    strengths: "Predicción de precios y alertas inteligentes",
                    weaknesses: "Poca información complementaria para planificar el viaje completo"
                  },
                  {
                    app: "Kayak",
                    strengths: "Gran cantidad de filtros y herramientas de planificación",
                    weaknesses: "Complejidad para usuarios menos experimentados"
                  }
                ].map((row, idx) => (
                  <div 
                    key={idx} 
                    className="grid grid-cols-12 gap-4 py-4.5 px-6 items-center text-sm border-t border-neutral-200 transition-colors hover:bg-neutral-50/65"
                  >
                    <span className="col-span-3 font-bold text-neutral-900">{row.app}</span>
                    <span className="col-span-4 text-neutral-700 font-medium">{row.strengths}</span>
                    <span className="col-span-5 text-neutral-600">{row.weaknesses}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights obtenidos Section */}
          <div className="space-y-6 mt-16">
            <h4 className="text-2xl font-bold text-[#FF6B35] font-display uppercase tracking-wider">
              Insights obtenidos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "Insight 1",
                  text: "La mayoría de aplicaciones se especializan en una parte del viaje (vuelos, hospedaje o comparación de precios), obligando al usuario a utilizar varias plataformas."
                },
                {
                  num: "Insight 2",
                  text: "Aunque existen herramientas para encontrar ofertas, pocas permiten planificar un viaje completo a partir de un presupuesto definido por el usuario."
                },
                {
                  num: "Insight 3",
                  text: "Los usuarios deben invertir demasiado tiempo comparando opciones y calculando costos totales."
                },
                {
                  num: "Insight 4",
                  text: "Las plataformas con mayor cantidad de funcionalidades suelen aumentar la complejidad de la experiencia."
                }
              ].map((insight, idx) => (
                <div key={idx} className="border border-neutral-300 rounded-[20px] p-6 bg-white shadow-sm hover:shadow-md transition-shadow text-left">
                  <h5 className="text-lg font-bold text-[#FF6B35] mb-3 font-display uppercase tracking-wide">
                    {insight.num}
                  </h5>
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-normal">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Design Opportunity Section */}
      <section className="py-20 md:py-28 bg-[#fbfaf8] border-y border-neutral-200/60 relative overflow-hidden">
        
        {/* Subtle World Map Watermark on Light Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] pointer-events-none opacity-[0.03] select-none z-0">
          <svg viewBox="0 0 1000 500" fill="currentColor" className="text-neutral-900 w-full h-full">
            <path d="M 150 150 c 30 -20, 80 -20, 110 0 c 20 20, 40 40, 70 20 c 30 -20, 50 -50, 90 -30 c 40 20, 60 70, 100 80 c 40 10, 80 -10, 110 -30 c 30 -20, 60 -10, 80 10 c 20 20, 50 10, 70 -10 c 25 -25, 60 -5, 80 15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 80 280 c 20 -10, 50 -10, 70 0 c 30 15, 40 40, 70 30 c 30 -10, 50 -40, 80 -35 c 30 5, 50 25, 70 15 c 20 -10, 40 -35, 60 -30 c 20 5, 30 25, 50 20 c 30 -10, 45 -40, 75 -40 c 30 0, 50 30, 80 20 c 30 -10, 40 -30, 60 -25 c 20 5, 40 25, 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 220 380 c 30 -10, 60 -10, 90 0 c 30 10, 45 35, 75 25 c 30 -10, 40 -40, 70 -35 c 30 5, 45 25, 75 15 c 30 -10, 50 -35, 80 -30" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FF6B35] tracking-wide font-display">
                Oportunidad de diseño
              </h2>
              
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal">
                A partir del benchmark se identificó una oportunidad clara:
              </p>

              {/* Slate Dark Highlight Card */}
              <div className="bg-[#3e4453] text-white p-7 md:p-8 rounded-2xl shadow-md border border-white/5 relative overflow-hidden">
                <p className="text-base md:text-lg leading-relaxed font-normal text-slate-100">
                  Diseñar una experiencia que permita descubrir destinos, visualizar costos estimados y planificar un viaje completo desde una única plataforma, comenzando por el presupuesto disponible del usuario en lugar del destino.
                </p>
              </div>

              <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                Esta conclusión conecta perfectamente con la propuesta de valor de Budgetrip y te sirve como puente natural hacia la sección de User Research y posteriormente hacia la definición del producto.
              </p>
            </div>

            {/* Right Mockup Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end py-6 lg:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-[240px] sm:w-[280px] md:w-[310px] lg:w-[340px] max-w-[350px] mx-auto"
              >
                <img 
                  src="/Lets-travel/Screen-lets-travel-detail.png"
                  alt="Let's Travel Details Screen"
                  className="w-full h-auto rounded-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* User Persona Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-neutral-100">
        
        {/* Subtle World Map Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] pointer-events-none opacity-[0.03] select-none z-0">
          <svg viewBox="0 0 1000 500" fill="currentColor" className="text-neutral-900 w-full h-full">
            <path d="M 150 150 c 30 -20, 80 -20, 110 0 c 20 20, 40 40, 70 20 c 30 -20, 50 -50, 90 -30 c 40 20, 60 70, 100 80 c 40 10, 80 -10, 110 -30 c 30 -20, 60 -10, 80 10 c 20 20, 50 10, 70 -10 c 25 -25, 60 -5, 80 15" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 80 280 c 20 -10, 50 -10, 70 0 c 30 15, 40 40, 70 30 c 30 -10, 50 -40, 80 -35 c 30 5, 50 25, 70 15 c 20 -10, 40 -35, 60 -30 c 20 5, 30 25, 50 20 c 30 -10, 45 -40, 75 -40 c 30 0, 50 30, 80 20 c 30 -10, 40 -30, 60 -25 c 20 5, 40 25, 60 10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 220 380 c 30 -10, 60 -10, 90 0 c 30 10, 45 35, 75 25 c 30 -10, 40 -40, 70 -35 c 30 5, 45 25, 75 15 c 30 -10, 50 -35, 80 -30" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF6B35] tracking-wide mb-2 uppercase font-display">
            User persona
          </h2>
          <h3 className="text-xl md:text-2xl font-extrabold text-[#FF6B35] tracking-wide mb-6 uppercase font-display">
            Comprendiendo a los usuarios
          </h3>

          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-12 max-w-5xl font-gray-800">
            Para entender las necesidades y comportamientos de los viajeros, se realizaron entrevistas semiestructuradas con usuarios que planifican y reservan viajes de manera frecuente.
          </p>

          {/* Participantes Card */}
          <div className="border border-neutral-200 rounded-[20px] p-8 bg-white shadow-sm hover:shadow-md transition-shadow mb-12">
            <h4 className="text-xl font-bold text-[#FF6B35] mb-6 font-display uppercase tracking-wide">
              Participantes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "8 viajeros frecuentes", desc: "Entrevistados en profundidad" },
                { label: "Entre 22 y 35 años", desc: "Rango de edad de usuarios digitales" },
                { label: "2 a 5 viajes al año", desc: "Frecuencia de viaje de media a alta" },
                { label: "Plataformas de uso frecuente", desc: "Usuarios de Booking, Airbnb y Skyscanner" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B35] shrink-0 mt-2" />
                  <div>
                    <h5 className="font-bold text-neutral-900 text-base">{item.label}</h5>
                    <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two Columns: Principales hallazgos & Patrones identificados */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Principales hallazgos Column */}
            <div className="border border-neutral-200 rounded-[20px] p-8 bg-[#fbfaf8] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-6 font-display uppercase tracking-wide">
                Principales hallazgos
              </h4>
              <ul className="space-y-4 text-neutral-800 text-base">
                {[
                  "La mayoría comienza definiendo cuánto puede gastar antes de elegir un destino.",
                  "Los usuarios consultan múltiples plataformas para comparar opciones y encontrar mejores precios.",
                  "Los costos adicionales o inesperados generan desconfianza durante la reserva.",
                  "La planificación del viaje suele requerir más tiempo del que esperan."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0 mt-2" />
                    <span className="font-medium text-neutral-700 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patrones identificados Column */}
            <div className="border border-neutral-200 rounded-[20px] p-8 bg-[#fbfaf8] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-[#FF6B35] mb-6 font-display uppercase tracking-wide">
                Patrones identificados
              </h4>
              <p className="text-neutral-600 text-sm md:text-base mb-6 font-medium">
                Al analizar los hallazgos, se identificó un grupo predominante de usuarios con características comunes:
              </p>
              <ul className="space-y-4 text-neutral-800 text-base mb-6">
                {[
                  "Sensibles al presupuesto.",
                  "Buscan optimizar tiempo y dinero.",
                  "Comparan múltiples alternativas antes de decidir.",
                  "Priorizan experiencias sobre servicios premium."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] shrink-0 mt-2" />
                    <span className="font-medium text-neutral-700 leading-relaxed text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-neutral-200/80 pt-4 mt-4">
                <p className="text-xs md:text-sm text-neutral-500 italic">
                  Estos patrones sirvieron como base para construir el User Persona principal.
                </p>
              </div>
            </div>

          </div>

          {/* Laura Persona Complex Card */}
          <div className="mt-16 space-y-8">
            
            {/* Main Laura Card */}
            <div className="bg-[#3e4453] text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center relative z-10 text-left">
                {/* Avatar container */}
                <div className="md:col-span-4 flex justify-center md:justify-start">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-white/95 shadow-md shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=400" 
                      alt="Laura Traveler" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Info List */}
                <div className="md:col-span-8 space-y-6">
                  <h4 className="text-3xl md:text-4xl font-extrabold font-display tracking-wide text-white">
                    Laura
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-slate-200/90 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>28 años</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>Diseñadora gráfica</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>Vive en una ciudad principal.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>Realiza entre 2 y 4 viajes al año.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>Planifica sus viajes por cuenta propia.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                      <span>Utiliza aplicaciones móviles para investigar y reservar.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote row */}
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-base sm:text-lg md:text-xl italic font-medium text-slate-100 max-w-4xl mx-auto leading-relaxed">
                  "Quiero encontrar opciones de viaje que se ajusten a mi presupuesto sin invertir horas comparando plataformas."
                </p>
              </div>
            </div>

            {/* Quadrant grid for Objectives, Behaviors, Motivations, Pain points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              
              {/* Objectives Card */}
              <div className="border border-neutral-200 rounded-[20px] p-6 sm:p-8 bg-[#f4fbf7] shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-xl font-bold text-emerald-600 mb-5 font-display uppercase tracking-wide">
                  Objetivos
                </h5>
                <ul className="space-y-3.5 text-sm md:text-base text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>Viajar varias veces al año.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>Optimizar su presupuesto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>Encontrar ofertas rápidamente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
                    <span>Reducir el tiempo de planificación.</span>
                  </li>
                </ul>
              </div>

              {/* Behaviors Card */}
              <div className="border border-neutral-200 rounded-[20px] p-6 sm:p-8 bg-[#f0f6ff] shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-xl font-bold text-blue-600 mb-5 font-display uppercase tracking-wide">
                  Comportamientos
                </h5>
                <ul className="space-y-3.5 text-sm md:text-base text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                    <span>Compara precios en varias plataformas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                    <span>Consulta reseñas antes de reservar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                    <span>Busca promociones y descuentos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2" />
                    <span>Define primero cuánto puede gastar.</span>
                  </li>
                </ul>
              </div>

              {/* Motivations Card */}
              <div className="border border-neutral-200 rounded-[20px] p-6 sm:p-8 bg-[#f5f3ff] shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-xl font-bold text-violet-600 mb-5 font-display uppercase tracking-wide">
                  Motivaciones
                </h5>
                <ul className="space-y-3.5 text-sm md:text-base text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-2" />
                    <span>Descubrir nuevos destinos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-2" />
                    <span>Aprovechar ofertas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-2" />
                    <span>Tener control sobre sus gastos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-2" />
                    <span>Vivir experiencias memorables.</span>
                  </li>
                </ul>
              </div>

              {/* Pain Points Card */}
              <div className="border border-neutral-200 rounded-[20px] p-6 sm:p-8 bg-[#fff5f5] shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-xl font-bold text-red-600 mb-5 font-display uppercase tracking-wide">
                  Dolores
                </h5>
                <ul className="space-y-3.5 text-sm md:text-base text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>Comparar múltiples sitios web.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>Costos inesperados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>Saltar entre varias aplicaciones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>Procesos largos de reserva.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Based on Research Footer */}
            <div className="pt-6 border-t border-neutral-200/60 text-left space-y-2">
              <h6 className="text-base font-bold text-neutral-800 font-display">
                Basado en investigación
              </h6>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-4xl font-normal">
                Este perfil fue construido a partir de patrones identificados durante entrevistas con viajeros frecuentes que realizan entre 2 y 5 viajes al año y utilizan plataformas digitales para planificar sus viajes.
              </p>
            </div>

          </div>

          {/* Customer Journey Section */}
          <div className="pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 space-y-8">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
              Customer Journey
            </h4>

            {/* Customer Journey Table */}
            <div className="border border-neutral-200 rounded-[20px] overflow-hidden bg-white shadow-sm overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Table Header */}
                <div className="bg-[#FF6B35] text-white py-4 px-6 grid grid-cols-3 gap-4 font-bold text-sm tracking-wide uppercase text-center">
                  <span>Etapa</span>
                  <span>Acción</span>
                  <span>Dolor</span>
                </div>

                {/* Table Rows */}
                {[
                  { stage: "Inspiración", action: "Buscar destinos", pain: "Demasiadas opciones" },
                  { stage: "Investigación", action: "Comparar precios", pain: "Información dispersa" },
                  { stage: "Decisión", action: "Evaluar alternativas", pain: "Difícil calcular costo total" },
                  { stage: "Reserva", action: "Completar compra", pain: "Formularios extensos" }
                ].map((row, idx) => (
                  <div 
                    key={idx} 
                    className="grid grid-cols-3 gap-4 py-5 px-6 items-center text-sm border-t border-neutral-200 transition-colors hover:bg-neutral-50/65 text-center"
                  >
                    <span className="font-bold text-neutral-900">{row.stage}</span>
                    <span className="text-neutral-700 font-medium">{row.action}</span>
                    <span className="text-neutral-600">{row.pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Oportunidad detectada */}
            <div className="text-left space-y-3 pt-2">
              <h5 className="text-xl md:text-2xl font-bold text-[#FF6B35] font-display">
                Oportunidad detectada
              </h5>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed font-normal">
                Centralizar la información y simplificar la toma de decisiones.
              </p>
            </div>
          </div>

          {/* Arquitectura de la Información Section */}
          <div className="pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 space-y-8">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
              Arquitectura de la información
            </h4>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal">
              La estructura se organizó en las siguientes secciones:
            </p>

            <div className="w-full bg-white border border-neutral-200 rounded-[20px] shadow-sm overflow-hidden flex flex-col">
              <div className="w-full min-h-[600px] bg-neutral-900 flex flex-col overflow-hidden relative">
                {/* Header of PDF reader */}
                <div className="bg-neutral-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 shrink-0 gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/25 flex items-center justify-center text-[#FF6B35] font-bold text-xs select-none">
                      PDF
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-tight">Arquitectura-informacion-lets-travel.pdf</h5>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-light">Estructura, niveles de navegación y organización de la app</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href="/Lets-travel/Arquitectura-informacion-lets-travel.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#FF6B35] hover:bg-[#E55620] transition-all rounded-xl text-white font-bold text-xs cursor-pointer flex items-center gap-2 shadow-sm whitespace-nowrap"
                    >
                      <span>Abrir Documento</span>
                      <span className="text-sm">↗</span>
                    </a>
                  </div>
                </div>

                {/* PDF rendering area */}
                <div className="flex-grow w-full h-[550px] bg-neutral-800 relative">
                  <iframe 
                    src="/Lets-travel/Arquitectura-informacion-lets-travel.pdf"
                    className="w-full h-full border-none"
                    title="Arquitectura de Información - Let's Travel"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 pointer-events-none text-center max-w-[90%]">
                    <p className="text-[10px] sm:text-[11px] text-neutral-300 font-medium select-none">
                      * Si tu navegador no muestra el visor de PDFs directamente, puedes hacer clic en "Abrir Documento" para visualizarlo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Flow Section */}
          <div className="pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 space-y-8">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
              User Flow
            </h4>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal text-left">
              Flujo de interacción completo que muestra el recorrido del usuario desde la búsqueda de destinos hasta la confirmación y pago de su reserva:
            </p>

            <div className="w-full bg-white border border-neutral-200 rounded-[20px] shadow-sm overflow-hidden flex flex-col">
              <div className="w-full min-h-[600px] bg-neutral-900 flex flex-col overflow-hidden relative">
                {/* Header of PDF reader */}
                <div className="bg-neutral-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 shrink-0 gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 font-bold text-xs select-none">
                      PDF
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-tight">User-flow-lets-travel.pdf</h5>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-light">Flujo de interacción y toma de decisiones paso a paso</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a 
                      href="/Lets-travel/User-flow-lets-travel.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-600 transition-all rounded-xl text-white font-bold text-xs cursor-pointer flex items-center gap-2 shadow-sm whitespace-nowrap"
                    >
                      <span>Abrir Documento</span>
                      <span className="text-sm">↗</span>
                    </a>
                  </div>
                </div>

                {/* PDF rendering area */}
                <div className="flex-grow w-full h-[550px] bg-neutral-800 relative">
                  <iframe 
                    src="/Lets-travel/User-flow-lets-travel.pdf"
                    className="w-full h-full border-none"
                    title="User Flow - Let's Travel"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 pointer-events-none text-center max-w-[90%]">
                    <p className="text-[10px] sm:text-[11px] text-neutral-300 font-medium select-none">
                      * Si tu navegador no muestra el visor de PDFs directamente, puedes hacer clic en "Abrir Documento" para visualizarlo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes Section */}
          <div className="pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 space-y-8">
            <div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
                Wireframes
              </h4>
              <p className="text-[#FF6B35] text-sm md:text-base font-extrabold uppercase mt-1 tracking-wider font-display">
                Mid Fi Wireframe
              </p>
            </div>
            
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed font-normal">
              La estructura y navegación clave se diseñaron en wireframes de media fidelidad (Mid-Fi) para validar la usabilidad y los flujos de tareas antes de avanzar al diseño visual:
            </p>

            {/* Wireframes Interactive Animated Carousel */}
            <WireframeCarousel />

            {/* Visual Design Principles & High-Fi Mobile Mockup Section */}
            <div className="bg-[#FAF6F3] rounded-[32px] p-8 md:p-12 lg:p-16 border border-neutral-200/50 relative overflow-hidden mt-12 shadow-sm">
              {/* Decorative background element */}
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#FF6B35]/5 blur-2xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left side: Visual Design details */}
                <div className="lg:col-span-7 space-y-8 text-left">
                  <div className="space-y-2">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-800 tracking-tight font-display mb-1 uppercase">
                      Diseño Visual
                    </h4>
                    <p className="text-[#FF6B35] text-sm sm:text-base font-extrabold uppercase mt-1 tracking-wider font-display">
                      Principios de diseño
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Card 1: Simplicidad */}
                    <div className="border border-neutral-300/80 rounded-[18px] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-2">
                      <h5 className="text-xl sm:text-2xl font-bold text-[#FF6B35] font-display">
                        Simplicidad
                      </h5>
                      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                        Reducir la carga cognitiva mostrando únicamente información relevante.
                      </p>
                    </div>

                    {/* Card 2: Confianza */}
                    <div className="border border-neutral-300/80 rounded-[18px] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-2">
                      <h5 className="text-xl sm:text-2xl font-bold text-[#FF6B35] font-display">
                        Confianza
                      </h5>
                      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                        Mostrar costos claros desde el inicio.
                      </p>
                    </div>

                    {/* Card 3: Descubrimiento */}
                    <div className="border border-neutral-300/80 rounded-[18px] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-2">
                      <h5 className="text-xl sm:text-2xl font-bold text-[#FF6B35] font-display">
                        Descubrimiento
                      </h5>
                      <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                        Destacar destinos atractivos mediante imágenes y tarjetas visuales.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side: Beautiful rotated premium mobile mockup */}
                <div className="lg:col-span-5 flex justify-center items-center py-6 sm:py-10">
                  <div className="relative transform rotate-[8deg] hover:rotate-0 transition-transform duration-500 ease-out shadow-none">
                    <img 
                      src="/Lets-travel/Screen-lets-travel-home.png"
                      alt="Let's Travel Home Screen"
                      className="w-[280px] sm:w-[310px] h-auto border border-[#FF6B35]/10 shadow-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Note: Iframe removed as requested */}
          </div>

        </div>
      </section>

      {/* UX Layout & Wireframing Section - Refactored as the complete interactive Style Guide / Design System */}
      <section className="py-20 md:py-28 bg-neutral-50/70 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left border-neutral-150">
          
          <div className="space-y-4 mb-12">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display">
              SISTEMA DE DISEÑO
            </h4>
          </div>

          <div className="bg-white border border-neutral-200 rounded-[32px] p-6 md:p-12 shadow-sm space-y-14">
            
            {/* Subsection 1: Colors */}
            <div className="space-y-6">
              <div className="flex flex-col select-none">
                <h3 className="text-xl font-bold text-neutral-800 font-display mt-0.5">Colores</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
                {[
                  { hex: "#FFFFFF", name: "Blanco 100", darkText: true, border: "border border-neutral-200" },
                  { hex: "#3F4156", name: "Gris 100", darkText: false },
                  { hex: "#FF6B35", name: "Naranja 100", darkText: false },
                  { hex: "#F6F4EF", name: "Beige 100", darkText: true },
                  { hex: "#1F2024", name: "Negro 100", darkText: false },
                  { hex: "#808080", name: "Cafe 100", darkText: false },
                  { hex: "#6633CD", name: "Morado 100", darkText: false },
                  { hex: "#27625F", name: "Verde oscuro 100", darkText: false },
                  { hex: "#0EA3D9", name: "Cyan 100", darkText: false },
                  { hex: "#01BF3A", name: "Verde 100", darkText: false },
                ].map((color, idx) => {
                  const isCopied = copiedColor === color.hex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        navigator.clipboard.writeText(color.hex);
                        setCopiedColor(color.hex);
                        setTimeout(() => setCopiedColor(null), 1800);
                      }}
                      style={{ backgroundColor: color.hex }}
                      className={`group relative aspect-[3/4.2] rounded-[16px] flex flex-col justify-between p-3.5 cursor-pointer shadow-sm hover:scale-[1.06] hover:shadow-md transition-all duration-300 text-left ${color.border || "border border-transparent"}`}
                      title={`Copiar color ${color.hex}`}
                    >
                      {/* Hex Value */}
                      <span className={`text-[10.5px] font-bold font-mono tracking-tight block ${color.darkText ? "text-neutral-500" : "text-white/70"}`}>
                        {color.hex.replace("#", "")}
                      </span>
                      
                      {/* Name Label */}
                      <div className="flex flex-col space-y-0.5">
                        <span className={`text-[11px] font-black tracking-tight leading-snug block ${color.darkText ? "text-neutral-800" : "text-white"}`}>
                          {color.name}
                        </span>
                        
                        {/* Copy status overlay */}
                        <span className={`text-[8.5px] font-bold tracking-normal block mt-1 transition-all ${
                          isCopied 
                            ? (color.darkText ? "text-green-600 scale-100" : "text-green-300 scale-100") 
                            : "opacity-0 group-hover:opacity-75"
                        } ${color.darkText ? "text-neutral-400" : "text-white/60"}`}>
                          {isCopied ? "✓ ¡Copiado!" : "Copiar HEX"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subsection 2: Typography */}
            <div className="space-y-6 pt-12 md:pt-16 border-t border-neutral-200/60">
              <div className="flex flex-col select-none">
                <h3 className="text-xl font-bold text-neutral-800 font-display mt-0.5 font-sans">Tipografía</h3>
              </div>

              {/* Responsive Row 1: Display, Headline, Title */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Display",
                    sizes: [
                      { label: "Large", val: "57", sizeClass: "text-[32px] sm:text-[40px] md:text-[57px] font-sans font-light leading-none -tracking-wide" },
                      { label: "Medium", val: "45", sizeClass: "text-[26px] sm:text-[34px] md:text-[45px] font-sans font-light leading-none" },
                      { label: "Small", val: "36", sizeClass: "text-[22px] sm:text-[28px] md:text-[36px] font-sans font-light leading-none" }
                    ]
                  },
                  {
                    category: "Headline",
                    sizes: [
                      { label: "Large", val: "32", sizeClass: "text-[24px] sm:text-[32px] font-sans font-normal leading-tight" },
                      { label: "Medium", val: "28", sizeClass: "text-[21px] sm:text-[28px] font-sans font-normal leading-tight" },
                      { label: "Small", val: "24", sizeClass: "text-[18px] sm:text-[24px] font-sans font-normal leading-tight" }
                    ]
                  },
                  {
                    category: "Title",
                    sizes: [
                      { label: "Large", val: "22", sizeClass: "text-[17px] sm:text-[22px] font-sans font-medium leading-snug" },
                      { label: "Medium", val: "16", sizeClass: "text-[14px] sm:text-[16px] font-sans font-medium leading-snug" },
                      { label: "Small", val: "14", sizeClass: "text-[12px] sm:text-[14px] font-sans font-medium leading-snug" }
                    ]
                  }
                ].map((scale, idx) => (
                  <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col hover:border-neutral-300 transition-colors">
                    <span className="text-[12px] font-bold font-mono text-[#FF6B35] uppercase tracking-wider mb-6 block text-left">
                      {scale.category}
                    </span>
                    <div className="space-y-6 flex-grow flex flex-col justify-between">
                      {scale.sizes.map((item, idy) => (
                        <div key={idy} className="flex items-baseline justify-between bottom-border-scale pb-3 border-b border-neutral-100">
                          <div className="flex items-baseline gap-4 text-left overflow-hidden">
                            <span className="text-neutral-400 font-normal text-xs select-none">Aa</span>
                            <span className={`${item.sizeClass} text-neutral-900 truncate`}>{item.label}</span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded shrink-0">
                            {item.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Responsive Row 2: Body, Label */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    category: "Body",
                    sizes: [
                      { label: "Large", val: "16", sizeClass: "text-[16px] font-sans font-normal leading-relaxed text-neutral-700" },
                      { label: "Medium", val: "14", sizeClass: "text-[14px] font-sans font-normal leading-relaxed text-neutral-600" },
                      { label: "Small", val: "12", sizeClass: "text-[12px] font-sans font-normal leading-relaxed text-neutral-500" }
                    ]
                  },
                  {
                    category: "Label",
                    sizes: [
                      { label: "Large", val: "14", sizeClass: "text-[14px] font-sans font-semibold tracking-wide uppercase text-neutral-800" },
                      { label: "Medium", val: "12", sizeClass: "text-[12px] font-sans font-semibold tracking-wider uppercase text-neutral-700" },
                      { label: "Small", val: "11", sizeClass: "text-[11px] font-sans font-semibold tracking-widest uppercase text-neutral-500" }
                    ]
                  }
                ].map((scale, idx) => (
                  <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col hover:border-neutral-300 transition-colors">
                    <span className="text-[12px] font-bold font-mono text-[#FF6B35] uppercase tracking-wider mb-6 block text-left">
                      {scale.category}
                    </span>
                    <div className="space-y-6 flex-grow flex flex-col justify-between">
                      {scale.sizes.map((item, idy) => (
                        <div key={idy} className="flex items-baseline justify-between pb-3 border-b border-neutral-100">
                          <div className="flex items-baseline gap-4 text-left overflow-hidden">
                            <span className="text-neutral-400 font-normal text-xs select-none">Aa</span>
                            <span className={`${item.sizeClass} text-neutral-950 truncate`}>{item.label}</span>
                          </div>
                          <span className="text-[11px] font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded shrink-0">
                            {item.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 3: Icons */}
            <div className="space-y-6 pt-12 md:pt-16 border-t border-neutral-200/60">
              <div className="flex flex-col select-none">
                <h3 className="text-xl font-bold text-neutral-800 font-display mt-0.5">Iconos</h3>
              </div>

              {/* Centered Structured Outline Panel */}
              <div className="w-full bg-white border border-neutral-200 rounded-[16px] py-14 px-8 md:px-16 shadow-none overflow-x-auto">
                <div className="grid grid-cols-6 gap-y-12 gap-x-4 items-center justify-items-center min-w-[500px]">
                  {/* Row 1 */}
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Search className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <User className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Calendar className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Hotel className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Plane className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Moon className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>

                  {/* Row 2 */}
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Luggage className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Puzzle className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Compass className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Menu className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Star className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Settings className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>

                  {/* Row 3 */}
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Heart className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <User className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <Copy className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  <div className="text-[#3F4156]/90 flex items-center justify-center">
                    <MapPin className="w-5.5 h-5.5 stroke-[1.4px]" />
                  </div>
                  {/* Empty columns to align with previous rows */}
                  <div />
                  <div />
                </div>
              </div>
            </div>

            {/* Subsection 4: Componentes */}
            <div className="space-y-6 pt-12 md:pt-16 border-t border-neutral-200/60">
              <div className="flex flex-col select-none">
                <h3 className="text-xl font-bold text-neutral-800 font-display mt-0.5">Componentes</h3>
              </div>

              {/* 3-Column Masonry-Style Interactive Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-6">
                  {[
                    { src: "/Lets-travel/Lets-travels-components/Frame 389.png", alt: "Logotipo Let's Travel", title: "Logotipo Let's Travel" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 76.png", alt: "Buscador de Itinerarios", title: "Panel Buscador" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 51.png", alt: "Identifícate / Login", title: "Identificación de Usuario" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 75.png", alt: "Regístrate / Registro", title: "Registro de Cuenta" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 388-1.png", alt: "Servicios del Hotel Incluidos", title: "Amenidades del Hotel" },
                    { src: "/Lets-travel/Lets-travels-components/Calendar ver 2.0.png", alt: "Selector de Fechas de Viaje", title: "Calendario ver 2.0" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveComponentPreview(item.src)}
                      className="group bg-neutral-50/50 rounded-2xl p-4 border border-neutral-200/60 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B35]/30 hover:bg-neutral-50 hover:shadow-md hover:shadow-neutral-250/20"
                    >
                      <div className="w-full flex items-center justify-center p-2 bg-white rounded-xl border border-neutral-150/60 shadow-sm overflow-hidden min-h-[140px]">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="max-h-[380px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-neutral-500 font-sans px-1">
                        <span className="text-xs font-bold text-neutral-700 font-sans tracking-wide truncate pr-4">
                          {item.title}
                        </span>
                        <div className="text-[10px] bg-neutral-100 font-mono font-bold text-neutral-400 px-2 py-0.5 rounded leading-none shrink-0 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-colors">
                          Ver detalle
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-6">
                  {[
                    { src: "/Lets-travel/Lets-travels-components/Frame 228.png", alt: "Acciones de Descarga de Archivos", title: "Acciones y Descargas" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 268.png", alt: "Dropdown de Itinerarios", title: "Filtros y Dropdowns" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 165.png", alt: "Tarjeta de Vuelo Resumen", title: "Vuelo de Itinerario Vivo" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 178.png", alt: "Páginas Selector de Huéspedes", title: "Selector de Acompañantes" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 195.png", alt: "Listado de Paradas de Destinos Populares", title: "Destinos Populares List" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 420.png", alt: "Modal de Transacción Exitosa / Recibo", title: "Comprobante Transacción Exitosa" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveComponentPreview(item.src)}
                      className="group bg-neutral-50/50 rounded-2xl p-4 border border-neutral-200/60 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B35]/30 hover:bg-neutral-50 hover:shadow-md hover:shadow-neutral-250/20"
                    >
                      <div className="w-full flex items-center justify-center p-2 bg-white rounded-xl border border-neutral-150/60 shadow-sm overflow-hidden min-h-[120px]">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="max-h-[380px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-neutral-500 font-sans px-1">
                        <span className="text-xs font-bold text-neutral-700 font-sans tracking-wide truncate pr-4">
                          {item.title}
                        </span>
                        <div className="text-[10px] bg-neutral-100 font-mono font-bold text-neutral-400 px-2 py-0.5 rounded leading-none shrink-0 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-colors">
                          Ver detalle
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-6">
                  {[
                    { src: "/Lets-travel/Lets-travels-components/Nav bar 2.png", alt: "Barra de Navegación Móvil", title: "Barra de Navegación Móvil" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 421.png", alt: "Menú Lateral Flotante de Usuario", title: "Cajón Lateral / Sidebar" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 422.png", alt: "Banner Principal Superior de Marca", title: "Encabezado Superior Oscuro" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 423.png", alt: "Tabs de Tipos de Transporte", title: "Filtros de Itinerario de Pestañas" },
                    { src: "/Lets-travel/Lets-travels-components/Footer.png", alt: "Detalle de Hospedaje y Calificación", title: "Hospedaje de Destino" },
                    { src: "/Lets-travel/Lets-travels-components/Frame 388.png", alt: "Folleto Restablecer de Contraseña", title: "Restablecer de Contraseña" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveComponentPreview(item.src)}
                      className="group bg-neutral-50/50 rounded-2xl p-4 border border-neutral-200/60 relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B35]/30 hover:bg-neutral-50 hover:shadow-md hover:shadow-neutral-250/20"
                    >
                      <div className="w-full flex items-center justify-center p-2 bg-white rounded-xl border border-neutral-150/60 shadow-sm overflow-hidden min-h-[140px]">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="max-h-[380px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between text-neutral-500 font-sans px-1">
                        <span className="text-xs font-bold text-neutral-700 font-sans tracking-wide truncate pr-4">
                          {item.title}
                        </span>
                        <div className="text-[10px] bg-neutral-100 font-mono font-bold text-neutral-400 px-2 py-0.5 rounded leading-none shrink-0 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-colors">
                          Ver detalle
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Lightbox Preview Backdrop Modal */}
            {activeComponentPreview && (
              <div 
                className="fixed inset-0 bg-neutral-900/90 z-50 flex flex-col items-center justify-center p-4 cursor-zoom-out animate-fade-in backdrop-blur-sm"
                onClick={() => setActiveComponentPreview(null)}
              >
                <div 
                  className="relative max-w-4xl max-h-[85vh] overflow-hidden flex flex-col justify-center animate-scale-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={activeComponentPreview} 
                    alt="Component Detail Preview" 
                    className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl bg-white p-4"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-4 text-center">
                    <span 
                      onClick={() => setActiveComponentPreview(null)}
                      className="text-white/80 font-bold text-sm bg-neutral-800/80 px-4 py-2 rounded-full cursor-pointer hover:bg-[#FF6B35] hover:text-white transition-colors"
                    >
                      Cerrar Vista Previa
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Results and Retrospective */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Carrusel de Pantallas en Alta Fidelidad */}
          <div className="space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display text-left">
                Hi Fi Wireframes
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed text-left">
                Desplaza de izquierda a derecha con el mouse, scroll táctil o las flechas para ver la arquitectura visual y haz clic sobre cualquier pantalla para ampliarla en detalle.
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
              {/* Left navigation arrow */}
              <button 
                onClick={() => handleCarouselScroll("left")}
                className="absolute left-[-10px] md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-neutral-200/80 shadow-md flex items-center justify-center text-neutral-700 hover:bg-[#FF6B35] hover:text-white transition-all cursor-pointer active:scale-90"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Scrollable track */}
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-1"
                style={{ 
                  scrollbarWidth: "none", 
                  msOverflowStyle: "none"
                }}
              >
                {carouselImages.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedCarouselIdx(idx)}
                    className="flex-none w-[180px] sm:w-[220px] md:w-[260px] snap-start group/card cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-[9/16] bg-neutral-50 overflow-hidden relative">
                        <img 
                          src={img.url} 
                          alt={img.title} 
                          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover/card:opacity-100 bg-white/95 text-[#FF6B35] text-xs font-bold font-mono px-3 py-1 rounded-full shadow-sm transition-all duration-300 scale-90 group-hover/card:scale-100">
                            🔍 Ampliar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right navigation arrow */}
              <button 
                onClick={() => handleCarouselScroll("right")}
                className="absolute right-[-10px] md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-neutral-200/80 shadow-md flex items-center justify-center text-neutral-700 hover:bg-[#FF6B35] hover:text-white transition-all cursor-pointer active:scale-90"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Prototipo Interactivo de Figma */}
          <div className="space-y-8 pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 text-left">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display text-left">
                Prototipo Interactivo
              </h3>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed text-left">
                Interactúa directamente con la simulación táctil y los flujos de navegación diseñados en Figma.
              </p>
            </div>

            <div className="mx-auto max-w-4xl w-full bg-neutral-900 p-2 md:p-4 rounded-[24px] sm:rounded-[32px] shadow-2xl border border-neutral-800">
              {/* Header decorativo de navegador/dispositivo */}
              <div className="flex items-center justify-between px-4 pb-3 pt-1 border-b border-neutral-800/60 mb-2 md:mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-[11px] font-mono text-neutral-500 font-bold select-none tracking-wide">
                  embed.figma.com &bull; Let's Travel Prototipo
                </span>
                <div className="w-12" />
              </div>

              {/* Contenedor del Iframe con aspect ratio fluido para escritorio y responsive */}
              <div className="w-full relative h-[540px] sm:h-auto sm:aspect-[16/9] bg-neutral-950 rounded-2xl overflow-hidden">
                <iframe 
                  style={{ border: "none" }} 
                  className="absolute inset-0 w-full h-full"
                  src="https://embed.figma.com/proto/33P6mpTMlQQyq9h5w0K8NO/App-let%C2%B4s-travel-lo--fi-ver-3.0?node-id=1838-75980&viewport=60%2C216%2C0.14&scaling=contain&content-scaling=responsive&page-id=1832%3A72857&starting-point-node-id=1861%3A78459&embed-host=share" 
                  allowFullScreen
                  title="Let's Travel Interactivo"
                />
              </div>
            </div>
          </div>

          {/* Pruebas de usabilidad */}
          <div className="space-y-6 pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 text-left">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display text-left">
                Pruebas de usabilidad
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed text-left">
                Se realizaron pruebas con 5 usuarios.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-base md:text-lg font-bold text-neutral-800 font-display">
                Tareas evaluadas
              </h4>
              <ul className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF6B35] text-lg font-bold leading-none mt-0.5">&bull;</span>
                  <span>Encontrar un destino por presupuesto.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF6B35] text-lg font-bold leading-none mt-0.5">&bull;</span>
                  <span>Comparar opciones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF6B35] text-lg font-bold leading-none mt-0.5">&bull;</span>
                  <span>Completar una reserva.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusiones */}
          <div className="space-y-6 pt-12 md:pt-16 border-t border-neutral-200/60 mt-16 md:mt-24 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF6B35] tracking-wide uppercase font-display text-left mb-2">Conclusiones</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              El desarrollo de Let's Travel permitió explorar cómo una experiencia centrada en las necesidades del usuario puede simplificar la planificación de viajes.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              A través de la investigación, el análisis de plataformas existentes y la definición de un perfil de usuario, se identificó una oportunidad para integrar en un solo ecosistema digital la búsqueda de alojamiento, vuelos, paquetes y actividades.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed font-medium border-l-4 border-[#FF6B35] pl-4">
              El proceso permitió transformar necesidades y comportamientos observados en una solución estructurada mediante flujos de navegación, wireframes y prototipos de alta fidelidad, priorizando la claridad de la información, la facilidad de uso y la organización del proceso de reserva.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Este proyecto reafirmó la importancia de comprender el contexto del usuario antes de diseñar una solución visual, utilizando la investigación como base para la toma de decisiones durante todo el proceso.
            </p>
          </div>



          <div className="pt-6 max-w-2xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B35] hover:bg-[#E55620] text-white font-bold rounded-xl shadow-lg shadow-[#FF6B35]/20 transition-all font-display text-sm"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span>Volver a la Página de Inicio</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal de Carrusel */}
      <AnimatePresence>
        {selectedCarouselIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/95 z-[99] flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedCarouselIdx(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-sm sm:max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCarouselIdx(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              {/* Prev/Next Navigation inside lightbox */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCarouselIdx(prev => prev !== null ? (prev - 1 + carouselImages.length) % carouselImages.length : null);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6B35] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCarouselIdx(prev => prev !== null ? (prev + 1) % carouselImages.length : null);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#FF6B35] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 cursor-pointer active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image Container */}
              <div className="w-full aspect-[9/16] bg-neutral-950 overflow-hidden relative">
                <img 
                  src={carouselImages[selectedCarouselIdx].url} 
                  alt={carouselImages[selectedCarouselIdx].title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description Footer */}
              <div className="p-5 bg-white border-t border-neutral-100 text-left">
                <span className="text-[10px] bg-[#FF6B35]/10 text-[#FF6B35] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block font-mono">
                  Pantalla {selectedCarouselIdx + 1} de {carouselImages.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LetsTravelCaseStudy;
