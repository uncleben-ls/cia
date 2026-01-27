import React from 'react';
import { Target, Eye, ShieldCheck, Award, MapPin, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      
      {/* ----------------------------------------------------------------------
          CATEGORY: BRAND STORY & MISSION
          Purpose: Defining why CIA exists and what it stands for.
      ----------------------------------------------------------------------- */}
      <section className="bg-cia-maroon py-24 px-6 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-cia-yellow font-black uppercase text-xs tracking-[0.4em] mb-4">Establishing Excellence</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            The Hub of <br />Creative <span className="text-cia-yellow italic">Innovation.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium opacity-90 leading-relaxed max-w-3xl">
            Cograbig Institute of Arts was founded to bridge the gap between creative talent and professional industry standards in Lesotho. We don't just teach arts; we build creative entrepreneurs.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: CORE PILLARS (Mission/Vision)
          Purpose: Displaying the institutional values in a scannable grid.
      ----------------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <div className="w-12 h-12 bg-cia-yellow/20 flex items-center justify-center rounded-sm">
              <Target className="text-cia-maroon" />
            </div>
            <h3 className="text-xl font-black uppercase text-cia-black">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide high-quality, industry-relevant vocational training in the arts that empowers Basotho youth to compete on the global stage.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-cia-yellow/20 flex items-center justify-center rounded-sm">
              <Eye className="text-cia-maroon" />
            </div>
            <h3 className="text-xl font-black uppercase text-cia-black">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To be the leading center of artistic excellence in Southern Africa, recognized for producing innovators in fashion, music, and media.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-cia-yellow/20 flex items-center justify-center rounded-sm">
              <ShieldCheck className="text-cia-maroon" />
            </div>
            <h3 className="text-xl font-black uppercase text-cia-black">Accreditation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Operating under strict quality guidelines to ensure our diplomas and certificates are recognized by employers and higher learning bodies.
            </p>
          </div>

        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: LEADERSHIP & FACULTY
          Purpose: Humanizing the school by showing the experts behind the name.
      ----------------------------------------------------------------------- */}
      <section className="bg-slate-50 py-24 px-6 border-y border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black uppercase text-cia-black">Institutional Leadership</h3>
            <div className="w-16 h-1 bg-cia-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Executive Principal", role: "Strategic Oversight" },
              { name: "Dean of Academics", role: "Curriculum & Quality" },
              { name: "Head of Admissions", role: "Student Affairs" },
            ].map((member, i) => (
              <div key={i} className="bg-white group overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-64 bg-slate-200 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <img src="/logo.png" className="h-20" alt="CIA" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-black uppercase text-cia-black text-lg">{member.name}</h4>
                  <p className="text-[10px] font-bold text-cia-maroon uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: CALL TO ACTION (CTA)
          Purpose: Bringing the visitor back to the enrollment funnel.
      ----------------------------------------------------------------------- */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="bg-cia-black p-10 md:p-20 text-white relative">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <img src="/logo.png" className="h-64 rotate-12" alt="CIA Watermark" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-black uppercase tracking-tighter max-w-xl">
                Be Part of the Next Generation of <span className="text-cia-yellow">Basotho Creatives.</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cia-yellow text-cia-black px-8 py-4 font-black uppercase text-xs hover:bg-white transition-all">
                  Book a Campus Tour
                </button>
                <button className="border border-white/30 text-white px-8 py-4 font-black uppercase text-xs flex items-center gap-2 hover:bg-white/10 transition-all">
                  Download Prospectus <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}