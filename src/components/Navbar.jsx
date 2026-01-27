// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNextIntake } from '../utils/intakeManager';
import Logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intake = getNextIntake();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex flex-col shadow-2xl m-0 p-0 border-b border-white/5">
      
      {/* 1. TOP UTILITY BAR (Black) */}
      <div className="w-full bg-cia-black text-white px-4 md:px-12 py-1 flex justify-between items-center text-[8px] md:text-[10px] font-bold uppercase tracking-[0.1em]">
        <div className="flex gap-3">
          <span className="flex items-center gap-1">
            <Phone size={10} className="text-cia-yellow"/>+266 5781 0905 | +266 6690 4036
          </span>
        </div>
        <div className="text-cia-yellow text-right animate-pulse">
          {intake.name} INTAKE OPEN
        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Maroon) */}
      <div className="w-full bg-cia-maroon px-4 md:px-12 py-2 md:py-3 flex justify-between items-center">
        
        {/* LOGO INSERTED HERE - Replacing old branding text/icon */}
        <div className="flex items-center gap-3">

          {/* LOGO */}
          <img src={Logo} alt="CIA Logo" className="h-10 md:h-12" />
          
          {/* Optional: Keep the text brand next to logo, or remove if logo contains text */}
          <div className="hidden sm:flex flex-col border-l border-white/20 pl-3">
            <span className="text-white font-black text-lg md:text-2xl leading-none tracking-tighter">COGRABIG</span>
            <span className="text-cia-yellow text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Institute of Arts</span>
          </div>
        </div>

        {/* Desktop Links (No changes) */}
        <div className="hidden lg:flex items-center gap-6 text-white font-bold uppercase text-[11px]">
          <a href="/" className="hover:text-cia-yellow transition-all">Home</a>
          <a href="/about" className="hover:text-cia-yellow transition-all">About CIA</a>
          <a href="/news" className="hover:text-cia-yellow transition-all">News & Media</a>
          
          <div className="group relative cursor-pointer flex items-center gap-1 hover:text-cia-yellow">
            Academics <ChevronDown size={12} />
            <div className="absolute top-full left-0 w-64 bg-cia-black opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all mt-2 p-1 shadow-2xl border-t-2 border-cia-yellow">
               <a href="/academics#non-credit" className="block p-3 text-[9px] border-b border-white/5 hover:bg-cia-maroon">Non-Credit Bearing Certificates</a>
               <a href="/academics#credit" className="block p-3 text-[9px] border-b border-white/5 hover:bg-cia-maroon">Long Term Credit Bearing</a>
               <a href="/academics#diploma" className="block p-3 text-[9px] hover:bg-cia-maroon">Professional Diplomas</a>
            </div>
          </div>

          <a href="/campus" className="hover:text-cia-yellow transition-all">Campus Life</a>
          <a href="/contact" className="hover:text-cia-yellow transition-all">Contact Us</a>
          
          <Link 
              to="/enroll" 
              className="bg-cia-yellow text-cia-black px-5 py-2 font-black hover:bg-white transition-all text-[11px] shadow-[3px_3px_0px_0px_rgba(128,0,0,1)] active:shadow-none active:translate-y-1"
            >
              ENROLL NOW
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden text-cia-yellow p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 3. MOBILE MENU OVERLAY (No changes) */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-cia-black text-white h-screen fixed top-0 left-0 z-[110] flex flex-col items-center justify-center gap-8 p-10 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-cia-yellow">
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center gap-6 text-center">
            {/* LOGO */}
          <img src={Logo} alt="CIA Logo" className="h-20 md:h-12" />
            <a href="/" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">HOME</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">ABOUT CIA</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">NEWS & MEDIA</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">CAMPUS LIFE</a>
            <a href="/academics" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">ACADEMICS</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-xs font-bold tracking-widest hover:text-cia-yellow">CONTACT US</a>
            <Link 
              to="/enroll" 
              className="bg-cia-yellow text-cia-black px-5 py-2 font-black hover:bg-white transition-all text-[11px] shadow-[3px_3px_0px_0px_rgba(128,0,0,1)] active:shadow-none active:translate-y-1"
            >
              ENROLL NOW
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
}