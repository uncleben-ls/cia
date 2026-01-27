import React from 'react';
import { Camera, ExternalLink, Expand } from 'lucide-react';

export default function Lookbook() {
  // In a real scenario, you could pass this data in as a "prop"
  const collectionData = {
    season: "Autumn/Winter 2026",
    theme: "Modern Heritage",
    designerCount: 12
  };

  const images = [
    { id: 1, src: "/f1.jpg", designer: "M. Mohapi", pieces: 4, category: "Avant-Garde" },
    { id: 2, src: "/f2.jpg", designer: "L. Sekoala", pieces: 6, category: "Streetwear" },
    { id: 3, src: "/f3.jpg", designer: "T. Lerato", pieces: 3, category: "Traditional" },
    { id: 4, src: "/f4.jpg", designer: "N. Thabo", pieces: 5, category: "Couture" },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 border-y border-gray-100">
      <div className="container mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cia-maroon">
              <Camera size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Seasonal Showcase</span>
            </div>
            <h2 className="text-4xl font-black uppercase text-cia-black tracking-tighter">
              The {collectionData.season} <br /> 
              <span className="text-cia-maroon">Lookbook</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black uppercase text-gray-400">Theme: {collectionData.theme}</p>
            <p className="text-[10px] font-black uppercase text-gray-400">{collectionData.designerCount} Featured Designers</p>
          </div>
        </div>

        {/* LOOKBOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img.id} className="group relative bg-white border border-gray-200 p-2 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-cia-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
                  <Expand className="text-cia-yellow mb-2" size={24} />
                  <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">View Collection</p>
                  <p className="text-gray-300 text-[8px] uppercase">{img.pieces} Unique Pieces</p>
                </div>
                
                {/* Placeholder Image Logic */}
                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-gray-300 uppercase italic">
                  [ {img.category} ]
                </div>
              </div>

              {/* DESIGNER INFO LABEL */}
              <div className="mt-4 flex justify-between items-center px-2 pb-2">
                <div>
                  <h4 className="text-xs font-black uppercase text-cia-black tracking-tighter">{img.designer}</h4>
                  <p className="text-[9px] font-bold text-cia-maroon uppercase">{img.category}</p>
                </div>
                <button className="p-2 hover:bg-slate-50 transition-colors">
                  <ExternalLink size={14} className="text-gray-400" />
                </button>
              </div>

              {/* STICKER / BADGE */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="bg-cia-black text-white text-[8px] font-black uppercase px-2 py-1 rotate-[-2deg] inline-block shadow-md border border-white/20">
                  STUDENT WORK
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-cia-black text-cia-black px-10 py-4 font-black uppercase text-xs hover:bg-cia-black hover:text-white transition-all">
            View All Past Collections
          </button>
        </div>

      </div>
    </section>
  );
}