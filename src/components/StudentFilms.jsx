import React from 'react';
import { Play, Film, Award } from 'lucide-react';

export default function StudentFilms() {
  const films = [
    {
      id: 1,
      title: "Basotho Urbanity",
      student: "Tsepang M.",
      season: "Winter Collection 2025",
      videoUrl: "https://www.youtube.com/embed/YEwbFUoi7tc", // Example student life link
      description: "A fusion of traditional Seshoeshoe fabrics with modern street-wear silhouettes."
    },
    {
      id: 2,
      title: "The Royal Blanket",
      student: "Lerato S.",
      season: "Summer Showcase 2025",
      videoUrl: "https://www.youtube.com/embed/YEwbFUoi7tc",
      description: "Exploring the evolution of the Seanamarena as a symbol of high-fashion elegance."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-cia-black">Student Cinema</h2>
            <p className="text-cia-maroon font-bold uppercase text-[10px] tracking-[0.3em] mt-2">Fashion x Media Collaboration</p>
          </div>
          <div className="hidden md:flex gap-4">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase"><Film size={16}/> 2 Shows Yearly</div>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase"><Award size={16}/> Award Winning Films</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {films.map(film => (
            <div key={film.id} className="group">
              {/* VIDEO PLAYER CONTAINER */}
              <div className="relative aspect-video bg-cia-black overflow-hidden border-4 border-cia-black shadow-[10px_10px_0px_0px_rgba(128,0,0,1)]">
                <iframe 
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={film.videoUrl}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* FILM DETAILS */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center">
                   <h3 className="text-2xl font-black uppercase text-cia-black">{film.title}</h3>
                   <span className="text-[10px] font-black bg-cia-yellow px-3 py-1 uppercase">{film.season}</span>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest italic">Collection by: {film.student}</p>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {film.description}
                </p>
                <button className="text-[10px] font-black uppercase text-cia-maroon flex items-center gap-2 border-b-2 border-cia-maroon pb-1 hover:gap-4 transition-all">
                  Read Director's Interview <Play size={10} fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}