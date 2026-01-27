import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { getNextIntake } from '../utils/intakeManager';

export default function Footer() {
  const intake = getNextIntake();
  return (
    <footer className="bg-cia-black text-white pt-16 pb-8 px-6 border-t border-white/5 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* CATEGORY: BRANDING & BIO */}
        <div className="space-y-6">
          <img src="/src/assets/logo.png" alt="CIA Logo" className="h-16 object-contain" />
          <p className="text-gray-400 text-[11px] font-bold leading-relaxed uppercase tracking-wider">
            Lesotho's premier institution for creative excellence. We specialize in turning artistic passion into professional careers in Fashion, Music, and Media.
          </p>

          {/* CATEGORY: SOCIAL MEDIA LINKS */}
          <div className="flex gap-4">
            <a 
              href="https://web.facebook.com/Cograbig1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cia-yellow transition-colors"
            >
              <Facebook size={20} />
            </a>

            <a 
              href="https://www.instagram.com/cograbig_institute_of_arts/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cia-yellow transition-colors"
            >
              <Instagram size={20} />
            </a>

            <a 
              href="https://youtu.be/YEwbFUoi7tc?si=-wyBtP4GouU_7A6c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cia-yellow transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* CATEGORY: CAMPUS INFO */}
        <div className="space-y-4">
          <h4 className="font-black text-cia-yellow uppercase text-xs tracking-widest">Maseru Campus</h4>
          <ul className="space-y-4 text-[10px] font-bold uppercase text-gray-400">
            <li className="flex gap-3">
              <MapPin size={16} className="text-cia-maroon shrink-0" />
              <span>Tsénola, Sekeleng e Tlase/Ntlong Ea Lejoe, Maseru 100</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-cia-maroon shrink-0" />
              <span>+266 5781 0905</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-cia-maroon shrink-0" />
              <span>info@cograbig.co.ls</span>
            </li>
          </ul>
        </div>

        {/* CATEGORY: QUICK NAVIGATION */}
        <div className="space-y-4">
          <h4 className="font-black text-cia-yellow uppercase text-xs tracking-widest">Academics</h4>
          <ul className="space-y-2 text-[10px] font-bold uppercase text-gray-400">
            <li><Link to="/academics" className="hover:text-white transition-colors flex items-center gap-1"><ExternalLink size={10}/> Diploma in Fashion</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors flex items-center gap-1"><ExternalLink size={10}/> Music Production</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors flex items-center gap-1"><ExternalLink size={10}/> Makeup Artistry</Link></li>
            <li><Link to="/enroll" className="text-cia-yellow hover:underline">Apply for July Intake</Link></li>
          </ul>
        </div>
        {/* CATEGORY: DYNAMIC ADMISSIONS */}
        <div className="space-y-4">
          <h4 className="font-black text-cia-yellow uppercase text-xs tracking-widest">Admissions</h4>
          <div className="space-y-4">
            <div className="p-3 bg-white/5 border-l-2 border-cia-yellow">
              <p className="text-[9px] font-black uppercase text-gray-400">Upcoming Intake</p>
              <p className="text-sm font-black text-white">{intake.name}</p>
              <p className="text-[8px] font-bold text-cia-maroon uppercase tracking-tighter">
                {intake.type}
              </p>
            </div>
            <Link to="/enroll" className="inline-block bg-cia-maroon text-white px-4 py-2 text-[9px] font-black uppercase hover:bg-cia-yellow hover:text-cia-black transition-all w-full text-center">
              Apply for {intake.name.split(' ')[0]}
            </Link>
          </div>
        </div>

        {/* CATEGORY: UTILITY & ADMIN */}
        <div className="space-y-4">
          <h4 className="font-black text-cia-yellow uppercase text-xs tracking-widest">Portal Access</h4>
          <p className="text-[10px] font-bold text-gray-500 uppercase">Registered staff and students can access their respective portals below.</p>
          <div className="flex flex-col gap-2">
            <Link to="/staff-login" className="bg-white/5 border border-white/10 text-center py-2 text-[10px] font-black uppercase hover:bg-cia-maroon transition-all">
              Staff Admin Portal
            </Link>
            <button className="bg-white/5 border border-white/10 text-center py-2 text-[10px] font-black uppercase hover:bg-slate-700 transition-all opacity-50 cursor-not-allowed">
              Student LMS (Coming Soon)
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT STRIP */}
      <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] font-black uppercase text-gray-500 tracking-[0.2em]">
          © 2026 Cograbig Institute of Arts. Built for Creative Innovation.
        </p>
        <div className="flex gap-6 text-[9px] font-black uppercase text-gray-500">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Admission</Link>
        </div>
      </div>
    </footer>
  );
}