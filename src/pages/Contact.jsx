import React, { useState } from 'react';
import { Star, MapPin, Phone, Clock, Mail } from 'lucide-react';

const CAMPUS_LOCATION = { lat: -29.3212664, lng: 27.5288124 };

export default function Contact() {
  // Static state to avoid the useEffect render error
  const [reviews] = useState([
    { id: 1, author: "M. Mohapi", text: "Great place for creative minds. The production facilities are top notch.", rating: 5 },
    { id: 2, author: "L. Sekoala", text: "Excellent fashion and music programs in Maseru.", rating: 4 }
  ]);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="bg-cia-maroon py-12 px-6 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Contact Us</h1>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Info and Reviews */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 border border-gray-100 rounded-sm">
              <h3 className="font-black uppercase text-cia-black mb-6 text-sm tracking-widest">Campus Details</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-sm font-bold"><MapPin className="text-cia-maroon" size={18}/> Tsénola, Sekeleng e Tlase, Maseru</p>
                <p className="flex items-center gap-3 text-sm font-bold"><Phone className="text-cia-maroon" size={18}/> +266 5781 0905</p>
                <p className="flex items-center gap-3 text-sm font-bold"><Mail className="text-cia-maroon" size={18}/> info@cograbig.edu</p>
                <p className="flex items-center gap-3 text-sm font-bold"><Clock className="text-cia-maroon" size={18}/> Mon-Fri: 08:00 - 17:00</p>
              </div>
            </div>

            {/* Student Feedback */}
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase text-cia-black tracking-tight">Student Feedback</h3>
              <div className="grid gap-4">
                {reviews.map(review => (
                  <div key={review.id} className="p-4 border-l-4 border-cia-yellow bg-white shadow-sm border border-gray-100">
                    <div className="flex text-cia-yellow mb-2">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-sm italic text-gray-600 mb-2">"{review.text}"</p>
                    <p className="text-[10px] font-black uppercase text-cia-black">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Map (Aligned and Contained) */}
          {/* Right: Embedded Google Map */}
            <div className="w-full h-[400px] lg:h-full lg:sticky lg:top-24 border-4 border-cia-black shadow-2xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps?q=-29.3212664,27.5288124&z=15&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>



        </div>
      </div>
    </div>
  );
}