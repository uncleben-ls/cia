// src/components/CourseModal.jsx
import React from 'react';
import { X, CheckCircle, Clock, CreditCard, Award } from 'lucide-react';

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-10 bg-cia-black/90 backdrop-blur-sm">
      {/* Container: Full width on mobile, max-width on desktop */}
      <div className="bg-white w-full h-full md:h-auto md:max-w-4xl overflow-y-auto relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-cia-maroon text-white p-2 hover:bg-cia-red transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Side: Visual/Header - Centered for Mobile */}
          <div className="w-full md:w-2/5 bg-cia-maroon text-white p-10 flex flex-col justify-center items-center text-center md:text-left md:items-start">
            <span className="bg-cia-yellow text-cia-black px-3 py-1 text-[10px] font-black uppercase mb-4">
              {course.tier}
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6">
              {course.title}
            </h2>
            
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3 justify-center md:justify-start border-b border-white/10 pb-2">
                <Clock size={18} className="text-cia-yellow" />
                <span className="text-sm font-bold">{course.duration}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start border-b border-white/10 pb-2">
                <CreditCard size={18} className="text-cia-yellow" />
                <span className="text-sm font-bold">{course.price}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Details - Centered for Mobile */}
          <div className="w-full md:w-3/5 p-10 bg-white">
            <h4 className="text-cia-maroon font-black uppercase text-sm tracking-widest mb-6 border-b-2 border-cia-yellow inline-block">
              Entry Requirements
            </h4>
            <ul className="space-y-3 mb-10">
              {course.requirements?.map((req, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-700 justify-center md:justify-start">
                  <CheckCircle size={16} className="text-cia-red shrink-0" />
                  {req}
                </li>
              ))}
            </ul>

            <h4 className="text-cia-maroon font-black uppercase text-sm tracking-widest mb-6 border-b-2 border-cia-yellow inline-block">
              Course Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10 text-center md:text-left">
              {course.modules?.map((mod, i) => (
                <span key={i} className="text-[11px] font-bold uppercase p-2 bg-gray-100 text-gray-600">
                  {mod}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-cia-yellow text-cia-black py-4 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(128,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Enroll Now
              </button>
              <button className="text-cia-maroon font-bold text-xs uppercase hover:underline">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}