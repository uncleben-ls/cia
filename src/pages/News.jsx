import React from 'react';
import { Calendar, User, ArrowRight, Share2, Tag } from 'lucide-react';

export default function News() {
  // Mock data for campus articles
  const articles = [
    {
      id: 1,
      title: "CIA Fashion Week 2026: A Showcase of Basotho Talent",
      excerpt: "Our final year students presented their graduate collections to industry leaders and international scouts last Friday...",
      date: "Jan 20, 2026",
      category: "Events",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "New Recording Studio Equipment Arrives",
      excerpt: "The Music Performance department has officially upgraded its production suite with the latest industry-standard gear...",
      date: "Jan 15, 2026",
      category: "Campus News",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Scholarship Applications: July 2026 Intake",
      excerpt: "We are pleased to announce that five full-tuition scholarships are now available for the upcoming winter intake...",
      date: "Jan 10, 2026",
      category: "Admissions",
      image: "https://images.unsplash.com/photo-1523240715630-974bb1ad2741?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* ----------------------------------------------------------------------
          CATEGORY: FEATURED HEADLINE
          Purpose: Highlighting the most important recent story.
      ----------------------------------------------------------------------- */}
      <section className="bg-cia-black text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <span className="bg-cia-maroon text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">Featured Story</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 leading-none">
                Expanding the <span className="text-cia-yellow">Creative Economy.</span>
              </h1>
              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                Cograbig partners with local industries to provide internship placements for all Year 2 Diploma students.
              </p>
              <button className="mt-8 flex items-center gap-2 text-cia-yellow font-black uppercase text-xs hover:gap-4 transition-all">
                Read Full Article <ArrowRight size={16} />
              </button>
            </div>
            <div className="w-full md:w-1/2 h-80 bg-slate-800 rounded-sm overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="Music" />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: NEWS GRID
          Purpose: Displaying the chronological feed of school updates.
      ----------------------------------------------------------------------- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b-2 border-slate-100 pb-6">
             <h3 className="text-2xl font-black text-cia-black uppercase">Latest Updates</h3>
             <div className="flex gap-4 text-[10px] font-black uppercase text-gray-400">
                <button className="text-cia-maroon underline">All</button>
                <button className="hover:text-cia-maroon">Campus</button>
                <button className="hover:text-cia-maroon">Events</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] font-black uppercase text-cia-black shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12}/> Admin</span>
                  </div>
                  <h4 className="text-xl font-black text-cia-black leading-tight group-hover:text-cia-maroon transition-colors uppercase">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[10px] font-black uppercase text-cia-maroon flex items-center gap-1 pt-2">
                    Read More <ArrowRight size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------
          CATEGORY: MEDIA NEWSLETTER
          Purpose: Capturing emails for prospective student marketing.
      ----------------------------------------------------------------------- */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <Tag className="mx-auto text-cia-yellow" size={32} />
          <h2 className="text-3xl font-black text-cia-black uppercase">Stay in the Creative Loop</h2>
          <p className="text-gray-500 font-medium">Get the latest campus news, student project showcases, and intake reminders directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto shadow-xl">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 px-6 py-4 bg-white border-none outline-none text-sm font-bold" 
            />
            <button className="bg-cia-maroon text-white px-8 py-4 font-black uppercase text-xs hover:bg-cia-black transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}