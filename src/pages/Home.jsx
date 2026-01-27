import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNextIntake } from '../utils/intakeManager';
import StudentFilms from '../components/StudentFilms';
import Lookbook from '../components/Lookbook';
import BgPic from '../../public/images/bg.jpg';


export default function Home() {
  const intake = getNextIntake();
  return (
    <div className="flex flex-col">
      
      {/* ----------------------------------------------------------------------
          CATEGORY: HERO SECTION
          Purpose: High-impact first impression with your primary call to action.
      ----------------------------------------------------------------------- */}
      <section className="relative h-[80vh] bg-cia-black flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          
          <img src={BgPic} alt="Cograbigs Models at Campus" className="w-full h-full object-cover opacity-40 scale-105"/>
          <div className="absolute inset-0 bg-gradient-to-r from-cia-black via-cia-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-cia-maroon/20 border border-cia-maroon px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cia-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cia-yellow"></span>
              </span>
              <span className="text-cia-yellow text-[10px] font-black uppercase tracking-widest">{intake.name} Intake Now Open</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
              Create Your <span className="text-cia-yellow italic">Legacy</span> In Arts.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Lesotho's premier institute for Fashion, Music, and Media. 
              Industry-led training designed to turn your passion into a global career.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link to="/enroll" className="bg-cia-yellow text-cia-black px-8 py-4 font-black uppercase text-xs flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(128,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Start Your Application <ArrowRight size={16} />
              </Link>
              {/* HOME.JSX HERO BUTTON */}
              <a 
                href="https://youtu.be/YEwbFUoi7tc?si=ljKMY_LhFja2qpw5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="border border-white text-white px-8 py-4 font-black uppercase text-xs flex items-center gap-2 hover:bg-white hover:text-cia-black transition-all">
                  <Play size={16} fill="currentColor" /> Watch Campus Tour
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: STATS STRIP
          Purpose: Building instant credibility with numbers.
      ----------------------------------------------------------------------- */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Users className="text-cia-maroon"/>, val: "50+", label: "Active Students" },
            { icon: <Award className="text-cia-maroon"/>, val: "15+", label: "Creative Courses" },
            { icon: <Star className="text-cia-maroon"/>, val: "85%", label: "Employment Rate" },
            { icon: <Star className="text-cia-maroon"/>, val: "Top 1", label: "Arts School Lesotho" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-slate-50 rounded-full">{stat.icon}</div>
              <p className="text-3xl font-black text-cia-black">{stat.val}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}