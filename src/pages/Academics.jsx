import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseModal from '../components/CourseModal';

export default function Academics() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Beauty", "Fashion", "Entertainment"];
  const tiers = [
    "Non-Credit Bearing Certificate",
    "Long Term Credit Bearing Certificate",
    "Diploma"
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Header Section */}
      <div className="w-full bg-cia-black text-white py-12 md:py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Academic <span className="text-cia-yellow">Programs</span>
        </h1>
      </div>

      {/* 2. STICKY FILTER BAR - Centered for Mobile */}
      <div className="w-full bg-gray-100 sticky top-[60px] md:top-[100px] z-[40] border-b border-gray-200">
        <div className="w-full flex flex-wrap justify-center items-center gap-2 md:gap-8 py-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 transition-all
                ${activeCategory === cat 
                  ? 'bg-cia-maroon text-white scale-110 shadow-lg' 
                  : 'bg-transparent text-gray-500 hover:text-cia-maroon'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Tiered Sections */}
      {tiers.map((tierName) => {
        // Filter courses by Tier AND Category
        const filteredCourses = courses.filter(item => 
          item.tier === tierName && 
          (activeCategory === "All" || item.category === activeCategory)
        );

        // Don't show the tier heading if no courses match the filter
        if (filteredCourses.length === 0) return null;

        return (
          <section key={tierName} className="w-full animate-in fade-in duration-500">
            <div className="w-full bg-cia-maroon/10 py-3 px-6 md:px-12 text-center lg:text-left border-y border-cia-maroon/5">
              <h2 className="text-cia-maroon font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                {tierName}s
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {filteredCourses.map((item) => (
                <div key={item.id} className="relative h-[450px] w-full overflow-hidden group border-r border-b border-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-cia-maroon/80 transition-all duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end items-center lg:items-start text-center lg:text-left">
                    <span className="text-cia-yellow text-[9px] font-bold uppercase tracking-widest mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-black uppercase leading-tight mb-4 tracking-tighter">
                      {item.title}
                    </h3>
                    <button 
                      onClick={() => setSelectedCourse(item)}
                      className="w-full lg:w-auto border-2 border-white text-white px-6 py-3 text-[10px] font-black uppercase hover:bg-white hover:text-cia-maroon transition-all"
                    >
                      View Requirements
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* 4. Modal Rendering */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </div>
  );
}